# auth-graphql-starter
Starter project from a GraphQL course on Udemy.com - Section 3!

```
cd Auth-GraphQL
npm run dev
Access to: http://localhost:4000/graphql
Please check the `Auth-GraphQL/server/server.js`.
Using MongoDB.
```

### Sign up

##### Request
```
mutation {
  signup(email: "test@test.com", password: "password") {
    email
  }
}
```

##### Response
```
{
  "data": {
    "signup": {
      "email": "test@test.com"
    }
  }
}
```


### Logout

##### Request
```
mutation {
  logout {
    email
  }
}
```

##### Response
```
{
  "data": {
    "logout": {
      "email": "test@test.com"
    }
  }
}
```

### Login

##### Request
```
mutation {
  login(email: "test@test.com", password: "password") {
    email
  }
}
```

##### Response
```
{
  "data": {
    "login": {
      "email": "test@test.com"
    }
  }
}
```

### Cheking User Status

##### Request
```
{
  user {
    email
  }
}
```

##### Response
```
{
  "data": {
    "user": {
      "email": "test@test.com"
    }
  }
}
```
