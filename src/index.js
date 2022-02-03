import './styles.css';
import { convertToCamelCase, convertToTitleCase } from './logic.js';

let add = document.querySelector('.add-todo');
add.addEventListener('click', () => {
    convertToCamelCase('All tasks');
});
console.log(convertToCamelCase("All tasks"));
console.log(convertToTitleCase('allTasks'));