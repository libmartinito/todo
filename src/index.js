import './styles.css';
import { make, addClass, append, select, hideProjTodos, displayProjects, showTodoForm, hideTodoForm } from './dom.js';
import { convertToCamelCase, convertToTitleCase, updateData } from './logic.js';

let addBtn = select('.add-btn');
addBtn.addEventListener('click', () => {
    hideProjTodos();
    showTodoForm();
});

let submitBtn = select('.todo-submit');
submitBtn.addEventListener('click', () => {
    updateData();
    hideTodoForm();
    displayProjects();
});