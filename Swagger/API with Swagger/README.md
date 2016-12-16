# Create an API with Swagger

Swagger is a project used to describe restful APIs using the OpenAPI Specification.
It allows you to document your API so consumers understand the endpoints, parameters, 
and responses. In this lesson, I'll show you how to install the swagger command line 
tool, create a new API project using swagger, and introduce you to the swagger API 
editor.

## Course

```
https://egghead.io/lessons/node-js-create-an-api-with-swagger
```

## Steps

* Install

```
npm install -g swagger
```

* Make a project

```
swagger project create <project name>
```

* Starting the project

```
swagger project start <project name>
```

* Editing a project

To start Swagger Editor go into project directory and ...

```
swagger project edit
```

Point abrowser to: http://127.0.0.1:43101/#/edit and do not terminate the process or 
close the window until finished editing.

