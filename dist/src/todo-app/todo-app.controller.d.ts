import { todoDTO } from './dto/todo.dto';
import { TodoAppService } from './todo-app.services';
export declare class TodoAppController {
    todoAppService: TodoAppService;
    constructor(todoAppService: TodoAppService);
    fetchAllTodos(): Promise<any>;
    insertTodo(body: todoDTO): Promise<any>;
    fetchTodo(id: string): Promise<any>;
    updateTodo(id: string, body: todoDTO): Promise<any>;
    deleteTodo(id: string): Promise<any>;
}
