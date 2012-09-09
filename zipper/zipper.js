var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

// add local file
zip.addLocalFolder("./zipme");
// or write everything to disk
zip.writeZip("files.zip");