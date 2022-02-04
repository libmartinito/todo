import {getProjectTitles, getProjectTodos, getTodo, convertToCamelCase} from './logic.js';

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
};

// A function for hiding the form for creating the todo

const hideTodoForm = () => {
  let todoForm = select('.add-todo');
  todoForm.style.display = 'none';
};

// A function for showing the form for creating the todo

const showTodoForm = () => {
  let todoForm = select('.add-todo');
  todoForm.style.display = 'flex';
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
};

// A function for displaying all the projects stored in the project list

const displayProjects = () => {
  hideTodoForm();
  clearProjectTitles();
  let projTitles = select('.proj-titles');
  let projectTitlesArr = getProjectTitles();
  projectTitlesArr.forEach(projTitle => {
    let title = make('div');
    title.textContent = projTitle;
    addClass(title, 'proj-title');
    title.addEventListener('click', (e) => {
      showProjTodos();
      hideSelectedTodo();
      hideTodoForm();
      hideEditTodoForm();
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

  for (let i = 0; i < todoArr.length; i++) {
    let projTodos = select('.proj-todos');

    let projTodo = make('div');
    addClass(projTodo, 'proj-todo');

    projTodo.dataset.index = i;
    projTodo.addEventListener('click', (e) => {
      hideProjTodos();
      displaySelectedTodo(project, e.currentTarget);
    });

    let projTitle = make('div');
    addClass(projTitle, 'proj-todo-title');
    projTitle.textContent = todoArr[i].title;

    let projDate = make('div');
    addClass(projDate, 'proj-todo-date');
    projDate.textContent = todoArr[i].dueDate;

    append(projTodo, projTitle);
    append(projTodo, projDate);
    append(projTodos, projTodo); 
  };
};

// A function for showing the selected todo and passing on the current project and todo index to the new view

const showSelectedTodo = (project, index) => {
  let selectedTodo = select('.selected-todo');
  selectedTodo.style.display = 'flex';
  selectedTodo.dataset.index = index;
  selectedTodo.dataset.project = project;
};

// A function for hiding the selected todo

const hideSelectedTodo = () => {
  let selectedTodo = select('.selected-todo');
  selectedTodo.style.display = 'none';
};

// A function for displaying additional info of a selected todo of a given project

const displaySelectedTodo = (project, target) => {
  let title = select('.selected-todo-title');
  let description = select('.selected-todo-description');
  let duedate = select('.selected-todo-duedate');
  let priority = select('.selected-todo-priority');

  let todo = getTodo(project, target.dataset.index);

  console.log(todo);

  title.textContent = todo.title;
  description.textContent = todo.description;
  duedate.textContent = todo.dueDate;
  priority.textContent = todo.priority;

  showSelectedTodo(project, target.dataset.index);
};

// A function that populates the todo form with info from selected todo for editing

const updateTodoForm = () => {
  let title = select('.selected-todo-title');
  let description = select('.selected-todo-description');
  let duedate = select('.selected-todo-duedate');
  let priority = select('.selected-todo-priority');

  let formTitle = select('#edit-title');
  let formDesc = select('#edit-desc');
  let formDuedate = select('#edit-duedate');
  let formPriority = select('#edit-priority');

  formTitle.value = title.textContent;
  formDesc.value = description.textContent;
  formDuedate.value = duedate.textContent;
  formPriority.value = priority.textContent;
};

// A function that clears the input on the todo form

const clearTodoForm = () => {
  let formTitle = select('#todo-title');
  let formDesc = select('#todo-desc');
  let formDuedate = select('#todo-duedate');
  let formPriority = select('#todo-priority');
  let formProject = select('#todo-project');

  formTitle.value = '';
  formDesc.value = '';
  formDuedate.value = '';
  formPriority.value = 'Critical';
  formProject.value = '';
};

// A function that shows the edit todo form

const showEditTodoForm = () => {
  let editTodoForm = select('.edit-todo');
  editTodoForm.style.display = 'flex';
};

// A function that hides the edit todo form

const hideEditTodoForm = () => {
  let editTodoForm = select('.edit-todo');
  editTodoForm.style.display = 'none';
}

export {make, addClass, append, select, showEditTodoForm, hideEditTodoForm, clearTodoForm, updateTodoForm, hideSelectedTodo, hideProjTodos, displayProjects, showTodoForm, hideTodoForm};