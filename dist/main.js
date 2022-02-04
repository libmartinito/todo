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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fffff0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #bfabcb;\n  height: 50px;\n  width: 960px;\n  padding: 0px 25px 0px 25px;\n}\n\n.logo {\n  font-family: 'Montserrat', sans-serif;\n  color: #60463b;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 15px;\n}\n\n.body {\n  display: flex;\n  height: calc(100vh - 50px);\n  width: 960px;\n}\n\n.projects {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.proj-header {\n  color: #60463b;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  padding: 25px 0px 0px 25px;\n}\n\n.proj-titles {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px 0px 0px 28px;\n}\n\n.proj-title {\n  color: #60463b;\n  cursor: pointer;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.view {\n  flex: 2;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n#todo-title,\n#edit-title {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n}\n\n#todo-title:focus,\n#edit-title:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-desc,\n#edit-desc {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  resize: none;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-desc:focus,\n#edit-desc:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-priority,\n#edit-priority {\n  border: 2px solid #60463b;\n  color: #60463b;\n  background-color: #fffff0;\n}\n\n#todo-duedate,\n#edit-duedate {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-duedate:focus,\n#edit-duedate:focus {\n  outline: none;\n  border-radius: 8px;\n  background: rgba(230, 192, 233, 0.2);\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-priority,\n#edit-priority {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  outline: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\nlabel {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-project,\n#edit-project {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n  width: 550px;\n}\n\n#todo-project:focus,\n#edit-project:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n.todo-submit,\n.save {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n.add-todo,\n.edit-todo {\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n  z-index: 1;\n  display: none;\n}\n\n.proj-todos {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  margin-top: 30px;\n  padding-top: 30px;\n  height: 450px;\n  display: none;\n}\n\n.proj-todo {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 25px 0px 25px;\n  cursor: pointer;\n}\n\n.proj-todo-title,\n.proj-todo-date {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo {\n  display: none;\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n}\n\n.selected-todo-title {\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n  color: #60463b;\n}\n\n.selected-todo-description {\n  color: #60463b;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-priority {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-duedate {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.edit,\n.remove {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fffff0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #bfabcb;\n  height: 50px;\n  width: 960px;\n  padding: 0px 25px 0px 25px;\n}\n\n.logo {\n  font-family: 'Montserrat', sans-serif;\n  color: #60463b;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 15px;\n}\n\n.body {\n  display: flex;\n  height: calc(100vh - 50px);\n  width: 960px;\n}\n\n.projects {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.proj-header {\n  color: #60463b;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  padding: 25px 0px 0px 25px;\n}\n\n.proj-titles {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px 0px 0px 28px;\n}\n\n.proj-title {\n  color: #60463b;\n  cursor: pointer;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.view {\n  flex: 2;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n#todo-title,\n#edit-title {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n}\n\n#todo-title:focus,\n#edit-title:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-desc,\n#edit-desc {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  resize: none;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-desc:focus,\n#edit-desc:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#todo-priority,\n#edit-priority {\n  border: 2px solid #60463b;\n  color: #60463b;\n  background-color: #fffff0;\n}\n\n#todo-duedate,\n#edit-duedate {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-duedate:focus,\n#edit-duedate:focus {\n  outline: none;\n  border-radius: 8px;\n  background: rgba(230, 192, 233, 0.2);\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-priority,\n#edit-priority {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  outline: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\nlabel {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-project,\n#edit-project {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n  width: 550px;\n}\n\n#todo-project:focus,\n#edit-project:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n.todo-submit,\n.save {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n.add-todo,\n.edit-todo {\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n  z-index: 1;\n  display: none;\n}\n\n.proj-todos {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  margin-top: 30px;\n  padding-top: 30px;\n  height: 450px;\n  display: none;\n}\n\n.proj-todo {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 25px 0px 25px;\n  cursor: pointer;\n}\n\n.proj-todo-title,\n.proj-todo-date {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo {\n  display: none;\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n}\n\n.selected-todo-title {\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n  color: #60463b;\n}\n\n.selected-todo-description {\n  color: #60463b;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-priority {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.selected-todo-duedate {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.edit,\n.remove {\n  width: 80px;\n  height: 30px;\n  font-size: 16px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
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

// A function for updating the selected todo

const removeTodo = () => {
  let selectedTodo = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('.selected-todo');
  let project = selectedTodo.dataset.project;
  let index = selectedTodo.dataset.index;

  projectList[project].splice(index, 1);
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
});

let removeBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.select)('.remove');
removeBtn.addEventListener('click', () => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideEditTodoForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideSelectedTodo)();
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.removeTodo)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUs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O0FBQ3RCO0FBQ0EsSUFBSSxxREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEIsSUFBSSxzREFBYTtBQUNqQixJQUFJLHdEQUFlO0FBQ25CLENBQUM7O0FBRUQsY0FBYywrQ0FBTTtBQUNwQjtBQUNBLElBQUkseURBQWdCO0FBQ3BCLElBQUksdURBQWM7QUFDbEIsSUFBSSx5REFBZ0I7QUFDcEIsQ0FBQzs7QUFFRCxjQUFjLCtDQUFNO0FBQ3BCO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSwyREFBZ0I7QUFDcEIsSUFBSSx3REFBZTtBQUNuQixDQUFDOztBQUVELGdCQUFnQiwrQ0FBTTtBQUN0QjtBQUNBLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCO0FBQ3BCLElBQUkscURBQVU7QUFDZCxJQUFJLHdEQUFlO0FBQ25CLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXImZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmFiY2I7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogOTYwcHg7XFxuICBwYWRkaW5nOiAwcHggMjVweCAwcHggMjVweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgd2lkdGg6IDk2MHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZmxleDogMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgcGFkZGluZzogMjVweCAwcHggMHB4IDI1cHg7XFxufVxcblxcbi5wcm9qLXRpdGxlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDI4cHg7XFxufVxcblxcbi5wcm9qLXRpdGxlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnZpZXcge1xcbiAgZmxleDogMjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kby10aXRsZSxcXG4jZWRpdC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4jdG9kby10aXRsZTpmb2N1cyxcXG4jZWRpdC10aXRsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMTkyLCAyMzMsIDAuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jdG9kby1kZXNjLFxcbiNlZGl0LWRlc2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLWRlc2M6Zm9jdXMsXFxuI2VkaXQtZGVzYzpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMTkyLCAyMzMsIDAuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jdG9kby1wcmlvcml0eSxcXG4jZWRpdC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbn1cXG5cXG4jdG9kby1kdWVkYXRlLFxcbiNlZGl0LWR1ZWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZG8tZHVlZGF0ZTpmb2N1cyxcXG4jZWRpdC1kdWVkYXRlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMTkyLCAyMzMsIDAuMik7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1wcmlvcml0eSxcXG4jZWRpdC1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxubGFiZWwge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1wcm9qZWN0LFxcbiNlZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogNTUwcHg7XFxufVxcblxcbiN0b2RvLXByb2plY3Q6Zm9jdXMsXFxuI2VkaXQtcHJvamVjdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMTkyLCAyMzMsIDAuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udG9kby1zdWJtaXQsXFxuLnNhdmUge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kbyxcXG4uZWRpdC10b2RvIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otdG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLXRvZG8tdGl0bGUsXFxuLnByb2otdG9kby1kYXRlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBjb2xvcjogIzYwNDYzYjtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICB3aWR0aDogNTUwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kby1kdWVkYXRlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmVkaXQsXFxuLnJlbW92ZSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyJmZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZhYmNiO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDk2MHB4O1xcbiAgcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIHdpZHRoOiA5NjBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGZsZXg6IDE7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucHJvai1oZWFkZXIge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIHBhZGRpbmc6IDI1cHggMHB4IDBweCAyNXB4O1xcbn1cXG5cXG4ucHJvai10aXRsZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDIwcHggMHB4IDBweCAyOHB4O1xcbn1cXG5cXG4ucHJvai10aXRsZSB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi52aWV3IHtcXG4gIGZsZXg6IDI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tdGl0bGUsXFxuI2VkaXQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuI3RvZG8tdGl0bGU6Zm9jdXMsXFxuI2VkaXQtdGl0bGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3RvZG8tZGVzYyxcXG4jZWRpdC1kZXNjIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA1NTBweDtcXG4gIGhlaWdodDogMjIwcHg7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1kZXNjOmZvY3VzLFxcbiNlZGl0LWRlc2M6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3RvZG8tcHJpb3JpdHksXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYwNDYzYjtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG59XFxuXFxuI3RvZG8tZHVlZGF0ZSxcXG4jZWRpdC1kdWVkYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLWR1ZWRhdGU6Zm9jdXMsXFxuI2VkaXQtZHVlZGF0ZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZG8tcHJpb3JpdHksXFxuI2VkaXQtcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RvZG8tcHJvamVjdCxcXG4jZWRpdC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4jdG9kby1wcm9qZWN0OmZvY3VzLFxcbiNlZGl0LXByb2plY3Q6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRvZG8tc3VibWl0LFxcbi5zYXZlIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8sXFxuLmVkaXQtdG9kbyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qLXRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvai10b2RvLXRpdGxlLFxcbi5wcm9qLXRvZG8tZGF0ZSB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtdG9kby10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zZWxlY3RlZC10b2RvLXByaW9yaXR5IHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRvZG8tZHVlZGF0ZSB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5lZGl0LFxcbi5yZW1vdmUge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2dldFByb2plY3RUaXRsZXMsIGdldFByb2plY3RUb2RvcywgZ2V0VG9kbywgY29udmVydFRvQ2FtZWxDYXNlfSBmcm9tICcuL2xvZ2ljLmpzJztcblxubGV0IG1ha2UgPSAoZWxlbSkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbn07XG5cbmxldCBhZGRDbGFzcyA9IChlbGVtLCBzdHIpID0+IHtcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKHN0cik7XG59O1xuXG5sZXQgYXBwZW5kID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn07XG5cbmxldCBzZWxlY3QgPSAoZWxlbSkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGhpZGluZyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgdGhlIHRvZG9cblxuY29uc3QgaGlkZVRvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgdG9kb0Zvcm0gPSBzZWxlY3QoJy5hZGQtdG9kbycpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3Igc2hvd2luZyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgdGhlIHRvZG9cblxuY29uc3Qgc2hvd1RvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgdG9kb0Zvcm0gPSBzZWxlY3QoJy5hZGQtdG9kbycpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3IgaGlkaW5nIHRoZSBsaXN0IG9mIHByb2plY3QgdG9kb3NcblxuY29uc3QgaGlkZVByb2pUb2RvcyA9ICgpID0+IHtcbiAgbGV0IHByb2pUb2RvcyA9IHNlbGVjdCgnLnByb2otdG9kb3MnKTtcbiAgcHJvalRvZG9zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBzaG93aW5nIHRoZSBsaXN0IG9mIHByb2plY3QgdG9kb3NcblxuY29uc3Qgc2hvd1Byb2pUb2RvcyA9ICgpID0+IHtcbiAgbGV0IHByb2pUb2RvcyA9IHNlbGVjdCgnLnByb2otdG9kb3MnKTtcbiAgcHJvalRvZG9zLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3IgY2xlYXJpbmcgdGhlIGxpc3Qgb2YgcHJvamVjdCB0b2Rvc1xuXG5jb25zdCBjbGVhclByb2pUb2RvcyA9ICgpID0+IHtcbiAgbGV0IHByb2pUb2RvcyA9IHNlbGVjdCgnLnByb2otdG9kb3MnKTtcbiAgcHJvalRvZG9zLmlubmVySFRNTCA9ICcnO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3IgY2xlYXJpbmcgcHJvamVjdCB0aXRsZXNcblxuY29uc3QgY2xlYXJQcm9qZWN0VGl0bGVzID0gKCkgPT4ge1xuICBsZXQgcHJvalRpdGxlcyA9IHNlbGVjdCgnLnByb2otdGl0bGVzJyk7XG4gIHByb2pUaXRsZXMuaW5uZXJIVE1MID0gJyc7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIGFsbCB0aGUgcHJvamVjdHMgc3RvcmVkIGluIHRoZSBwcm9qZWN0IGxpc3RcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICBoaWRlVG9kb0Zvcm0oKTtcbiAgY2xlYXJQcm9qZWN0VGl0bGVzKCk7XG4gIGxldCBwcm9qVGl0bGVzID0gc2VsZWN0KCcucHJvai10aXRsZXMnKTtcbiAgbGV0IHByb2plY3RUaXRsZXNBcnIgPSBnZXRQcm9qZWN0VGl0bGVzKCk7XG4gIHByb2plY3RUaXRsZXNBcnIuZm9yRWFjaChwcm9qVGl0bGUgPT4ge1xuICAgIGxldCB0aXRsZSA9IG1ha2UoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvalRpdGxlO1xuICAgIGFkZENsYXNzKHRpdGxlLCAncHJvai10aXRsZScpO1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHNob3dQcm9qVG9kb3MoKTtcbiAgICAgIGhpZGVTZWxlY3RlZFRvZG8oKTtcbiAgICAgIGhpZGVUb2RvRm9ybSgpO1xuICAgICAgaGlkZUVkaXRUb2RvRm9ybSgpO1xuICAgICAgY2xlYXJQcm9qVG9kb3MoKTtcbiAgICAgIGRpc3BsYXlUb2Rvc0ZvclByb2ooZSk7XG4gICAgfSk7XG4gICAgYXBwZW5kKHByb2pUaXRsZXMsIHRpdGxlKTtcbiAgfSk7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIGFsbCB0aGUgdG9kb3Mgc3RvcmVkIGluIGEgZ2l2ZW4gcHJvamVjdFxuXG5jb25zdCBkaXNwbGF5VG9kb3NGb3JQcm9qID0gKGUpID0+IHtcbiAgbGV0IHByb2plY3QgPSBjb252ZXJ0VG9DYW1lbENhc2UoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICBsZXQgdG9kb0FyciA9IGdldFByb2plY3RUb2Rvcyhwcm9qZWN0KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvalRvZG9zID0gc2VsZWN0KCcucHJvai10b2RvcycpO1xuXG4gICAgbGV0IHByb2pUb2RvID0gbWFrZSgnZGl2Jyk7XG4gICAgYWRkQ2xhc3MocHJvalRvZG8sICdwcm9qLXRvZG8nKTtcblxuICAgIHByb2pUb2RvLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIHByb2pUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGhpZGVQcm9qVG9kb3MoKTtcbiAgICAgIGRpc3BsYXlTZWxlY3RlZFRvZG8ocHJvamVjdCwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9qVGl0bGUgPSBtYWtlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhwcm9qVGl0bGUsICdwcm9qLXRvZG8tdGl0bGUnKTtcbiAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvQXJyW2ldLnRpdGxlO1xuXG4gICAgbGV0IHByb2pEYXRlID0gbWFrZSgnZGl2Jyk7XG4gICAgYWRkQ2xhc3MocHJvakRhdGUsICdwcm9qLXRvZG8tZGF0ZScpO1xuICAgIHByb2pEYXRlLnRleHRDb250ZW50ID0gdG9kb0FycltpXS5kdWVEYXRlO1xuXG4gICAgYXBwZW5kKHByb2pUb2RvLCBwcm9qVGl0bGUpO1xuICAgIGFwcGVuZChwcm9qVG9kbywgcHJvakRhdGUpO1xuICAgIGFwcGVuZChwcm9qVG9kb3MsIHByb2pUb2RvKTsgXG4gIH07XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBzaG93aW5nIHRoZSBzZWxlY3RlZCB0b2RvIGFuZCBwYXNzaW5nIG9uIHRoZSBjdXJyZW50IHByb2plY3QgYW5kIHRvZG8gaW5kZXggdG8gdGhlIG5ldyB2aWV3XG5cbmNvbnN0IHNob3dTZWxlY3RlZFRvZG8gPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgbGV0IHNlbGVjdGVkVG9kbyA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8nKTtcbiAgc2VsZWN0ZWRUb2RvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIHNlbGVjdGVkVG9kby5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIHNlbGVjdGVkVG9kby5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0O1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3IgaGlkaW5nIHRoZSBzZWxlY3RlZCB0b2RvXG5cbmNvbnN0IGhpZGVTZWxlY3RlZFRvZG8gPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RlZFRvZG8gPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvJyk7XG4gIHNlbGVjdGVkVG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3IgZGlzcGxheWluZyBhZGRpdGlvbmFsIGluZm8gb2YgYSBzZWxlY3RlZCB0b2RvIG9mIGEgZ2l2ZW4gcHJvamVjdFxuXG5jb25zdCBkaXNwbGF5U2VsZWN0ZWRUb2RvID0gKHByb2plY3QsIHRhcmdldCkgPT4ge1xuICBsZXQgdGl0bGUgPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvLXRpdGxlJyk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8tZGVzY3JpcHRpb24nKTtcbiAgbGV0IGR1ZWRhdGUgPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvLWR1ZWRhdGUnKTtcbiAgbGV0IHByaW9yaXR5ID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kby1wcmlvcml0eScpO1xuXG4gIGxldCB0b2RvID0gZ2V0VG9kbyhwcm9qZWN0LCB0YXJnZXQuZGF0YXNldC5pbmRleCk7XG5cbiAgY29uc29sZS5sb2codG9kbyk7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gIGR1ZWRhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcblxuICBzaG93U2VsZWN0ZWRUb2RvKHByb2plY3QsIHRhcmdldC5kYXRhc2V0LmluZGV4KTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBwb3B1bGF0ZXMgdGhlIHRvZG8gZm9ybSB3aXRoIGluZm8gZnJvbSBzZWxlY3RlZCB0b2RvIGZvciBlZGl0aW5nXG5cbmNvbnN0IHVwZGF0ZVRvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvLXRpdGxlJyk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8tZGVzY3JpcHRpb24nKTtcbiAgbGV0IGR1ZWRhdGUgPSBzZWxlY3QoJy5zZWxlY3RlZC10b2RvLWR1ZWRhdGUnKTtcbiAgbGV0IHByaW9yaXR5ID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kby1wcmlvcml0eScpO1xuXG4gIGxldCBmb3JtVGl0bGUgPSBzZWxlY3QoJyNlZGl0LXRpdGxlJyk7XG4gIGxldCBmb3JtRGVzYyA9IHNlbGVjdCgnI2VkaXQtZGVzYycpO1xuICBsZXQgZm9ybUR1ZWRhdGUgPSBzZWxlY3QoJyNlZGl0LWR1ZWRhdGUnKTtcbiAgbGV0IGZvcm1Qcmlvcml0eSA9IHNlbGVjdCgnI2VkaXQtcHJpb3JpdHknKTtcblxuICBmb3JtVGl0bGUudmFsdWUgPSB0aXRsZS50ZXh0Q29udGVudDtcbiAgZm9ybURlc2MudmFsdWUgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgZm9ybUR1ZWRhdGUudmFsdWUgPSBkdWVkYXRlLnRleHRDb250ZW50O1xuICBmb3JtUHJpb3JpdHkudmFsdWUgPSBwcmlvcml0eS50ZXh0Q29udGVudDtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBjbGVhcnMgdGhlIGlucHV0IG9uIHRoZSB0b2RvIGZvcm1cblxuY29uc3QgY2xlYXJUb2RvRm9ybSA9ICgpID0+IHtcbiAgbGV0IGZvcm1UaXRsZSA9IHNlbGVjdCgnI3RvZG8tdGl0bGUnKTtcbiAgbGV0IGZvcm1EZXNjID0gc2VsZWN0KCcjdG9kby1kZXNjJyk7XG4gIGxldCBmb3JtRHVlZGF0ZSA9IHNlbGVjdCgnI3RvZG8tZHVlZGF0ZScpO1xuICBsZXQgZm9ybVByaW9yaXR5ID0gc2VsZWN0KCcjdG9kby1wcmlvcml0eScpO1xuICBsZXQgZm9ybVByb2plY3QgPSBzZWxlY3QoJyN0b2RvLXByb2plY3QnKTtcblxuICBmb3JtVGl0bGUudmFsdWUgPSAnJztcbiAgZm9ybURlc2MudmFsdWUgPSAnJztcbiAgZm9ybUR1ZWRhdGUudmFsdWUgPSAnJztcbiAgZm9ybVByaW9yaXR5LnZhbHVlID0gJ0NyaXRpY2FsJztcbiAgZm9ybVByb2plY3QudmFsdWUgPSAnJztcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBzaG93cyB0aGUgZWRpdCB0b2RvIGZvcm1cblxuY29uc3Qgc2hvd0VkaXRUb2RvRm9ybSA9ICgpID0+IHtcbiAgbGV0IGVkaXRUb2RvRm9ybSA9IHNlbGVjdCgnLmVkaXQtdG9kbycpO1xuICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBoaWRlcyB0aGUgZWRpdCB0b2RvIGZvcm1cblxuY29uc3QgaGlkZUVkaXRUb2RvRm9ybSA9ICgpID0+IHtcbiAgbGV0IGVkaXRUb2RvRm9ybSA9IHNlbGVjdCgnLmVkaXQtdG9kbycpO1xuICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IHttYWtlLCBhZGRDbGFzcywgYXBwZW5kLCBzZWxlY3QsIHNob3dFZGl0VG9kb0Zvcm0sIGhpZGVFZGl0VG9kb0Zvcm0sIGNsZWFyVG9kb0Zvcm0sIHVwZGF0ZVRvZG9Gb3JtLCBoaWRlU2VsZWN0ZWRUb2RvLCBoaWRlUHJvalRvZG9zLCBkaXNwbGF5UHJvamVjdHMsIHNob3dUb2RvRm9ybSwgaGlkZVRvZG9Gb3JtfTsiLCJpbXBvcnQge3NlbGVjdH0gZnJvbSAnLi9kb20uanMnO1xuXG4vLyBBIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGEgc2luZ2xlIHRvLWRvXG5cbmNvbnN0IHRvRG8gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdG8gY2FtZWxjYXNlXG5cbmNvbnN0IGNvbnZlcnRUb0NhbWVsQ2FzZSA9IChzdHIpID0+IHtcbiAgbGV0IHN0ckFyciA9IHN0ci5zcGxpdCgnJyk7XG4gIGxldCBjYW1lbENhc2VTdHJBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHJBcnJbaV0gIT0gJyAnKSB7XG4gICAgICBpZiAoc3RyQXJyW2ldID09IDApIHtcbiAgICAgICAgY2FtZWxDYXNlU3RyQXJyYXkucHVzaChzdHJBcnJbaV0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKHN0ckFycltpIC0gMV0gPT0gJyAnKSB7XG4gICAgICAgIGNhbWVsQ2FzZVN0ckFycmF5LnB1c2goc3RyQXJyW2ldLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FtZWxDYXNlU3RyQXJyYXkucHVzaChzdHJBcnJbaV0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG4gIHJldHVybiBjYW1lbENhc2VTdHJBcnJheS5qb2luKCcnKTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0byB0aXRsZWNhc2VcblxuY29uc3QgY29udmVydFRvVGl0bGVDYXNlID0gKHN0cikgPT4ge1xuICBsZXQgc3RyQXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgbGV0IHRpdGxlQ2FzZVN0ckFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ckFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpID09IDApIHtcbiAgICAgIHRpdGxlQ2FzZVN0ckFyci5wdXNoKHN0ckFycltpXS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9IGVsc2UgaWYgKHN0ckFycltpXSA9PSBzdHJBcnJbaV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goJyAnKTtcbiAgICAgIHRpdGxlQ2FzZVN0ckFyci5wdXNoKHN0ckFycltpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlQ2FzZVN0ckFyci5wdXNoKHN0ckFycltpXSk7XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIHRpdGxlQ2FzZVN0ckFyci5qb2luKCcnKTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgbmV3IHRvZG8gXG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHNlbGVjdCgnI3RvZG8tdGl0bGUnKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gc2VsZWN0KCcjdG9kby1kZXNjJykudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gc2VsZWN0KCcjdG9kby1kdWVkYXRlJykudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IHNlbGVjdCgnI3RvZG8tcHJpb3JpdHknKS52YWx1ZTtcblxuICByZXR1cm4gbmV3IHRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG59O1xuXG4vLyBBbiBvYmplY3QgZm9yIHN0b3JpbmcgcHJvamVjdHMgYXMga2V5cyBhbmQgYW4gYXJyYXkgb2YgdG9kb3MgZm9yIGEgZ2l2ZW4gcHJvamVjdCBhcyBpdHMgdmFsdWVcblxubGV0IHByb2plY3RMaXN0ID0ge307XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBhZGRzIGEgdG9kbyB0byB0aGUgYXJyYXkgdmFsdWUgb2YgYSBwcm9qZWN0IGtleSBpbiBhIHByb2plY3QgbGlzdCBvYmplY3RcblxuY29uc3QgdXBkYXRlRGF0YSA9ICgpID0+IHtcbiAgbGV0IHByb2plY3QgPSBzZWxlY3QoJyN0b2RvLXByb2plY3QnKS52YWx1ZTtcblxuICBpZiAocHJvamVjdCA9PSAnJykge1xuICAgIHByb2plY3QgPSAnYWxsVGFza3MnO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QgPSBjb252ZXJ0VG9DYW1lbENhc2UocHJvamVjdCk7XG4gIH07XG5cbiAgbGV0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKCk7XG5cbiAgaWYgKCEocHJvamVjdCBpbiBwcm9qZWN0TGlzdCkpIHtcbiAgICBwcm9qZWN0TGlzdFtwcm9qZWN0XSA9IFtdO1xuICAgIHByb2plY3RMaXN0W3Byb2plY3RdLnB1c2gobmV3VG9kbyk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdExpc3RbcHJvamVjdF0ucHVzaChuZXdUb2RvKTtcbiAgfTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXlzIGluIHRoZSBwcm9qZWN0IGxpc3RcblxuY29uc3QgZ2V0UHJvamVjdFRpdGxlcyA9ICgpID0+IHtcbiAgbGV0IHByb2plY3RMaXN0S2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RMaXN0KTtcbiAgbGV0IHByb2plY3RMaXN0VGl0bGVzID0gW107XG4gIHByb2plY3RMaXN0S2V5cy5mb3JFYWNoKHByb2plY3RMaXN0S2V5ID0+IHtcbiAgICBwcm9qZWN0TGlzdFRpdGxlcy5wdXNoKGNvbnZlcnRUb1RpdGxlQ2FzZShwcm9qZWN0TGlzdEtleSkpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3RMaXN0VGl0bGVzO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGFycmF5IG9mIHRvZG9zIG9mIGEgc3BlY2lmaWMgcHJvamVjdFxuXG5jb25zdCBnZXRQcm9qZWN0VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gcHJvamVjdExpc3RbcHJvamVjdF07XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBhY2Nlc3NpbmcgYSBzcGVjaWZpYyB0b2RvIG9mIGEgZ2l2ZW4gcHJvamVjdFxuXG5jb25zdCBnZXRUb2RvID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gIHJldHVybiBwcm9qZWN0TGlzdFtwcm9qZWN0XVtpbmRleF07XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciB1cGRhdGluZyB0aGUgdG9kbyBlZGl0ZWRcblxuY29uc3QgdXBkYXRlRWRpdGVkVG9kbyA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdGVkVG9kbyA9IHNlbGVjdCgnLnNlbGVjdGVkLXRvZG8nKTtcbiAgbGV0IHByb2plY3QgPSBzZWxlY3RlZFRvZG8uZGF0YXNldC5wcm9qZWN0O1xuICBsZXQgaW5kZXggPSBzZWxlY3RlZFRvZG8uZGF0YXNldC5pbmRleDtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gIGxldCB0aXRsZSA9IHNlbGVjdCgnI2VkaXQtdGl0bGUnKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gc2VsZWN0KCcjZWRpdC1kZXNjJykudmFsdWU7XG4gIGxldCBkdWVkYXRlID0gc2VsZWN0KCcjZWRpdC1kdWVkYXRlJykudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IHNlbGVjdCgnI2VkaXQtcHJpb3JpdHknKS52YWx1ZTtcblxuICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pXG4gIGNvbnNvbGUubG9nKGR1ZWRhdGUpXG4gIGNvbnNvbGUubG9nKHByaW9yaXR5KVxuICBcbiAgcHJvamVjdExpc3RbcHJvamVjdF1baW5kZXhdID0gbmV3IHRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSk7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciB1cGRhdGluZyB0aGUgc2VsZWN0ZWQgdG9kb1xuXG5jb25zdCByZW1vdmVUb2RvID0gKCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRUb2RvID0gc2VsZWN0KCcuc2VsZWN0ZWQtdG9kbycpO1xuICBsZXQgcHJvamVjdCA9IHNlbGVjdGVkVG9kby5kYXRhc2V0LnByb2plY3Q7XG4gIGxldCBpbmRleCA9IHNlbGVjdGVkVG9kby5kYXRhc2V0LmluZGV4O1xuXG4gIHByb2plY3RMaXN0W3Byb2plY3RdLnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5leHBvcnR7Y29udmVydFRvQ2FtZWxDYXNlLCByZW1vdmVUb2RvLCB1cGRhdGVFZGl0ZWRUb2RvLCBnZXRUb2RvLCB1cGRhdGVEYXRhLCBnZXRQcm9qZWN0VGl0bGVzLCBnZXRQcm9qZWN0VG9kb3N9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgbWFrZSwgYWRkQ2xhc3MsIGFwcGVuZCwgaGlkZUVkaXRUb2RvRm9ybSwgc2hvd0VkaXRUb2RvRm9ybSwgY2xlYXJUb2RvRm9ybSwgdXBkYXRlVG9kb0Zvcm0sIHNlbGVjdCwgaGlkZVNlbGVjdGVkVG9kbywgaGlkZVByb2pUb2RvcywgZGlzcGxheVByb2plY3RzLCBzaG93VG9kb0Zvcm0sIGhpZGVUb2RvRm9ybSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGNvbnZlcnRUb0NhbWVsQ2FzZSwgY29udmVydFRvVGl0bGVDYXNlLCByZW1vdmVUb2RvLCB1cGRhdGVEYXRhLCB1cGRhdGVFZGl0ZWRUb2RvIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmxldCBhZGRCdG4gPSBzZWxlY3QoJy5hZGQtYnRuJyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGlkZVNlbGVjdGVkVG9kbygpO1xuICAgIGhpZGVFZGl0VG9kb0Zvcm0oKTtcbiAgICBoaWRlUHJvalRvZG9zKCk7XG4gICAgc2hvd1RvZG9Gb3JtKCk7XG59KTtcblxubGV0IHN1Ym1pdEJ0biA9IHNlbGVjdCgnLnRvZG8tc3VibWl0Jyk7XG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlRGF0YSgpO1xuICAgIGhpZGVUb2RvRm9ybSgpO1xuICAgIGNsZWFyVG9kb0Zvcm0oKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn0pO1xuXG5sZXQgZWRpdEJ0biA9IHNlbGVjdCgnLmVkaXQnKTtcbmVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGlkZVNlbGVjdGVkVG9kbygpO1xuICAgIHVwZGF0ZVRvZG9Gb3JtKCk7XG4gICAgc2hvd0VkaXRUb2RvRm9ybSgpO1xufSk7XG5cbmxldCBzYXZlQnRuID0gc2VsZWN0KCcuc2F2ZScpO1xuc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoaWRlRWRpdFRvZG9Gb3JtKCk7XG4gICAgdXBkYXRlRWRpdGVkVG9kbygpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xufSk7XG5cbmxldCByZW1vdmVCdG4gPSBzZWxlY3QoJy5yZW1vdmUnKTtcbnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBoaWRlRWRpdFRvZG9Gb3JtKCk7XG4gICAgaGlkZVNlbGVjdGVkVG9kbygpO1xuICAgIHJlbW92ZVRvZG8oKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==