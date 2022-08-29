import { createTodoDto } from "./dto/createTodo.dto";
import { updateMessageDto } from "./dto/updateTodo.enum";
export declare class TodoAppRepository {
    fetchAllTodos(): Promise<any>;
    insertTodo(body: createTodoDto): Promise<void>;
    fetchTodo(id: any): Promise<any>;
    updateTodo(id: any, body: updateMessageDto): Promise<void>;
    deleteTodo(id: any): Promise<void>;
}
