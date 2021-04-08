const express = require('express'),
    fs = require('fs'),
    path = require('path');

let manifest;

try {
    manifest = fs.readFileSync(path.join(__dirname, './manifest.json'), 'utf8');
} catch (e) {console.error('Error: manifest file not found')}

try {
    manifest = JSON.parse(manifest);
} catch (e) {console.error('Error: invalid manifest file')}

Object.keys(manifest).forEach(siteName => {
    const app = express();

    app.set('port', manifest[siteName]);
    app.use(express.static(`sites/${siteName}`));

    app.get('/*', (req, res) => {
        const stream = fs.createReadStream(path.resolve(`sites/${siteName}/index.html`));
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        stream.pipe(res);
    });

    app.listen(app.get('port'), () => {console.log(`Server for ${siteName} is started on http://localhost:${app.get('port')}`)});
});
