/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fffff0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #bfabcb;\n  height: 50px;\n  width: 960px;\n  padding: 0px 25px 0px 25px;\n}\n\n.logo {\n  font-family: 'Montserrat', sans-serif;\n  color: #60463b;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 15px;\n}\n\n.body {\n  display: flex;\n  height: calc(100vh - 50px);\n  width: 960px;\n}\n\n.projects {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.proj-header {\n  color: #60463b;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  padding: 25px 0px 0px 25px;\n}\n\n.proj-titles {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px 0px 0px 28px;\n}\n\n.proj-title {\n  color: #60463b;\n  cursor: pointer;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.view {\n  flex: 2;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n#todo-title,\n#edit-title {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n}\n\n#todo-title:focus,\n#edit-title:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-desc,\n#edit-desc {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  resize: none;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-desc:focus,\n#edit-desc:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-priority,\n#edit-priority {\n  border: 2px solid #60463b;\n  color: #60463b;\n  background-color: #fffff0;\n}\n\n#todo-duedate,\n#edit-duedate {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-duedate:focus,\n#edit-duedate:focus {\n  outline: none;\n  border-radius: 8px;\n  background: rgba(230, 192, 233, 0.2);\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-priority,\n#edit-priority {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  outline: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\nlabel {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-project,\n#edit-project {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n  width: 550px;\n}\n\n#todo-project:focus,\n#edit-project:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n.todo-submit,\n.save {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n.add-todo,\n.edit-todo {\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n  z-index: 1;\n  display: none;\n}\n\n.proj-todos {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  height: calc(100vh - 80px);\n  display: none;\n}\n\n.proj-todo {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 25px 0px 25px;\n  cursor: pointer;\n}\n\n.proj-todo-title,\n.proj-todo-date {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo {\n  display: none;\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n}\n\n.selected-todo-title {\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n  color: #60463b;\n}\n\n.selected-todo-description {\n  color: #60463b;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-priority {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-duedate {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.edit,\n.remove {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fffff0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #bfabcb;\n  height: 50px;\n  width: 960px;\n  padding: 0px 25px 0px 25px;\n}\n\n.logo {\n  font-family: 'Montserrat', sans-serif;\n  color: #60463b;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 15px;\n}\n\n.body {\n  display: flex;\n  height: calc(100vh - 50px);\n  width: 960px;\n}\n\n.projects {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.proj-header {\n  color: #60463b;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  padding: 25px 0px 0px 25px;\n}\n\n.proj-titles {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px 0px 0px 28px;\n}\n\n.proj-title {\n  color: #60463b;\n  cursor: pointer;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.view {\n  flex: 2;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n#todo-title,\n#edit-title {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n}\n\n#todo-title:focus,\n#edit-title:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-desc,\n#edit-desc {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  resize: none;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-desc:focus,\n#edit-desc:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-priority,\n#edit-priority {\n  border: 2px solid #60463b;\n  color: #60463b;\n  background-color: #fffff0;\n}\n\n#todo-duedate,\n#edit-duedate {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-duedate:focus,\n#edit-duedate:focus {\n  outline: none;\n  border-radius: 8px;\n  background: rgba(230, 192, 233, 0.2);\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-priority,\n#edit-priority {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  outline: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\nlabel {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-project,\n#edit-project {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n  width: 550px;\n}\n\n#todo-project:focus,\n#edit-project:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n.todo-submit,\n.save {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n.add-todo,\n.edit-todo {\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n  z-index: 1;\n  display: none;\n}\n\n.proj-todos {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  height: calc(100vh - 80px);\n  display: none;\n}\n\n.proj-todo {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 25px 0px 25px;\n  cursor: pointer;\n}\n\n.proj-todo-title,\n.proj-todo-date {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo {\n  display: none;\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n}\n\n.selected-todo-title {\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n  color: #60463b;\n}\n\n.selected-todo-description {\n  color: #60463b;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-priority {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-duedate {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.edit,\n.remove {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "make": () => (/* binding */ make),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "select": () => (/* binding */ select),
/* harmony export */   "showEditTodoForm": () => (/* binding */ showEditTodoForm),
/* harmony export */   "hideEditTodoForm": () => (/* binding */ hideEditTodoForm),
/* harmony export */   "clearTodoForm": () => (/* binding */ clearTodoForm),
/* harmony export */   "updateTodoForm": () => (/* binding */ updateTodoForm),
/* harmony export */   "hideSelectedTodo": () => (/* binding */ hideSelectedTodo),
/* harmony export */   "hideProjTodos": () => (/* binding */ hideProjTodos),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "showTodoForm": () => (/* binding */ showTodoForm),
/* harmony export */   "hideTodoForm": () => (/* binding */ hideTodoForm)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


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
  let projectTitlesArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectTitles)();
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
  let project = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.convertToCamelCase)(e.target.textContent);
  let todoArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectTodos)(project);

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

  let todo = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getTodo)(project, target.dataset.index);

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



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToCamelCase": () => (/* binding */ convertToCamelCase),
/* harmony export */   "updateEditedTodo": () => (/* binding */ updateEditedTodo),
/* harmony export */   "getTodo": () => (/* binding */ getTodo),
/* harmony export */   "updateData": () => (/* binding */ updateData),
/* harmony export */   "getProjectTitles": () => (/* binding */ getProjectTitles),
/* harmony export */   "getProjectTodos": () => (/* binding */ getProjectTodos)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


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
  let title = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#todo-title').value;
  let description = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#todo-desc').value;
  let dueDate = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#todo-duedate').value;
  let priority = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#todo-priority').value;

  return new toDo(title, description, dueDate, priority);
};

// An object for storing projects as keys and an array of todos for a given project as its value

let projectList = {};

// A function that adds a todo to the array value of a project key in a project list object

const updateData = () => {
  let project = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#todo-project').value;

  if (project == '') {
    project = 'allTasks';
  } else {
    project = convertToCamelCase(project);
  };

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

// A function for accessing a specific todo of a given project

const getTodo = (project, index) => {
  return projectList[project][index];
};

// A function for updating the todo edited

const updateEditedTodo = () => {
  let selectedTodo = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('.selected-todo');
  let project = selectedTodo.dataset.project;
  let index = selectedTodo.dataset.index;

  console.log(project);
  console.log(index);

  let title = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#edit-title').value;
  let description = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#edit-desc').value;
  let duedate = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#edit-duedate').value;
  let priority = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#edit-priority').value;

  console.log(title)
  console.log(description)
  console.log(duedate)
  console.log(priority)
  
  projectList[project][index] = new toDo(title, description, duedate, priority);
};






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");




let addBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.select)('.add-btn');
addBtn.addEventListener('click', () => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideSelectedTodo)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideEditTodoForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideProjTodos)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.showTodoForm)();
});

let submitBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.select)('.todo-submit');
submitBtn.addEventListener('click', () => {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.updateData)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideTodoForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.clearTodoForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
});

let editBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.select)('.edit');
editBtn.addEventListener('click', () => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideSelectedTodo)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.showEditTodoForm)();
});

let saveBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.select)('.save');
saveBtn.addEventListener('click', () => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideEditTodoForm)();
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.updateEditedTodo)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
    console.log((0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.getTodo)('allTasks', 1));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyw4SEFBOEgsT0FBTyxjQUFjLGVBQWUsR0FBRyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLHdCQUF3QiwyQkFBMkIscUNBQXFDLGlCQUFpQixpQkFBaUIsK0JBQStCLEdBQUcsV0FBVywwQ0FBMEMsbUJBQW1CLHFCQUFxQixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwrQkFBK0IsaUJBQWlCLEdBQUcsZUFBZSxZQUFZLDJCQUEyQixHQUFHLGtCQUFrQixtQkFBbUIsMENBQTBDLHFCQUFxQixvQkFBb0IsK0JBQStCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLCtCQUErQixHQUFHLGlCQUFpQixtQkFBbUIsb0JBQW9CLHVDQUF1QyxvQkFBb0IsR0FBRyxXQUFXLFlBQVksMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDJCQUEyQiw4QkFBOEIsdUNBQXVDLG9CQUFvQixHQUFHLCtCQUErQiw4QkFBOEIsbUJBQW1CLGlCQUFpQix1Q0FBdUMsb0JBQW9CLGlCQUFpQixHQUFHLDJDQUEyQyx5Q0FBeUMsa0JBQWtCLHVCQUF1QixHQUFHLDZCQUE2Qiw4QkFBOEIsbUJBQW1CLGlCQUFpQixpQkFBaUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsb0JBQW9CLEdBQUcseUNBQXlDLHlDQUF5QyxrQkFBa0IsdUJBQXVCLEdBQUcscUNBQXFDLDhCQUE4QixtQkFBbUIsOEJBQThCLEdBQUcsbUNBQW1DLDhCQUE4QixtQkFBbUIsaUJBQWlCLHVDQUF1QyxvQkFBb0IsR0FBRywrQ0FBK0Msa0JBQWtCLHVCQUF1Qix5Q0FBeUMsdUNBQXVDLG9CQUFvQixHQUFHLHFDQUFxQyw4QkFBOEIsbUJBQW1CLGlCQUFpQixrQkFBa0IsdUNBQXVDLG9CQUFvQixHQUFHLFdBQVcsbUJBQW1CLHVDQUF1QyxvQkFBb0IsR0FBRyxtQ0FBbUMsOEJBQThCLGlCQUFpQix1Q0FBdUMsb0JBQW9CLGlCQUFpQixHQUFHLCtDQUErQyx5Q0FBeUMsa0JBQWtCLHVCQUF1QixHQUFHLDBCQUEwQixnQkFBZ0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDJCQUEyQiw4QkFBOEIsdUNBQXVDLG9CQUFvQixHQUFHLDRCQUE0QiwyQkFBMkIsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLGtDQUFrQyxxQkFBcUIsZUFBZSxrQkFBa0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsK0JBQStCLGtCQUFrQixHQUFHLGdCQUFnQixrQkFBa0IsbUNBQW1DLCtCQUErQixvQkFBb0IsR0FBRyx3Q0FBd0MsbUJBQW1CLHVDQUF1QyxvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHFCQUFxQixHQUFHLDBCQUEwQix1Q0FBdUMsb0JBQW9CLGlCQUFpQixtQkFBbUIsR0FBRyxnQ0FBZ0MsbUJBQW1CLGlCQUFpQixrQkFBa0IsdUNBQXVDLG9CQUFvQixHQUFHLDZCQUE2QixtQkFBbUIsdUNBQXVDLG9CQUFvQixHQUFHLDRCQUE0QixtQkFBbUIsdUNBQXVDLG9CQUFvQixHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsbUJBQW1CLDJCQUEyQiw4QkFBOEIsdUNBQXVDLG9CQUFvQixHQUFHLG1CQUFtQjtBQUMzc1k7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjBGOztBQUUxRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsNkRBQWtCO0FBQ2xDLGdCQUFnQiwwREFBZTs7QUFFL0Isa0JBQWtCLG9CQUFvQjtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxrREFBTzs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWMsK0NBQU07QUFDcEIsb0JBQW9CLCtDQUFNO0FBQzFCLGdCQUFnQiwrQ0FBTTtBQUN0QixpQkFBaUIsK0NBQU07O0FBRXZCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsK0NBQU07O0FBRXRCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLCtDQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLCtDQUFNO0FBQ3BCLG9CQUFvQiwrQ0FBTTtBQUMxQixnQkFBZ0IsK0NBQU07QUFDdEIsaUJBQWlCLCtDQUFNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR3FHOzs7Ozs7OztVQ25Jckc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3FMO0FBQ2hHOztBQUUzRyxhQUFhLCtDQUFNO0FBQ25CO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSxzREFBYTtBQUNqQixJQUFJLHFEQUFZO0FBQ2hCLENBQUM7O0FBRUQsZ0JBQWdCLCtDQUFNO0FBQ3RCO0FBQ0EsSUFBSSxxREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEIsSUFBSSxzREFBYTtBQUNqQixJQUFJLHdEQUFlO0FBQ25CLENBQUM7O0FBRUQsY0FBYywrQ0FBTTtBQUNwQjtBQUNBLElBQUkseURBQWdCO0FBQ3BCLElBQUksdURBQWM7QUFDbEIsSUFBSSx5REFBZ0I7QUFDcEIsQ0FBQzs7QUFFRCxjQUFjLCtDQUFNO0FBQ3BCO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSwyREFBZ0I7QUFDcEIsSUFBSSx3REFBZTtBQUNuQixnQkFBZ0Isa0RBQU87QUFDdkIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZmYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYWJjYjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA5NjBweDtcXG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICB3aWR0aDogOTYwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBmbGV4OiAxO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnByb2otaGVhZGVyIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjVweDtcXG59XFxuXFxuLnByb2otdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMjhweDtcXG59XFxuXFxuLnByb2otdGl0bGUge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udmlldyB7XFxuICBmbGV4OiAyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXRpdGxlLFxcbiNlZGl0LXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogNTUwcHg7XFxufVxcblxcbiN0b2RvLXRpdGxlOmZvY3VzLFxcbiNlZGl0LXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN0b2RvLWRlc2MsXFxuI2VkaXQtZGVzYyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogNTUwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZG8tZGVzYzpmb2N1cyxcXG4jZWRpdC1kZXNjOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5LFxcbiNlZGl0LXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MDQ2M2I7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxufVxcblxcbiN0b2RvLWR1ZWRhdGUsXFxuI2VkaXQtZHVlZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1kdWVkYXRlOmZvY3VzLFxcbiNlZGl0LWR1ZWRhdGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5LFxcbiNlZGl0LXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLXByb2plY3QsXFxuI2VkaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuI3RvZG8tcHJvamVjdDpmb2N1cyxcXG4jZWRpdC1wcm9qZWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50b2RvLXN1Ym1pdCxcXG4uc2F2ZSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLFxcbi5lZGl0LXRvZG8ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvai10b2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLXRvZG8tdGl0bGUsXFxuLnByb2otdG9kby1kYXRlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBjb2xvcjogIzYwNDYzYjtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICB3aWR0aDogNTUwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kby1kdWVkYXRlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmVkaXQsXFxuLnJlbW92ZSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Is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QTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZmYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYWJjYjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA5NjBweDtcXG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICB3aWR0aDogOTYwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBmbGV4OiAxO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnByb2otaGVhZGVyIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjVweDtcXG59XFxuXFxuLnByb2otdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMjhweDtcXG59XFxuXFxuLnByb2otdGl0bGUge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udmlldyB7XFxuICBmbGV4OiAyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXRpdGxlLFxcbiNlZGl0LXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogNTUwcHg7XFxufVxcblxcbiN0b2RvLXRpdGxlOmZvY3VzLFxcbiNlZGl0LXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN0b2RvLWRlc2MsXFxuI2VkaXQtZGVzYyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogNTUwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZG8tZGVzYzpmb2N1cyxcXG4jZWRpdC1kZXNjOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5LFxcbiNlZGl0LXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MDQ2M2I7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxufVxcblxcbiN0b2RvLWR1ZWRhdGUsXFxuI2VkaXQtZHVlZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1kdWVkYXRlOmZvY3VzLFxcbiNlZGl0LWR1ZWRhdGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5LFxcbiNlZGl0LXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLXByb2plY3QsXFxuI2VkaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuI3RvZG8tcHJvamVjdDpmb2N1cyxcXG4jZWRpdC1wcm9qZWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50b2RvLXN1Ym1pdCxcXG4uc2F2ZSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLFxcbi5lZGl0LXRvZG8ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvai10b2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLXRvZG8tdGl0bGUsXFxuLnByb2otdG9kby1kYXRlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBjb2xvcjogIzYwNDYzYjtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICB3aWR0aDogNTUwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kby1kdWVkYXRlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmVkaXQsXFxuLnJlbW92ZSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Z2V0UHJvamVjdFRpdGxlcywgZ2V0UHJvamVjdFRvZG9zLCBnZXRUb2RvLCBjb252ZXJ0VG9DYW1lbENhc2V9IGZyb20gJy4vbG9naWMuanMnO1xuXG5sZXQgbWFrZSA9IChlbGVtKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xufTtcblxubGV0IGFkZENsYXNzID0gKGVsZW0sIHN0cikgPT4ge1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoc3RyKTtcbn07XG5cbmxldCBhcHBlbmQgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufTtcblxubGV0IHNlbGVjdCA9IChlbGVtKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3IgaGlkaW5nIHRoZSBmb3JtIGZvciBjcmVhdGluZyB0aGUgdG9kb1xuXG5jb25zdCBoaWRlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGxldCB0b2RvRm9ybSA9IHNlbGVjdCgnLmFkZC10b2RvJyk7XG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBzaG93aW5nIHRoZSBmb3JtIGZvciBjcmVhdGluZyB0aGUgdG9kb1xuXG5jb25zdCBzaG93VG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGxldCB0b2RvRm9ybSA9IHNlbGVjdCgnLmFkZC10b2RvJyk7XG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBoaWRpbmcgdGhlIGxpc3Qgb2YgcHJvamVjdCB0b2Rvc1xuXG5jb25zdCBoaWRlUHJvalRvZG9zID0gKCkgPT4ge1xuICBsZXQgcHJvalRvZG9zID0gc2VsZWN0KCcucHJvai10b2RvcycpO1xuICBwcm9qVG9kb3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIHNob3dpbmcgdGhlIGxpc3Qgb2YgcHJvamVjdCB0b2Rvc1xuXG5jb25zdCBzaG93UHJvalRvZG9zID0gKCkgPT4ge1xuICBsZXQgcHJvalRvZG9zID0gc2VsZWN0KCcucHJvai10b2RvcycpO1xuICBwcm9qVG9kb3Muc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBjbGVhcmluZyB0aGUgbGlzdCBvZiBwcm9qZWN0IHRvZG9zXG5cbmNvbnN0IGNsZWFyUHJvalRvZG9zID0gKCkgPT4ge1xuICBsZXQgcHJvalRvZG9zID0gc2VsZWN0KCcucHJvai10b2RvcycpO1xuICBwcm9qVG9kb3MuaW5uZXJIVE1MID0gJyc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBjbGVhcmluZyBwcm9qZWN0IHRpdGxlc1xuXG5jb25zdCBjbGVhclByb2plY3RUaXRsZXMgPSAoKSA9PiB7XG4gIGxldCBwcm9qVGl0bGVzID0gc2VsZWN0KCcucHJvai10aXRsZXMnKTtcbiAgcHJvalRpdGxlcy5pbm5lckhUTUwgPSAnJztcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgYWxsIHRoZSBwcm9qZWN0cyBzdG9yZWQgaW4gdGhlIHByb2plY3QgbGlzdFxuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gIGhpZGVUb2RvRm9ybSgpO1xuICBjbGVhclByb2plY3RUaXRsZXMoKTtcbiAgbGV0IHByb2pUaXRsZXMgPSBzZWxlY3QoJy5wcm9qLXRpdGxlcycpO1xuICBsZXQgcHJvamVjdFRpdGxlc0FyciA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgcHJvamVjdFRpdGxlc0Fyci5mb3JFYWNoKHByb2pUaXRsZSA9PiB7XG4gICAgbGV0IHRpdGxlID0gbWFrZSgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qVGl0bGU7XG4gICAgYWRkQ2xhc3ModGl0bGUsICdwcm9qLXRpdGxlJyk7XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgc2hvd1Byb2pUb2RvcygpO1xuICAgICAgaGlkZVNlbGVjdGVkVG9kbygpO1xuICAgICAgaGlkZVRvZG9Gb3JtKCk7XG4gICAgICBoaWRlRWRpdFRvZG9Gb3JtKCk7XG4gICAgICBjbGVhclByb2pUb2RvcygpO1xuICAgICAgZGlzcGxheVRvZG9zRm9yUHJvaihlKTtcbiAgICB9KTtcbiAgICBhcHBlbmQocHJvalRpdGxlcywgdGl0bGUpO1xuICB9KTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGRpc3BsYXlpbmcgYWxsIHRoZSB0b2RvcyBzdG9yZWQgaW4gYSBnaXZlbiBwcm9qZWN0XG5cbmNvbnN0IGRpc3BsYXlUb2Rvc0ZvclByb2ogPSAoZSkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNvbnZlcnRUb0NhbWVsQ2FzZShlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gIGxldCB0b2RvQXJyID0gZ2V0UHJvamVjdFRvZG9zKHByb2plY3QpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qVG9kb3MgPSBzZWxlY3QoJy5wcm9qLXRvZG9zJyk7XG5cbiAgICBsZXQgcHJvalRvZG8gPSBtYWtlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhwcm9qVG9kbywgJ3Byb2otdG9kbycpO1xuXG4gICAgcHJvalRvZG8uZGF0YXNldC5pbmRleCA9IGk7XG4gICAgcHJvalRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaGlkZVByb2pUb2RvcygpO1xuICAgICAgZGlzcGxheVNlbGVjdGVkVG9kbyhwcm9qZWN0LCBlLmN1cnJlbnRUYXJnZXQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb2pUaXRsZSA9IG1ha2UoJ2RpdicpO1xuICAgIGFkZENsYXNzKHByb2pUaXRsZSwgJ3Byb2otdG9kby10aXRsZScpO1xuICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHRvZG9BcnJbaV0udGl0bGU7XG5cbiAgICBsZXQgcHJvakRhdGUgPSBtYWtlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhwcm9qRGF0ZSwgJ3Byb2otdG9kby1kYXRlJyk7XG4gICAgcHJvakRhdGUudGV4dENvbnRlbnQgPSB0b2RvQXJyW2ldLmR1ZURhdGU7XG5cbiAgICBhcHBlbmQocHJvalRvZG8sIHByb2pUaXRsZSk7XG4gICAgYXBwZW5kKHByb2pUb2RvLCBwcm9qRGF0ZSk7XG4gICAgYXBwZW5kKHByb2pUb2RvcywgcHJvalRvZG8pOyBcbiAgfTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIHNob3dpbmcgdGhlIHNlbGVjdGVkIHRvZG8gYW5kIHBhc3Npbmcgb24gdGhlIGN1cnJlbnQgcHJvamVjdCBhbmQgdG9kbyBpbmRleCB0byB0aGUgbmV3IHZpZXdcblxuY29uc3Qgc2hvd1NlbGVjdGVkVG9kbyA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRUb2RvID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kbycpO1xuICBzZWxlY3RlZFRvZG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgc2VsZWN0ZWRUb2RvLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgc2VsZWN0ZWRUb2RvLmRhdGFzZXQucHJvamVjdCA9IHByb2plY3Q7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBoaWRpbmcgdGhlIHNlbGVjdGVkIHRvZG9cblxuY29uc3QgaGlkZVNlbGVjdGVkVG9kbyA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdGVkVG9kbyA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8nKTtcbiAgc2VsZWN0ZWRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIGFkZGl0aW9uYWwgaW5mbyBvZiBhIHNlbGVjdGVkIHRvZG8gb2YgYSBnaXZlbiBwcm9qZWN0XG5cbmNvbnN0IGRpc3BsYXlTZWxlY3RlZFRvZG8gPSAocHJvamVjdCwgdGFyZ2V0KSA9PiB7XG4gIGxldCB0aXRsZSA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8tdGl0bGUnKTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kby1kZXNjcmlwdGlvbicpO1xuICBsZXQgZHVlZGF0ZSA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8tZHVlZGF0ZScpO1xuICBsZXQgcHJpb3JpdHkgPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvLXByaW9yaXR5Jyk7XG5cbiAgbGV0IHRvZG8gPSBnZXRUb2RvKHByb2plY3QsIHRhcmdldC5kYXRhc2V0LmluZGV4KTtcblxuICBjb25zb2xlLmxvZyh0b2RvKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuXG4gIHNob3dTZWxlY3RlZFRvZG8ocHJvamVjdCwgdGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IHBvcHVsYXRlcyB0aGUgdG9kbyBmb3JtIHdpdGggaW5mbyBmcm9tIHNlbGVjdGVkIHRvZG8gZm9yIGVkaXRpbmdcblxuY29uc3QgdXBkYXRlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8tdGl0bGUnKTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kby1kZXNjcmlwdGlvbicpO1xuICBsZXQgZHVlZGF0ZSA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8tZHVlZGF0ZScpO1xuICBsZXQgcHJpb3JpdHkgPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvLXByaW9yaXR5Jyk7XG5cbiAgbGV0IGZvcm1UaXRsZSA9IHNlbGVjdCgnI2VkaXQtdGl0bGUnKTtcbiAgbGV0IGZvcm1EZXNjID0gc2VsZWN0KCcjZWRpdC1kZXNjJyk7XG4gIGxldCBmb3JtRHVlZGF0ZSA9IHNlbGVjdCgnI2VkaXQtZHVlZGF0ZScpO1xuICBsZXQgZm9ybVByaW9yaXR5ID0gc2VsZWN0KCcjZWRpdC1wcmlvcml0eScpO1xuXG4gIGZvcm1UaXRsZS52YWx1ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICBmb3JtRGVzYy52YWx1ZSA9IGRlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICBmb3JtRHVlZGF0ZS52YWx1ZSA9IGR1ZWRhdGUudGV4dENvbnRlbnQ7XG4gIGZvcm1Qcmlvcml0eS52YWx1ZSA9IHByaW9yaXR5LnRleHRDb250ZW50O1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGNsZWFycyB0aGUgaW5wdXQgb24gdGhlIHRvZG8gZm9ybVxuXG5jb25zdCBjbGVhclRvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgZm9ybVRpdGxlID0gc2VsZWN0KCcjdG9kby10aXRsZScpO1xuICBsZXQgZm9ybURlc2MgPSBzZWxlY3QoJyN0b2RvLWRlc2MnKTtcbiAgbGV0IGZvcm1EdWVkYXRlID0gc2VsZWN0KCcjdG9kby1kdWVkYXRlJyk7XG4gIGxldCBmb3JtUHJpb3JpdHkgPSBzZWxlY3QoJyN0b2RvLXByaW9yaXR5Jyk7XG4gIGxldCBmb3JtUHJvamVjdCA9IHNlbGVjdCgnI3RvZG8tcHJvamVjdCcpO1xuXG4gIGZvcm1UaXRsZS52YWx1ZSA9ICcnO1xuICBmb3JtRGVzYy52YWx1ZSA9ICcnO1xuICBmb3JtRHVlZGF0ZS52YWx1ZSA9ICcnO1xuICBmb3JtUHJpb3JpdHkudmFsdWUgPSAnQ3JpdGljYWwnO1xuICBmb3JtUHJvamVjdC52YWx1ZSA9ICcnO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IHNob3dzIHRoZSBlZGl0IHRvZG8gZm9ybVxuXG5jb25zdCBzaG93RWRpdFRvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgZWRpdFRvZG9Gb3JtID0gc2VsZWN0KCcuZWRpdC10b2RvJyk7XG4gIGVkaXRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGhpZGVzIHRoZSBlZGl0IHRvZG8gZm9ybVxuXG5jb25zdCBoaWRlRWRpdFRvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgZWRpdFRvZG9Gb3JtID0gc2VsZWN0KCcuZWRpdC10b2RvJyk7XG4gIGVkaXRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQge21ha2UsIGFkZENsYXNzLCBhcHBlbmQsIHNlbGVjdCwgc2hvd0VkaXRUb2RvRm9ybSwgaGlkZUVkaXRUb2RvRm9ybSwgY2xlYXJUb2RvRm9ybSwgdXBkYXRlVG9kb0Zvcm0sIGhpZGVTZWxlY3RlZFRvZG8sIGhpZGVQcm9qVG9kb3MsIGRpc3BsYXlQcm9qZWN0cywgc2hvd1RvZG9Gb3JtLCBoaWRlVG9kb0Zvcm19OyIsImltcG9ydCB7c2VsZWN0fSBmcm9tICcuL2RvbS5qcyc7XG5cbi8vIEEgZmFjdG9yeSBmdW5jdGlvbiBmb3IgYSBzaW5nbGUgdG8tZG9cblxuY29uc3QgdG9EbyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0byBjYW1lbGNhc2VcblxuY29uc3QgY29udmVydFRvQ2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICBsZXQgc3RyQXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgbGV0IGNhbWVsQ2FzZVN0ckFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0ckFycltpXSAhPSAnICcpIHtcbiAgICAgIGlmIChzdHJBcnJbaV0gPT0gMCkge1xuICAgICAgICBjYW1lbENhc2VTdHJBcnJheS5wdXNoKHN0ckFycltpXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyQXJyW2kgLSAxXSA9PSAnICcpIHtcbiAgICAgICAgY2FtZWxDYXNlU3RyQXJyYXkucHVzaChzdHJBcnJbaV0udG9VcHBlckNhc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW1lbENhc2VTdHJBcnJheS5wdXNoKHN0ckFycltpXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGNhbWVsQ2FzZVN0ckFycmF5LmpvaW4oJycpO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRvIHRpdGxlY2FzZVxuXG5jb25zdCBjb252ZXJ0VG9UaXRsZUNhc2UgPSAoc3RyKSA9PiB7XG4gIGxldCBzdHJBcnIgPSBzdHIuc3BsaXQoJycpO1xuICBsZXQgdGl0bGVDYXNlU3RyQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT0gMCkge1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goc3RyQXJyW2ldLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0gZWxzZSBpZiAoc3RyQXJyW2ldID09IHN0ckFycltpXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICB0aXRsZUNhc2VTdHJBcnIucHVzaCgnICcpO1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goc3RyQXJyW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goc3RyQXJyW2ldKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gdGl0bGVDYXNlU3RyQXJyLmpvaW4oJycpO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgdG9kbyBcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gc2VsZWN0KCcjdG9kby10aXRsZScpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBzZWxlY3QoJyN0b2RvLWRlc2MnKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBzZWxlY3QoJyN0b2RvLWR1ZWRhdGUnKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gc2VsZWN0KCcjdG9kby1wcmlvcml0eScpLnZhbHVlO1xuXG4gIHJldHVybiBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbn07XG5cbi8vIEFuIG9iamVjdCBmb3Igc3RvcmluZyBwcm9qZWN0cyBhcyBrZXlzIGFuZCBhbiBhcnJheSBvZiB0b2RvcyBmb3IgYSBnaXZlbiBwcm9qZWN0IGFzIGl0cyB2YWx1ZVxuXG5sZXQgcHJvamVjdExpc3QgPSB7fTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGFkZHMgYSB0b2RvIHRvIHRoZSBhcnJheSB2YWx1ZSBvZiBhIHByb2plY3Qga2V5IGluIGEgcHJvamVjdCBsaXN0IG9iamVjdFxuXG5jb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdCA9IHNlbGVjdCgnI3RvZG8tcHJvamVjdCcpLnZhbHVlO1xuXG4gIGlmIChwcm9qZWN0ID09ICcnKSB7XG4gICAgcHJvamVjdCA9ICdhbGxUYXNrcyc7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdCA9IGNvbnZlcnRUb0NhbWVsQ2FzZShwcm9qZWN0KTtcbiAgfTtcblxuICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8oKTtcblxuICBpZiAoIShwcm9qZWN0IGluIHByb2plY3RMaXN0KSkge1xuICAgIHByb2plY3RMaXN0W3Byb2plY3RdID0gW107XG4gICAgcHJvamVjdExpc3RbcHJvamVjdF0ucHVzaChuZXdUb2RvKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0TGlzdFtwcm9qZWN0XS5wdXNoKG5ld1RvZG8pO1xuICB9O1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGtleXMgaW4gdGhlIHByb2plY3QgbGlzdFxuXG5jb25zdCBnZXRQcm9qZWN0VGl0bGVzID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3RLZXlzID0gT2JqZWN0LmtleXMocHJvamVjdExpc3QpO1xuICBsZXQgcHJvamVjdExpc3RUaXRsZXMgPSBbXTtcbiAgcHJvamVjdExpc3RLZXlzLmZvckVhY2gocHJvamVjdExpc3RLZXkgPT4ge1xuICAgIHByb2plY3RMaXN0VGl0bGVzLnB1c2goY29udmVydFRvVGl0bGVDYXNlKHByb2plY3RMaXN0S2V5KSk7XG4gIH0pO1xuICByZXR1cm4gcHJvamVjdExpc3RUaXRsZXM7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYXJyYXkgb2YgdG9kb3Mgb2YgYSBzcGVjaWZpYyBwcm9qZWN0XG5cbmNvbnN0IGdldFByb2plY3RUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBwcm9qZWN0TGlzdFtwcm9qZWN0XTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGFjY2Vzc2luZyBhIHNwZWNpZmljIHRvZG8gb2YgYSBnaXZlbiBwcm9qZWN0XG5cbmNvbnN0IGdldFRvZG8gPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgcmV0dXJuIHByb2plY3RMaXN0W3Byb2plY3RdW2luZGV4XTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIHVwZGF0aW5nIHRoZSB0b2RvIGVkaXRlZFxuXG5jb25zdCB1cGRhdGVFZGl0ZWRUb2RvID0gKCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRUb2RvID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kbycpO1xuICBsZXQgcHJvamVjdCA9IHNlbGVjdGVkVG9kby5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCBpbmRleCA9IHNlbGVjdGVkVG9kby5kYXRhc2V0LmluZGV4O1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgbGV0IHRpdGxlID0gc2VsZWN0KCcjZWRpdC10aXRsZScpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBzZWxlY3QoJyNlZGl0LWRlc2MnKS52YWx1ZTtcbiAgbGV0IGR1ZWRhdGUgPSBzZWxlY3QoJyNlZGl0LWR1ZWRhdGUnKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gc2VsZWN0KCcjZWRpdC1wcmlvcml0eScpLnZhbHVlO1xuXG4gIGNvbnNvbGUubG9nKHRpdGxlKVxuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbilcbiAgY29uc29sZS5sb2coZHVlZGF0ZSlcbiAgY29uc29sZS5sb2cocHJpb3JpdHkpXG4gIFxuICBwcm9qZWN0TGlzdFtwcm9qZWN0XVtpbmRleF0gPSBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbn07XG5cblxuZXhwb3J0e2NvbnZlcnRUb0NhbWVsQ2FzZSwgdXBkYXRlRWRpdGVkVG9kbywgZ2V0VG9kbywgdXBkYXRlRGF0YSwgZ2V0UHJvamVjdFRpdGxlcywgZ2V0UHJvamVjdFRvZG9zfTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IG1ha2UsIGFkZENsYXNzLCBhcHBlbmQsIGhpZGVFZGl0VG9kb0Zvcm0sIHNob3dFZGl0VG9kb0Zvcm0sIGNsZWFyVG9kb0Zvcm0sIHVwZGF0ZVRvZG9Gb3JtLCBzZWxlY3QsIGhpZGVTZWxlY3RlZFRvZG8sIGhpZGVQcm9qVG9kb3MsIGRpc3BsYXlQcm9qZWN0cywgc2hvd1RvZG9Gb3JtLCBoaWRlVG9kb0Zvcm0gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjb252ZXJ0VG9DYW1lbENhc2UsIGNvbnZlcnRUb1RpdGxlQ2FzZSwgZ2V0VG9kbywgdXBkYXRlRGF0YSwgdXBkYXRlRWRpdGVkVG9kbyB9IGZyb20gJy4vbG9naWMuanMnO1xuXG5sZXQgYWRkQnRuID0gc2VsZWN0KCcuYWRkLWJ0bicpO1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhpZGVTZWxlY3RlZFRvZG8oKTtcbiAgICBoaWRlRWRpdFRvZG9Gb3JtKCk7XG4gICAgaGlkZVByb2pUb2RvcygpO1xuICAgIHNob3dUb2RvRm9ybSgpO1xufSk7XG5cbmxldCBzdWJtaXRCdG4gPSBzZWxlY3QoJy50b2RvLXN1Ym1pdCcpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZURhdGEoKTtcbiAgICBoaWRlVG9kb0Zvcm0oKTtcbiAgICBjbGVhclRvZG9Gb3JtKCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59KTtcblxubGV0IGVkaXRCdG4gPSBzZWxlY3QoJy5lZGl0Jyk7XG5lZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhpZGVTZWxlY3RlZFRvZG8oKTtcbiAgICB1cGRhdGVUb2RvRm9ybSgpO1xuICAgIHNob3dFZGl0VG9kb0Zvcm0oKTtcbn0pO1xuXG5sZXQgc2F2ZUJ0biA9IHNlbGVjdCgnLnNhdmUnKTtcbnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGlkZUVkaXRUb2RvRm9ybSgpO1xuICAgIHVwZGF0ZUVkaXRlZFRvZG8oKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBjb25zb2xlLmxvZyhnZXRUb2RvKCdhbGxUYXNrcycsIDEpKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==