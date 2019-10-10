import { Module } from '@nestjs/common';
import { AddDesc } from './add_desc';
import { UtilModule } from '@notadd/test1.util';
@Module({
    imports: [
        UtilModule
    ],
    providers: [
        AddDesc
    ]
})
export class CoreModule { }

export {
    AddDesc
}