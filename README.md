<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

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

Clone the repository on your local machine using `git clone {repositoryName}`

 Navigate to the folder and open terminal

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<!-- ## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->

## Implementation

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).



## License

Nest is [MIT licensed](LICENSE).
