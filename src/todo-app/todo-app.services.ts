import { Body } from "@nestjs/common";
import { createTodoDto } from "./dto/createTodo.dto";
import { updateMessageDto } from "./dto/updateTodo.enum";
import { TodoAppRepository } from "./todo-app.repository";

export class TodoAppService{
	constructor(public todoAppRepo:TodoAppRepository){}
	fetchAllTodos(){
		return this.todoAppRepo.fetchAllTodos();
	}

	insertTodo(body:createTodoDto){
		return this.todoAppRepo.insertTodo(body)
	}

	fetchTodo(id:string){
		return this.todoAppRepo.fetchTodo(id)

	}
	
	updateTodo(id:string, body:updateMessageDto){
		return this.todoAppRepo.updateTodo(id,body)
	}

	deleteTodo(id:string){
		return this.todoAppRepo.deleteTodo(id)
	}
}