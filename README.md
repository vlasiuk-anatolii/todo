#ToDo App

## Description

![todoapp](./images-readme/todo.gif)

## Tasks
1. Was implemented `TodoApp` component with an input field to create new todo on submit (Enter).
1. The app shows the number of not completed todos in `TodoApp`.
1. Was implemented `TodoList` component with `<ul>` element to display a list of todos.
1. Was implemented `TodoItem` component with ability to toggle the `completed` status using a checkbox.
1. Was added ability to toggle the completed status of all the todos.
1. Was created `TodosFilter` component to switch between `All`/`Active`/`Completed` todos.
1. Was added ability to remove an item.
1. Was added ability to clear completed todos - remove all completed items from the list. The button has text `Clear completed` in it.
1. Was made inline editing for the TODO item
    - double click on the TODO title makes it editable.
    - `Enter` saves changes
1. Was implemented saving state of the APP to the `localStorage`.

![todoedit](./description/edittodo.gif)

## (*) Advanced tasks (Optional)
Implement saving the todos in [the API](https://mate-academy.github.io/fe-students-api/).

**BEFORE you started:**
1. Create a user by sending a POST request to the `/users`.
1. Save the `userId` in your code and use it for all the future request where it is required

**Tasks**
1. Load a user from `/users/:userId` and show your name on the page
1. Load all the todos from `/todos` and filter them by `userId` to show only your todos in the App
1. Save new todos by sending POST request to `/todos` (don't forget to add `userId`)
    - use `JSON.stringify` when sending a `body`
    - Think what to do in case of a server error (at least notify the user)
1. Delete the todo by sending DELETE to `/todos/:todoId`
1. Toggle completed status or rename the todo by sending `PATCH` to the `/todos/:todoId`
    - you can send only changed fields (`completed` of `title`)
1. Implement `toggleAll` functionality (try to send as few requests as possible)
1. Implement `clear completed` sending as few requests as possible

##  If you want to implement styles yourself
- Font: 'helvetica neue'
- Font sizes to use: 100px, 24px, 14px
- implement arrow by rotating '❯' symbol
- Use '✕' symbol to remove TODO item on hover
- [checked](./public/icons/checked.svg)
- [unchecked](./public/icons/unchecked.svg)


# TodoApp

## Basic React Checklist.
1. PropTypes should describe objects and arrays, which are passed in the component.
1. Use destructuring wherever possible. It makes code more readable.
1. Functions should do one thing. Don't make monsters!)
1. A variable name should describe what is stored in it.
1. Use functional components with React Hooks.
1. A function name should describe the result and starts from a verb.
   Follow [these](https://medium.com/javascript-in-plain-english/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364) naming conventions for functions.
1. Use `classnames` lib for calculated classes.
1. Use key attribute correctly (read [here](https://medium.com/blackrock-engineering/5-common-mistakes-with-keys-in-react-b86e82020052) for more details)

## Task checklist.
1. `App.js` code should be split into several components.
1. Callbacks that work with the main state should take prepared data instead of the whole child's state.
1. Code should be split into small, reusable components if it possible (`Filter`, `TodoList`, `Todo`, `NewTodo`)
1. ID for new todos should be unique, you can use an internal ID counter for this, and increment it.
1. “Toggle all” should be active only in case when all todos are completed.
1. If you manually toggle all todos to completed state, “Toggle all” should stay active.
1. "Toggle all" should stay inactive if at least one todo is not completed.
1. `NewTodo` form shouldn’t create empty todos.
1. `NewTodo` form should trim redundant spaces.
1. Do not rely on the unknown string, make constants for this.
    ```
    const FILTERS = {
      all: ‘all’,
      completed: ‘completed’,
      active: ‘active’,
    };
    ```
1. Show only `NewTodo` form if todos array is empty.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
