var fs = require("fs");
var path = require("path");
var convict = require('convict');

var conf = convict(require("./default"));

// environment variables first
var env = conf.get('env');

console.log(`Environment = ${env}`)
// then specified in a local file
const envFile = path.join(__dirname, `${env}.json`);
console.log(envFile)
if(fs.existsSync(envFile)){
  conf.loadFile(envFile);
}

module.exports = JSON.parse(conf.toString());
