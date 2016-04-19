import gulp from "gulp";
import fs from "fs";
import requireDir from "require-dir";

const cfg = require(`./config`);
const plugins = require('gulp-load-plugins')();

const helpers = requireDir(`helpers`, {
    recurse: true,
    camelcase: true
});

fs.readdirSync(`./tasks`).forEach((taskFile) => {
    require(`./tasks/${taskFile}`)(gulp, plugins, cfg, helpers);
});