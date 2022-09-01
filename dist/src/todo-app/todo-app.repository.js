"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAppRepository = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const generateUniqueId_1 = require("../../utils/generateUniqueId");
const todoStatus_enum_1 = require("./enum/todoStatus.enum");
let TodoAppRepository = class TodoAppRepository {
    testing() {
        return "hello";
    }
    async fetchAllTodos() {
        console.log("in fetchAllTodo");
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        console.log(contents);
        const todos = JSON.parse(contents);
        console.log(todos);
        return todos;
    }
    async insertTodo(body) {
        let contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        const id = (0, generateUniqueId_1.generateUniqueId)({ prefix: "todo" });
        const { content, status } = body;
        let newObject = { id, content, status };
        console.log(newObject);
        if (!newObject.status) {
            newObject.status = todoStatus_enum_1.TodoStatus.PENDING;
        }
        todos.push(newObject);
        let updatedContent = (0, promises_1.writeFile)('todoList.json', JSON.stringify(todos, null, 4));
        console.log(updatedContent);
        return todos;
    }
    async fetchTodo(id) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        var result = todos.find(todo => todo.id === id);
        return result;
    }
    async updateTodo(id, body) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        var object = todos.find(todo => todo.id === id);
        console.log("before Update", object);
        if (body.content !== undefined) {
            object.content = body.content;
        }
        if (body.status) {
            object.status = body.status;
        }
        console.log("after Update", object);
        let updatedContent = (0, promises_1.writeFile)('todoList.json', JSON.stringify(todos, null, 4));
        console.log(updatedContent);
        return todos;
    }
    async deleteTodo(id) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        let todos = JSON.parse(contents);
        console.log(todos);
        todos = todos.filter(todo => todo.id !== id);
        let updatedContent = (0, promises_1.writeFile)('todoList.json', JSON.stringify(todos, null, 4));
        console.log("After delete", updatedContent);
        return todos;
    }
};
TodoAppRepository = __decorate([
    (0, common_1.Injectable)()
], TodoAppRepository);
exports.TodoAppRepository = TodoAppRepository;
//# sourceMappingURL=todo-app.repository.js.map