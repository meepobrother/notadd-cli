import { Subject, Subscriber, Subscription } from 'rxjs';
import { createClient } from 'redis';

export class RedisSubject<T> extends Subject<T> {
    private pub = createClient();
    private sub = createClient();
    private topic: string;
    next(value?: T): void {
        this.pub.publish(this.topic, JSON.stringify(value))
    }
    error(err: any): void {
        super.error(err);
        this.pub.quit();
        this.sub.quit();
    }
    complete(): void {
        this.pub.quit();
        this.sub.quit();
        super.complete();
    }
    unsubscribe(): void {
        this.pub.quit();
        this.sub.quit();
        super.unsubscribe();
    }
    _subscribe(subscriber: Subscriber<T>): Subscription {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        } else {
            return Subscription.EMPTY;
        }
    }
}

export abstract class Application {
    /**
     * 发送一个请求
     * @param command 
     */
    abstract send(command: Command): Subject<any>;
}

let app: Application = {} as any;
let cmd: Command = {} as any;
const sub = app.send(cmd);

export abstract class Command {
}

const sub2 = new Subject();
const sub1 = new Subject();
/**
 * 发送到sub2的消息
 */
sub1.next();
sub1.subscribe(() => {
    console.log(`sub1`)
});
/**
 * 发送到sub1的消息
 */
sub2.next();
sub2.subscribe(() => {
    console.log(`sub1`)
})