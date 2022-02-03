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

export{convertToCamelCase, convertToTitleCase}

