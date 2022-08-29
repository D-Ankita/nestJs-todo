import { Module } from '@nestjs/common';
import { TodoAppController } from './todo-app.controller';
import { TodoAppRepository } from './todo-app.repository';
import { TodoAppService } from './todo-app.services';

@Module({
  controllers: [TodoAppController],
  providers:[TodoAppRepository,TodoAppService]
})
export class TodoAppModule {}
