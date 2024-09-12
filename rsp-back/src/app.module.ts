import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RspModule } from './rsp/rsp.module';

@Module({
  imports: [ConfigModule.forRoot(), RspModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
