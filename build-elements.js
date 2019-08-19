const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/webcomponent/runtime.js',
    './dist/webcomponent/polyfills.js',
    './dist/webcomponent/scripts.js',
    './dist/webcomponent/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/bundle.js');
})();
