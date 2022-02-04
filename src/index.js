import './styles.css';
import { make, addClass, append, hideEditTodoForm, showEditTodoForm, clearTodoForm, updateTodoForm, select, hideSelectedTodo, hideProjTodos, displayProjects, showTodoForm, hideTodoForm } from './dom.js';
import { convertToCamelCase, convertToTitleCase, removeTodo, updateData, updateEditedTodo } from './logic.js';

let addBtn = select('.add-btn');
addBtn.addEventListener('click', () => {
    hideSelectedTodo();
    hideEditTodoForm();
    hideProjTodos();
    showTodoForm();
});

let submitBtn = select('.todo-submit');
submitBtn.addEventListener('click', () => {
    updateData();
    hideTodoForm();
    clearTodoForm();
    displayProjects();
});

let editBtn = select('.edit');
editBtn.addEventListener('click', () => {
    hideSelectedTodo();
    updateTodoForm();
    showEditTodoForm();
});

let saveBtn = select('.save');
saveBtn.addEventListener('click', () => {
    hideEditTodoForm();
    updateEditedTodo();
    displayProjects();
});

let removeBtn = select('.remove');
removeBtn.addEventListener('click', () => {
    hideEditTodoForm();
    hideSelectedTodo();
    removeTodo();
    displayProjects();
});