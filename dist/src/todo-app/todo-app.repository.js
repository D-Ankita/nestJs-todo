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
let TodoAppRepository = class TodoAppRepository {
    async fetchAllTodos() {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        return todos;
    }
    async insertTodo(body) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = (0, generateUniqueId_1.generateUniqueId)({ prefix: "todo" });
        messages[id] = Object.assign({ id }, body);
    }
    async fetchTodo(id) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        return todos[id];
    }
    async updateTodo(id, body) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        let object = todos[id];
        console.log("before Update", object);
        object = Object.assign({}, body);
        console.log("before Update", object);
    }
    async deleteTodo(id) {
        const contents = await (0, promises_1.readFile)('todoList.json', 'utf-8');
        const todos = JSON.parse(contents);
        console.log(todos);
        delete todos[id];
        console.log("After delete", todos);
    }
};
TodoAppRepository = __decorate([
    (0, common_1.Injectable)()
], TodoAppRepository);
exports.TodoAppRepository = TodoAppRepository;
//# sourceMappingURL=todo-app.repository.js.map