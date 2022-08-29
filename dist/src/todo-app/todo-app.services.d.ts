import { createTodoDto } from "./dto/createTodo.dto";
import { updateMessageDto } from "./dto/updateTodo.enum";
import { TodoAppRepository } from "./todo-app.repository";
export declare class TodoAppService {
    todoAppRepo: TodoAppRepository;
    constructor(todoAppRepo: TodoAppRepository);
    fetchAllTodos(): Promise<any>;
    insertTodo(body: createTodoDto): Promise<void>;
    fetchTodo(id: string): Promise<any>;
    updateTodo(id: string, body: updateMessageDto): Promise<void>;
    deleteTodo(id: string): Promise<void>;
}
