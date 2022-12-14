import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TodosService],
})
export class AppModule {}
