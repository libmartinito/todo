import {getProjectTitles, getProjectTodos, convertToCamelCase} from './logic.js';

let make = (elem) => {
  return document.createElement(elem);
};

let addClass = (elem, str) => {
  elem.classList.add(str);
};

let append = (parent, child) => {
  parent.appendChild(child);
};

let select = (elem) => {
  return document.querySelector(elem);
}

// A function for hiding the form for creating the todo

const hideTodoForm = () => {
  let todoForm = select('.add-todo');
  todoForm.style.display = 'none';
};

// A function for showing the form for creating the todo

const showTodoForm = () => {
  let todoForm = select('.add-todo');
  todoForm.style.display = 'block';
};

// A function for hiding the list of project todos

const hideProjTodos = () => {
  let projTodos = select('.proj-todos');
  projTodos.style.display = 'none';
};

// A function for showing the list of project todos

const showProjTodos = () => {
  let projTodos = select('.proj-todos');
  projTodos.style.display = 'block';
};

// A function for clearing the list of project todos

const clearProjTodos = () => {
  let projTodos = select('.proj-todos');
  projTodos.innerHTML = '';
};

// A function for clearing project titles

const clearProjectTitles = () => {
  let projTitles = select('.proj-titles');
  projTitles.innerHTML = '';
}

// A function for displaying all the projects stored in the project list

const displayProjects = () => {
  clearProjectTitles();
  let projTitles = select('.proj-titles');
  let projectTitlesArr = getProjectTitles();
  projectTitlesArr.forEach(projTitle => {
    let title = make('div');
    title.textContent = projTitle;
    addClass(title, 'proj-title');
    title.addEventListener('click', (e) => {
      showProjTodos();
      clearProjTodos();
      displayTodosForProj(e);
    });
    append(projTitles, title);
  });
};

// A function for displaying all the todos stored in a given project

const displayTodosForProj = (e) => {
  let project = convertToCamelCase(e.target.textContent);
  let todoArr = getProjectTodos(project);
  console.log(todoArr);
  todoArr.forEach(todo => {
    let projTodos = select('.proj-todos');

    let projTodo = make('div');
    addClass(projTodo, 'proj-todo');

    let projTitle = make('div');
    addClass(projTitle, 'proj-todo-title');
    projTitle.textContent = todo.title;

    let projDate = make('div');
    addClass(projDate, 'proj-todo-date');
    projDate.textContent = todo.dueDate;

    append(projTodo, projTitle);
    append(projTodo, projDate);
    append(projTodos, projTodo);
  });
}

export {make, addClass, append, select, hideProjTodos, displayProjects, showTodoForm, hideTodoForm}