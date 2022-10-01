import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { todoDTO } from './dto/createTodo.dto';
import { TodoAppService } from './todo-app.services';

@Controller('todo-app')
export class TodoAppController {
	constructor (public todoAppService:TodoAppService){
	}

	//get all tasks
	@Get()
	fetchAllTodos(){
		console.log("in controller");
		
		return this.todoAppService.fetchAllTodos()

	}

	//create a task
	@Post()
	insertTodo(@Body() body:todoDTO){
		return this.todoAppService.insertTodo(body)

	}

	//get a task with Id
	@Get('/:id')
	fetchTodo(@Param('id') id:string){
		return this.todoAppService.fetchTodo(id)

	}

	//update a task with Id
	@Patch('/:id')
	updateTodo(@Param('id') id:string , @Body() body:todoDTO){
		return this.todoAppService.updateTodo(id,body)

	}

	//delete a task with Id
	@Delete('/:id')
	deleteTodo(@Param('id') id:string){
		return this.todoAppService.deleteTodo(id)

	}
}
