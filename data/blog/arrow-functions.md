---
title: Arrow Function
date: '2022-05-24'
authors: [ 'default' ]
tags: ['javascript', 'code', 'tips']
draft: false
summary: Javascript has long incorporated a compact and convenient way of writing functions in Javascript, called the arrow function or thick arrow.
layout: SimpleLayout
---

Arrow functions are a concise way to write functions in Javascript. They are a syntactical replacement for the function keyword, and are used to write functions in a more concise way.

### Javascript Functions ⚡

Javascript functions are written in the following way:

```javascript
function functionName(param1, param2, param3) {
  // function body
}
```
It's fairly common to see functions saved in constants, variables, or objects.
In this case, the function is called with the same name as the constant.

Functions without name are called anonymous functions.

```javascript
const functionName = function(param1, param2, param3) {
  // function body
}
```

### Arrow Functions

Using the arrow function syntax, we can write functions in a more concise way with the following syntax:

```javascript
const functionName = (param1, param2, param3) => {
  // function body
}
```

### Arrow Functions with Single Line Body

Arrow functions allow us to write functions without return statements and without curly braces when the function body is a single line.

```javascript
const functionName = (param1, param2, param3) => param1 + param2 + param3;
```

### Parameters

When writing functions, we can pass parameters to the function.

```javascript
const noParam = () => { ... }
const oneParam = param1 => { ... }
const twoParams = (param1, param2) => { ... }
```

### The this Keyword

When writing functions, we can use the **this** keyword to refer to the object that is calling the function.

```javascript
const person = {
  name: 'John',
  sayName: function() {
    console.log(this.name);
  }
}
```
In the example above, the this keyword refers to the person object.

However, we use the arrow function syntax, the **this** keyword refers to the object that is calling the function and not the object that is defined in the function.

```javascript
const person = {
  name: 'John',
  sayName: () => {
    console.log(this.name);
  }
}
```
In the example above, the this keyword refers to the global object.


