import { NestFactory } from '@nestjs/core';
import { CoreModule } from './lib/index'
async function bootstrap() {
    const app = await NestFactory.create(CoreModule);
    app.listen(9001, '0.0.0.0');
}
bootstrap();