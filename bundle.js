/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg: rgb(250, 250, 247);\n  --bglight: rgba(25,25,25,.75);\n  --bgdark: rgb(233, 233, 227);\n  --bgselect: rgb(199, 199, 149);\n  --contrast: rgb(25, 25, 25);\n  --contrastlight: rgb(95, 95, 95);\n  --border: rgb(147, 145, 114);\n  --overlay-bg: rgba(59, 59, 58, 0.5);\n  --project-pill: rgb(134, 131, 107);\n  --low: rgb(125, 171, 120);\n  --medium: rgb(212, 210, 69);\n  --high: rgb(188, 101, 70);\n  color: var(--contrast);\n  font-family: 'Raleway', sans-serif;\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  max-width: 1000px;\n  min-width: 360px;\n  background-color: var(--bg);\n\n}\n\nform {\n  display: block;\n}\n\nbutton {\n  width: 10rem;\n  height: 3rem;\n  background-color: var(--contrast);\n  border-radius: 12px;\n  color: var(--bg);\n  border: none;\n  cursor: pointer;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\nbutton:hover {\n  background-color: var(--bglight);\n  transition: ease-in;\n  transition-duration: 0.15s;\n}\n\nlabel {\n  text-align: right;\n  margin-right: 1rem;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 3rem;\n  color: var(--contrast)\n}\n\ninput,select,textarea {\n  outline: none;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  height: 1.5rem;\n  background-color: var(--bgdark);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 500;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  \n  width: 100%;\n}\n\n#header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  text-align: center;\n  background-color: gradient();\n  border-bottom: 1px solid var(--contrast);\n}\n\n#modal {\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n  top: 10%;\n  padding: 2rem;\n  border: 1px solid var(--contrast);\n  background-color: var(--bg);\n  z-index: 2;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--overlay-bg);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n#task-description {\n  resize: none;\n  height: 4rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  padding: 2rem;\n  border-bottom: 1px solid var(--contrast);\n}\n\n.project {\n  width: 100px;\n  padding: 1rem;\n  border-radius: 5px;\n}\n\n.div-add-project {\n  display: flex;\n  justify-content: center;\n}\n\n.current-projects {\n  display: flex;\n  overflow: auto;\n  white-space: nowrap;\n  justify-content: flex-start;\n}\n\n.current-projects:first-child {\n  justify-self: center;\n}\n\n.existing-project {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--border);\n  margin: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.existing-project-name {\n  width: 100%;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n}\n\n.existing-project-buttons {\n  display: flex;\n  margin-top: 1rem;\n  justify-content: center;\n}\n\n.selected-project {\n  background-color: var(--bgselect);\n}\n\n.div-add-task {\n  display: flex;\n  justify-content: center;\n}\n\n.existing-task {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid var(--border);\n  margin: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.low-priority {\n  border-left: 8px solid var(--low);\n}\n\n.medium-priority {\n  border-left: 8px solid var(--medium);\n}\n\n.high-priority {\n  border-left: 8px solid var(--high);\n}\n\n.existing-task-name {\n  font-weight: 500;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n}\n\n.existing-task-due-date, .existing-task-description, .existing-project-num-tasks {\n  color: var(--contrastlight);\n  margin-bottom: 0.8rem;\n}\n\n.existing-task-project {\n  background-color: var(--project-pill);\n  border-radius: 5px;\n  padding: 0.5rem;\n  width: min-content;\n  text-align: center;\n  color: white;\n}\n\n.form-row {\n  width: 100%;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.form-row-btns {\n  width: 100%;\n}\n\n.task {\n  border-bottom: 1px solid var(--border);\n}\n\n.icon {\n  width: 30px;\n  height: 30px;\n}\n\n.btn-cancel {\n  border: 1px solid var(--contrast);\n  background-color: var(--bg);\n  color: var(--contrast);\n}\n\n.btn-cancel:hover {\n  background-color: var(--bgdark);\n  transition: ease-in;\n  transition-duration: 0.15s;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --bg: rgb(250, 250, 247);\n  --bglight: rgba(25,25,25,.75);\n  --bgdark: rgb(233, 233, 227);\n  --bgselect: rgb(199, 199, 149);\n  --contrast: rgb(25, 25, 25);\n  --contrastlight: rgb(95, 95, 95);\n  --border: rgb(147, 145, 114);\n  --overlay-bg: rgba(59, 59, 58, 0.5);\n  --project-pill: rgb(134, 131, 107);\n  --low: rgb(125, 171, 120);\n  --medium: rgb(212, 210, 69);\n  --high: rgb(188, 101, 70);\n  color: var(--contrast);\n  font-family: 'Raleway', sans-serif;\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  max-width: 1000px;\n  min-width: 360px;\n  background-color: var(--bg);\n\n}\n\nform {\n  display: block;\n}\n\nbutton {\n  width: 10rem;\n  height: 3rem;\n  background-color: var(--contrast);\n  border-radius: 12px;\n  color: var(--bg);\n  border: none;\n  cursor: pointer;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\nbutton:hover {\n  background-color: var(--bglight);\n  transition: ease-in;\n  transition-duration: 0.15s;\n}\n\nlabel {\n  text-align: right;\n  margin-right: 1rem;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 3rem;\n  color: var(--contrast)\n}\n\ninput,select,textarea {\n  outline: none;\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  height: 1.5rem;\n  background-color: var(--bgdark);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 500;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  \n  width: 100%;\n}\n\n#header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n  text-align: center;\n  background-color: gradient();\n  border-bottom: 1px solid var(--contrast);\n}\n\n#modal {\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n  top: 10%;\n  padding: 2rem;\n  border: 1px solid var(--contrast);\n  background-color: var(--bg);\n  z-index: 2;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--overlay-bg);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n#task-description {\n  resize: none;\n  height: 4rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.container {\n  padding: 2rem;\n  border-bottom: 1px solid var(--contrast);\n}\n\n.project {\n  width: 100px;\n  padding: 1rem;\n  border-radius: 5px;\n}\n\n.div-add-project {\n  display: flex;\n  justify-content: center;\n}\n\n.current-projects {\n  display: flex;\n  overflow: auto;\n  white-space: nowrap;\n  justify-content: flex-start;\n}\n\n.current-projects:first-child {\n  justify-self: center;\n}\n\n.existing-project {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--border);\n  margin: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.existing-project-name {\n  width: 100%;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n}\n\n.existing-project-buttons {\n  display: flex;\n  margin-top: 1rem;\n  justify-content: center;\n}\n\n.selected-project {\n  background-color: var(--bgselect);\n}\n\n.div-add-task {\n  display: flex;\n  justify-content: center;\n}\n\n.existing-task {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid var(--border);\n  margin: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.low-priority {\n  border-left: 8px solid var(--low);\n}\n\n.medium-priority {\n  border-left: 8px solid var(--medium);\n}\n\n.high-priority {\n  border-left: 8px solid var(--high);\n}\n\n.existing-task-name {\n  font-weight: 500;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n}\n\n.existing-task-due-date, .existing-task-description, .existing-project-num-tasks {\n  color: var(--contrastlight);\n  margin-bottom: 0.8rem;\n}\n\n.existing-task-project {\n  background-color: var(--project-pill);\n  border-radius: 5px;\n  padding: 0.5rem;\n  width: min-content;\n  text-align: center;\n  color: white;\n}\n\n.form-row {\n  width: 100%;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.form-row-btns {\n  width: 100%;\n}\n\n.task {\n  border-bottom: 1px solid var(--border);\n}\n\n.icon {\n  width: 30px;\n  height: 30px;\n}\n\n.btn-cancel {\n  border: 1px solid var(--contrast);\n  background-color: var(--bg);\n  color: var(--contrast);\n}\n\n.btn-cancel:hover {\n  background-color: var(--bgdark);\n  transition: ease-in;\n  transition-duration: 0.15s;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/trash-can-outline.svg */ "./assets/trash-can-outline.svg");
/* harmony import */ var _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/pencil-outline.svg */ "./assets/pencil-outline.svg");


//import Storage from './storage.js';






const DOM = {
  TASK_STATUSES: ['','To do','In progress','Completed'],
  TASK_PRIORITIES: ['','Low','Medium','High'],
  SELECTED_PROJECT: null,
  //querySelectors
  CONTENT: document.querySelector('#content'),
  HEADER: document.querySelector('#header'),
  CNTR_PROJECTS: document.querySelector('#cntr-projects'),
  ADD_PROJECT_DIV: document.querySelector('.div-add-project'),
  CURRENT_PROJECTS: document.querySelector('.current-projects'),
  CNTR_TASKS: document.querySelector('#cntr-tasks'),
  ADD_TASK_DIV: document.querySelector('.div-add-task'),
  CURRENT_TASKS: document.querySelector('.current-tasks'),
  MODAL: document.querySelector('#modal'),
  OVERLAY: document.querySelector('#overlay'),
  //create buttons for adding new projects and tasks
  BTN_NEW_PROJECT: (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('button', {
    id: 'btn-new-project',
    innerText: "Add Project",
  }),
  BTN_NEW_TASK: (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('button', {
    id: 'btn-new-task',
    innerText: 'Add Task',
  }),

  init() {
    function removeDuplicateUnassignedProjects() {
      const projects = _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
      console.log(projects)
      const unassignedProjects = Object.values(projects).filter(project => {
        console.log(project.name); // add this line
        return project.name === 'Unassigned';
      });
      console.log(unassignedProjects);
      if (unassignedProjects.length > 1) {
        unassignedProjects.slice(1).forEach(project => {
          _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(project);
          this.renderProjects();
        });
      } else if (unassignedProjects.length === 0) {
        //Create a new project for all unassigned tasks
        const UNASSIGNED_PROJECT = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unassigned');
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveProject(UNASSIGNED_PROJECT);
      }
    }
    
    removeDuplicateUnassignedProjects();

    //Populate projects & tasks list
    this.renderProjects();
    this.renderTasks();
    //Append buttons
    this.ADD_PROJECT_DIV.appendChild(this.BTN_NEW_PROJECT);
    this.ADD_TASK_DIV.appendChild(this.BTN_NEW_TASK);
   //Add a click handler to entire document
    document.getElementById('content').addEventListener('click', (event) => {
      const targetElement = event.target;

      if (targetElement.id === 'header') {
        console.log("You clicked on the header!")
      } else if (targetElement.id === 'btn-new-project') {
        this.generateProjectForm();
      } else if (targetElement.id === 'btn-new-task') {
        this.generateTaskForm();
      } else if (targetElement.classList.contains('btn-cancel')) {
        this.hide(this.MODAL);
        this.hide(this.OVERLAY);
      } else if (targetElement.classList.contains('btn-delete-project')) {
        let projectUuid = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findUuidOfHtmlItem)(targetElement, 'project');
        let projectToDelete = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findItemWithUuid)(projectUuid, 'project');
        (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(projectToDelete, 'project');
      } else if (targetElement.classList.contains('btn-edit-project')) {
        let projectUuid = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findUuidOfHtmlItem)(targetElement, 'project');
        let projectToEdit = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findItemWithUuid)(projectUuid, 'project');
        this.generateProjectForm(projectToEdit);
      } else if (targetElement.classList.contains('existing-project-name')) {
        //Click into that project
        let projectUuid = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findUuidOfHtmlItem)(targetElement, 'project');
        let projectClicked = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findItemWithUuid)(projectUuid, 'project');
        if (this.SELECTED_PROJECT === null) {
          this.selectProject(projectClicked);
        } else if (this.SELECTED_PROJECT.uuid === projectClicked.uuid) {
          this.unselectProject();
        } else if (this.SELECTED_PROJECT.uuid !== projectClicked.uuid) {
          this.unselectProject();
          this.selectProject(projectClicked);
        }
        console.log(`You've clicked on ${projectClicked.name}`);
      } else if (targetElement.classList.contains('btn-delete-task')) {
        let taskUuid = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findUuidOfHtmlItem)(targetElement, 'task');
        let taskToDelete = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findItemWithUuid)(taskUuid, 'task');
        (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(taskToDelete,'task');
      } else if (targetElement.classList.contains('btn-edit-task')) {
        let taskUuid = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findUuidOfHtmlItem)(targetElement, 'task');
        let taskToEdit = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findItemWithUuid)(taskUuid, 'task');
        this.generateTaskForm(taskToEdit);
      }
    })
  },

  selectProject(project) {
    this.SELECTED_PROJECT = project;
    let selectedProjectContainer = document.querySelector(`#${project.uuid}`);
    
    selectedProjectContainer.classList.toggle('selected-project')
    this.updateHeader(project);
    this.renderTasks(project);
    this.updateTaskButton(project);
  },

  unselectProject() {
    let previousProjectContainer = document.querySelector(`#${this.SELECTED_PROJECT.uuid}`);
    this.SELECTED_PROJECT = null;

    previousProjectContainer.classList.toggle('selected-project')
    this.updateHeader();
    this.renderTasks();
    this.updateTaskButton();
  },

  updateTaskButton(project) {
    if (project) {
      this.BTN_NEW_TASK.innerText = `Add Task to ${project.name}`;
    } else {
      this.BTN_NEW_TASK.innerText = 'Add Task';
    }
  },

  updateHeader(project) {
    if (project) {
      let previousHeader = document.querySelector('.nav-block');
      previousHeader.remove();

      let headerProjectDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['nav-block-project'],
        appendTo: this.HEADER,
      })
      ;(0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('h1', {
        innerText: `${project.name}`,
        appendTo: headerProjectDiv
      })
    } else {
      let previousProjectContainer = document.querySelector('.nav-block-project');
      previousProjectContainer.remove();

      let headerDefaultDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['nav-block'],
        appendTo: this.HEADER,
      })
      ;(0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('h1', {
        innerText: 'All Tasks',
        appendTo: headerDefaultDiv
      })
    }
  },

  renderProjects() {
    this.CURRENT_PROJECTS.innerHTML = '';

    Object.values(_list_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects()).forEach(project => {
      const existingProjectDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-project'],
        id: project.uuid,
        appendTo: this.CURRENT_PROJECTS,
      });
      
      const existingProjectName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-project-name'],
        innerText: project.name,
        appendTo: existingProjectDiv,
      });

      const existingProjectNumTasks = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-project-num-tasks'],
        innerText: `Tasks: ${Object.keys(project.tasks).length}`,
        appendTo: existingProjectDiv,
      });
      
      const existingProjectButtons = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-project-buttons'],
        appendTo: existingProjectDiv,
      });

      const editIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('Image', {
        classes: ['btn-edit-project','icon'],
        src: _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_5__,
        appendTo: existingProjectButtons,
      });

      const deleteIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('Image', {
        src: _assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__,
        classes: ['icon', 'btn-delete-project'],
        appendTo: existingProjectButtons,
      });
    })
  },

  renderTasks(project) {
    this.CURRENT_TASKS.innerHTML = '';
    console.log(_list_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks());
    let tasksToBeRendered = project ? project.tasks : _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();

    
    Object.values(tasksToBeRendered).forEach(task => {

      const projects = Object.values(_list_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects());
      // Find the project where the project's tasks object has a key matching the task's UUID
      const existingTaskProjectObj = projects.find(project => Object.keys(project.tasks).includes(task.uuid));
      // If we found such a project, use its name as the innerText, otherwise use an empty string
      const existingTaskProjectName = existingTaskProjectObj ? existingTaskProjectObj.name : '';
      
      const existingTaskDiv = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task'],
        id: task.uuid,
        appendTo: this.CURRENT_TASKS,
      });

      const existingTaskDetails = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task-details'],
        appendTo: existingTaskDiv,
      })
      
      const existingTaskName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task-name'],
        innerText: task.name,
        appendTo: existingTaskDetails,
      });

      const existingTaskDescription = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task-description'],
        innerText: (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.truncateString)(task.description, 50),
        appendTo: existingTaskDetails,
      });

      const existingTaskProject = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task-project'],
        innerText: existingTaskProjectName,
        appendTo: existingTaskDetails,
      });

      const existingTaskStatus = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task-status'],
        innerText: task.status,
        appendTo: existingTaskDetails,
      });

      switch (task.priority) {
        case 'Low':
          existingTaskDiv.classList.add('low-priority');
          break;
        case 'Medium':
          existingTaskDiv.classList.add('medium-priority');
          break;
        case 'High':
          existingTaskDiv.classList.add('high-priority');
          break;
      }

      const existingTaskButtons = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
        classes: ['existing-task-buttons'],
        appendTo: existingTaskDiv,
      })
      
      const editIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('Image', {
        src: _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_5__,
        classes: ['icon','btn-edit-task'],
        appendTo: existingTaskButtons,
      });

      const deleteIcon = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('Image', {
        src: _assets_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__,
        classes: ['icon','btn-delete-task'],
        appendTo: existingTaskButtons,
      });
    })
  },

  hide(element) {
    element.classList.add('hidden');
  },

  unhide(element) {
    element.classList.remove('hidden');
  },

  generateProjectForm(project) {
    this.unhide(this.MODAL);
    this.unhide(this.OVERLAY);
    this.MODAL.innerHTML = ''
    
    let projectForm = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('form', {
      id: 'project',
      attributes: {
        name: 'project'
      },
      appendTo: this.MODAL,
    });

    let divProjectName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: projectForm,
    });
  
    let labelProjectName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Project Name',
      attributes: {
        for: 'project-name'
      },
      appendTo: divProjectName,
    });

    let inputProjectName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('input', {
      id: 'project-name',
      type: 'text',
      value: project ? project.name : '',
      attributes: {
        required: true,
      },
      appendTo: divProjectName,
    });

    let divFormBtns = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row-btns'],
      appendTo: projectForm,
    })
    
    let buttonAction = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('button', {
      id: 'btn-action-project',
      type: 'submit',
      innerText: project ? 'Save' : 'Add',
      appendTo: divFormBtns,
    });

    let buttonCancel = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('button', {
      classes: ['btn-cancel'],
      type: 'button',
      innerText: 'Cancel',
      appendTo: divFormBtns,
    });

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const PROJECT_NAME = inputProjectName.value;
      
      if (project) {
        project.name = PROJECT_NAME;
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveProject(project);
      } else {
        const NEW_PROJECT = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](PROJECT_NAME);
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveProject(NEW_PROJECT);
      }

      this.renderProjects();
      this.hide(this.MODAL);
      this.hide(this.OVERLAY);
    })
  },

  generateTaskForm(task) {
    this.unhide(this.MODAL);
    this.unhide(this.OVERLAY);

    this.MODAL.innerHTML = ''; 

    let taskForm = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('form', {
      id: 'task',
      attributes: {
        name: 'task'
      },
      appendTo: this.MODAL,
    });

    let divTaskName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Name',
      attributes: {
        for: 'task-name'
      },
      appendTo: divTaskName,
    });

    let inputTaskName = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('input', {
      id: 'task-name',
      type: 'text',
      attributes: {
        required: true,
      },
      value: task ? task.name : '',
      appendTo: divTaskName,
    });

    let divTaskDescription = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskDescription = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Description',
      attributes: {
        for: 'task-description'
      },
      appendTo: divTaskDescription,
    });

    let inputTaskDescription = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('textarea', {
      id: 'task-description',
      value: task ? task.description : '',
      appendTo: divTaskDescription,
    });

    let divTaskProject = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskProject = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Project',
      attributes: {
        for: 'task-project'
      },
      appendTo: divTaskProject,
    });
    
    let inputTaskProject = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('select', {
      id: 'task-project',
      value: task ? 'A task-project name placeholder' : '',
      disabled: this.SELECTED_PROJECT,
      attributes: {
        required: true,
      },
      appendTo: divTaskProject,
    });

    Object.values(_list_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects()).forEach(project => {
      let taskProjectUuid;
      if (task) {
      let taskProject = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findTaskInProjects)(task.uuid);
      if (taskProject) {
        taskProjectUuid = taskProject.uuid;
      }
  }

      (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('option', {
        value: project.uuid,
        innerText: project.name,
        selected: project.uuid === taskProjectUuid,
        appendTo: inputTaskProject,
      })
    })

    let divTaskDueDate = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskDueDate = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Due Date',
      attributes: {
        for: 'task-due-date'
      },
      appendTo: divTaskDueDate,
    });

    let inputTaskDueDate = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('input', {
      id: 'task-due-date',
      type: 'date',
      value: task ? task.dueDate : '',
      appendTo: divTaskDueDate,
    });

    let divTaskStatus = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskStatus = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Status',
      attributes: {
        for: 'task-status'
      },
      appendTo: divTaskStatus,
    });

    let inputTaskStatus = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('select', {
      id: 'task-status',
      value: task ? task.status : '',
      appendTo: divTaskStatus,
    });

    this.TASK_STATUSES.forEach(status => {
      (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('option', {
        value: status,
        innerText: status,
        appendTo: inputTaskStatus,
      })
    })

    let divTaskPriority = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row'],
      appendTo: taskForm,
    });

    let labelTaskPriority = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('label', {
      innerText: 'Priority',
      attributes: {
        for: 'task-priority'
      },
      appendTo: divTaskPriority,
    });

    let inputTaskPriority = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('select', {
      id: 'task-priority',
      value: task ? task.priority : '',
      appendTo: divTaskPriority,
    });

    this.TASK_PRIORITIES.forEach(priority => {
      (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('option', {
        value: priority,
        innerText: priority,
        appendTo: inputTaskPriority,
      })
    })

    let divFormBtns = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('div', {
      classes: ['form-row-btns'],
      appendTo: taskForm,
    })
    
    let buttonAdd = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('button', {
      id: 'btn-action-task',
      type: 'submit',
      innerText: task ? 'Save' : 'Add',
      appendTo: divFormBtns,
    });

    let buttonCancel = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.createElement)('button', {
      classes: ['btn-cancel'],
      type: 'button',
      innerText: 'Cancel',
      appendTo: divFormBtns,
    });

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const TASK_NAME = inputTaskName.value;
      const TASK_DESCRIPTION = inputTaskDescription.value;
      const TASK_PROJECT = _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].findProject(inputTaskProject.value);
      const TASK_DUE_DATE = inputTaskDueDate.value;
      const TASK_STATUS = inputTaskStatus.value;
      const TASK_PRIORITY = inputTaskPriority.value;
      
      if (task) {
        task.name = TASK_NAME;
        task.description = TASK_DESCRIPTION;
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTaskToProject(task, TASK_PROJECT)
        task.dueDate = TASK_DUE_DATE;
        task.status = TASK_STATUS;
        task.priority = TASK_PRIORITY;
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveTask(task);
      } else {
        const NEW_TASK = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](TASK_NAME, TASK_DESCRIPTION, TASK_DUE_DATE, TASK_STATUS, TASK_PRIORITY);
        
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveTask(NEW_TASK);
        _list_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTaskToProject(NEW_TASK, TASK_PROJECT)
      }

      this.renderTasks();
      this.renderProjects();
      this.hide(this.MODAL);
      this.hide(this.OVERLAY);
    })
  }
}

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
//import Storage from './storage.js';





class List {
  static projects = {};
  static tasks = {};

  static setProjects(projectList) {
    let storageProjectList = projectList;
    Object.keys(storageProjectList)
      .forEach(key => {
        console.log(storageProjectList[key]);
        Object.assign(this.projects, storageProjectList[key]);
        console.log(List.projects);
      });
  }

  static getTasks() {
    let storageTasks = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
    let numStorageTasks = Object.keys(storageTasks).length;
    if (numStorageTasks > 0) {
      Object.values(storageTasks).forEach(task => {
        let newTask = Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](), task);
        List.saveTask(newTask);
      })
    } else if (numStorageTasks === 0) {
      this.tasks = {};
    }
    return this.tasks;
  }

  static getProjects() {
    let storageProjects = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
    let numStorageProjects = Object.keys(storageProjects).length;
    Object.values(storageProjects).forEach(project => {
      let newProject = Object.assign(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](), project);
      List.saveProject(newProject);
    })
    return this.projects;
  }

  static findTask(uuid) {
    return this.getTasks()[uuid];
  }

  static findProject(uuid) {
    return this.getProjects()[uuid];
  }

  static setTasks(taskList) {
    Object.assign(this.tasks, taskList)
  }

  static saveProject(project) {
    this.projects[project.uuid] = project;
    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveProject(project);
  }

  static saveTask(task) {
    this.tasks[task.uuid] = task;
    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveTask(task);
  }

  static addTaskToProject(task, project) {
    //Search for the task's UUID in projects' tasks
    let oldProject;

    if ((0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findTaskInProjects)(task.uuid)) {
      oldProject = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.findTaskInProjects)(task.uuid);
      oldProject.removeTask(task);
      _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveProject(oldProject);
    }
    
    let newProject = project;

    newProject.addTask(task);
    console.log(newProject);
    console.log(oldProject);

    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].saveProject(newProject);
    
  }

  static deleteProject(project) {
    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(project);
    delete this.projects[project.uuid];
  }

  static deleteTask(task) {
    _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(task);
    delete this.tasks[task.uuid];
  }
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid.js */ "./src/uuid.js");


class Project {
  constructor(name) {
    this.name = name;
    this.tasks = {};
    this.uuid = (0,_uuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  getName() {
    return this.name;
  }

  getUuid() {
    return this.uuid;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks[task.uuid] = task;
  }

  removeTask(task) {
    delete this.tasks[task.uuid];
  }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
//import Task from './task.js';
//import Project from './project.js';

class Storage {
  
  static tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
  static projects = JSON.parse(localStorage.getItem('projects') || '{}');

  static updateStorage(storageName) {
    const storageKey = storageName;
    const storageObject = Storage[storageName];
    localStorage.setItem(storageKey, JSON.stringify(storageObject));
  }

  static getTasks() {
    console.log(Storage.tasks);
    return Storage.tasks;
  }

  static getProjects() {
    console.log(Storage.projects);
    return Storage.projects;
  }

  static saveTask(task) {
    Storage.tasks[task.uuid] = task;
    Storage.updateStorage('tasks');
  }

  static deleteTask(task) {
    delete Storage.tasks[task.uuid];
    Storage.updateStorage('tasks');
  }

  static deleteAllTasks() {
    Storage.tasks = {};
    Storage.updateStorage('tasks');
  }

  static saveProject(project) {
    Storage.projects[project.uuid] = project;
    Storage.updateStorage('projects');
  }

  static deleteProject(project) {
    delete Storage.projects[project.uuid];
    Storage.updateStorage('projects');
  }

  static deleteAllProjects() {
    Storage.projects = {};
    Storage.updateStorage('projects');
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uuid.js */ "./src/uuid.js");


class Task {
  constructor(name, description, dueDate, status, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.priority = priority;
    this.uuid = (0,_uuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  getName() {
    return this.name;
  }

  setName(value) {
    this.name = value;
  }

  getDescription() {
    return this.description;
  }
  
  setDescription(value) {
    this.description = value;
  }

  getProject() {
    return this.project;
  }

  setProject(value) {
    this.project = value;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(value) {
    this.dueDate = value;
  }

  getStatus() {
    return this.status;
  }

  setStatus(value) {
    this.status = value;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(value) {
    this.priority = value;
  }

  getUuid() {
    return this.uuid;
  }
}

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "findItemWithUuid": () => (/* binding */ findItemWithUuid),
/* harmony export */   "findTaskInProjects": () => (/* binding */ findTaskInProjects),
/* harmony export */   "findUuidOfHtmlItem": () => (/* binding */ findUuidOfHtmlItem),
/* harmony export */   "truncateString": () => (/* binding */ truncateString)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/list.js");



function createElement(type, options = {}) {
  let element;

  if (type === 'Image') {
    element = new Image();
  } else {
    element = document.createElement(type);
  }

  if (options.value) { element.value = options.value}
  if (options.id) { element.id = options.id }
  if (options.classes) { element.classList.add(...options.classes) }
  if (options.name) { element.name = options.name }
  if (options.type) { element.type = options.type }
  if (options.innerText) { element.innerText = options.innerText }
  if (options.src) { element.src = options.src }
  if (options.appendTo) { options.appendTo.appendChild(element) }
  if (options.selected) { element.selected = options.selected }
  if (options.disabled) { element.disabled = options.disabled }
  if (options.insertBefore && options.insertBefore.parentElement) { options.insertBefore.parentElement.insertBefore(element, options.insertBefore); }

  if (options.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      element.setAttribute(key, value);
    }
  }
  return element;
}

function findUuidOfHtmlItem(item, itemType) {
  return item.closest('.existing-' + itemType).id;
}

function findItemWithUuid(uuid, itemType) {
  if (itemType === 'task') {
    return _list_js__WEBPACK_IMPORTED_MODULE_1__["default"].findTask(uuid);
  } else {
    return _list_js__WEBPACK_IMPORTED_MODULE_1__["default"].findProject(uuid);
  }
}

function deleteItem(target, itemType) {
  if (itemType === 'task') {
    _list_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(target);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.renderTasks();
  } else {
    _list_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(target);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.DOM.renderProjects();
  }
}

function truncateString(string, n){
  return (string.length > n) ? string.slice(0, n-1) + '...' : string;
};

function findTaskInProjects(taskUuid) {
  for (const project of Object.values(_list_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects())) {
    const tasks = Object.values(project.tasks);
    for (const task of tasks) {
      if (task.uuid === taskUuid) {
        return project;
      }
    }
  }
  return null;
}

/***/ }),

/***/ "./src/uuid.js":
/*!*********************!*\
  !*** ./src/uuid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateUuid)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


let existingUuids = [];

function generateUuid() {
  let newUuid = `uuid_${(0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()}`;
  if (existingUuids.includes(newUuid)) {
    generateUuid();
  } else {
    existingUuids.push(newUuid);
  }
  return newUuid;
}

/***/ }),

/***/ "./assets/pencil-outline.svg":
/*!***********************************!*\
  !*** ./assets/pencil-outline.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3161d6d390733b4419ec.svg";

/***/ }),

/***/ "./assets/trash-can-outline.svg":
/*!**************************************!*\
  !*** ./assets/trash-can-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22b9e293491f5358c159.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







//for development testing
window.Task = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"];
window.Project = _project_js__WEBPACK_IMPORTED_MODULE_1__["default"];
window.Storage = _storage_js__WEBPACK_IMPORTED_MODULE_2__["default"];
window.DOM = _dom_js__WEBPACK_IMPORTED_MODULE_3__.DOM;
//end

_dom_js__WEBPACK_IMPORTED_MODULE_3__.DOM.init();

/* const testTask = new Task('Test Task','This is a test','','','','','');
const testTask2 = new Task('Test Task 2','This is a test 2','','','','','');
const testTask3 = new Task('Test Task 2','This is a test 2','','','','','');



testStore.saveTask(testTask);
testStore.saveTask(testTask2);
testStore.saveTask(testTask3);

console.log(testStore);
console.log(testStore.taskList);
console.log(testStore.projectList);

DOM.renderList(testStore.taskList,'task');
DOM.renderList(testStore.projectList,'project'); */

/* const testTask = new Task('Test Task','This is a test','','','','','');
const testProj = new Project("Test Project");
const testStore = new Storage();
testStore.deleteAllTasks();
testStore.deleteAllProjects();
console.log(testTask);
testProj.addTask(testTask);
testStore.saveTask(testTask);
testStore.saveProject(testProj);
console.log(testProj);
console.log(testStore);
testProj.removeTask(testTask);
//testStore.deleteTask(testTask);
console.log(testProj);
console.log(testStore); */
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsNkJBQTZCLGtDQUFrQyxpQ0FBaUMsbUNBQW1DLGdDQUFnQyxxQ0FBcUMsaUNBQWlDLHdDQUF3Qyx1Q0FBdUMsOEJBQThCLGdDQUFnQyw4QkFBOEIsMkJBQTJCLHVDQUF1QyxrQkFBa0IsNEJBQTRCLEdBQUcsVUFBVSxzQkFBc0IscUJBQXFCLGdDQUFnQyxLQUFLLFVBQVUsbUJBQW1CLEdBQUcsWUFBWSxpQkFBaUIsaUJBQWlCLHNDQUFzQyx3QkFBd0IscUJBQXFCLGlCQUFpQixvQkFBb0Isd0JBQXdCLHlCQUF5Qix1Q0FBdUMscUJBQXFCLHNCQUFzQixHQUFHLGtCQUFrQixxQ0FBcUMsd0JBQXdCLCtCQUErQixHQUFHLFdBQVcsc0JBQXNCLHVCQUF1QixHQUFHLFFBQVEscUJBQXFCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLGtCQUFrQixvQ0FBb0MsdUJBQXVCLG1CQUFtQixvQ0FBb0MsdUNBQXVDLHFCQUFxQixHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGtCQUFrQix1QkFBdUIsaUNBQWlDLDZDQUE2QyxHQUFHLFlBQVksdUJBQXVCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLGFBQWEsa0JBQWtCLHNDQUFzQyxnQ0FBZ0MsZUFBZSxHQUFHLGNBQWMsb0JBQW9CLFdBQVcsY0FBYyxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixrQ0FBa0MsK0JBQStCLGVBQWUsR0FBRyx1QkFBdUIsaUJBQWlCLGlCQUFpQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQiw2Q0FBNkMsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsdUJBQXVCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsZ0NBQWdDLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLG9DQUFvQyxpQkFBaUIsa0JBQWtCLG9CQUFvQixHQUFHLDRCQUE0QixnQkFBZ0Isc0JBQXNCLHdCQUF3QixHQUFHLCtCQUErQixrQkFBa0IscUJBQXFCLDRCQUE0QixHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0QixHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLG9DQUFvQyxpQkFBaUIsa0JBQWtCLG9CQUFvQixHQUFHLG1CQUFtQixzQ0FBc0MsR0FBRyxzQkFBc0IseUNBQXlDLEdBQUcsb0JBQW9CLHVDQUF1QyxHQUFHLHlCQUF5QixxQkFBcUIsc0JBQXNCLHdCQUF3QixHQUFHLHNGQUFzRixnQ0FBZ0MsMEJBQTBCLEdBQUcsNEJBQTRCLDBDQUEwQyx1QkFBdUIsb0JBQW9CLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyxvQkFBb0IsZ0JBQWdCLEdBQUcsV0FBVywyQ0FBMkMsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsR0FBRyxpQkFBaUIsc0NBQXNDLGdDQUFnQywyQkFBMkIsR0FBRyx1QkFBdUIsb0NBQW9DLHdCQUF3QiwrQkFBK0IsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsaUNBQWlDLDZCQUE2QixrQ0FBa0MsaUNBQWlDLG1DQUFtQyxnQ0FBZ0MscUNBQXFDLGlDQUFpQyx3Q0FBd0MsdUNBQXVDLDhCQUE4QixnQ0FBZ0MsOEJBQThCLDJCQUEyQix1Q0FBdUMsa0JBQWtCLDRCQUE0QixHQUFHLFVBQVUsc0JBQXNCLHFCQUFxQixnQ0FBZ0MsS0FBSyxVQUFVLG1CQUFtQixHQUFHLFlBQVksaUJBQWlCLGlCQUFpQixzQ0FBc0Msd0JBQXdCLHFCQUFxQixpQkFBaUIsb0JBQW9CLHdCQUF3Qix5QkFBeUIsdUNBQXVDLHFCQUFxQixzQkFBc0IsR0FBRyxrQkFBa0IscUNBQXFDLHdCQUF3QiwrQkFBK0IsR0FBRyxXQUFXLHNCQUFzQix1QkFBdUIsR0FBRyxRQUFRLHFCQUFxQixvQkFBb0IsNkJBQTZCLDJCQUEyQixrQkFBa0Isb0NBQW9DLHVCQUF1QixtQkFBbUIsb0NBQW9DLHVDQUF1QyxxQkFBcUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsb0JBQW9CLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLDRCQUE0QixrQkFBa0IsdUJBQXVCLGlDQUFpQyw2Q0FBNkMsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHVCQUF1QixhQUFhLGtCQUFrQixzQ0FBc0MsZ0NBQWdDLGVBQWUsR0FBRyxjQUFjLG9CQUFvQixXQUFXLGNBQWMsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsa0NBQWtDLCtCQUErQixlQUFlLEdBQUcsdUJBQXVCLGlCQUFpQixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGdCQUFnQixrQkFBa0IsNkNBQTZDLEdBQUcsY0FBYyxpQkFBaUIsa0JBQWtCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLEdBQUcsdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLGdDQUFnQyxHQUFHLG1DQUFtQyx5QkFBeUIsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQixvQ0FBb0MsaUJBQWlCLGtCQUFrQixvQkFBb0IsR0FBRyw0QkFBNEIsZ0JBQWdCLHNCQUFzQix3QkFBd0IsR0FBRywrQkFBK0Isa0JBQWtCLHFCQUFxQiw0QkFBNEIsR0FBRyx1QkFBdUIsc0NBQXNDLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsR0FBRyxvQkFBb0Isa0JBQWtCLG1DQUFtQyxvQ0FBb0MsaUJBQWlCLGtCQUFrQixvQkFBb0IsR0FBRyxtQkFBbUIsc0NBQXNDLEdBQUcsc0JBQXNCLHlDQUF5QyxHQUFHLG9CQUFvQix1Q0FBdUMsR0FBRyx5QkFBeUIscUJBQXFCLHNCQUFzQix3QkFBd0IsR0FBRyxzRkFBc0YsZ0NBQWdDLDBCQUEwQixHQUFHLDRCQUE0QiwwQ0FBMEMsdUJBQXVCLG9CQUFvQix1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUNBQW1DLEdBQUcsb0JBQW9CLGdCQUFnQixHQUFHLFdBQVcsMkNBQTJDLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLEdBQUcsaUJBQWlCLHNDQUFzQyxnQ0FBZ0MsMkJBQTJCLEdBQUcsdUJBQXVCLG9DQUFvQyx3QkFBd0IsK0JBQStCLEdBQUcsbUJBQW1CO0FBQ3R2VjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSxpRUFBZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNIRCxpRUFBZSxjQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUcseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0FwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx3REFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDUztBQUNOO0FBQ3NCOztBQUVqRDtBQUNBLE1BQU0sNkRBQWlCO0FBQ3ZCLFdBQVcsNkRBQWlCO0FBQzVCOztBQUVBO0FBQ0EsaURBQWlELCtDQUFHLEtBQUs7O0FBRXpEO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLDhEQUFlO0FBQ3hCOztBQUVBLGlFQUFlLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQzVCYzs7QUFFL0I7QUFDQSxxQ0FBcUMsc0RBQVU7QUFDL0M7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTTtBQUNNO0FBQ25DO0FBQzZCO0FBQ3NHOztBQUUxRTtBQUNMOztBQUU3QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBYTtBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNILGdCQUFnQiwwREFBYTtBQUM3QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsdUJBQXVCLDREQUFnQjtBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOERBQWtCO0FBQzVCO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBLHVDQUF1QyxtREFBTztBQUM5QyxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSLDBCQUEwQiwrREFBa0I7QUFDNUMsOEJBQThCLDZEQUFnQjtBQUM5QyxRQUFRLHVEQUFVO0FBQ2xCLFFBQVE7QUFDUiwwQkFBMEIsK0RBQWtCO0FBQzVDLDRCQUE0Qiw2REFBZ0I7QUFDNUM7QUFDQSxRQUFRO0FBQ1I7QUFDQSwwQkFBMEIsK0RBQWtCO0FBQzVDLDZCQUE2Qiw2REFBZ0I7QUFDN0M7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsb0JBQW9CO0FBQzdELFFBQVE7QUFDUix1QkFBdUIsK0RBQWtCO0FBQ3pDLDJCQUEyQiw2REFBZ0I7QUFDM0MsUUFBUSx1REFBVTtBQUNsQixRQUFRO0FBQ1IsdUJBQXVCLCtEQUFrQjtBQUN6Qyx5QkFBeUIsNkRBQWdCO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsOERBQThELGFBQWE7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSw4REFBOEQsMkJBQTJCO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEUsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QiwwREFBYTtBQUMxQztBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sMkRBQWE7QUFDbkIsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsNkJBQTZCLDBEQUFhO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSwyREFBYTtBQUNuQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGtCQUFrQiw0REFBZ0I7QUFDbEMsaUNBQWlDLDBEQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGtDQUFrQywwREFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHNDQUFzQywwREFBYTtBQUNuRDtBQUNBLDZCQUE2QixrQ0FBa0M7QUFDL0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxxQ0FBcUMsMERBQWE7QUFDbEQ7QUFDQTtBQUNBLE9BQU87O0FBRVAsdUJBQXVCLDBEQUFhO0FBQ3BDO0FBQ0EsYUFBYSx1REFBUTtBQUNyQjtBQUNBLE9BQU87O0FBRVAseUJBQXlCLDBEQUFhO0FBQ3RDLGFBQWEsMERBQVU7QUFDdkI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFhO0FBQzdCLHNEQUFzRCx5REFBYTs7QUFFbkU7QUFDQTs7QUFFQSxxQ0FBcUMsNERBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMERBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxrQ0FBa0MsMERBQWE7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLCtCQUErQiwwREFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHNDQUFzQywwREFBYTtBQUNuRDtBQUNBLG1CQUFtQiwyREFBYztBQUNqQztBQUNBLE9BQU87O0FBRVAsa0NBQWtDLDBEQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsaUNBQWlDLDBEQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsMERBQWE7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QiwwREFBYTtBQUNwQyxhQUFhLHVEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHlCQUF5QiwwREFBYTtBQUN0QyxhQUFhLDBEQUFVO0FBQ3ZCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMLHlCQUF5QiwwREFBYTtBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLDBEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCLDBEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMLHNCQUFzQiwwREFBYTtBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLDBEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx1QkFBdUIsMERBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QixRQUFRO0FBQ1IsZ0NBQWdDLG1EQUFPO0FBQ3ZDLFFBQVEsNERBQWdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsMERBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTCxzQkFBc0IsMERBQWE7QUFDbkM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsd0JBQXdCLDBEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUwsd0JBQXdCLDBEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMLDZCQUE2QiwwREFBYTtBQUMxQztBQUNBO0FBQ0EsS0FBSzs7QUFFTCwrQkFBK0IsMERBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTCwrQkFBK0IsMERBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx5QkFBeUIsMERBQWE7QUFDdEM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCLDBEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQiwwREFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTCxrQkFBa0IsNERBQWdCO0FBQ2xDO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sMERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTCx5QkFBeUIsMERBQWE7QUFDdEM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCLDBEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCLDBEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx3QkFBd0IsMERBQWE7QUFDckM7QUFDQTtBQUNBLEtBQUs7O0FBRUwsMEJBQTBCLDBEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUwsMEJBQTBCLDBEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLDBEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMLDBCQUEwQiwwREFBYTtBQUN2QztBQUNBO0FBQ0EsS0FBSzs7QUFFTCw0QkFBNEIsMERBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTCw0QkFBNEIsMERBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sMERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsc0JBQXNCLDBEQUFhO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0IsMERBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHVCQUF1QiwwREFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckIsUUFBUTtBQUNSLDZCQUE2QixnREFBSTtBQUNqQztBQUNBLFFBQVEseURBQWE7QUFDckIsUUFBUSxpRUFBcUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWtCQTtBQUNtQztBQUNOO0FBQ007QUFDZTs7QUFFbkM7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsdUJBQXVCLDREQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0RBQUk7QUFDNUM7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLCtEQUFtQjtBQUM3QztBQUNBO0FBQ0EseUNBQXlDLG1EQUFPO0FBQ2hEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksK0RBQW1CO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwrREFBa0I7QUFDMUIsbUJBQW1CLCtEQUFrQjtBQUNyQztBQUNBLE1BQU0sK0RBQW1CO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwrREFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQXFCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9GcUM7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFZO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7QUFFZTtBQUNmO0FBQ0EsZ0VBQWdFO0FBQ2hFLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRHFDOztBQUV0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBWTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EK0I7QUFDRjs7QUFFdEIseUNBQXlDO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsb0VBQW9FOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFdBQVcseURBQWE7QUFDeEIsSUFBSTtBQUNKLFdBQVcsNERBQWdCO0FBQzNCO0FBQ0E7O0FBRU87QUFDUDtBQUNBLElBQUksMkRBQWU7QUFDbkIsSUFBSSxvREFBZTtBQUNuQixJQUFJO0FBQ0osSUFBSSw4REFBa0I7QUFDdEIsSUFBSSx1REFBa0I7QUFDdEI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCxzQ0FBc0MsNERBQWdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVvQzs7QUFFcEM7O0FBRWU7QUFDZix3QkFBd0IsZ0RBQU0sR0FBRztBQUNqQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ007QUFDQTtBQUNKO0FBQ1Y7OztBQUdyQjtBQUNBLGNBQWMsZ0RBQUk7QUFDbEIsaUJBQWlCLG1EQUFPO0FBQ3hCLGlCQUFpQixtREFBTztBQUN4QixhQUFhLHdDQUFHO0FBQ2hCOztBQUVBLDZDQUFROztBQUVSO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dWlkLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJnOiByZ2IoMjUwLCAyNTAsIDI0Nyk7XFxuICAtLWJnbGlnaHQ6IHJnYmEoMjUsMjUsMjUsLjc1KTtcXG4gIC0tYmdkYXJrOiByZ2IoMjMzLCAyMzMsIDIyNyk7XFxuICAtLWJnc2VsZWN0OiByZ2IoMTk5LCAxOTksIDE0OSk7XFxuICAtLWNvbnRyYXN0OiByZ2IoMjUsIDI1LCAyNSk7XFxuICAtLWNvbnRyYXN0bGlnaHQ6IHJnYig5NSwgOTUsIDk1KTtcXG4gIC0tYm9yZGVyOiByZ2IoMTQ3LCAxNDUsIDExNCk7XFxuICAtLW92ZXJsYXktYmc6IHJnYmEoNTksIDU5LCA1OCwgMC41KTtcXG4gIC0tcHJvamVjdC1waWxsOiByZ2IoMTM0LCAxMzEsIDEwNyk7XFxuICAtLWxvdzogcmdiKDEyNSwgMTcxLCAxMjApO1xcbiAgLS1tZWRpdW06IHJnYigyMTIsIDIxMCwgNjkpO1xcbiAgLS1oaWdoOiByZ2IoMTg4LCAxMDEsIDcwKTtcXG4gIGNvbG9yOiB2YXIoLS1jb250cmFzdCk7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWluLXdpZHRoOiAzNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG5cXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRyYXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tYmcpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnbGlnaHQpO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb250cmFzdClcXG59XFxuXFxuaW5wdXQsc2VsZWN0LHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29udHJhc3QpO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0b3A6IDEwJTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb250cmFzdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW92ZXJsYXktYmcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbnRyYXN0KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRpdi1hZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3RzOmZpcnN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZXhpc3RpbmctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhpc3RpbmctcHJvamVjdC1uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZXhpc3RpbmctcHJvamVjdC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnc2VsZWN0KTtcXG59XFxuXFxuLmRpdi1hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leGlzdGluZy10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWxvdyk7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1tZWRpdW0pO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWhpZ2gpO1xcbn1cXG5cXG4uZXhpc3RpbmctdGFzay1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5leGlzdGluZy10YXNrLWR1ZS1kYXRlLCAuZXhpc3RpbmctdGFzay1kZXNjcmlwdGlvbiwgLmV4aXN0aW5nLXByb2plY3QtbnVtLXRhc2tzIHtcXG4gIGNvbG9yOiB2YXIoLS1jb250cmFzdGxpZ2h0KTtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuLmV4aXN0aW5nLXRhc2stcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LXBpbGwpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uZm9ybS1yb3ctYnRucyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYnRuLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb250cmFzdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICBjb2xvcjogdmFyKC0tY29udHJhc3QpO1xcbn1cXG5cXG4uYnRuLWNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7O0FBRTdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnOiByZ2IoMjUwLCAyNTAsIDI0Nyk7XFxuICAtLWJnbGlnaHQ6IHJnYmEoMjUsMjUsMjUsLjc1KTtcXG4gIC0tYmdkYXJrOiByZ2IoMjMzLCAyMzMsIDIyNyk7XFxuICAtLWJnc2VsZWN0OiByZ2IoMTk5LCAxOTksIDE0OSk7XFxuICAtLWNvbnRyYXN0OiByZ2IoMjUsIDI1LCAyNSk7XFxuICAtLWNvbnRyYXN0bGlnaHQ6IHJnYig5NSwgOTUsIDk1KTtcXG4gIC0tYm9yZGVyOiByZ2IoMTQ3LCAxNDUsIDExNCk7XFxuICAtLW92ZXJsYXktYmc6IHJnYmEoNTksIDU5LCA1OCwgMC41KTtcXG4gIC0tcHJvamVjdC1waWxsOiByZ2IoMTM0LCAxMzEsIDEwNyk7XFxuICAtLWxvdzogcmdiKDEyNSwgMTcxLCAxMjApO1xcbiAgLS1tZWRpdW06IHJnYigyMTIsIDIxMCwgNjkpO1xcbiAgLS1oaWdoOiByZ2IoMTg4LCAxMDEsIDcwKTtcXG4gIGNvbG9yOiB2YXIoLS1jb250cmFzdCk7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWluLXdpZHRoOiAzNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG5cXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRyYXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tYmcpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnbGlnaHQpO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb250cmFzdClcXG59XFxuXFxuaW5wdXQsc2VsZWN0LHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgXFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29udHJhc3QpO1xcbn1cXG5cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0b3A6IDEwJTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb250cmFzdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW92ZXJsYXktYmcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbnRyYXN0KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRpdi1hZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3RzOmZpcnN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZXhpc3RpbmctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW46IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhpc3RpbmctcHJvamVjdC1uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZXhpc3RpbmctcHJvamVjdC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnc2VsZWN0KTtcXG59XFxuXFxuLmRpdi1hZGQtdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5leGlzdGluZy10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWxvdyk7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1tZWRpdW0pO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWhpZ2gpO1xcbn1cXG5cXG4uZXhpc3RpbmctdGFzay1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5leGlzdGluZy10YXNrLWR1ZS1kYXRlLCAuZXhpc3RpbmctdGFzay1kZXNjcmlwdGlvbiwgLmV4aXN0aW5nLXByb2plY3QtbnVtLXRhc2tzIHtcXG4gIGNvbG9yOiB2YXIoLS1jb250cmFzdGxpZ2h0KTtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuLmV4aXN0aW5nLXRhc2stcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LXBpbGwpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uZm9ybS1yb3ctYnRucyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYnRuLWNhbmNlbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb250cmFzdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxuICBjb2xvcjogdmFyKC0tY29udHJhc3QpO1xcbn1cXG5cXG4uYnRuLWNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG4vL2ltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZGVsZXRlSXRlbSwgZmluZEl0ZW1XaXRoVXVpZCwgZmluZFV1aWRPZkh0bWxJdGVtLCB0cnVuY2F0ZVN0cmluZywgZmluZFRhc2tJblByb2plY3RzIH0gZnJvbSAnLi91dGlsaXR5LmpzJztcblxuaW1wb3J0IEljb25EZWxldGUgZnJvbSAnLi4vYXNzZXRzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgSWNvbkVkaXQgZnJvbSAnLi4vYXNzZXRzL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBET00gPSB7XG4gIFRBU0tfU1RBVFVTRVM6IFsnJywnVG8gZG8nLCdJbiBwcm9ncmVzcycsJ0NvbXBsZXRlZCddLFxuICBUQVNLX1BSSU9SSVRJRVM6IFsnJywnTG93JywnTWVkaXVtJywnSGlnaCddLFxuICBTRUxFQ1RFRF9QUk9KRUNUOiBudWxsLFxuICAvL3F1ZXJ5U2VsZWN0b3JzXG4gIENPTlRFTlQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JyksXG4gIEhFQURFUjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpLFxuICBDTlRSX1BST0pFQ1RTOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY250ci1wcm9qZWN0cycpLFxuICBBRERfUFJPSkVDVF9ESVY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXYtYWRkLXByb2plY3QnKSxcbiAgQ1VSUkVOVF9QUk9KRUNUUzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcHJvamVjdHMnKSxcbiAgQ05UUl9UQVNLUzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NudHItdGFza3MnKSxcbiAgQUREX1RBU0tfRElWOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2LWFkZC10YXNrJyksXG4gIENVUlJFTlRfVEFTS1M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRhc2tzJyksXG4gIE1PREFMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKSxcbiAgT1ZFUkxBWTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKSxcbiAgLy9jcmVhdGUgYnV0dG9ucyBmb3IgYWRkaW5nIG5ldyBwcm9qZWN0cyBhbmQgdGFza3NcbiAgQlROX05FV19QUk9KRUNUOiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgaWQ6ICdidG4tbmV3LXByb2plY3QnLFxuICAgIGlubmVyVGV4dDogXCJBZGQgUHJvamVjdFwiLFxuICB9KSxcbiAgQlROX05FV19UQVNLOiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgaWQ6ICdidG4tbmV3LXRhc2snLFxuICAgIGlubmVyVGV4dDogJ0FkZCBUYXNrJyxcbiAgfSksXG5cbiAgaW5pdCgpIHtcbiAgICBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVVbmFzc2lnbmVkUHJvamVjdHMoKSB7XG4gICAgICBjb25zdCBwcm9qZWN0cyA9IExpc3QuZ2V0UHJvamVjdHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgY29uc3QgdW5hc3NpZ25lZFByb2plY3RzID0gT2JqZWN0LnZhbHVlcyhwcm9qZWN0cykuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Lm5hbWUpOyAvLyBhZGQgdGhpcyBsaW5lXG4gICAgICAgIHJldHVybiBwcm9qZWN0Lm5hbWUgPT09ICdVbmFzc2lnbmVkJztcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codW5hc3NpZ25lZFByb2plY3RzKTtcbiAgICAgIGlmICh1bmFzc2lnbmVkUHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgICB1bmFzc2lnbmVkUHJvamVjdHMuc2xpY2UoMSkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICBMaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodW5hc3NpZ25lZFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvL0NyZWF0ZSBhIG5ldyBwcm9qZWN0IGZvciBhbGwgdW5hc3NpZ25lZCB0YXNrc1xuICAgICAgICBjb25zdCBVTkFTU0lHTkVEX1BST0pFQ1QgPSBuZXcgUHJvamVjdCgnVW5hc3NpZ25lZCcpO1xuICAgICAgICBMaXN0LnNhdmVQcm9qZWN0KFVOQVNTSUdORURfUFJPSkVDVCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUR1cGxpY2F0ZVVuYXNzaWduZWRQcm9qZWN0cygpO1xuXG4gICAgLy9Qb3B1bGF0ZSBwcm9qZWN0cyAmIHRhc2tzIGxpc3RcbiAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XG4gICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgIC8vQXBwZW5kIGJ1dHRvbnNcbiAgICB0aGlzLkFERF9QUk9KRUNUX0RJVi5hcHBlbmRDaGlsZCh0aGlzLkJUTl9ORVdfUFJPSkVDVCk7XG4gICAgdGhpcy5BRERfVEFTS19ESVYuYXBwZW5kQ2hpbGQodGhpcy5CVE5fTkVXX1RBU0spO1xuICAgLy9BZGQgYSBjbGljayBoYW5kbGVyIHRvIGVudGlyZSBkb2N1bWVudFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmlkID09PSAnaGVhZGVyJykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBjbGlja2VkIG9uIHRoZSBoZWFkZXIhXCIpXG4gICAgICB9IGVsc2UgaWYgKHRhcmdldEVsZW1lbnQuaWQgPT09ICdidG4tbmV3LXByb2plY3QnKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRFbGVtZW50LmlkID09PSAnYnRuLW5ldy10YXNrJykge1xuICAgICAgICB0aGlzLmdlbmVyYXRlVGFza0Zvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1jYW5jZWwnKSkge1xuICAgICAgICB0aGlzLmhpZGUodGhpcy5NT0RBTCk7XG4gICAgICAgIHRoaXMuaGlkZSh0aGlzLk9WRVJMQVkpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWRlbGV0ZS1wcm9qZWN0JykpIHtcbiAgICAgICAgbGV0IHByb2plY3RVdWlkID0gZmluZFV1aWRPZkh0bWxJdGVtKHRhcmdldEVsZW1lbnQsICdwcm9qZWN0Jyk7XG4gICAgICAgIGxldCBwcm9qZWN0VG9EZWxldGUgPSBmaW5kSXRlbVdpdGhVdWlkKHByb2plY3RVdWlkLCAncHJvamVjdCcpO1xuICAgICAgICBkZWxldGVJdGVtKHByb2plY3RUb0RlbGV0ZSwgJ3Byb2plY3QnKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1lZGl0LXByb2plY3QnKSkge1xuICAgICAgICBsZXQgcHJvamVjdFV1aWQgPSBmaW5kVXVpZE9mSHRtbEl0ZW0odGFyZ2V0RWxlbWVudCwgJ3Byb2plY3QnKTtcbiAgICAgICAgbGV0IHByb2plY3RUb0VkaXQgPSBmaW5kSXRlbVdpdGhVdWlkKHByb2plY3RVdWlkLCAncHJvamVjdCcpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlUHJvamVjdEZvcm0ocHJvamVjdFRvRWRpdCk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleGlzdGluZy1wcm9qZWN0LW5hbWUnKSkge1xuICAgICAgICAvL0NsaWNrIGludG8gdGhhdCBwcm9qZWN0XG4gICAgICAgIGxldCBwcm9qZWN0VXVpZCA9IGZpbmRVdWlkT2ZIdG1sSXRlbSh0YXJnZXRFbGVtZW50LCAncHJvamVjdCcpO1xuICAgICAgICBsZXQgcHJvamVjdENsaWNrZWQgPSBmaW5kSXRlbVdpdGhVdWlkKHByb2plY3RVdWlkLCAncHJvamVjdCcpO1xuICAgICAgICBpZiAodGhpcy5TRUxFQ1RFRF9QUk9KRUNUID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RQcm9qZWN0KHByb2plY3RDbGlja2VkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlNFTEVDVEVEX1BST0pFQ1QudXVpZCA9PT0gcHJvamVjdENsaWNrZWQudXVpZCkge1xuICAgICAgICAgIHRoaXMudW5zZWxlY3RQcm9qZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5TRUxFQ1RFRF9QUk9KRUNULnV1aWQgIT09IHByb2plY3RDbGlja2VkLnV1aWQpIHtcbiAgICAgICAgICB0aGlzLnVuc2VsZWN0UHJvamVjdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0UHJvamVjdChwcm9qZWN0Q2xpY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFlvdSd2ZSBjbGlja2VkIG9uICR7cHJvamVjdENsaWNrZWQubmFtZX1gKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1kZWxldGUtdGFzaycpKSB7XG4gICAgICAgIGxldCB0YXNrVXVpZCA9IGZpbmRVdWlkT2ZIdG1sSXRlbSh0YXJnZXRFbGVtZW50LCAndGFzaycpO1xuICAgICAgICBsZXQgdGFza1RvRGVsZXRlID0gZmluZEl0ZW1XaXRoVXVpZCh0YXNrVXVpZCwgJ3Rhc2snKTtcbiAgICAgICAgZGVsZXRlSXRlbSh0YXNrVG9EZWxldGUsJ3Rhc2snKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1lZGl0LXRhc2snKSkge1xuICAgICAgICBsZXQgdGFza1V1aWQgPSBmaW5kVXVpZE9mSHRtbEl0ZW0odGFyZ2V0RWxlbWVudCwgJ3Rhc2snKTtcbiAgICAgICAgbGV0IHRhc2tUb0VkaXQgPSBmaW5kSXRlbVdpdGhVdWlkKHRhc2tVdWlkLCAndGFzaycpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlVGFza0Zvcm0odGFza1RvRWRpdCk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3RQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLlNFTEVDVEVEX1BST0pFQ1QgPSBwcm9qZWN0O1xuICAgIGxldCBzZWxlY3RlZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0LnV1aWR9YCk7XG4gICAgXG4gICAgc2VsZWN0ZWRQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkLXByb2plY3QnKVxuICAgIHRoaXMudXBkYXRlSGVhZGVyKHByb2plY3QpO1xuICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgdGhpcy51cGRhdGVUYXNrQnV0dG9uKHByb2plY3QpO1xuICB9LFxuXG4gIHVuc2VsZWN0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJldmlvdXNQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5TRUxFQ1RFRF9QUk9KRUNULnV1aWR9YCk7XG4gICAgdGhpcy5TRUxFQ1RFRF9QUk9KRUNUID0gbnVsbDtcblxuICAgIHByZXZpb3VzUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZC1wcm9qZWN0JylcbiAgICB0aGlzLnVwZGF0ZUhlYWRlcigpO1xuICAgIHRoaXMucmVuZGVyVGFza3MoKTtcbiAgICB0aGlzLnVwZGF0ZVRhc2tCdXR0b24oKTtcbiAgfSxcblxuICB1cGRhdGVUYXNrQnV0dG9uKHByb2plY3QpIHtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgdGhpcy5CVE5fTkVXX1RBU0suaW5uZXJUZXh0ID0gYEFkZCBUYXNrIHRvICR7cHJvamVjdC5uYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuQlROX05FV19UQVNLLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUhlYWRlcihwcm9qZWN0KSB7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIGxldCBwcmV2aW91c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmxvY2snKTtcbiAgICAgIHByZXZpb3VzSGVhZGVyLnJlbW92ZSgpO1xuXG4gICAgICBsZXQgaGVhZGVyUHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NlczogWyduYXYtYmxvY2stcHJvamVjdCddLFxuICAgICAgICBhcHBlbmRUbzogdGhpcy5IRUFERVIsXG4gICAgICB9KVxuICAgICAgY3JlYXRlRWxlbWVudCgnaDEnLCB7XG4gICAgICAgIGlubmVyVGV4dDogYCR7cHJvamVjdC5uYW1lfWAsXG4gICAgICAgIGFwcGVuZFRvOiBoZWFkZXJQcm9qZWN0RGl2XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcHJldmlvdXNQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1ibG9jay1wcm9qZWN0Jyk7XG4gICAgICBwcmV2aW91c1Byb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgIGxldCBoZWFkZXJEZWZhdWx0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzc2VzOiBbJ25hdi1ibG9jayddLFxuICAgICAgICBhcHBlbmRUbzogdGhpcy5IRUFERVIsXG4gICAgICB9KVxuICAgICAgY3JlYXRlRWxlbWVudCgnaDEnLCB7XG4gICAgICAgIGlubmVyVGV4dDogJ0FsbCBUYXNrcycsXG4gICAgICAgIGFwcGVuZFRvOiBoZWFkZXJEZWZhdWx0RGl2XG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICByZW5kZXJQcm9qZWN0cygpIHtcbiAgICB0aGlzLkNVUlJFTlRfUFJPSkVDVFMuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBPYmplY3QudmFsdWVzKExpc3QuZ2V0UHJvamVjdHMoKSkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NlczogWydleGlzdGluZy1wcm9qZWN0J10sXG4gICAgICAgIGlkOiBwcm9qZWN0LnV1aWQsXG4gICAgICAgIGFwcGVuZFRvOiB0aGlzLkNVUlJFTlRfUFJPSkVDVFMsXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NlczogWydleGlzdGluZy1wcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgaW5uZXJUZXh0OiBwcm9qZWN0Lm5hbWUsXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Byb2plY3REaXYsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0TnVtVGFza3MgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzZXM6IFsnZXhpc3RpbmctcHJvamVjdC1udW0tdGFza3MnXSxcbiAgICAgICAgaW5uZXJUZXh0OiBgVGFza3M6ICR7T2JqZWN0LmtleXMocHJvamVjdC50YXNrcykubGVuZ3RofWAsXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Byb2plY3REaXYsXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0QnV0dG9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NlczogWydleGlzdGluZy1wcm9qZWN0LWJ1dHRvbnMnXSxcbiAgICAgICAgYXBwZW5kVG86IGV4aXN0aW5nUHJvamVjdERpdixcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBlZGl0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ0ltYWdlJywge1xuICAgICAgICBjbGFzc2VzOiBbJ2J0bi1lZGl0LXByb2plY3QnLCdpY29uJ10sXG4gICAgICAgIHNyYzogSWNvbkVkaXQsXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Byb2plY3RCdXR0b25zLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBjcmVhdGVFbGVtZW50KCdJbWFnZScsIHtcbiAgICAgICAgc3JjOiBJY29uRGVsZXRlLFxuICAgICAgICBjbGFzc2VzOiBbJ2ljb24nLCAnYnRuLWRlbGV0ZS1wcm9qZWN0J10sXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Byb2plY3RCdXR0b25zLFxuICAgICAgfSk7XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXJUYXNrcyhwcm9qZWN0KSB7XG4gICAgdGhpcy5DVVJSRU5UX1RBU0tTLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKExpc3QuZ2V0VGFza3MoKSk7XG4gICAgbGV0IHRhc2tzVG9CZVJlbmRlcmVkID0gcHJvamVjdCA/IHByb2plY3QudGFza3MgOiBMaXN0LmdldFRhc2tzKCk7XG5cbiAgICBcbiAgICBPYmplY3QudmFsdWVzKHRhc2tzVG9CZVJlbmRlcmVkKS5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICBjb25zdCBwcm9qZWN0cyA9IE9iamVjdC52YWx1ZXMoTGlzdC5nZXRQcm9qZWN0cygpKTtcbiAgICAgIC8vIEZpbmQgdGhlIHByb2plY3Qgd2hlcmUgdGhlIHByb2plY3QncyB0YXNrcyBvYmplY3QgaGFzIGEga2V5IG1hdGNoaW5nIHRoZSB0YXNrJ3MgVVVJRFxuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrUHJvamVjdE9iaiA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBPYmplY3Qua2V5cyhwcm9qZWN0LnRhc2tzKS5pbmNsdWRlcyh0YXNrLnV1aWQpKTtcbiAgICAgIC8vIElmIHdlIGZvdW5kIHN1Y2ggYSBwcm9qZWN0LCB1c2UgaXRzIG5hbWUgYXMgdGhlIGlubmVyVGV4dCwgb3RoZXJ3aXNlIHVzZSBhbiBlbXB0eSBzdHJpbmdcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFza1Byb2plY3ROYW1lID0gZXhpc3RpbmdUYXNrUHJvamVjdE9iaiA/IGV4aXN0aW5nVGFza1Byb2plY3RPYmoubmFtZSA6ICcnO1xuICAgICAgXG4gICAgICBjb25zdCBleGlzdGluZ1Rhc2tEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzZXM6IFsnZXhpc3RpbmctdGFzayddLFxuICAgICAgICBpZDogdGFzay51dWlkLFxuICAgICAgICBhcHBlbmRUbzogdGhpcy5DVVJSRU5UX1RBU0tTLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFza0RldGFpbHMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzZXM6IFsnZXhpc3RpbmctdGFzay1kZXRhaWxzJ10sXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Rhc2tEaXYsXG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zdCBleGlzdGluZ1Rhc2tOYW1lID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzc2VzOiBbJ2V4aXN0aW5nLXRhc2stbmFtZSddLFxuICAgICAgICBpbm5lclRleHQ6IHRhc2submFtZSxcbiAgICAgICAgYXBwZW5kVG86IGV4aXN0aW5nVGFza0RldGFpbHMsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzZXM6IFsnZXhpc3RpbmctdGFzay1kZXNjcmlwdGlvbiddLFxuICAgICAgICBpbm5lclRleHQ6IHRydW5jYXRlU3RyaW5nKHRhc2suZGVzY3JpcHRpb24sIDUwKSxcbiAgICAgICAgYXBwZW5kVG86IGV4aXN0aW5nVGFza0RldGFpbHMsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrUHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3NlczogWydleGlzdGluZy10YXNrLXByb2plY3QnXSxcbiAgICAgICAgaW5uZXJUZXh0OiBleGlzdGluZ1Rhc2tQcm9qZWN0TmFtZSxcbiAgICAgICAgYXBwZW5kVG86IGV4aXN0aW5nVGFza0RldGFpbHMsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrU3RhdHVzID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzc2VzOiBbJ2V4aXN0aW5nLXRhc2stc3RhdHVzJ10sXG4gICAgICAgIGlubmVyVGV4dDogdGFzay5zdGF0dXMsXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Rhc2tEZXRhaWxzLFxuICAgICAgfSk7XG5cbiAgICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgIGV4aXN0aW5nVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICBleGlzdGluZ1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgICAgIGV4aXN0aW5nVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFza0J1dHRvbnMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzZXM6IFsnZXhpc3RpbmctdGFzay1idXR0b25zJ10sXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Rhc2tEaXYsXG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zdCBlZGl0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ0ltYWdlJywge1xuICAgICAgICBzcmM6IEljb25FZGl0LFxuICAgICAgICBjbGFzc2VzOiBbJ2ljb24nLCdidG4tZWRpdC10YXNrJ10sXG4gICAgICAgIGFwcGVuZFRvOiBleGlzdGluZ1Rhc2tCdXR0b25zLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBjcmVhdGVFbGVtZW50KCdJbWFnZScsIHtcbiAgICAgICAgc3JjOiBJY29uRGVsZXRlLFxuICAgICAgICBjbGFzc2VzOiBbJ2ljb24nLCdidG4tZGVsZXRlLXRhc2snXSxcbiAgICAgICAgYXBwZW5kVG86IGV4aXN0aW5nVGFza0J1dHRvbnMsXG4gICAgICB9KTtcbiAgICB9KVxuICB9LFxuXG4gIGhpZGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgdW5oaWRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9LFxuXG4gIGdlbmVyYXRlUHJvamVjdEZvcm0ocHJvamVjdCkge1xuICAgIHRoaXMudW5oaWRlKHRoaXMuTU9EQUwpO1xuICAgIHRoaXMudW5oaWRlKHRoaXMuT1ZFUkxBWSk7XG4gICAgdGhpcy5NT0RBTC5pbm5lckhUTUwgPSAnJ1xuICAgIFxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7XG4gICAgICBpZDogJ3Byb2plY3QnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBuYW1lOiAncHJvamVjdCdcbiAgICAgIH0sXG4gICAgICBhcHBlbmRUbzogdGhpcy5NT0RBTCxcbiAgICB9KTtcblxuICAgIGxldCBkaXZQcm9qZWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzZXM6IFsnZm9ybS1yb3cnXSxcbiAgICAgIGFwcGVuZFRvOiBwcm9qZWN0Rm9ybSxcbiAgICB9KTtcbiAgXG4gICAgbGV0IGxhYmVsUHJvamVjdE5hbWUgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgIGlubmVyVGV4dDogJ1Byb2plY3QgTmFtZScsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZvcjogJ3Byb2plY3QtbmFtZSdcbiAgICAgIH0sXG4gICAgICBhcHBlbmRUbzogZGl2UHJvamVjdE5hbWUsXG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRQcm9qZWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgaWQ6ICdwcm9qZWN0LW5hbWUnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgdmFsdWU6IHByb2plY3QgPyBwcm9qZWN0Lm5hbWUgOiAnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgYXBwZW5kVG86IGRpdlByb2plY3ROYW1lLFxuICAgIH0pO1xuXG4gICAgbGV0IGRpdkZvcm1CdG5zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NlczogWydmb3JtLXJvdy1idG5zJ10sXG4gICAgICBhcHBlbmRUbzogcHJvamVjdEZvcm0sXG4gICAgfSlcbiAgICBcbiAgICBsZXQgYnV0dG9uQWN0aW9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgaWQ6ICdidG4tYWN0aW9uLXByb2plY3QnLFxuICAgICAgdHlwZTogJ3N1Ym1pdCcsXG4gICAgICBpbm5lclRleHQ6IHByb2plY3QgPyAnU2F2ZScgOiAnQWRkJyxcbiAgICAgIGFwcGVuZFRvOiBkaXZGb3JtQnRucyxcbiAgICB9KTtcblxuICAgIGxldCBidXR0b25DYW5jZWwgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICBjbGFzc2VzOiBbJ2J0bi1jYW5jZWwnXSxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgaW5uZXJUZXh0OiAnQ2FuY2VsJyxcbiAgICAgIGFwcGVuZFRvOiBkaXZGb3JtQnRucyxcbiAgICB9KTtcblxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgUFJPSkVDVF9OQU1FID0gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgIFxuICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gUFJPSkVDVF9OQU1FO1xuICAgICAgICBMaXN0LnNhdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgTkVXX1BST0pFQ1QgPSBuZXcgUHJvamVjdChQUk9KRUNUX05BTUUpO1xuICAgICAgICBMaXN0LnNhdmVQcm9qZWN0KE5FV19QUk9KRUNUKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdGhpcy5oaWRlKHRoaXMuTU9EQUwpO1xuICAgICAgdGhpcy5oaWRlKHRoaXMuT1ZFUkxBWSk7XG4gICAgfSlcbiAgfSxcblxuICBnZW5lcmF0ZVRhc2tGb3JtKHRhc2spIHtcbiAgICB0aGlzLnVuaGlkZSh0aGlzLk1PREFMKTtcbiAgICB0aGlzLnVuaGlkZSh0aGlzLk9WRVJMQVkpO1xuXG4gICAgdGhpcy5NT0RBTC5pbm5lckhUTUwgPSAnJzsgXG5cbiAgICBsZXQgdGFza0Zvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywge1xuICAgICAgaWQ6ICd0YXNrJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgbmFtZTogJ3Rhc2snXG4gICAgICB9LFxuICAgICAgYXBwZW5kVG86IHRoaXMuTU9EQUwsXG4gICAgfSk7XG5cbiAgICBsZXQgZGl2VGFza05hbWUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc2VzOiBbJ2Zvcm0tcm93J10sXG4gICAgICBhcHBlbmRUbzogdGFza0Zvcm0sXG4gICAgfSk7XG5cbiAgICBsZXQgbGFiZWxUYXNrTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgaW5uZXJUZXh0OiAnTmFtZScsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZvcjogJ3Rhc2stbmFtZSdcbiAgICAgIH0sXG4gICAgICBhcHBlbmRUbzogZGl2VGFza05hbWUsXG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRUYXNrTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgaWQ6ICd0YXNrLW5hbWUnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogdGFzayA/IHRhc2submFtZSA6ICcnLFxuICAgICAgYXBwZW5kVG86IGRpdlRhc2tOYW1lLFxuICAgIH0pO1xuXG4gICAgbGV0IGRpdlRhc2tEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzZXM6IFsnZm9ybS1yb3cnXSxcbiAgICAgIGFwcGVuZFRvOiB0YXNrRm9ybSxcbiAgICB9KTtcblxuICAgIGxldCBsYWJlbFRhc2tEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgaW5uZXJUZXh0OiAnRGVzY3JpcHRpb24nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmb3I6ICd0YXNrLWRlc2NyaXB0aW9uJ1xuICAgICAgfSxcbiAgICAgIGFwcGVuZFRvOiBkaXZUYXNrRGVzY3JpcHRpb24sXG4gICAgfSk7XG5cbiAgICBsZXQgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgIGlkOiAndGFzay1kZXNjcmlwdGlvbicsXG4gICAgICB2YWx1ZTogdGFzayA/IHRhc2suZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgIGFwcGVuZFRvOiBkaXZUYXNrRGVzY3JpcHRpb24sXG4gICAgfSk7XG5cbiAgICBsZXQgZGl2VGFza1Byb2plY3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc2VzOiBbJ2Zvcm0tcm93J10sXG4gICAgICBhcHBlbmRUbzogdGFza0Zvcm0sXG4gICAgfSk7XG5cbiAgICBsZXQgbGFiZWxUYXNrUHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgaW5uZXJUZXh0OiAnUHJvamVjdCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZvcjogJ3Rhc2stcHJvamVjdCdcbiAgICAgIH0sXG4gICAgICBhcHBlbmRUbzogZGl2VGFza1Byb2plY3QsXG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGlucHV0VGFza1Byb2plY3QgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7XG4gICAgICBpZDogJ3Rhc2stcHJvamVjdCcsXG4gICAgICB2YWx1ZTogdGFzayA/ICdBIHRhc2stcHJvamVjdCBuYW1lIHBsYWNlaG9sZGVyJyA6ICcnLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuU0VMRUNURURfUFJPSkVDVCxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgYXBwZW5kVG86IGRpdlRhc2tQcm9qZWN0LFxuICAgIH0pO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhMaXN0LmdldFByb2plY3RzKCkpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBsZXQgdGFza1Byb2plY3RVdWlkO1xuICAgICAgaWYgKHRhc2spIHtcbiAgICAgIGxldCB0YXNrUHJvamVjdCA9IGZpbmRUYXNrSW5Qcm9qZWN0cyh0YXNrLnV1aWQpO1xuICAgICAgaWYgKHRhc2tQcm9qZWN0KSB7XG4gICAgICAgIHRhc2tQcm9qZWN0VXVpZCA9IHRhc2tQcm9qZWN0LnV1aWQ7XG4gICAgICB9XG4gIH1cblxuICAgICAgY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICB2YWx1ZTogcHJvamVjdC51dWlkLFxuICAgICAgICBpbm5lclRleHQ6IHByb2plY3QubmFtZSxcbiAgICAgICAgc2VsZWN0ZWQ6IHByb2plY3QudXVpZCA9PT0gdGFza1Byb2plY3RVdWlkLFxuICAgICAgICBhcHBlbmRUbzogaW5wdXRUYXNrUHJvamVjdCxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBkaXZUYXNrRHVlRGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzZXM6IFsnZm9ybS1yb3cnXSxcbiAgICAgIGFwcGVuZFRvOiB0YXNrRm9ybSxcbiAgICB9KTtcblxuICAgIGxldCBsYWJlbFRhc2tEdWVEYXRlID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICBpbm5lclRleHQ6ICdEdWUgRGF0ZScsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZvcjogJ3Rhc2stZHVlLWRhdGUnXG4gICAgICB9LFxuICAgICAgYXBwZW5kVG86IGRpdlRhc2tEdWVEYXRlLFxuICAgIH0pO1xuXG4gICAgbGV0IGlucHV0VGFza0R1ZURhdGUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIGlkOiAndGFzay1kdWUtZGF0ZScsXG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICB2YWx1ZTogdGFzayA/IHRhc2suZHVlRGF0ZSA6ICcnLFxuICAgICAgYXBwZW5kVG86IGRpdlRhc2tEdWVEYXRlLFxuICAgIH0pO1xuXG4gICAgbGV0IGRpdlRhc2tTdGF0dXMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc2VzOiBbJ2Zvcm0tcm93J10sXG4gICAgICBhcHBlbmRUbzogdGFza0Zvcm0sXG4gICAgfSk7XG5cbiAgICBsZXQgbGFiZWxUYXNrU3RhdHVzID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICBpbm5lclRleHQ6ICdTdGF0dXMnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmb3I6ICd0YXNrLXN0YXR1cydcbiAgICAgIH0sXG4gICAgICBhcHBlbmRUbzogZGl2VGFza1N0YXR1cyxcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dFRhc2tTdGF0dXMgPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7XG4gICAgICBpZDogJ3Rhc2stc3RhdHVzJyxcbiAgICAgIHZhbHVlOiB0YXNrID8gdGFzay5zdGF0dXMgOiAnJyxcbiAgICAgIGFwcGVuZFRvOiBkaXZUYXNrU3RhdHVzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5UQVNLX1NUQVRVU0VTLmZvckVhY2goc3RhdHVzID0+IHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgdmFsdWU6IHN0YXR1cyxcbiAgICAgICAgaW5uZXJUZXh0OiBzdGF0dXMsXG4gICAgICAgIGFwcGVuZFRvOiBpbnB1dFRhc2tTdGF0dXMsXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBsZXQgZGl2VGFza1ByaW9yaXR5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NlczogWydmb3JtLXJvdyddLFxuICAgICAgYXBwZW5kVG86IHRhc2tGb3JtLFxuICAgIH0pO1xuXG4gICAgbGV0IGxhYmVsVGFza1ByaW9yaXR5ID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICBpbm5lclRleHQ6ICdQcmlvcml0eScsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGZvcjogJ3Rhc2stcHJpb3JpdHknXG4gICAgICB9LFxuICAgICAgYXBwZW5kVG86IGRpdlRhc2tQcmlvcml0eSxcbiAgICB9KTtcblxuICAgIGxldCBpbnB1dFRhc2tQcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgIGlkOiAndGFzay1wcmlvcml0eScsXG4gICAgICB2YWx1ZTogdGFzayA/IHRhc2sucHJpb3JpdHkgOiAnJyxcbiAgICAgIGFwcGVuZFRvOiBkaXZUYXNrUHJpb3JpdHksXG4gICAgfSk7XG5cbiAgICB0aGlzLlRBU0tfUFJJT1JJVElFUy5mb3JFYWNoKHByaW9yaXR5ID0+IHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgdmFsdWU6IHByaW9yaXR5LFxuICAgICAgICBpbm5lclRleHQ6IHByaW9yaXR5LFxuICAgICAgICBhcHBlbmRUbzogaW5wdXRUYXNrUHJpb3JpdHksXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBsZXQgZGl2Rm9ybUJ0bnMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc2VzOiBbJ2Zvcm0tcm93LWJ0bnMnXSxcbiAgICAgIGFwcGVuZFRvOiB0YXNrRm9ybSxcbiAgICB9KVxuICAgIFxuICAgIGxldCBidXR0b25BZGQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICBpZDogJ2J0bi1hY3Rpb24tdGFzaycsXG4gICAgICB0eXBlOiAnc3VibWl0JyxcbiAgICAgIGlubmVyVGV4dDogdGFzayA/ICdTYXZlJyA6ICdBZGQnLFxuICAgICAgYXBwZW5kVG86IGRpdkZvcm1CdG5zLFxuICAgIH0pO1xuXG4gICAgbGV0IGJ1dHRvbkNhbmNlbCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzZXM6IFsnYnRuLWNhbmNlbCddLFxuICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICBpbm5lclRleHQ6ICdDYW5jZWwnLFxuICAgICAgYXBwZW5kVG86IGRpdkZvcm1CdG5zLFxuICAgIH0pO1xuXG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBUQVNLX05BTUUgPSBpbnB1dFRhc2tOYW1lLnZhbHVlO1xuICAgICAgY29uc3QgVEFTS19ERVNDUklQVElPTiA9IGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgY29uc3QgVEFTS19QUk9KRUNUID0gTGlzdC5maW5kUHJvamVjdChpbnB1dFRhc2tQcm9qZWN0LnZhbHVlKTtcbiAgICAgIGNvbnN0IFRBU0tfRFVFX0RBVEUgPSBpbnB1dFRhc2tEdWVEYXRlLnZhbHVlO1xuICAgICAgY29uc3QgVEFTS19TVEFUVVMgPSBpbnB1dFRhc2tTdGF0dXMudmFsdWU7XG4gICAgICBjb25zdCBUQVNLX1BSSU9SSVRZID0gaW5wdXRUYXNrUHJpb3JpdHkudmFsdWU7XG4gICAgICBcbiAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgIHRhc2submFtZSA9IFRBU0tfTkFNRTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IFRBU0tfREVTQ1JJUFRJT047XG4gICAgICAgIExpc3QuYWRkVGFza1RvUHJvamVjdCh0YXNrLCBUQVNLX1BST0pFQ1QpXG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IFRBU0tfRFVFX0RBVEU7XG4gICAgICAgIHRhc2suc3RhdHVzID0gVEFTS19TVEFUVVM7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBUQVNLX1BSSU9SSVRZO1xuICAgICAgICBMaXN0LnNhdmVUYXNrKHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgTkVXX1RBU0sgPSBuZXcgVGFzayhUQVNLX05BTUUsIFRBU0tfREVTQ1JJUFRJT04sIFRBU0tfRFVFX0RBVEUsIFRBU0tfU1RBVFVTLCBUQVNLX1BSSU9SSVRZKTtcbiAgICAgICAgXG4gICAgICAgIExpc3Quc2F2ZVRhc2soTkVXX1RBU0spO1xuICAgICAgICBMaXN0LmFkZFRhc2tUb1Byb2plY3QoTkVXX1RBU0ssIFRBU0tfUFJPSkVDVClcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJUYXNrcygpO1xuICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgdGhpcy5oaWRlKHRoaXMuTU9EQUwpO1xuICAgICAgdGhpcy5oaWRlKHRoaXMuT1ZFUkxBWSk7XG4gICAgfSlcbiAgfVxufSIsIi8vaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IGZpbmRUYXNrSW5Qcm9qZWN0cyB9IGZyb20gJy4vdXRpbGl0eS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICBzdGF0aWMgcHJvamVjdHMgPSB7fTtcbiAgc3RhdGljIHRhc2tzID0ge307XG5cbiAgc3RhdGljIHNldFByb2plY3RzKHByb2plY3RMaXN0KSB7XG4gICAgbGV0IHN0b3JhZ2VQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0O1xuICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VQcm9qZWN0TGlzdClcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JhZ2VQcm9qZWN0TGlzdFtrZXldKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb2plY3RzLCBzdG9yYWdlUHJvamVjdExpc3Rba2V5XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKExpc3QucHJvamVjdHMpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGFza3MoKSB7XG4gICAgbGV0IHN0b3JhZ2VUYXNrcyA9IFN0b3JhZ2UuZ2V0VGFza3MoKTtcbiAgICBsZXQgbnVtU3RvcmFnZVRhc2tzID0gT2JqZWN0LmtleXMoc3RvcmFnZVRhc2tzKS5sZW5ndGg7XG4gICAgaWYgKG51bVN0b3JhZ2VUYXNrcyA+IDApIHtcbiAgICAgIE9iamVjdC52YWx1ZXMoc3RvcmFnZVRhc2tzKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBsZXQgbmV3VGFzayA9IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzayk7XG4gICAgICAgIExpc3Quc2F2ZVRhc2sobmV3VGFzayk7XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAobnVtU3RvcmFnZVRhc2tzID09PSAwKSB7XG4gICAgICB0aGlzLnRhc2tzID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgIGxldCBzdG9yYWdlUHJvamVjdHMgPSBTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgbGV0IG51bVN0b3JhZ2VQcm9qZWN0cyA9IE9iamVjdC5rZXlzKHN0b3JhZ2VQcm9qZWN0cykubGVuZ3RoO1xuICAgIE9iamVjdC52YWx1ZXMoc3RvcmFnZVByb2plY3RzKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgbGV0IG5ld1Byb2plY3QgPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpO1xuICAgICAgTGlzdC5zYXZlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRUYXNrKHV1aWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUYXNrcygpW3V1aWRdO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9qZWN0KHV1aWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9qZWN0cygpW3V1aWRdO1xuICB9XG5cbiAgc3RhdGljIHNldFRhc2tzKHRhc2tMaXN0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnRhc2tzLCB0YXNrTGlzdClcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0LnV1aWRdID0gcHJvamVjdDtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0KHByb2plY3QpO1xuICB9XG5cbiAgc3RhdGljIHNhdmVUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzW3Rhc2sudXVpZF0gPSB0YXNrO1xuICAgIFN0b3JhZ2Uuc2F2ZVRhc2sodGFzayk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFza1RvUHJvamVjdCh0YXNrLCBwcm9qZWN0KSB7XG4gICAgLy9TZWFyY2ggZm9yIHRoZSB0YXNrJ3MgVVVJRCBpbiBwcm9qZWN0cycgdGFza3NcbiAgICBsZXQgb2xkUHJvamVjdDtcblxuICAgIGlmIChmaW5kVGFza0luUHJvamVjdHModGFzay51dWlkKSkge1xuICAgICAgb2xkUHJvamVjdCA9IGZpbmRUYXNrSW5Qcm9qZWN0cyh0YXNrLnV1aWQpO1xuICAgICAgb2xkUHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgU3RvcmFnZS5zYXZlUHJvamVjdChvbGRQcm9qZWN0KTtcbiAgICB9XG4gICAgXG4gICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgbmV3UHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKG9sZFByb2plY3QpO1xuXG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgZGVsZXRlIHRoaXMucHJvamVjdHNbcHJvamVjdC51dWlkXTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKHRhc2spIHtcbiAgICBTdG9yYWdlLmRlbGV0ZVRhc2sodGFzayk7XG4gICAgZGVsZXRlIHRoaXMudGFza3NbdGFzay51dWlkXTtcbiAgfVxufSIsImltcG9ydCBnZW5lcmF0ZVV1aWQgZnJvbSAnLi91dWlkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSB7fTtcbiAgICB0aGlzLnV1aWQgPSBnZW5lcmF0ZVV1aWQoKTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFV1aWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgfVxuXG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrc1t0YXNrLnV1aWRdID0gdGFzaztcbiAgfVxuXG4gIHJlbW92ZVRhc2sodGFzaykge1xuICAgIGRlbGV0ZSB0aGlzLnRhc2tzW3Rhc2sudXVpZF07XG4gIH1cbn0iLCIvL2ltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG4vL2ltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBcbiAgc3RhdGljIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSB8fCAne30nKTtcbiAgc3RhdGljIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSB8fCAne30nKTtcblxuICBzdGF0aWMgdXBkYXRlU3RvcmFnZShzdG9yYWdlTmFtZSkge1xuICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBzdG9yYWdlTmFtZTtcbiAgICBjb25zdCBzdG9yYWdlT2JqZWN0ID0gU3RvcmFnZVtzdG9yYWdlTmFtZV07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xuICB9XG5cbiAgc3RhdGljIGdldFRhc2tzKCkge1xuICAgIGNvbnNvbGUubG9nKFN0b3JhZ2UudGFza3MpO1xuICAgIHJldHVybiBTdG9yYWdlLnRhc2tzO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3RzKCkge1xuICAgIGNvbnNvbGUubG9nKFN0b3JhZ2UucHJvamVjdHMpO1xuICAgIHJldHVybiBTdG9yYWdlLnByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIHNhdmVUYXNrKHRhc2spIHtcbiAgICBTdG9yYWdlLnRhc2tzW3Rhc2sudXVpZF0gPSB0YXNrO1xuICAgIFN0b3JhZ2UudXBkYXRlU3RvcmFnZSgndGFza3MnKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKHRhc2spIHtcbiAgICBkZWxldGUgU3RvcmFnZS50YXNrc1t0YXNrLnV1aWRdO1xuICAgIFN0b3JhZ2UudXBkYXRlU3RvcmFnZSgndGFza3MnKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVBbGxUYXNrcygpIHtcbiAgICBTdG9yYWdlLnRhc2tzID0ge307XG4gICAgU3RvcmFnZS51cGRhdGVTdG9yYWdlKCd0YXNrcycpO1xuICB9XG5cbiAgc3RhdGljIHNhdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBTdG9yYWdlLnByb2plY3RzW3Byb2plY3QudXVpZF0gPSBwcm9qZWN0O1xuICAgIFN0b3JhZ2UudXBkYXRlU3RvcmFnZSgncHJvamVjdHMnKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBkZWxldGUgU3RvcmFnZS5wcm9qZWN0c1twcm9qZWN0LnV1aWRdO1xuICAgIFN0b3JhZ2UudXBkYXRlU3RvcmFnZSgncHJvamVjdHMnKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVBbGxQcm9qZWN0cygpIHtcbiAgICBTdG9yYWdlLnByb2plY3RzID0ge307XG4gICAgU3RvcmFnZS51cGRhdGVTdG9yYWdlKCdwcm9qZWN0cycpO1xuICB9XG59IiwiaW1wb3J0IGdlbmVyYXRlVXVpZCBmcm9tICcuL3V1aWQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHN0YXR1cywgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnV1aWQgPSBnZW5lcmF0ZVV1aWQoKTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldE5hbWUodmFsdWUpIHtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG4gIFxuICBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdDtcbiAgfVxuXG4gIHNldFByb2plY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb2plY3QgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cblxuICBzZXRTdGF0dXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFV1aWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgfVxufSIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZWxlbWVudDtcblxuICBpZiAodHlwZSA9PT0gJ0ltYWdlJykge1xuICAgIGVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnZhbHVlKSB7IGVsZW1lbnQudmFsdWUgPSBvcHRpb25zLnZhbHVlfVxuICBpZiAob3B0aW9ucy5pZCkgeyBlbGVtZW50LmlkID0gb3B0aW9ucy5pZCB9XG4gIGlmIChvcHRpb25zLmNsYXNzZXMpIHsgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLm9wdGlvbnMuY2xhc3NlcykgfVxuICBpZiAob3B0aW9ucy5uYW1lKSB7IGVsZW1lbnQubmFtZSA9IG9wdGlvbnMubmFtZSB9XG4gIGlmIChvcHRpb25zLnR5cGUpIHsgZWxlbWVudC50eXBlID0gb3B0aW9ucy50eXBlIH1cbiAgaWYgKG9wdGlvbnMuaW5uZXJUZXh0KSB7IGVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9ucy5pbm5lclRleHQgfVxuICBpZiAob3B0aW9ucy5zcmMpIHsgZWxlbWVudC5zcmMgPSBvcHRpb25zLnNyYyB9XG4gIGlmIChvcHRpb25zLmFwcGVuZFRvKSB7IG9wdGlvbnMuYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWxlbWVudCkgfVxuICBpZiAob3B0aW9ucy5zZWxlY3RlZCkgeyBlbGVtZW50LnNlbGVjdGVkID0gb3B0aW9ucy5zZWxlY3RlZCB9XG4gIGlmIChvcHRpb25zLmRpc2FibGVkKSB7IGVsZW1lbnQuZGlzYWJsZWQgPSBvcHRpb25zLmRpc2FibGVkIH1cbiAgaWYgKG9wdGlvbnMuaW5zZXJ0QmVmb3JlICYmIG9wdGlvbnMuaW5zZXJ0QmVmb3JlLnBhcmVudEVsZW1lbnQpIHsgb3B0aW9ucy5pbnNlcnRCZWZvcmUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgb3B0aW9ucy5pbnNlcnRCZWZvcmUpOyB9XG5cbiAgaWYgKG9wdGlvbnMuYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMuYXR0cmlidXRlcykpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRVdWlkT2ZIdG1sSXRlbShpdGVtLCBpdGVtVHlwZSkge1xuICByZXR1cm4gaXRlbS5jbG9zZXN0KCcuZXhpc3RpbmctJyArIGl0ZW1UeXBlKS5pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJdGVtV2l0aFV1aWQodXVpZCwgaXRlbVR5cGUpIHtcbiAgaWYgKGl0ZW1UeXBlID09PSAndGFzaycpIHtcbiAgICByZXR1cm4gTGlzdC5maW5kVGFzayh1dWlkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTGlzdC5maW5kUHJvamVjdCh1dWlkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbSh0YXJnZXQsIGl0ZW1UeXBlKSB7XG4gIGlmIChpdGVtVHlwZSA9PT0gJ3Rhc2snKSB7XG4gICAgTGlzdC5kZWxldGVUYXNrKHRhcmdldCk7XG4gICAgRE9NLnJlbmRlclRhc2tzKCk7XG4gIH0gZWxzZSB7XG4gICAgTGlzdC5kZWxldGVQcm9qZWN0KHRhcmdldCk7XG4gICAgRE9NLnJlbmRlclByb2plY3RzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlU3RyaW5nKHN0cmluZywgbil7XG4gIHJldHVybiAoc3RyaW5nLmxlbmd0aCA+IG4pID8gc3RyaW5nLnNsaWNlKDAsIG4tMSkgKyAnLi4uJyA6IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFza0luUHJvamVjdHModGFza1V1aWQpIHtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIE9iamVjdC52YWx1ZXMoTGlzdC5nZXRQcm9qZWN0cygpKSkge1xuICAgIGNvbnN0IHRhc2tzID0gT2JqZWN0LnZhbHVlcyhwcm9qZWN0LnRhc2tzKTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgIGlmICh0YXNrLnV1aWQgPT09IHRhc2tVdWlkKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxubGV0IGV4aXN0aW5nVXVpZHMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVVdWlkKCkge1xuICBsZXQgbmV3VXVpZCA9IGB1dWlkXyR7dXVpZHY0KCl9YDtcbiAgaWYgKGV4aXN0aW5nVXVpZHMuaW5jbHVkZXMobmV3VXVpZCkpIHtcbiAgICBnZW5lcmF0ZVV1aWQoKTtcbiAgfSBlbHNlIHtcbiAgICBleGlzdGluZ1V1aWRzLnB1c2gobmV3VXVpZCk7XG4gIH1cbiAgcmV0dXJuIG5ld1V1aWQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBET00gfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG4vL2ZvciBkZXZlbG9wbWVudCB0ZXN0aW5nXG53aW5kb3cuVGFzayA9IFRhc2s7XG53aW5kb3cuUHJvamVjdCA9IFByb2plY3Q7XG53aW5kb3cuU3RvcmFnZSA9IFN0b3JhZ2U7XG53aW5kb3cuRE9NID0gRE9NO1xuLy9lbmRcblxuRE9NLmluaXQoKTtcblxuLyogY29uc3QgdGVzdFRhc2sgPSBuZXcgVGFzaygnVGVzdCBUYXNrJywnVGhpcyBpcyBhIHRlc3QnLCcnLCcnLCcnLCcnLCcnKTtcbmNvbnN0IHRlc3RUYXNrMiA9IG5ldyBUYXNrKCdUZXN0IFRhc2sgMicsJ1RoaXMgaXMgYSB0ZXN0IDInLCcnLCcnLCcnLCcnLCcnKTtcbmNvbnN0IHRlc3RUYXNrMyA9IG5ldyBUYXNrKCdUZXN0IFRhc2sgMicsJ1RoaXMgaXMgYSB0ZXN0IDInLCcnLCcnLCcnLCcnLCcnKTtcblxuXG5cbnRlc3RTdG9yZS5zYXZlVGFzayh0ZXN0VGFzayk7XG50ZXN0U3RvcmUuc2F2ZVRhc2sodGVzdFRhc2syKTtcbnRlc3RTdG9yZS5zYXZlVGFzayh0ZXN0VGFzazMpO1xuXG5jb25zb2xlLmxvZyh0ZXN0U3RvcmUpO1xuY29uc29sZS5sb2codGVzdFN0b3JlLnRhc2tMaXN0KTtcbmNvbnNvbGUubG9nKHRlc3RTdG9yZS5wcm9qZWN0TGlzdCk7XG5cbkRPTS5yZW5kZXJMaXN0KHRlc3RTdG9yZS50YXNrTGlzdCwndGFzaycpO1xuRE9NLnJlbmRlckxpc3QodGVzdFN0b3JlLnByb2plY3RMaXN0LCdwcm9qZWN0Jyk7ICovXG5cbi8qIGNvbnN0IHRlc3RUYXNrID0gbmV3IFRhc2soJ1Rlc3QgVGFzaycsJ1RoaXMgaXMgYSB0ZXN0JywnJywnJywnJywnJywnJyk7XG5jb25zdCB0ZXN0UHJvaiA9IG5ldyBQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIpO1xuY29uc3QgdGVzdFN0b3JlID0gbmV3IFN0b3JhZ2UoKTtcbnRlc3RTdG9yZS5kZWxldGVBbGxUYXNrcygpO1xudGVzdFN0b3JlLmRlbGV0ZUFsbFByb2plY3RzKCk7XG5jb25zb2xlLmxvZyh0ZXN0VGFzayk7XG50ZXN0UHJvai5hZGRUYXNrKHRlc3RUYXNrKTtcbnRlc3RTdG9yZS5zYXZlVGFzayh0ZXN0VGFzayk7XG50ZXN0U3RvcmUuc2F2ZVByb2plY3QodGVzdFByb2opO1xuY29uc29sZS5sb2codGVzdFByb2opO1xuY29uc29sZS5sb2codGVzdFN0b3JlKTtcbnRlc3RQcm9qLnJlbW92ZVRhc2sodGVzdFRhc2spO1xuLy90ZXN0U3RvcmUuZGVsZXRlVGFzayh0ZXN0VGFzayk7XG5jb25zb2xlLmxvZyh0ZXN0UHJvaik7XG5jb25zb2xlLmxvZyh0ZXN0U3RvcmUpOyAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==