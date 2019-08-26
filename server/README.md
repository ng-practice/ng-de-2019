# Todo Server

This is a simple server that provides a REST API for managing todos.

Start it by running

```bash
npm start
```

from command line.

## Reset Database

Todos are stored in `todos-db.json`. To reset the database, revert changes to this file by using git:

```bash
git checkout -- todos-db.json
```

or

```bash
git checkout -- server/todos-db.json
```

if you're in the root folder.

# API Documentation

## Retrieve Todos

Get all todos.

**URL** : `localhost:3000/todos`

**Method** : `GET`

### Success Response

**Code** : `200 OK`

**Content examples**

List with one active and one completed todo:

```json
[
  {
    "id": 123,
    "text": "Go running",
    "completed": false
  },
  {
    "id": 456,
    "text": "Buy milk",
    "completed": true
  }
]
```

### Filtering Todos

You can filter the todo list by using `query` parameter:

- `/todos?query=active`: only return active (i.e. `"completed"` is false) todos
- `/todos?query=complete`: only return completed (i.e. `"completed"` is true) todos
- `/todos?query=all`: return the whole list; this is equal to omitting the query parameter

## Create New Todo

**URL** : `localhost:3000/todos`

**Method** : `POST`

**Request Body** :

The newly created todo:

```json
{
  "text": "Follow trainers on Twitter",
  "completed": false
}
```

The id will be created by the server.

### Success Response

**Code** : `201 Created`

**Content examples**

The newly created todo:

```json
{
  "id": 789,
  "text": "Follow trainers on Twitter",
  "completed": false
}
```

## Edit Todo

**URL** : `localhost:3000/todos/:id`
(where `:id` is the `id` value of the todo to be edited)

**Method** : `PUT`

**Request Body** :

The edited todo.

**Example** :

Set todo with id 789 to done:

`PUT localhost:3000/todos/789`

```json
{
  "text": "Follow trainers on Twitter",
  "completed": true
}
```

### Success Response

**Code** : `200 OK`

**Content examples**

The edited todo:

```json
{
  "id": 789,
  "text": "Follow trainers on Twitter",
  "completed": true
}
```

## Delete Todo

**URL** : `localhost:3000/todos/:id`
(where `:id` is the `id` value of the todo to be deleted)

**Method** : `DELETE`

### Success Response

**Code** : `200 OK`
