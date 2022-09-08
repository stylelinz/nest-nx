import { Controller, Get, ParseArrayPipe, Post, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly todosService: TodosService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('todos')
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post('todos')
  createTodos(
    @Query('todos', new ParseArrayPipe({ separator: ',' })) todos: string[]
  ) {
    return this.todosService.createTodos(todos);
  }
}
