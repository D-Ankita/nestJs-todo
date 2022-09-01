import { IsEmpty, IsEnum, isNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { TodoStatus } from "../enum/todoStatus.enum";

export class todoDTO{
	
	id:string

	@IsString() 
	// @MinLength(4, {message: 'Description is too short',})
	content:string

	@IsEnum(TodoStatus)
	@IsOptional()
	status:TodoStatus = TodoStatus.PENDING
}