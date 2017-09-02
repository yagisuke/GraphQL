# GraphQL with React

## users app
```shell
$ npm install

// start json server
$ cd users
$ npm run json:serverd

// start web server
$ cd users
$ npm run start
```

## sample query
Please access to `http://localhost:4000/graphql`.

### get query
##### simple pattern
```
{
  user(id: "1") {
    id
  }
}
```

##### nest pattern
```
{
  company(id: "1") {
    id,
    name,
    description,
    users {
      firstName
    }
  }
}
```

### update query
```
mutation {
  addUser(firstName: "name", age: 30) {
    firstName,
    age
  }
}
```

### delete query
```
mutation {
  deleteUser(id: "0") {
    id
  }
}
```
