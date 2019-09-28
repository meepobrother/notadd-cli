import { Command, Option, Action } from '../../lib/decorators';
@Command({
    name: 'demo',
    alias: `d`,
    version: `1.0.0`,
    description: `测试命令`
})
export class Demo {

    @Option()
    title: string;

    @Action()
    action() {
        console.log(`demo`);
    }
}

