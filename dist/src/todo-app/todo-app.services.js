"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAppService = void 0;
class TodoAppService {
    constructor(todoAppRepo) {
        this.todoAppRepo = todoAppRepo;
    }
    fetchAllTodos() {
        return this.todoAppRepo.fetchAllTodos();
    }
    insertTodo(body) {
        return this.todoAppRepo.insertTodo(body);
    }
    fetchTodo(id) {
        return this.todoAppRepo.fetchTodo(id);
    }
    updateTodo(id, body) {
        return this.todoAppRepo.updateTodo(id, body);
    }
    deleteTodo(id) {
        return this.todoAppRepo.deleteTodo(id);
    }
}
exports.TodoAppService = TodoAppService;
//# sourceMappingURL=todo-app.services.js.map