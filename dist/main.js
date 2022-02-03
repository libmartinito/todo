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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fffff0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #bfabcb;\n  height: 50px;\n  width: 960px;\n  padding: 0px 25px 0px 25px;\n}\n\n.logo {\n  font-family: 'Montserrat', sans-serif;\n  color: #60463b;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 15px;\n}\n\n.body {\n  display: flex;\n  height: calc(100vh - 50px);\n  width: 960px;\n}\n\n.projects {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.proj-header {\n  color: #60463b;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  padding: 25px 0px 0px 25px;\n}\n\n.proj-titles {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px 0px 0px 28px;\n}\n\n.proj-title {\n  color: #60463b;\n  cursor: pointer;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.view {\n  flex: 2;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.navigation {\n  height: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  color: #60463b;\n  display: flex;\n  align-items: center;\n}\n\n.add-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 18px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n#todo-title {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n}\n\n#todo-title:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\ntextarea {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  resize: none;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\ntextarea:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#priority {\n  border: 2px solid #60463b;\n  color: #60463b;\n  background-color: #fffff0;\n}\n\n#duedate {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#duedate:focus {\n  outline: none;\n  border-radius: 8px;\n  background: rgba(230, 192, 233, 0.2);\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#priority {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  outline: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\nlabel {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-project {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n  width: 550px;\n}\n\n#todo-project:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n.todo-submit {\n  width: 80px;\n  height: 30px;\n  font-size: 18px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n.add-todo {\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n  z-index: 1;\n  display: none;\n}\n\n.proj-todos {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  height: calc(100vh - 80px);\n  display: none;\n}\n\n.proj-todo {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 25px 0px 25px;\n}\n\n.proj-todo-title,\n.proj-todo-date {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;EACrC,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,OAAO;EACP,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,qCAAqC;EACrC,gBAAgB;EAChB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,qCAAqC;EACrC,eAAe;EACf,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,sBAAsB;EACtB,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kCAAkC;EAClC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oCAAoC;EACpC,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kCAAkC;EAClC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,sBAAsB;EACtB,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;;EAEE,cAAc;EACd,kCAAkC;EAClC,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fffff0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #bfabcb;\n  height: 50px;\n  width: 960px;\n  padding: 0px 25px 0px 25px;\n}\n\n.logo {\n  font-family: 'Montserrat', sans-serif;\n  color: #60463b;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 15px;\n}\n\n.body {\n  display: flex;\n  height: calc(100vh - 50px);\n  width: 960px;\n}\n\n.projects {\n  flex: 1;\n  box-sizing: border-box;\n}\n\n.proj-header {\n  color: #60463b;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n  padding: 25px 0px 0px 25px;\n}\n\n.proj-titles {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 20px 0px 0px 28px;\n}\n\n.proj-title {\n  color: #60463b;\n  cursor: pointer;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n.view {\n  flex: 2;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.navigation {\n  height: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  color: #60463b;\n  display: flex;\n  align-items: center;\n}\n\n.add-btn {\n  width: 80px;\n  height: 30px;\n  font-size: 18px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n#todo-title {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 24px;\n  width: 550px;\n}\n\n#todo-title:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\ntextarea {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  resize: none;\n  width: 550px;\n  height: 220px;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\ntextarea:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n#priority {\n  border: 2px solid #60463b;\n  color: #60463b;\n  background-color: #fffff0;\n}\n\n#duedate {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#duedate:focus {\n  outline: none;\n  border-radius: 8px;\n  background: rgba(230, 192, 233, 0.2);\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#priority {\n  background-color: #fffff0;\n  color: #60463b;\n  border: none;\n  outline: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\nlabel {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}\n\n#todo-project {\n  background-color: #fffff0;\n  border: none;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n  width: 550px;\n}\n\n#todo-project:focus {\n  background: rgba(230, 192, 233, 0.2);\n  outline: none;\n  border-radius: 8px;\n}\n\n.todo-submit {\n  width: 80px;\n  height: 30px;\n  font-size: 18px;\n  background-color: #fffff0;\n  color: #60463b;\n  box-sizing: border-box;\n  border: 2px solid #60463b;\n  font-family: 'Merriweather', serif;\n  cursor: pointer;\n}\n\n.add-todo {\n  box-sizing: border-box;\n  width: 600px;\n  padding: 25px;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-top: 25px;\n  z-index: 1;\n  display: none;\n}\n\n.proj-todos {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  height: calc(100vh - 80px);\n  display: none;\n}\n\n.proj-todo {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 25px 0px 25px;\n}\n\n.proj-todo-title,\n.proj-todo-date {\n  color: #60463b;\n  font-family: 'Merriweather', serif;\n  font-size: 18px;\n}"],"sourceRoot":""}]);
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
  let projectTitlesArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectTitles)();
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
  let project = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.convertToCamelCase)(e.target.textContent);
  let todoArr = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectTodos)(project);
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



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToCamelCase": () => (/* binding */ convertToCamelCase),
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
  let description = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('textarea').value;
  let dueDate = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#duedate').value;
  let priority = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#priority').value;

  return new toDo(title, description, dueDate, priority);
};

// An object for storing projects as keys and an array of todos for a given project as its value

let projectList = {};

// A function that adds a todo to the array value of a project key in a project list object

const updateData = () => {
  let project = convertToCamelCase((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.select)('#todo-project').value);

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
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideProjTodos)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.showTodoForm)();
});

let submitBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.select)('.todo-submit');
submitBtn.addEventListener('click', () => {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.updateData)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideTodoForm)();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRJQUE0STtBQUM1STtBQUNBLDZDQUE2QyxjQUFjLGVBQWUsR0FBRyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLHdCQUF3QiwyQkFBMkIscUNBQXFDLGlCQUFpQixpQkFBaUIsK0JBQStCLEdBQUcsV0FBVywwQ0FBMEMsbUJBQW1CLHFCQUFxQixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwrQkFBK0IsaUJBQWlCLEdBQUcsZUFBZSxZQUFZLDJCQUEyQixHQUFHLGtCQUFrQixtQkFBbUIsMENBQTBDLHFCQUFxQixvQkFBb0IsK0JBQStCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLCtCQUErQixHQUFHLGlCQUFpQixtQkFBbUIsb0JBQW9CLHVDQUF1QyxvQkFBb0IsR0FBRyxXQUFXLFlBQVksMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLDBDQUEwQyxvQkFBb0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsb0JBQW9CLDhCQUE4QixtQkFBbUIsMkJBQTJCLDhCQUE4Qix1Q0FBdUMsb0JBQW9CLEdBQUcsaUJBQWlCLDhCQUE4QixpQkFBaUIsdUNBQXVDLG9CQUFvQixpQkFBaUIsR0FBRyx1QkFBdUIseUNBQXlDLGtCQUFrQix1QkFBdUIsR0FBRyxjQUFjLDhCQUE4QixtQkFBbUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsa0JBQWtCLHVDQUF1QyxvQkFBb0IsR0FBRyxvQkFBb0IseUNBQXlDLGtCQUFrQix1QkFBdUIsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIsOEJBQThCLEdBQUcsY0FBYyw4QkFBOEIsbUJBQW1CLGlCQUFpQix1Q0FBdUMsb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQix1QkFBdUIseUNBQXlDLHVDQUF1QyxvQkFBb0IsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsb0JBQW9CLEdBQUcsV0FBVyxtQkFBbUIsdUNBQXVDLG9CQUFvQixHQUFHLG1CQUFtQiw4QkFBOEIsaUJBQWlCLHVDQUF1QyxvQkFBb0IsaUJBQWlCLEdBQUcseUJBQXlCLHlDQUF5QyxrQkFBa0IsdUJBQXVCLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsb0JBQW9CLDhCQUE4QixtQkFBbUIsMkJBQTJCLDhCQUE4Qix1Q0FBdUMsb0JBQW9CLEdBQUcsZUFBZSwyQkFBMkIsaUJBQWlCLGtCQUFrQixrQkFBa0Isa0JBQWtCLDJCQUEyQixrQ0FBa0MscUJBQXFCLGVBQWUsa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLCtCQUErQixrQkFBa0IsR0FBRyxnQkFBZ0Isa0JBQWtCLG1DQUFtQywrQkFBK0IsR0FBRyx3Q0FBd0MsbUJBQW1CLHVDQUF1QyxvQkFBb0IsR0FBRyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyw4SEFBOEgsT0FBTyxjQUFjLGVBQWUsR0FBRyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsOEJBQThCLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLHdCQUF3QiwyQkFBMkIscUNBQXFDLGlCQUFpQixpQkFBaUIsK0JBQStCLEdBQUcsV0FBVywwQ0FBMEMsbUJBQW1CLHFCQUFxQixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwrQkFBK0IsaUJBQWlCLEdBQUcsZUFBZSxZQUFZLDJCQUEyQixHQUFHLGtCQUFrQixtQkFBbUIsMENBQTBDLHFCQUFxQixvQkFBb0IsK0JBQStCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLCtCQUErQixHQUFHLGlCQUFpQixtQkFBbUIsb0JBQW9CLHVDQUF1QyxvQkFBb0IsR0FBRyxXQUFXLFlBQVksMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLDBDQUEwQyxvQkFBb0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsb0JBQW9CLDhCQUE4QixtQkFBbUIsMkJBQTJCLDhCQUE4Qix1Q0FBdUMsb0JBQW9CLEdBQUcsaUJBQWlCLDhCQUE4QixpQkFBaUIsdUNBQXVDLG9CQUFvQixpQkFBaUIsR0FBRyx1QkFBdUIseUNBQXlDLGtCQUFrQix1QkFBdUIsR0FBRyxjQUFjLDhCQUE4QixtQkFBbUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsa0JBQWtCLHVDQUF1QyxvQkFBb0IsR0FBRyxvQkFBb0IseUNBQXlDLGtCQUFrQix1QkFBdUIsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIsOEJBQThCLEdBQUcsY0FBYyw4QkFBOEIsbUJBQW1CLGlCQUFpQix1Q0FBdUMsb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQix1QkFBdUIseUNBQXlDLHVDQUF1QyxvQkFBb0IsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsb0JBQW9CLEdBQUcsV0FBVyxtQkFBbUIsdUNBQXVDLG9CQUFvQixHQUFHLG1CQUFtQiw4QkFBOEIsaUJBQWlCLHVDQUF1QyxvQkFBb0IsaUJBQWlCLEdBQUcseUJBQXlCLHlDQUF5QyxrQkFBa0IsdUJBQXVCLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsb0JBQW9CLDhCQUE4QixtQkFBbUIsMkJBQTJCLDhCQUE4Qix1Q0FBdUMsb0JBQW9CLEdBQUcsZUFBZSwyQkFBMkIsaUJBQWlCLGtCQUFrQixrQkFBa0Isa0JBQWtCLDJCQUEyQixrQ0FBa0MscUJBQXFCLGVBQWUsa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLCtCQUErQixrQkFBa0IsR0FBRyxnQkFBZ0Isa0JBQWtCLG1DQUFtQywrQkFBK0IsR0FBRyx3Q0FBd0MsbUJBQW1CLHVDQUF1QyxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDOThUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUY7O0FBRWpGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsNkRBQWtCO0FBQ2xDLGdCQUFnQiwwREFBZTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R2dDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLCtDQUFNO0FBQ3BCLG9CQUFvQiwrQ0FBTTtBQUMxQixnQkFBZ0IsK0NBQU07QUFDdEIsaUJBQWlCLCtDQUFNOztBQUV2QjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DLCtDQUFNOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUd5RTs7Ozs7Ozs7VUNoR3pFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNnRztBQUN0Qzs7QUFFaEYsYUFBYSwrQ0FBTTtBQUNuQjtBQUNBLElBQUksc0RBQWE7QUFDakIsSUFBSSxxREFBWTtBQUNoQixDQUFDOztBQUVELGdCQUFnQiwrQ0FBTTtBQUN0QjtBQUNBLElBQUkscURBQVU7QUFDZCxJQUFJLHFEQUFZO0FBQ2hCLElBQUksd0RBQWU7QUFDbkIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZmYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYWJjYjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA5NjBweDtcXG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICB3aWR0aDogOTYwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBmbGV4OiAxO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnByb2otaGVhZGVyIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwYWRkaW5nOiAyNXB4IDBweCAwcHggMjVweDtcXG59XFxuXFxuLnByb2otdGl0bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMjhweDtcXG59XFxuXFxuLnByb2otdGl0bGUge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udmlldyB7XFxuICBmbGV4OiAyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kby10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuI3RvZG8tdGl0bGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgaGVpZ2h0OiAyMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbn1cXG5cXG4jZHVlZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jZHVlZGF0ZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0b2RvLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogNTUwcHg7XFxufVxcblxcbiN0b2RvLXByb2plY3Q6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDE5MiwgMjMzLCAwLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRvZG8tc3VibWl0IHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2otdG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xcbn1cXG5cXG4ucHJvai10b2RvLXRpdGxlLFxcbi5wcm9qLXRvZG8tZGF0ZSB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltc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QTZCO0VBQzdCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXImZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmFiY2I7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogOTYwcHg7XFxuICBwYWRkaW5nOiAwcHggMjVweCAwcHggMjVweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgd2lkdGg6IDk2MHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZmxleDogMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgcGFkZGluZzogMjVweCAwcHggMHB4IDI1cHg7XFxufVxcblxcbi5wcm9qLXRpdGxlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMjBweCAwcHggMHB4IDI4cHg7XFxufVxcblxcbi5wcm9qLXRpdGxlIHtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnZpZXcge1xcbiAgZmxleDogMjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogNTUwcHg7XFxufVxcblxcbiN0b2RvLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA1NTBweDtcXG4gIGhlaWdodDogMjIwcHg7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMTkyLCAyMzMsIDAuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAycHggc29saWQgIzYwNDYzYjtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG59XFxuXFxuI2R1ZWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmMDtcXG4gIGNvbG9yOiAjNjA0NjNiO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI2R1ZWRhdGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmYwO1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxubGFiZWwge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jdG9kby1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4jdG9kby1wcm9qZWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAxOTIsIDIzMywgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50b2RvLXN1Ym1pdCB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZjA7XFxuICBjb2xvcjogIzYwNDYzYjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNjA0NjNiO1xcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qLXRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvai10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggMjVweCAwcHggMjVweDtcXG59XFxuXFxuLnByb2otdG9kby10aXRsZSxcXG4ucHJvai10b2RvLWRhdGUge1xcbiAgY29sb3I6ICM2MDQ2M2I7XFxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtnZXRQcm9qZWN0VGl0bGVzLCBnZXRQcm9qZWN0VG9kb3MsIGNvbnZlcnRUb0NhbWVsQ2FzZX0gZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmxldCBtYWtlID0gKGVsZW0pID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG59O1xuXG5sZXQgYWRkQ2xhc3MgPSAoZWxlbSwgc3RyKSA9PiB7XG4gIGVsZW0uY2xhc3NMaXN0LmFkZChzdHIpO1xufTtcblxubGV0IGFwcGVuZCA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59O1xuXG5sZXQgc2VsZWN0ID0gKGVsZW0pID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGhpZGluZyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgdGhlIHRvZG9cblxuY29uc3QgaGlkZVRvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgdG9kb0Zvcm0gPSBzZWxlY3QoJy5hZGQtdG9kbycpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3Igc2hvd2luZyB0aGUgZm9ybSBmb3IgY3JlYXRpbmcgdGhlIHRvZG9cblxuY29uc3Qgc2hvd1RvZG9Gb3JtID0gKCkgPT4ge1xuICBsZXQgdG9kb0Zvcm0gPSBzZWxlY3QoJy5hZGQtdG9kbycpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGhpZGluZyB0aGUgbGlzdCBvZiBwcm9qZWN0IHRvZG9zXG5cbmNvbnN0IGhpZGVQcm9qVG9kb3MgPSAoKSA9PiB7XG4gIGxldCBwcm9qVG9kb3MgPSBzZWxlY3QoJy5wcm9qLXRvZG9zJyk7XG4gIHByb2pUb2Rvcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuLy8gQSBmdW5jdGlvbiBmb3Igc2hvd2luZyB0aGUgbGlzdCBvZiBwcm9qZWN0IHRvZG9zXG5cbmNvbnN0IHNob3dQcm9qVG9kb3MgPSAoKSA9PiB7XG4gIGxldCBwcm9qVG9kb3MgPSBzZWxlY3QoJy5wcm9qLXRvZG9zJyk7XG4gIHByb2pUb2Rvcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIHRoZSBsaXN0IG9mIHByb2plY3QgdG9kb3NcblxuY29uc3QgY2xlYXJQcm9qVG9kb3MgPSAoKSA9PiB7XG4gIGxldCBwcm9qVG9kb3MgPSBzZWxlY3QoJy5wcm9qLXRvZG9zJyk7XG4gIHByb2pUb2Rvcy5pbm5lckhUTUwgPSAnJztcbn07XG5cbi8vIEEgZnVuY3Rpb24gZm9yIGNsZWFyaW5nIHByb2plY3QgdGl0bGVzXG5cbmNvbnN0IGNsZWFyUHJvamVjdFRpdGxlcyA9ICgpID0+IHtcbiAgbGV0IHByb2pUaXRsZXMgPSBzZWxlY3QoJy5wcm9qLXRpdGxlcycpO1xuICBwcm9qVGl0bGVzLmlubmVySFRNTCA9ICcnO1xufVxuXG4vLyBBIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIGFsbCB0aGUgcHJvamVjdHMgc3RvcmVkIGluIHRoZSBwcm9qZWN0IGxpc3RcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICBjbGVhclByb2plY3RUaXRsZXMoKTtcbiAgbGV0IHByb2pUaXRsZXMgPSBzZWxlY3QoJy5wcm9qLXRpdGxlcycpO1xuICBsZXQgcHJvamVjdFRpdGxlc0FyciA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgcHJvamVjdFRpdGxlc0Fyci5mb3JFYWNoKHByb2pUaXRsZSA9PiB7XG4gICAgbGV0IHRpdGxlID0gbWFrZSgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qVGl0bGU7XG4gICAgYWRkQ2xhc3ModGl0bGUsICdwcm9qLXRpdGxlJyk7XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgc2hvd1Byb2pUb2RvcygpO1xuICAgICAgY2xlYXJQcm9qVG9kb3MoKTtcbiAgICAgIGRpc3BsYXlUb2Rvc0ZvclByb2ooZSk7XG4gICAgfSk7XG4gICAgYXBwZW5kKHByb2pUaXRsZXMsIHRpdGxlKTtcbiAgfSk7XG59O1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBkaXNwbGF5aW5nIGFsbCB0aGUgdG9kb3Mgc3RvcmVkIGluIGEgZ2l2ZW4gcHJvamVjdFxuXG5jb25zdCBkaXNwbGF5VG9kb3NGb3JQcm9qID0gKGUpID0+IHtcbiAgbGV0IHByb2plY3QgPSBjb252ZXJ0VG9DYW1lbENhc2UoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICBsZXQgdG9kb0FyciA9IGdldFByb2plY3RUb2Rvcyhwcm9qZWN0KTtcbiAgY29uc29sZS5sb2codG9kb0Fycik7XG4gIHRvZG9BcnIuZm9yRWFjaCh0b2RvID0+IHtcbiAgICBsZXQgcHJvalRvZG9zID0gc2VsZWN0KCcucHJvai10b2RvcycpO1xuXG4gICAgbGV0IHByb2pUb2RvID0gbWFrZSgnZGl2Jyk7XG4gICAgYWRkQ2xhc3MocHJvalRvZG8sICdwcm9qLXRvZG8nKTtcblxuICAgIGxldCBwcm9qVGl0bGUgPSBtYWtlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhwcm9qVGl0bGUsICdwcm9qLXRvZG8tdGl0bGUnKTtcbiAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgbGV0IHByb2pEYXRlID0gbWFrZSgnZGl2Jyk7XG4gICAgYWRkQ2xhc3MocHJvakRhdGUsICdwcm9qLXRvZG8tZGF0ZScpO1xuICAgIHByb2pEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgYXBwZW5kKHByb2pUb2RvLCBwcm9qVGl0bGUpO1xuICAgIGFwcGVuZChwcm9qVG9kbywgcHJvakRhdGUpO1xuICAgIGFwcGVuZChwcm9qVG9kb3MsIHByb2pUb2RvKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7bWFrZSwgYWRkQ2xhc3MsIGFwcGVuZCwgc2VsZWN0LCBoaWRlUHJvalRvZG9zLCBkaXNwbGF5UHJvamVjdHMsIHNob3dUb2RvRm9ybSwgaGlkZVRvZG9Gb3JtfSIsImltcG9ydCB7c2VsZWN0fSBmcm9tICcuL2RvbS5qcyc7XG5cbi8vIEEgZmFjdG9yeSBmdW5jdGlvbiBmb3IgYSBzaW5nbGUgdG8tZG9cblxuY29uc3QgdG9EbyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0byBjYW1lbGNhc2VcblxuY29uc3QgY29udmVydFRvQ2FtZWxDYXNlID0gKHN0cikgPT4ge1xuICBsZXQgc3RyQXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgbGV0IGNhbWVsQ2FzZVN0ckFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0ckFycltpXSAhPSAnICcpIHtcbiAgICAgIGlmIChzdHJBcnJbaV0gPT0gMCkge1xuICAgICAgICBjYW1lbENhc2VTdHJBcnJheS5wdXNoKHN0ckFycltpXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyQXJyW2kgLSAxXSA9PSAnICcpIHtcbiAgICAgICAgY2FtZWxDYXNlU3RyQXJyYXkucHVzaChzdHJBcnJbaV0udG9VcHBlckNhc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW1lbENhc2VTdHJBcnJheS5wdXNoKHN0ckFycltpXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGNhbWVsQ2FzZVN0ckFycmF5LmpvaW4oJycpO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRvIHRpdGxlY2FzZVxuXG5jb25zdCBjb252ZXJ0VG9UaXRsZUNhc2UgPSAoc3RyKSA9PiB7XG4gIGxldCBzdHJBcnIgPSBzdHIuc3BsaXQoJycpO1xuICBsZXQgdGl0bGVDYXNlU3RyQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT0gMCkge1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goc3RyQXJyW2ldLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0gZWxzZSBpZiAoc3RyQXJyW2ldID09IHN0ckFycltpXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICB0aXRsZUNhc2VTdHJBcnIucHVzaCgnICcpO1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goc3RyQXJyW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVDYXNlU3RyQXJyLnB1c2goc3RyQXJyW2ldKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gdGl0bGVDYXNlU3RyQXJyLmpvaW4oJycpO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBuZXcgdG9kbyBcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgbGV0IHRpdGxlID0gc2VsZWN0KCcjdG9kby10aXRsZScpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBzZWxlY3QoJ3RleHRhcmVhJykudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gc2VsZWN0KCcjZHVlZGF0ZScpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBzZWxlY3QoJyNwcmlvcml0eScpLnZhbHVlO1xuXG4gIHJldHVybiBuZXcgdG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbn07XG5cbi8vIEFuIG9iamVjdCBmb3Igc3RvcmluZyBwcm9qZWN0cyBhcyBrZXlzIGFuZCBhbiBhcnJheSBvZiB0b2RvcyBmb3IgYSBnaXZlbiBwcm9qZWN0IGFzIGl0cyB2YWx1ZVxuXG5sZXQgcHJvamVjdExpc3QgPSB7fTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IGFkZHMgYSB0b2RvIHRvIHRoZSBhcnJheSB2YWx1ZSBvZiBhIHByb2plY3Qga2V5IGluIGEgcHJvamVjdCBsaXN0IG9iamVjdFxuXG5jb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdCA9IGNvbnZlcnRUb0NhbWVsQ2FzZShzZWxlY3QoJyN0b2RvLXByb2plY3QnKS52YWx1ZSk7XG5cbiAgbGV0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKCk7XG5cbiAgaWYgKCEocHJvamVjdCBpbiBwcm9qZWN0TGlzdCkpIHtcbiAgICBwcm9qZWN0TGlzdFtwcm9qZWN0XSA9IFtdO1xuICAgIHByb2plY3RMaXN0W3Byb2plY3RdLnB1c2gobmV3VG9kbyk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdExpc3RbcHJvamVjdF0ucHVzaChuZXdUb2RvKTtcbiAgfTtcbn07XG5cbi8vIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBrZXlzIGluIHRoZSBwcm9qZWN0IGxpc3RcblxuY29uc3QgZ2V0UHJvamVjdFRpdGxlcyA9ICgpID0+IHtcbiAgbGV0IHByb2plY3RMaXN0S2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RMaXN0KTtcbiAgbGV0IHByb2plY3RMaXN0VGl0bGVzID0gW107XG4gIHByb2plY3RMaXN0S2V5cy5mb3JFYWNoKHByb2plY3RMaXN0S2V5ID0+IHtcbiAgICBwcm9qZWN0TGlzdFRpdGxlcy5wdXNoKGNvbnZlcnRUb1RpdGxlQ2FzZShwcm9qZWN0TGlzdEtleSkpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3RMaXN0VGl0bGVzO1xufTtcblxuLy8gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGFycmF5IG9mIHRvZG9zIG9mIGEgc3BlY2lmaWMgcHJvamVjdFxuXG5jb25zdCBnZXRQcm9qZWN0VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gcHJvamVjdExpc3RbcHJvamVjdF07XG59O1xuXG5cbmV4cG9ydHtjb252ZXJ0VG9DYW1lbENhc2UsIHVwZGF0ZURhdGEsIGdldFByb2plY3RUaXRsZXMsIGdldFByb2plY3RUb2Rvc31cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IG1ha2UsIGFkZENsYXNzLCBhcHBlbmQsIHNlbGVjdCwgaGlkZVByb2pUb2RvcywgZGlzcGxheVByb2plY3RzLCBzaG93VG9kb0Zvcm0sIGhpZGVUb2RvRm9ybSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGNvbnZlcnRUb0NhbWVsQ2FzZSwgY29udmVydFRvVGl0bGVDYXNlLCB1cGRhdGVEYXRhIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmxldCBhZGRCdG4gPSBzZWxlY3QoJy5hZGQtYnRuJyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGlkZVByb2pUb2RvcygpO1xuICAgIHNob3dUb2RvRm9ybSgpO1xufSk7XG5cbmxldCBzdWJtaXRCdG4gPSBzZWxlY3QoJy50b2RvLXN1Ym1pdCcpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVwZGF0ZURhdGEoKTtcbiAgICBoaWRlVG9kb0Zvcm0oKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==