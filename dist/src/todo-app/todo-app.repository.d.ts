import { todoDTO } from "./dto/createTodo.dto";
export declare class TodoAppRepository {
    testing(): string;
    fetchAllTodos(): Promise<any>;
    insertTodo(body: todoDTO): Promise<any>;
    fetchTodo(id: any): Promise<any>;
    updateTodo(id: any, body: todoDTO): Promise<any>;
    deleteTodo(id: any): Promise<any>;
}
