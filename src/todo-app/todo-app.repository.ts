import { Injectable } from "@nestjs/common";
import { readFile } from "fs/promises";
import { generateUniqueId } from "utils/generateUniqueId";
import { createTodoDto } from "./dto/createTodo.dto";
import { updateMessageDto } from "./dto/updateTodo.enum";

@Injectable()
export class TodoAppRepository{
	async fetchAllTodos(){
		const contents = await readFile('todoList.json','utf-8')
		const todos = JSON.parse(contents);
		return todos
	}

	async insertTodo(body:createTodoDto){
		const contents = await readFile('todoList.json','utf-8')
		const messages = JSON.parse(contents)
		const id =generateUniqueId({prefix:"todo"})
		messages[id]={id,...body}
	}

	async fetchTodo(id){
		const contents = await readFile('todoList.json','utf-8');
		const todos = JSON.parse(contents)
		return todos[id]
	}

	async updateTodo(id,body:updateMessageDto){
		const contents = await readFile('todoList.json','utf-8');
		const todos = JSON.parse(contents)
		let object = todos[id]
		console.log("before Update", object);	
		object = {...body}
		console.log("before Update", object);
	}

	async deleteTodo(id){
		const contents = await readFile('todoList.json','utf-8');
		const todos = JSON.parse(contents)
		console.log(todos);
		delete todos[id]
		console.log("After delete",todos);
		
	}
}