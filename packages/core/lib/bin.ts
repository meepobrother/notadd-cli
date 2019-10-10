#!/usr/bin/env node
import { command, Argv, Arguments } from 'yargs';
import { CONFIG_FILE, CONFIG_NAME } from './static/index';
import { join } from 'path';
import { existsSync } from 'fs';
import { Config } from './config';
const root = process.cwd();
const configFile = join(root, CONFIG_FILE);
const defaultConfigFile = join(__dirname, 'assets/config.json');
let config: Config = Config.fromJson(require(defaultConfigFile));
const pkg = require('../package.json')
if (existsSync(configFile)) {
    config = Config.fromJson(require(configFile))
}
console.log(`welcome to use ${CONFIG_NAME}:v${pkg.version}`)
interface Dirname {
    dirname: string;
}
command('init [dirname]', `初始化`, (argv: Argv) => {
    argv.positional(`dirname`, {
        describe: '名字',
        default: `demo`
    })
}, (argv: Arguments<Dirname>) => {
    if (config.type === 'application') {
        const cfg = config.copy();
        cfg.name = argv.dirname;
        cfg.type = 'workspace';
        cfg.main = 'projects';
        cfg.save();
    }
}).argv;
