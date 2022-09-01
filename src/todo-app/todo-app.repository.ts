import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { generateUniqueId } from "utils/generateUniqueId";
import { todoDTO } from "./dto/todo.dto";
import { TodoStatus } from "./enum/todoStatus.enum";

@Injectable()
export class TodoAppRepository{
	testing(){
		return "hello";
	}

	async fetchAllTodos(){
		console.log("in fetchAllTodo");
		const contents = await readFile('todoList.json','utf-8')
		console.log(contents);
		const todos = JSON.parse(contents);
		console.log(todos);
		return todos
		// return "Hello";
	}

	async insertTodo(body:todoDTO){
		let contents = await readFile('todoList.json','utf-8')
		const todos = JSON.parse(contents)
		const id =generateUniqueId({prefix:"todo"})
		const {content, status} = body
		let newObject:todoDTO = {id, content,status}
		console.log(newObject);
		if(!newObject.status){
			newObject.status=TodoStatus.PENDING;
		}
		todos.push(newObject);
		let updatedContent = writeFile('todoList.json', JSON.stringify(todos, null, 4));
		console.log(updatedContent);
		return todos
	}

	async fetchTodo(id){
		const contents = await readFile('todoList.json','utf-8');
		const todos = JSON.parse(contents)
		var result = todos.find(todo => todo.id === id);
		return result 
	}

	async updateTodo(id,body:todoDTO){
		const contents = await readFile('todoList.json','utf-8');
		const todos = JSON.parse(contents)
		var object = todos.find(todo => todo.id === id);
		console.log("before Update", object);	
		if(body.content !== undefined){
			object.content = body.content;
		}
		if(body.status){
			object.status = body.status;
		}
		console.log("after Update", object);
		let updatedContent = writeFile('todoList.json', JSON.stringify(todos, null, 4));
		console.log(updatedContent);
		return todos
	}

	async deleteTodo(id){
		const contents = await readFile('todoList.json','utf-8');
		let todos = JSON.parse(contents)
		console.log(todos);
		todos = todos.filter(todo => todo.id !== id);
		let updatedContent = writeFile('todoList.json', JSON.stringify(todos, null, 4));
		console.log("After delete",updatedContent);
		return todos
		
	}
}