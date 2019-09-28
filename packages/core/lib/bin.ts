#!/usr/bin/env node
import program from 'commander';
import { red } from 'colors';
import { Build } from './commands/build/build';
import { Serve } from './commands/serve/serve';
const pkg = require('../package.json');

program
    .version(pkg.version, `-v, --version`, '当前版本')
    .helpOption(`-h, --help`, '帮助信息')

program
    .command(`compiler`)
    .description(`编译服务`)
    .action(() => {
        console.log(red(`编译服务`))
    })

program
    .command(`grpc`)
    .description(`生成grpc`)
    .action(() => {
        console.log(red(`生成grpc`))
    })

program
    .command(`graphql`)
    .description(`生成graphql`)
    .action(() => {
        console.log(red(`grpc服务`))
    })

program
    .command(`typeorm`)
    .description(`生成typeorm`)
    .action(() => {
        console.log(red(`生成typeorm`))
    })

program
    .command(`client`)
    .description(`通过graphql生成ts`)
    .option("-w, --watch", "监听文件变化")
    .action(() => {
        console.log(red(`通过graphql生成ts`))
    })

program
    .command('serve')
    .description('启动服务')
    .option("-w, --watch", "监听文件变化")
    .action(({ watch }) => {
        if (watch) {
            new Serve().watch();
        } else {
            new Serve().run();
        }
    });

program
    .command('build')
    .option("-w, --watch", "监听文件变化")
    .description('构建服务')
    .action(({ watch }) => {
        if (watch) {
            new Build().watch();
        } else {
            new Build().run();
        }
    });

program
    .command('publish')
    .description('发布服务')
    .action(() => {
        console.log(`发布服务`)
    });

program
    .command('*')
    .action(function (env) {
        console.log('deploying "%s"', env);
    });

program.parse(process.argv);
