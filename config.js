import fs from "fs";
import lodash from "lodash";

let defaultConfig = require(`${__dirname}/default.config.json5`);
let localConfig = {};
let combined = {};
let currentPath = process.cwd();

if(fs.existsSync(`${currentPath}/gulp.config.json`)) {
    localConfig = require(`${currentPath}/gulp.config.json`);
} else if(fs.existsSync(`${currentPath}/gulp.config.json5`)) {
    localConfig = require(`${currentPath}/gulp.config.json5`);
}

for (let prop in defaultConfig) {
    combined[prop] = lodash.merge(defaultConfig[prop], localConfig[prop]);
}

module.exports = combined;
