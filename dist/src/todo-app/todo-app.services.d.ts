import { todoDTO } from "./dto/todo.dto";
import { TodoAppRepository } from "./todo-app.repository";
export declare class TodoAppService {
    todoAppRepo: TodoAppRepository;
    constructor(todoAppRepo: TodoAppRepository);
    fetchAllTodos(): Promise<any>;
    insertTodo(body: todoDTO): Promise<any>;
    fetchTodo(id: string): Promise<any>;
    updateTodo(id: string, body: todoDTO): Promise<any>;
    deleteTodo(id: string): Promise<any>;
}
