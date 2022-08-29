import { createTodoDto } from './dto/createTodo.dto';
import { TodoAppService } from './todo-app.services';
export declare class TodoAppController {
    todoAppService: TodoAppService;
    constructor(todoAppService: TodoAppService);
    fetchAllTodos(): void;
    insertTodo(body: createTodoDto): void;
    fetchTodo(id: string): void;
    updateTodo(id: string, body: createTodoDto): void;
    deleteTodo(id: string): void;
}
