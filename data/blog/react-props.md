---
title: React Props
date: '2022-06-12'
authors: [ 'default' ]
tags: ['react', 'code', 'tips']
draft: false
summary: Props are one of the most essential concept of React. Read more about them here.
layout: PostLayout
---

### Props are one of the most essential concept of React.

Let's say you have a Car component. Without props, we would only have one type of car. With props, we can create multiple types of cars.
We can create a car with a color, a model, a year, and a price.

```jsx
<Car 
  color="red"
  model="BMW"
  year="2022"
  price="$1,000,000"
/>
```

Components are functions that take props as input and return a React element. Props are the input to the component, they are the data that the component needs to render.

### The Syntax

```jsx
<ComponentName propName={propValue} />
<Car 
  color="red"
  model="BMW"
  options={[ 'A', 'B', 'C' ]}
  addons={{  type: 'tinted windows', price: '$100' }}
  onClick={() => console.log('clicked')}
/>
```
Any JS expression can be used as a prop value. This includes functions, arrays, objects, and even other components.
Values are always wrapped in curly braces.

### Reading Props

We can read props by using the `props` object and we can use destructuring assignment to access the props we want. 

```jsx
function Car({ color, model, year, price }) {
  return (
    <div>
      <h1>{color} {model}</h1>
      <p>{year}</p>
      <p>{price}</p>
    </div>
  );
}
```
Props are read-only. We can't change them. We use state to add behavior to our components.

### Default Props

We can set default values for props. This is useful for when we don't know the value of a prop or when is undefined.

  
```jsx
function Car({ color = 'red', model, year, price }) {
  return (
    <div>
      <h1>{color} {model}</h1>
      <p>{year}</p>
      <p>{price}</p>
    </div>
  );
}
```
In this case, if we don't pass a color prop, we will use the default value of red. 

### Children Props

When we nest content inside a component, the parent component will pass the children as a prop called `children`. 

```jsx
<Car>
  <h1>Hello</h1>
  <p>World</p>
  <Truck />
</Car>

function Car({ children }) {
  // In this case the children are:
  // <h1>Hello</h1>
  // <p>World</p>
  // <Truck />
  return (
    <div>
      {children}
    </div>
  );
}
```

That's it! You can now create your own components and pass them as props to other components. 
Want to learn more? Check out the [React docs](https://reactjs.org/docs/introducing-jsx.html).

Find it useful? Share it with your friends!
If you have any questions, feel free to leave a comment below. I'll try to answer as soon as I can. 👋🏻



