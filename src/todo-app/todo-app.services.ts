import { Body, Injectable } from "@nestjs/common";
import { todoDTO } from "./dto/createTodo.dto";
import { TodoAppRepository } from "./todo-app.repository";
@Injectable()
export class TodoAppService{
	constructor(public todoAppRepo:TodoAppRepository){}
	fetchAllTodos(){
		console.log("in servies fat");
		
		return this.todoAppRepo.fetchAllTodos();
		// return this.todoAppRepo.testing();

	}

	insertTodo(body:todoDTO){
		return this.todoAppRepo.insertTodo(body)
	}

	fetchTodo(id:string){
		return this.todoAppRepo.fetchTodo(id)

	}

	updateTodo(id:string, body:todoDTO){
		return this.todoAppRepo.updateTodo(id,body)
	}

	deleteTodo(id:string){
		return this.todoAppRepo.deleteTodo(id)
	}
}