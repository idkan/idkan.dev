---
title: Clean Functions
date: '2022-06-16'
authors: [ 'default' ]
tags: ['javascript', 'code', 'tips']
draft: false
summary: Here are some tips regarding clean functions. There are more to into clean functions but these are some basics that I could fit into this post.
layout: SimpleLayout
---

Limiting the amount of function parameters is a good idea beacuse it makes it easier to understand/maintain and test.

Having a function that takes a lot of parameters means that you have to test a tons of different cases with each separate argument to make sure that the function works as expected.
Afortunately, JavaScript allows you to make objects on the fly and pass them as arguments.

### Function Arguments
We can use destructuring syntax to extract the arguments from an object.
There are a few advantages:
<ul>
    <li>When someone look at the code, they will see the arguments in a readable format.</li>
    <li>It can be use to simulate named parameters.</li>
    <li>Descructuring also clones the object so that it is safe to modify it. This can help to prevent bugs.</li>
    <li>Linters will be able to detect unused parameters.</li>
</ul>

```javascript
// Bad way of doing it
function createUser(firstName, lastName, age, isAdmin) {
  // ...
}
createUser('John', 'Doe', 30, true);
```
```javascript
// Good way of doing it
function createUser({ firstName, lastName, age, isAdmin }) {
  // ...
}
createUser({ firstName: 'John', lastName: 'Doe', age: 30, isAdmin: true });
```

### Functions should do one thing and do it well

This is by far the most important rule of clean functions. When functions do more than one thing, they are harder to understand and test.
When you can separate the different things that a function does into different functions, you can test them separately and make sure that they work as expected and your code will be more readable.

```javascript
// Bad way of doing it
function emailUser(users) {
  users.forEach(user => {
    const userEmail = database.getUserEmail(user.id);
    if (userEmail.isValid()) {
      sendEmail(userEmail, 'Welcome', 'Hi there!');
    }
  })
}
```
```javascript	
// Good way of doing it
function emailValidUsers(users) {
  users.filter(isEmailValid).forEach(user => {
    const userEmail = database.getUserEmail(user.id);
    sendEmail(userEmail, 'Welcome', 'Hi there!');
  })
}

function isEmailValid(user) {
  const userEmail = database.getUserEmail(user.id);
  return userEmail.isValid();
}
```

### Function names should be descriptive

```javascript
// Bad way of doing it
function addDate(date, days) { }
const date = new Date();
// It's hard to understand from the function name what is added.
addDate(date, 30);
```

```javascript
// Good way of doing it
function addDaysToDate(date, days) { }
const date = new Date();
// It's easy to understand from the function name what is added.
addDaysToDate(date, 2);
```


### Avoid negative conditions

  
```javascript 
// Bad way of doing it  
function isUserNotAdmin(user) {
  return !user.isAdmin;
}
if (!isUserNotAdmin(user)) {
  // ...
}
```

```javascript
// Good way of doing it
function isUserAdmin(user) {
  return user.isAdmin;
}
if (isUserAdmin(user)) {
  // ...
}
```

### Encapsulate conditionals

```javascript	
// Bad way of doing it
if (user.isAdmin && app.state === 'loading') { }
```

```javascript
// Good way of doing it
function shouldSendWelcomeMessage(user, app) {
  return user.isAdmin && app.state === 'loading';
}

if (shouldSendWelcomeMessage(user, app)) {
  // ...
}
```

That's it for this post.
If you have any questions, please don't hesitate to contact me.

Want to know more about write clean code? Check out this book by Robert C. Martin: [Clean Code: A Handbook of Agile Software Craftsmanship](https://amzn.to/3O2j51d)

