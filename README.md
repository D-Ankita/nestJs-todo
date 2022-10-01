<img width="914" alt="creative" src="https://user-images.githubusercontent.com/46243069/193423326-dd86f11f-9368-44fb-9755-55372aa185f4.png">

## About the Project

[Nest](https://github.com/nestjs/nest) framework TypeScript CRUD operations repository.
NestJs Backend for Todo Application which helps the user perform basic CRUD operations.


## Problem Statement
Create an Api for a to do application. The application provides end points for the following CRUD operation. Use NestJs for the same.

Create a task
Read all tasks
Read a single task based on a taskId sent in a route parameter
Update the status of task from pending to complete.
Delete a task 
The end points will be tested using Postman and data should be sent back as json objects. Use appropriate HTTP Methods for implementing the api endpoints.

## Installation

Clone the repository on your local machine using 
```
git clone https://github.com/D-Ankita/nestJs-todo.git
```

 Navigate to the folder and open terminal and install all the required Dependencies

```
$ npm install
```

## Running the app

In Development Mode
```
$ npm run start
```
In watch mode
```
$ npm run start:dev
```
In production mode

```
$ npm run start:prod
```

## Implementation
Run the Following operations in Postman. 

## Routes
The data is being fetched and written in the todoList.json file.

1.list all todos :
We perform a GET request to the server to fetch all the existing to-do tasks.
``` 
GET http://localhost:3005/todo-app    
```

2.Create a new msg:
To create a new Todo Task, we perform a POST request to the `http://localhost:3005/todo-app` End point. Also donot forget to give the Todo Object in the body
``` 
POST http://localhost:3005/todo-app
{
	"content":"new task ABC"
}
````

3.get a todo with ID
To fetch a todo with a given ID perform a GET request to the endpoint `http://localhost:3005/todo-app` followed by `/id`
```
GET http://localhost:3005/todo-app/todo-9sm22b8foca
```

4.Update
To perform some updates on existing Todo task, perform a PATCH request to the endpoint `http://localhost:3005/todo-app` followed by `/id` of the todo task to be edited, along with the updated object in the body of the request.

``` 
PATCH  http://localhost:3005/todo-app/todo-tpd3h7r4qd
Content-Type: application/json
{
	"content":"Task 1- updated "
}
````

5.Delete a message with ID:
To delete an existing entry, perform a DELETE request to the endpoint `http://localhost:3005/todo-app` followed by `/id` of the todo task to be deleted.
``` 
DELETE  http://localhost:3005/todo-app/todo-y113kazqy2
```


## Directory Structure
```
. 
├── package.json 
├── package-lock.json 
├── README.md  
├── todoList.json
├── rest.http
├── tsconfig.json
├── src
|   └── todo-app
|   |     └── dto
|   |     |   └── todo.dto.ts
|   |     └── enum
|   |     |    └── todoStatus.enum.ts   
|   |     └── todo-app.controller.ts
|   |     └── todo-app.module.ts
|   |     └── todo-app.repository.ts
|   |     └── todo-app.services.ts
|   └── app.controller.ts
|   └── app.module.ts
|   └── app.repository.ts
|   └── app.services.ts
└── utils 
    └── generateUniqueId.ts 
```
 
## Support  
<p align="right">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" height="50" alt="Nest Logo" /></a>
</p>  
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
<hr>
<img width="509" alt="Untitled_design-removebg-eagle" src="https://user-images.githubusercontent.com/46243069/193423874-e2676fc4-6065-4b2d-818f-474de44c2567.png">

