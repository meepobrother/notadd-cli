/**
 * 命令
 */
export abstract class Command {
    abstract run(): void;
    abstract watch(): void;
}
