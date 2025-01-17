import { Module } from "@nestjs/common";
import { Util } from "./util";


@Module({
    providers: [
        Util
    ]
})
export class UtilModule { }

export {
    Util
}