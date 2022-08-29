import { IsEnum, IsString, MaxLength, MinLength } from "class-validator";
import { TodoStatus } from "../enum/todoStatus.enum";

export class updateMessageDto {
	@IsString()
	id: string
	@IsString()
	@MinLength(3, {message: 'Description is too short',})
	@MaxLength(50, {message: 'Description is too long',})
	content: string
	@IsEnum(TodoStatus)
	status: TodoStatus
}