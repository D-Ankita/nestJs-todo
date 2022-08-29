import { Test, TestingModule } from '@nestjs/testing';
import { TodoAppController } from './todo-app.controller';

describe('TodoAppController', () => {
  let controller: TodoAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoAppController],
    }).compile();

    controller = module.get<TodoAppController>(TodoAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
