#!/usr/bin/env node
import { command, Argv } from 'yargs';
import { CONFIG_FILE } from './static/index';
import { join } from 'path';
import { existsSync } from 'fs';
import { Config } from './config';
const root = process.cwd();
const configFile = join(root, CONFIG_FILE);
const defaultConfigFile = join(__dirname, 'assets/config.json')
let config: Config = Config.fromJson(require(defaultConfigFile))
if (existsSync) {
    config = Config.fromJson(require(configFile))
}
command('init [name]', `初始化`, (yargs: Argv) => {
    console.log(config)
});
