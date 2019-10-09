import webpack, { Compiler, Stats } from 'webpack';
/**
 * 编译并启动server
 */
export class Serve {
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
