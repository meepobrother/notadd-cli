import webpack, { Configuration, Compiler, Stats } from 'webpack';
import { Command } from '../common';
/**
 * 构建目标代码
 */
export class Build extends Command {
    compiler: Compiler;
    constructor() {
        super();
        this.compiler = webpack()
    }
    /**
     * 运行
     */
    run() {
        this.compiler.run((err: Error, stats: Stats) => void {
            // run
        });
    }
    /**
     * watch
     */
    watch() {
        this.compiler.watch({}, (err: Error, stats: Stats) => {
            // watch
        });
    }
}
