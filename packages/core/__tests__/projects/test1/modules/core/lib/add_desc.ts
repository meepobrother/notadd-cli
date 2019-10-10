import { Injectable } from "@nestjs/common";
import { Util } from '@notadd/test1.util';
@Injectable()
export class AddDesc {
    constructor(private util: Util) { }
    async add(a: number, b: number) {
        return this.util.add(a, b)
    }
    async desc(a: number, b: number) {
        return this.util.desc(a, b)
    }
}