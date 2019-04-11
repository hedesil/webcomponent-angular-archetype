const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/<compName>/runtime.js',
    './dist/<compName>/polyfills.js',
    './dist/<compName>/scripts.js',
    './dist/<compName>/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/bundle.js');
})();
