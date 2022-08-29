import { IsEnum, IsString } from "class-validator";
import { TodoStatus } from "../enum/todoStatus.enum";

export class createTodoDto{
	@IsString()
	content:string
	@IsEnum(TodoStatus)
	status:TodoStatus
}