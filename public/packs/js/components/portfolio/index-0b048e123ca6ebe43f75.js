/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/components/portfolio/index.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/components/portfolio/index.vue":
/*!*************************************************************!*\
  !*** ./app/javascript/packs/components/portfolio/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_75203e46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=75203e46& */ "./app/javascript/packs/components/portfolio/index.vue?vue&type=template&id=75203e46&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./app/javascript/packs/components/portfolio/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_75203e46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_75203e46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/packs/components/portfolio/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/packs/components/portfolio/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./app/javascript/packs/components/portfolio/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--8-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/packs/components/portfolio/index.vue?vue&type=template&id=75203e46&":
/*!********************************************************************************************!*\
  !*** ./app/javascript/packs/components/portfolio/index.vue?vue&type=template&id=75203e46& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75203e46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=75203e46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio/index.vue?vue&type=template&id=75203e46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75203e46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75203e46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--8-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/packs/components/portfolio/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var url = new URL(document.location);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tags: Tags
  },
  data: function data() {
    return {
      portfolio: {}
    };
  },
  created: function created() {
    var _this = this;

    this.portfolio.id = $("#portfolio-edit").data("portfolio");
    this.$resource('/portfolios{/id}').get({
      id: this.portfolio.id
    }).then(function (response) {
      _this.portfolio = response.body.portfolio;
    }, function (response) {
      M.toast({
        html: "Ocorreu um erro ao tentar carregar o Portfólio",
        classes: "red"
      });
    });
  },
  computed: {
    public_url: function public_url() {
      var url_port = url.port == "" ? "" : ":".concat(url.port);
      return "".concat(url.protocol, "//").concat(url.hostname).concat(url_port, "/").concat(this.portfolio.slug);
    }
  },
  methods: {
    update: function update() {
      var _this2 = this;

      this.$resource('/portfolios{/id}').update({
        id: this.portfolio.id
      }, {
        portfolio: this.portfolio
      }).then({}, function (response) {
        _this2.portfolio = response.body.portfolio;
        response.body.errors.forEach(function (error) {
          M.toast({
            html: error,
            classes: "red"
          });
        });
      });
    },
    copyToClipboard: function copyToClipboard() {
      var url_element = document.createElement('textarea');
      url_element.value = this.public_url;
      document.body.appendChild(url_element);
      url_element.select();
      document.execCommand("copy");
      document.body.removeChild(url_element);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio/index.vue?vue&type=template&id=75203e46&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/packs/components/portfolio/index.vue?vue&type=template&id=75203e46& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col m10 offset-m1 s12" }, [
      _c("h5", { staticClass: "custom-grey-text page-title" }, [
        _vm._v("Configure seu Portfolio")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-panel" }, [
        _c("form", [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "input-field col l4 m6 s12" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.portfolio.slug,
                    expression: "portfolio.slug"
                  }
                ],
                attrs: { name: "portfolio[slug]" },
                domProps: { value: _vm.portfolio.slug },
                on: {
                  change: function($event) {
                    return _vm.update()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.portfolio, "slug", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { name: "portfiolio[public_url]", type: "hidden" },
                domProps: { value: _vm.public_url }
              }),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col l2 m2 s12 slug-actions hide-on-small-and-down"
              },
              [
                _c("i", {
                  staticClass: "far fa-copy element tooltipped",
                  attrs: { "data-tooltip": "Copiar para o Clipboard" },
                  on: {
                    click: function($event) {
                      return _vm.copyToClipboard()
                    }
                  }
                }),
                _vm._v(" "),
                _c("a", {
                  staticClass:
                    "fa fa-external-link-square-alt element tooltipped",
                  attrs: {
                    href: "/portfolios/" + _vm.portfolio.id,
                    "data-tooltip": "Visualizar"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col offset-l2 l2 m2 s6 center" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "switch" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.portfolio.active,
                        expression: "portfolio.active"
                      }
                    ],
                    attrs: { name: "portfolio[active]", type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.portfolio.active)
                        ? _vm._i(_vm.portfolio.active, null) > -1
                        : _vm.portfolio.active
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.portfolio.active,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.portfolio,
                                  "active",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.portfolio,
                                  "active",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.portfolio, "active", $$c)
                          }
                        },
                        function($event) {
                          return _vm.update()
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "lever" })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col l2 m2 s6 center" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "switch" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.portfolio.listed,
                        expression: "portfolio.listed"
                      }
                    ],
                    attrs: { name: "portfolio[listed]", type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.portfolio.listed)
                        ? _vm._i(_vm.portfolio.listed, null) > -1
                        : _vm.portfolio.listed
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.portfolio.listed,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.portfolio,
                                  "listed",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.portfolio,
                                  "listed",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.portfolio, "listed", $$c)
                          }
                        },
                        function($event) {
                          return _vm.update()
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "lever" })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col l4 m8 s8" },
              [
                _c("Tags", {
                  attrs: {
                    "portfolio-id": _vm.portfolio.id,
                    "portfolio-tags": _vm.portfolio.tags
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "input-field col l2 offset-m1 m4 offset-s4 s4" },
              [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.portfolio.remote_ok,
                        expression: "portfolio.remote_ok"
                      }
                    ],
                    staticClass: "filled-in",
                    attrs: { name: "portfolio[remote_ok]", type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.portfolio.remote_ok)
                        ? _vm._i(_vm.portfolio.remote_ok, null) > -1
                        : _vm.portfolio.remote_ok
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.portfolio.remote_ok,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.portfolio,
                                  "remote_ok",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.portfolio,
                                  "remote_ok",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.portfolio, "remote_ok", $$c)
                          }
                        },
                        function($event) {
                          return _vm.update()
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Remote OK")])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "active font_20 custom-grey-text text-darken-1" },
      [
        _vm._v("Slug "),
        _c("i", {
          staticClass: "fa fa-info-circle tooltipped",
          attrs: { "data-tooltip": "Nome que vai aparecer na URL" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font_16 custom-grey-text text-darken-1" },
      [
        _vm._v("Ativo "),
        _c("i", {
          staticClass: "fa fa-info-circle tooltipped",
          attrs: {
            "data-position": "bottom",
            "data-tooltip": "Pode ser encontrado pela URL"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font_16 custom-grey-text text-darken-1" },
      [
        _vm._v("Listado "),
        _c("i", {
          staticClass: "fa fa-info-circle tooltipped",
          attrs: { "data-tooltip": "Aparece nas pesquisas por candidatos" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ });
//# sourceMappingURL=index-0b048e123ca6ebe43f75.js.map