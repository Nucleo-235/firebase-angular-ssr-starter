import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs'

import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const document = fs.readFileSync(__dirname + '/dist-server/index.html', 'utf8');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

const app = express();
app.get('**', (req, res) => {
    const url = req.path;
    const extraProviders = [
        provideModuleMap(LAZY_MODULE_MAP)
    ];
    renderModuleFactory(AppServerModuleNgFactory, { document, url, extraProviders })
        .then(html => {
            res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
            res.send(html);
        })
});

exports.ssrapp = functions.https.onRequest(app);