import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createTodoDto } from './dto/createTodo.dto';
import { TodoAppService } from './todo-app.services';

@Controller('todo-app')
export class TodoAppController {
	constructor (public todoAppService:TodoAppService){
	}

	//get all tasks
	@Get()
	fetchAllTodos(){

	}

	//create a task
	@Post()
	insertTodo(@Body() body:createTodoDto){

	}

	//get a task with Id
	@Get('/:id')
	fetchTodo(@Param('id') id:string){

	}

	//update a task with Id
	@Patch('/:id')
	updateTodo(@Param('id') id:string , @Body() body:createTodoDto){

	}

	//delete a task with Id
	@Delete('/:id')
	deleteTodo(@Param('id') id:string){

	}
}
