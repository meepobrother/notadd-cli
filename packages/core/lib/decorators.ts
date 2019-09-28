interface ICommand {
    name: string;
    alias?: string;
    version?: string;
    description?: string;
}
interface CommandOption {
    flags: string;
    description?: string;
    defaultValue?: any;
}
export const Command: any = (cmd?: ICommand) => { }
export const Option: any = (cmd?: CommandOption) => { }
export const Action: any = () => { }
