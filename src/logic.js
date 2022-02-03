import {select} from './dom.js';

// A factory function for a single to-do

const toDo = function(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};

// A function that converts to camelcase

const convertToCamelCase = (str) => {
  let strArr = str.split('');
  let camelCaseStrArray = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] != ' ') {
      if (strArr[i] == 0) {
        camelCaseStrArray.push(strArr[i].toLowerCase());
      } else if (strArr[i - 1] == ' ') {
        camelCaseStrArray.push(strArr[i].toUpperCase());
      } else {
        camelCaseStrArray.push(strArr[i].toLowerCase());
      };
    };
  };
  return camelCaseStrArray.join('');
};

// A function that converts to titlecase

const convertToTitleCase = (str) => {
  let strArr = str.split('');
  let titleCaseStrArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i == 0) {
      titleCaseStrArr.push(strArr[i].toUpperCase());
    } else if (strArr[i] == strArr[i].toUpperCase()) {
      titleCaseStrArr.push(' ');
      titleCaseStrArr.push(strArr[i]);
    } else {
      titleCaseStrArr.push(strArr[i]);
    };
  };
  return titleCaseStrArr.join('');
};

// A function that creates a new todo 

const createTodo = () => {
  let title = select('#todo-title').value;
  let description = select('textarea').value;
  let dueDate = select('#duedate').value;
  let priority = select('#priority').value;

  return new toDo(title, description, dueDate, priority);
};

// An object for storing projects as keys and an array of todos for a given project as its value

let projectList = {};

// A function that adds a todo to the array value of a project key in a project list object

const updateData = () => {
  let project = convertToCamelCase(select('#todo-project').value);

  let newTodo = createTodo();

  if (!(project in projectList)) {
    projectList[project] = [];
    projectList[project].push(newTodo);
  } else {
    projectList[project].push(newTodo);
  };
};

// A function that returns the keys in the project list

const getProjectTitles = () => {
  let projectListKeys = Object.keys(projectList);
  let projectListTitles = [];
  projectListKeys.forEach(projectListKey => {
    projectListTitles.push(convertToTitleCase(projectListKey));
  });
  return projectListTitles;
};

// A function that returns the array of todos of a specific project

const getProjectTodos = (project) => {
  return projectList[project];
};


export{convertToCamelCase, updateData, getProjectTitles, getProjectTodos}

