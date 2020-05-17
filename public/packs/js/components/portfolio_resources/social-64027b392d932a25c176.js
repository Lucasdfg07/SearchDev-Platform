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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/components/portfolio_resources/social.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/components/portfolio_resources/social.vue":
/*!************************************************************************!*\
  !*** ./app/javascript/packs/components/portfolio_resources/social.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_vue_vue_type_template_id_93a94ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.vue?vue&type=template&id=93a94ce8& */ "./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=template&id=93a94ce8&");
/* harmony import */ var _social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.vue?vue&type=script&lang=js& */ "./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _social_vue_vue_type_template_id_93a94ce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _social_vue_vue_type_template_id_93a94ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/javascript/packs/components/portfolio_resources/social.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--8-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./social.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_8_0_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=template&id=93a94ce8&":
/*!*******************************************************************************************************!*\
  !*** ./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=template&id=93a94ce8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_template_id_93a94ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./social.vue?vue&type=template&id=93a94ce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=template&id=93a94ce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_template_id_93a94ce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_social_vue_vue_type_template_id_93a94ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--8-0!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['portfolioId'],
  data: function data() {
    return {
      social: {},
      socials: [],
      socialKinds: {
        facebook: "Facebook",
        twitter: "Twitter",
        linkedin: "LinkedIn",
        github: "Github",
        instagram: "Instagram"
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$resource('/portfolios{/id}/socials').get({
      id: this.portfolioId
    }).then(function (response) {
      _this.socials = response.body.resource;
    }, function (response) {
      M.toast({
        html: "Ocorreu um erro ao carregar as Redes Sociais",
        classes: "red"
      });
    });
  },
  methods: {
    relativePath: function relativePath(url) {
      var url_obj = new URL(url);
      return url_obj.pathname;
    },
    submit: function submit() {
      var _this2 = this;

      this.$resource('/portfolios{/id}/socials').save({
        id: this.portfolioId
      }, {
        social: this.social
      }).then(function (response) {
        _this2.socials.push(response.body.resource);

        _this2.social = {};
      }, function (response) {
        response.body.errors.forEach(function (error) {
          M.toast({
            html: error,
            classes: "red"
          });
        });
      });
    },
    removeSocial: function removeSocial(social) {
      var _this3 = this;

      this.$resource('/portfolios{/portfolioId}/socials{/id}').remove({
        portfolioId: this.portfolioId,
        id: social.id
      }).then(function (response) {
        var indexToRemove = _this3.socials.indexOf(social);

        _this3.socials.splice(indexToRemove, 1);
      }, function (response) {
        response.body.errors.forEach(function (error) {
          M.toast({
            html: error,
            classes: "red"
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=template&id=93a94ce8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/javascript/packs/components/portfolio_resources/social.vue?vue&type=template&id=93a94ce8& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "bloco-linguagem" },
    [
      _c("h4", { staticClass: "block-title grey" }, [_vm._v("Redes Sociais")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "input-field col xl12 l12 m12 s12" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.social.kind,
                  expression: "social.kind"
                }
              ],
              staticClass: "browser-default",
              attrs: { id: "select-social-kind" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.social,
                    "kind",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Escolha um item")
              ]),
              _vm._v(" "),
              _vm._l(_vm.socialKinds, function(value, key) {
                return _c("option", { key: key, domProps: { value: key } }, [
                  _vm._v(_vm._s(value))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-field col l12 m12 s12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.social.url,
                expression: "social.url"
              }
            ],
            staticClass: "font_20 custom-grey-text text-darken-1",
            attrs: { placeholder: "URL", id: "social-url" },
            domProps: { value: _vm.social.url },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.social, "url", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "active font_20 custom-grey-text text-darken-1" },
            [_vm._v("URL")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-field col l12 m12 s12" }, [
          _c(
            "button",
            {
              staticClass: "btn right",
              attrs: { type: "button", id: "add-social" },
              on: {
                click: function($event) {
                  return _vm.submit()
                }
              }
            },
            [_vm._v("Adicionar")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.socials, function(social) {
        return _c("div", { key: social.id, staticClass: "row resource-list" }, [
          _c("div", { staticClass: "col l12 m12 s12" }, [
            _c("div", { staticClass: "row resource-item resource-social" }, [
              _c("div", { staticClass: "col l10 m10 s10 valign-wrapper" }, [
                _c("img", {
                  attrs: {
                    src: "/assets/socials/" + social.kind + ".png",
                    width: "12%"
                  }
                }),
                _vm._v(" "),
                _c("a", { attrs: { href: social.url, target: "_blank" } }, [
                  _vm._v(_vm._s(_vm.relativePath(social.url)))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col l1 m1 s1" }, [
                _c("a", {
                  staticClass: "fa fa-times grey-text remove-social",
                  on: {
                    click: function($event) {
                      return _vm.removeSocial(social)
                    }
                  }
                })
              ])
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
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
//# sourceMappingURL=social-64027b392d932a25c176.js.map