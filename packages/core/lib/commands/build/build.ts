import webpack, { Configuration, Compiler, Stats } from 'webpack';
export class Build {
    compiler: Compiler;

    constructor() {
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
