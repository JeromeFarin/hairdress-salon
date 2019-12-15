(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ManagerApp"],{

/***/ "./assets/ManagerApp/js/ManagerApp.js":
/*!********************************************!*\
  !*** ./assets/ManagerApp/js/ManagerApp.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var _stores_PrestationStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stores/PrestationStore */ "./assets/ManagerApp/js/stores/PrestationStore.js");
/* harmony import */ var _stores_EditStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stores/EditStore */ "./assets/ManagerApp/js/stores/EditStore.js");
/* harmony import */ var _stores_ValidationStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stores/ValidationStore */ "./assets/ManagerApp/js/stores/ValidationStore.js");
/* harmony import */ var _stores_StatuStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stores/StatuStore */ "./assets/ManagerApp/js/stores/StatuStore.js");
/* harmony import */ var _stores_TaxeStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stores/TaxeStore */ "./assets/ManagerApp/js/stores/TaxeStore.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Table */ "./assets/ManagerApp/js/components/Table.js");













var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var ManagerApp = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_14__["inject"])('prestationStore', 'statuStore', 'taxeStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_14__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(ManagerApp, _Component);

  function ManagerApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ManagerApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ManagerApp)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      store: {}
    };
    return _this;
  }

  _createClass(ManagerApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      switch (this.props.type) {
        case 'prestations':
          this.props.prestationStore.loadPrestations();
          this.setState({
            store: this.props.prestationStore
          });
          break;

        case 'status':
          this.props.statuStore.loadStatus();
          this.setState({
            store: this.props.statuStore
          });
          break;

        case 'taxes':
          this.props.taxeStore.loadTaxes();
          this.setState({
            store: this.props.taxeStore
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ths = [];
      var tds = [];

      if (this.state.store.ths != null) {
        ths = this.state.store.ths;
        tds = this.state.store.tds;
      }

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
        ths: ths,
        tds: tds
      });
    }
  }]);

  return ManagerApp;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]), _temp)) || _class) || _class);

if (document.getElementById('manager_app_react') !== null) {
  react_dom__WEBPACK_IMPORTED_MODULE_12___default.a.render(react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
    prestationStore: _stores_PrestationStore__WEBPACK_IMPORTED_MODULE_15__["default"],
    editStore: _stores_EditStore__WEBPACK_IMPORTED_MODULE_16__["default"],
    validationStore: _stores_ValidationStore__WEBPACK_IMPORTED_MODULE_17__["default"],
    statuStore: _stores_StatuStore__WEBPACK_IMPORTED_MODULE_18__["default"],
    taxeStore: _stores_TaxeStore__WEBPACK_IMPORTED_MODULE_19__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(ManagerApp, {
    type: document.getElementById('manager_app_react').dataset.type
  })), document.getElementById('manager_app_react'));
}

/***/ }),

/***/ "./assets/ManagerApp/js/components/Table.js":
/*!**************************************************!*\
  !*** ./assets/ManagerApp/js/components/Table.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_25__);
























var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Table = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_24__["inject"])('editStore', 'validationStore', 'prestationStore', 'statuStore', 'taxeStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_24__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function () {
      $(':focus').blur();

      if (Object.keys(_this.props.validationStore.errors).length == 0 && Object.keys(_this.props.editStore.values).length > 0) {
        _this.props.editStore.saveValues();
      }
    };

    _this.handleChange = function (e) {
      _this.props.validationStore.validate(e);

      _this.props.editStore.updateValues(e, _this.props.tds);
    };

    _this.handleBlur = function (e) {
      _this.props.validationStore.validate(e);
    };

    _this.handleRow = function (e) {
      if (_this.props.tds.find(function (td) {
        return td.id == 'new';
      }) == null) {
        var new_row = {};
        Object.assign(new_row, {
          id: 'new'
        });

        _this.props.ths.map(function (th) {
          if (th == 'make_time') {
            Object.assign(new_row, _defineProperty({}, th, moment__WEBPACK_IMPORTED_MODULE_25___default()().hour(0).minute(0).second(0)));
          } else {
            Object.assign(new_row, _defineProperty({}, th, ''));
          }
        });

        _this.props.tds.push(new_row);

        $(e.target).attr('class', 'fa fa-minus-circle');
      } else {
        _this.props.tds.pop();

        $(e.target).attr('class', 'fa fa-plus-circle');
        delete _this.props.editStore.values['new'];
        Object.keys(_this.props.validationStore.errors).forEach(function (element) {
          if (!element.search("new")) {
            delete _this.props.validationStore.errors[element];
          }
        });
      }
    };

    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.handleClick,
        disabled: Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0 ? false : true
      }, "Save ALL change"), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("table", {
        className: "table text-center"
      }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("tr", null, this.props.ths.map(function (th) {
        return react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("th", {
          key: th.name
        }, th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' '));
      }))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("tbody", null, this.props.tds.map(function (td) {
        return react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("tr", {
          key: td.id,
          onChange: _this2.handleChange
        }, _this2.props.ths.map(function (th) {
          return react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("td", {
            key: "".concat(td.id, "_").concat(th.name)
          }, react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("input", _this2.props.editStore.formatValue(td, th)));
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("i", {
        className: "fa fa-plus-circle",
        onClick: this.handleRow,
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0 ? false : true,
        onClick: this.handleClick
      }, "Save ALL change"));
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_23__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Table);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/ManagerApp/js/stores/EditStore.js":
/*!**************************************************!*\
  !*** ./assets/ManagerApp/js/stores/EditStore.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
















var _class, _descriptor, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var EditStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function EditStore() {
    _classCallCheck(this, EditStore);

    _initializerDefineProperty(this, "values", _descriptor, this);
  }

  _createClass(EditStore, [{
    key: "formatValue",
    value: function formatValue(td, th) {
      var value = {};

      switch (th.name) {
        case 'active':
          value.defaultChecked = td[th.name] ? true : false;
          value.defaultValue = td[th.name];
          break;

        case 'make_time':
          value.defaultValue = moment__WEBPACK_IMPORTED_MODULE_16___default()(td[th.name]).format('HH:mm:ss');
          value.placeholder = 'HH:MM:SS';
          break;

        case 'price_ht':
          value.defaultValue = td[th.name];
          value.placeholder = th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' ');
          break;

        case 'start':
        case 'end':
          value.defaultValue = moment__WEBPACK_IMPORTED_MODULE_16___default()(td[th.name]).format('YYYY-MM-DD');
          break;

        default:
          value.defaultValue = td[th.name];
          value.placeholder = th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' ');
          break;
      }

      value.type = th.type;
      value['data-id'] = td.id;
      value.name = th.name;
      return value;
    }
  }, {
    key: "updateValues",
    value: function updateValues(e, tds) {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_15__["runInAction"])(function () {
        var name = e.target.name;
        var id = e.target.dataset.id;
        var value = e.target.value;
        var old_value = tds.find(function (td) {
          return td.id == id;
        })[name]; // format specific field

        if (name == 'make_time') {
          old_value = moment__WEBPACK_IMPORTED_MODULE_16___default()(old_value).format('HH:mm:ss');
        }

        if (name == 'active') {
          value = e.target.checked;
          old_value = old_value ? true : false;
        } // update values


        if (value != old_value) {
          if (_this.values[id]) {
            Object.assign(_this.values[id], _defineProperty({}, name, value));
          } else {
            Object.assign(_this.values, _defineProperty({}, id, _defineProperty({}, name, value)));
          }

          $(e.target).css('color', '#ffa500');
        } else {
          delete _this.values[id][name];

          if (Object.keys(_this.values[id]).length == 0) {
            delete _this.values[id];
          }

          $(e.target).css('color', '#000');
        }
      });
    }
  }, {
    key: "saveValues",
    value: function saveValues() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_15__["runInAction"])(function () {
        console.log(JSON.stringify(_this2.values)); // window.fetch('/api/prestations', {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json'
        //   }
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     this.prestations = JSON.parse(data)
        //   })
        //   .catch((error) => {
        //     console.error(error.message)
        //   })
      });
    }
  }]);

  return EditStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "values", [mobx__WEBPACK_IMPORTED_MODULE_15__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new EditStore());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/ManagerApp/js/stores/LoadStore.js":
/*!**************************************************!*\
  !*** ./assets/ManagerApp/js/stores/LoadStore.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");











var _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


var LoadStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function LoadStore() {
    _classCallCheck(this, LoadStore);

    _initializerDefineProperty(this, "ths", _descriptor, this);

    _initializerDefineProperty(this, "tds", _descriptor2, this);
  }

  _createClass(LoadStore, [{
    key: "loadValues",
    value: function loadValues(values, options) {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_10__["runInAction"])(function () {
        options.map(function (option) {
          var check = Object.keys(values[0]).find(function (value) {
            return value === option.name;
          });

          if (check != null) {
            _this.ths.push(option);
          }
        });
        _this.tds = values;
      });
    }
  }]);

  return LoadStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "ths", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tds", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (LoadStore);

/***/ }),

/***/ "./assets/ManagerApp/js/stores/PrestationStore.js":
/*!********************************************************!*\
  !*** ./assets/ManagerApp/js/stores/PrestationStore.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _LoadStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LoadStore */ "./assets/ManagerApp/js/stores/LoadStore.js");




















var _class, _descriptor, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var PrestationStore = (_class = (_temp =
/*#__PURE__*/
function (_LoadStore) {
  _inherits(PrestationStore, _LoadStore);

  function PrestationStore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PrestationStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PrestationStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "prestations", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(PrestationStore, [{
    key: "loadPrestations",
    value: function loadPrestations() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_19__["runInAction"])(function () {
        window.fetch('/api/prestations', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.prestations = JSON.parse(data);

          _this2.loadValues(_this2.prestations, [{
            name: 'name',
            type: 'text'
          }, {
            name: 'make_time',
            type: 'text'
          }, {
            name: 'price_ht',
            type: 'number'
          }, {
            name: 'active',
            type: 'checkbox'
          }]);
        })["catch"](function (error) {
          console.error(error.message);
        });
      });
    }
  }]);

  return PrestationStore;
}(_LoadStore__WEBPACK_IMPORTED_MODULE_20__["default"]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "prestations", [mobx__WEBPACK_IMPORTED_MODULE_19__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new PrestationStore());

/***/ }),

/***/ "./assets/ManagerApp/js/stores/StatuStore.js":
/*!***************************************************!*\
  !*** ./assets/ManagerApp/js/stores/StatuStore.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _LoadStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LoadStore */ "./assets/ManagerApp/js/stores/LoadStore.js");




















var _class, _descriptor, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var StatuStore = (_class = (_temp =
/*#__PURE__*/
function (_LoadStore) {
  _inherits(StatuStore, _LoadStore);

  function StatuStore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StatuStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StatuStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "status", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(StatuStore, [{
    key: "loadStatus",
    value: function loadStatus() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_19__["runInAction"])(function () {
        window.fetch('/api/status', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.status = JSON.parse(data);

          _this2.loadValues(_this2.status, [{
            name: 'name',
            type: 'text'
          }]);
        })["catch"](function (error) {
          console.error(error.message);
        });
      });
    }
  }]);

  return StatuStore;
}(_LoadStore__WEBPACK_IMPORTED_MODULE_20__["default"]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "status", [mobx__WEBPACK_IMPORTED_MODULE_19__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new StatuStore());

/***/ }),

/***/ "./assets/ManagerApp/js/stores/TaxeStore.js":
/*!**************************************************!*\
  !*** ./assets/ManagerApp/js/stores/TaxeStore.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _LoadStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LoadStore */ "./assets/ManagerApp/js/stores/LoadStore.js");




















var _class, _descriptor, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var TaxeStore = (_class = (_temp =
/*#__PURE__*/
function (_LoadStore) {
  _inherits(TaxeStore, _LoadStore);

  function TaxeStore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TaxeStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TaxeStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "taxes", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(TaxeStore, [{
    key: "loadTaxes",
    value: function loadTaxes() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_19__["runInAction"])(function () {
        window.fetch('/api/taxes', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.taxes = JSON.parse(data);

          _this2.loadValues(_this2.taxes, [{
            name: 'value',
            type: 'text'
          }, {
            name: 'start',
            type: 'date'
          }, {
            name: 'end',
            type: 'date'
          }]);
        })["catch"](function (error) {
          console.error(error.message);
        });
      });
    }
  }]);

  return TaxeStore;
}(_LoadStore__WEBPACK_IMPORTED_MODULE_20__["default"]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "taxes", [mobx__WEBPACK_IMPORTED_MODULE_19__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new TaxeStore());

/***/ }),

/***/ "./assets/ManagerApp/js/stores/ValidationStore.js":
/*!********************************************************!*\
  !*** ./assets/ManagerApp/js/stores/ValidationStore.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");













var _class, _descriptor, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


var ValidationStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function ValidationStore() {
    _classCallCheck(this, ValidationStore);

    _initializerDefineProperty(this, "errors", _descriptor, this);
  }

  _createClass(ValidationStore, [{
    key: "validate",
    value: function validate(e) {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_12__["runInAction"])(function () {
        var name = e.target.name;
        var value = e.target.value;
        var id = e.target.dataset.id;

        if (value == '') {
          $(e.target).attr({
            style: 'border: 1px solid #f00 !important',
            title: 'Required'
          });

          _this.addError("".concat(id, "_").concat(name), 'Required');

          return;
        } else {
          _this.removeError("".concat(id, "_").concat(name));
        }

        if (name == 'make_time') {
          if (!value.match(/([0-9]{2}):([0-9]{2}):([0-9]{2})/)) {
            $(e.target).attr({
              style: 'border: 1px solid #f00! important',
              title: 'Format HH:MM:SS'
            });

            _this.addError("".concat(id, "_").concat(name), 'Format HH:MM:SS');

            return;
          } else {
            _this.removeError("".concat(id, "_").concat(name));
          }
        }

        if (!_this.errors["".concat(id, "_").concat(name)]) {
          $(e.target).css('border', 'none');
          $(e.target).css('color', '#000');
        }
      });
    }
  }, {
    key: "addError",
    value: function addError(name, message) {
      Object.assign(this.errors, _defineProperty({}, name, message));
    }
  }, {
    key: "removeError",
    value: function removeError(name) {
      delete this.errors[name];
    }
  }]);

  return ValidationStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "errors", [mobx__WEBPACK_IMPORTED_MODULE_12__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new ValidationStore());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},[["./assets/ManagerApp/js/ManagerApp.js","runtime","vendors~ManagerApp~ReservationApp","vendors~ManagerApp"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9NYW5hZ2VyQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL0VkaXRTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvTG9hZFN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9QcmVzdGF0aW9uU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1N0YXR1U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1RheGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvVmFsaWRhdGlvblN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJNYW5hZ2VyQXBwIiwiaW5qZWN0Iiwib2JzZXJ2ZXIiLCJzdGF0ZSIsInN0b3JlIiwicHJvcHMiLCJ0eXBlIiwicHJlc3RhdGlvblN0b3JlIiwibG9hZFByZXN0YXRpb25zIiwic2V0U3RhdGUiLCJzdGF0dVN0b3JlIiwibG9hZFN0YXR1cyIsInRheGVTdG9yZSIsImxvYWRUYXhlcyIsInRocyIsInRkcyIsIkNvbXBvbmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsIlByZXN0YXRpb25TdG9yZSIsIkVkaXRTdG9yZSIsIlZhbGlkYXRpb25TdG9yZSIsIlN0YXR1U3RvcmUiLCJUYXhlU3RvcmUiLCJkYXRhc2V0IiwiVGFibGUiLCJoYW5kbGVDbGljayIsIiQiLCJibHVyIiwiT2JqZWN0Iiwia2V5cyIsInZhbGlkYXRpb25TdG9yZSIsImVycm9ycyIsImxlbmd0aCIsImVkaXRTdG9yZSIsInZhbHVlcyIsInNhdmVWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsaWRhdGUiLCJ1cGRhdGVWYWx1ZXMiLCJoYW5kbGVCbHVyIiwiaGFuZGxlUm93IiwiZmluZCIsInRkIiwiaWQiLCJuZXdfcm93IiwiYXNzaWduIiwibWFwIiwidGgiLCJtb21lbnQiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwicHVzaCIsInRhcmdldCIsImF0dHIiLCJwb3AiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNlYXJjaCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicmVwbGFjZSIsImZvcm1hdFZhbHVlIiwidmFsdWUiLCJkZWZhdWx0Q2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsImZvcm1hdCIsInBsYWNlaG9sZGVyIiwicnVuSW5BY3Rpb24iLCJvbGRfdmFsdWUiLCJjaGVja2VkIiwiY3NzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvYnNlcnZhYmxlIiwiTG9hZFN0b3JlIiwib3B0aW9ucyIsIm9wdGlvbiIsImNoZWNrIiwid2luZG93IiwiZmV0Y2giLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwcmVzdGF0aW9ucyIsInBhcnNlIiwibG9hZFZhbHVlcyIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsInRheGVzIiwic3R5bGUiLCJ0aXRsZSIsImFkZEVycm9yIiwicmVtb3ZlRXJyb3IiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUlNQSxVLFdBRkxDLDBEQUFNLENBQUMsaUJBQUQs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6Ik1hbmFnZXJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIsIGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IFByZXN0YXRpb25TdG9yZSBmcm9tICcuL3N0b3Jlcy9QcmVzdGF0aW9uU3RvcmUnXG5pbXBvcnQgRWRpdFN0b3JlIGZyb20gJy4vc3RvcmVzL0VkaXRTdG9yZSdcbmltcG9ydCBWYWxpZGF0aW9uU3RvcmUgZnJvbSAnLi9zdG9yZXMvVmFsaWRhdGlvblN0b3JlJ1xuaW1wb3J0IFN0YXR1U3RvcmUgZnJvbSAnLi9zdG9yZXMvU3RhdHVTdG9yZSdcbmltcG9ydCBUYXhlU3RvcmUgZnJvbSAnLi9zdG9yZXMvVGF4ZVN0b3JlJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSdcblxuQGluamVjdCgncHJlc3RhdGlvblN0b3JlJywgJ3N0YXR1U3RvcmUnLCAndGF4ZVN0b3JlJylcbkBvYnNlcnZlclxuY2xhc3MgTWFuYWdlckFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0b3JlOiB7fVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3ByZXN0YXRpb25zJzpcbiAgICAgICAgdGhpcy5wcm9wcy5wcmVzdGF0aW9uU3RvcmUubG9hZFByZXN0YXRpb25zKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnByZXN0YXRpb25TdG9yZX0pXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGF0dXMnOlxuICAgICAgICB0aGlzLnByb3BzLnN0YXR1U3RvcmUubG9hZFN0YXR1cygpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy5zdGF0dVN0b3JlfSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RheGVzJzpcbiAgICAgICAgdGhpcy5wcm9wcy50YXhlU3RvcmUubG9hZFRheGVzKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnRheGVTdG9yZX0pXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHRocyA9IFtdXG4gICAgbGV0IHRkcyA9IFtdXG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdGUuc3RvcmUudGhzICE9IG51bGwpIHtcbiAgICAgIHRocyA9IHRoaXMuc3RhdGUuc3RvcmUudGhzXG4gICAgICB0ZHMgPSB0aGlzLnN0YXRlLnN0b3JlLnRkc1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGUgdGhzPXt0aHN9IHRkcz17dGRzfS8+XG4gICAgKVxuICB9XG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlcl9hcHBfcmVhY3QnKSAhPT0gbnVsbCkge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyXG4gICAgICBwcmVzdGF0aW9uU3RvcmU9e1ByZXN0YXRpb25TdG9yZX1cbiAgICAgIGVkaXRTdG9yZT17RWRpdFN0b3JlfVxuICAgICAgdmFsaWRhdGlvblN0b3JlPXtWYWxpZGF0aW9uU3RvcmV9XG4gICAgICBzdGF0dVN0b3JlPXtTdGF0dVN0b3JlfVxuICAgICAgdGF4ZVN0b3JlPXtUYXhlU3RvcmV9XG4gICAgPlxuICAgICAgPE1hbmFnZXJBcHAgdHlwZT17ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXJfYXBwX3JlYWN0JykuZGF0YXNldC50eXBlfSAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyX2FwcF9yZWFjdCcpXG4gIClcbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuQGluamVjdCgnZWRpdFN0b3JlJywgJ3ZhbGlkYXRpb25TdG9yZScsICdwcmVzdGF0aW9uU3RvcmUnLCAnc3RhdHVTdG9yZScsICd0YXhlU3RvcmUnKVxuQG9ic2VydmVyXG5jbGFzcyBUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICQoJzpmb2N1cycpLmJsdXIoKVxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS5lcnJvcnMpLmxlbmd0aCA9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZWRpdFN0b3JlLnZhbHVlcykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9wcy5lZGl0U3RvcmUuc2F2ZVZhbHVlcygpXG4gICAgfVxuICAgIFxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS52YWxpZGF0ZShlKVxuICAgIHRoaXMucHJvcHMuZWRpdFN0b3JlLnVwZGF0ZVZhbHVlcyhlLCB0aGlzLnByb3BzLnRkcylcbiAgfVxuXG4gIGhhbmRsZUJsdXIgPSAoZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLnZhbGlkYXRlKGUpXG4gIH1cblxuICBoYW5kbGVSb3cgPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnRkcy5maW5kKCh0ZCkgPT4gdGQuaWQgPT0gJ25ldycpID09IG51bGwpIHtcbiAgICAgIGxldCBuZXdfcm93ID0ge31cbiAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge2lkOiAnbmV3J30pXG4gICAgICB0aGlzLnByb3BzLnRocy5tYXAoKHRoKSA9PiB7XG4gICAgICAgIGlmICh0aCA9PSAnbWFrZV90aW1lJykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge1t0aF06IG1vbWVudCgpLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdfcm93LCB7W3RoXTogJyd9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5wcm9wcy50ZHMucHVzaChuZXdfcm93KVxuICAgICAgJChlLnRhcmdldCkuYXR0cignY2xhc3MnLCAnZmEgZmEtbWludXMtY2lyY2xlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy50ZHMucG9wKClcbiAgICAgICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJywgJ2ZhIGZhLXBsdXMtY2lyY2xlJylcbiAgICAgIGRlbGV0ZSB0aGlzLnByb3BzLmVkaXRTdG9yZS52YWx1ZXNbJ25ldyddXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS5lcnJvcnMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICghZWxlbWVudC5zZWFyY2goXCJuZXdcIikpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzW2VsZW1lbnRdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gZGlzYWJsZWQ9e09iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9ycykubGVuZ3RoID09IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzKS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlIH0+U2F2ZSBBTEwgY2hhbmdlPC9idXR0b24+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRleHQtY2VudGVyJz5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRocy5tYXAoKHRoKSA9PiA8dGgga2V5PXt0aC5uYW1lfT57dGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJyl9PC90aD4pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRkcy5tYXAoKHRkKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17dGQuaWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aHMubWFwKHRoID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHt0ZC5pZH1fJHt0aC5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi50aGlzLnByb3BzLmVkaXRTdG9yZS5mb3JtYXRWYWx1ZSh0ZCx0aCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBsdXMtY2lyY2xlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVJvd30gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxici8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQ9e09iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9ycykubGVuZ3RoID09IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzKS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlIH0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+U2F2ZSBBTEwgY2hhbmdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5jbGFzcyBFZGl0U3RvcmUge1xuICBAb2JzZXJ2YWJsZSB2YWx1ZXMgPSB7fVxuXG4gIGZvcm1hdFZhbHVlICh0ZCx0aCkge1xuICAgIGxldCB2YWx1ZSA9IHt9XG5cbiAgICBzd2l0Y2ggKHRoLm5hbWUpIHtcbiAgICAgIGNhc2UgJ2FjdGl2ZSc6XG4gICAgICAgIHZhbHVlLmRlZmF1bHRDaGVja2VkID0gdGRbdGgubmFtZV0gPyB0cnVlIDogZmFsc2VcbiAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gdGRbdGgubmFtZV1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgY2FzZSAnbWFrZV90aW1lJzpcbiAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gbW9tZW50KHRkW3RoLm5hbWVdKS5mb3JtYXQoJ0hIOm1tOnNzJylcbiAgICAgICAgdmFsdWUucGxhY2Vob2xkZXIgPSAnSEg6TU06U1MnXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwcmljZV9odCc6XG4gICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IHRkW3RoLm5hbWVdXG4gICAgICAgIHZhbHVlLnBsYWNlaG9sZGVyID0gdGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJylcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSB0ZFt0aC5uYW1lXVxuICAgICAgICB2YWx1ZS5wbGFjZWhvbGRlciA9IHRoLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aC5uYW1lLnNsaWNlKDEpLnJlcGxhY2UoJ18nLCAnICcpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhbHVlLnR5cGUgPSB0aC50eXBlXG4gICAgdmFsdWVbJ2RhdGEtaWQnXSA9IHRkLmlkXG4gICAgdmFsdWUubmFtZSA9IHRoLm5hbWVcblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdXBkYXRlVmFsdWVzIChlLCB0ZHMpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgbGV0IG9sZF92YWx1ZSA9IHRkcy5maW5kKCh0ZCkgPT4gdGQuaWQgPT0gaWQpW25hbWVdXG4gIFxuICAgICAgLy8gZm9ybWF0IHNwZWNpZmljIGZpZWxkXG4gICAgICBpZiAobmFtZSA9PSAnbWFrZV90aW1lJykge1xuICAgICAgICBvbGRfdmFsdWUgPSBtb21lbnQob2xkX3ZhbHVlKS5mb3JtYXQoJ0hIOm1tOnNzJylcbiAgICAgIH1cbiAgXG4gICAgICBpZiAobmFtZSA9PSAnYWN0aXZlJykge1xuICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgb2xkX3ZhbHVlID0gb2xkX3ZhbHVlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICB9XG4gIFxuICAgICAgLy8gdXBkYXRlIHZhbHVlc1xuICAgICAgaWYgKHZhbHVlICE9IG9sZF92YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbaWRdKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlc1tpZF0sIHtbbmFtZV06IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywge1tpZF06e1tuYW1lXTogdmFsdWV9fSk7XG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjZmZhNTAwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc1tpZF1bbmFtZV1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudmFsdWVzW2lkXSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjMDAwJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2F2ZVZhbHVlcyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy52YWx1ZXMpKVxuICAgICAgLy8gd2luZG93LmZldGNoKCcvYXBpL3ByZXN0YXRpb25zJywge1xuICAgICAgLy8gICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLnByZXN0YXRpb25zID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgLy8gICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVkaXRTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5cbmNsYXNzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHRocyA9IFtdXG5cbiAgQG9ic2VydmFibGUgdGRzID0gW11cblxuICBsb2FkVmFsdWVzKHZhbHVlcywgb3B0aW9ucykge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIG9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gT2JqZWN0LmtleXModmFsdWVzWzBdKS5maW5kKHZhbHVlID0+IHZhbHVlID09PSBvcHRpb24ubmFtZSlcbiAgICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50aHMucHVzaChvcHRpb24pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgdGhpcy50ZHMgPSB2YWx1ZXNcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRTdG9yZVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgUHJlc3RhdGlvblN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgcHJlc3RhdGlvbnMgPSBbXVxuXG4gIGxvYWRQcmVzdGF0aW9ucyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3ByZXN0YXRpb25zJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnByZXN0YXRpb25zID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgIHRoaXMubG9hZFZhbHVlcyh0aGlzLnByZXN0YXRpb25zLCBbXG4gICAgICAgICAgICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdtYWtlX3RpbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdwcmljZV9odCcsIHR5cGU6ICdudW1iZXInfSxcbiAgICAgICAgICAgIHtuYW1lOiAnYWN0aXZlJywgdHlwZTogJ2NoZWNrYm94J30sXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmVzdGF0aW9uU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgU3RhdHVTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHN0YXR1cyA9IFtdXG5cbiAgbG9hZFN0YXR1cyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3N0YXR1cycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKHRoaXMuc3RhdHVzLCBbXG4gICAgICAgICAgICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdGF0dVN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBMb2FkU3RvcmUgZnJvbSAnLi9Mb2FkU3RvcmUnXG5cbmNsYXNzIFRheGVTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHRheGVzID0gW11cblxuICBsb2FkVGF4ZXMgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS90YXhlcycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy50YXhlcyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy50YXhlcywgW1xuICAgICAgICAgICAge25hbWU6ICd2YWx1ZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0JywgdHlwZTogJ2RhdGUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kJywgdHlwZTogJ2RhdGUnfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGF4ZVN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcblxuY2xhc3MgVmFsaWRhdGlvblN0b3JlIHtcbiAgQG9ic2VydmFibGUgZXJyb3JzID0ge31cblxuICB2YWxpZGF0ZSAoZSkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lXG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcbiAgICAgIFxuICAgICAgaWYgKHZhbHVlID09ICcnKSB7XG4gICAgICAgICQoZS50YXJnZXQpLmF0dHIoe1xuICAgICAgICAgIHN0eWxlOiAnYm9yZGVyOiAxcHggc29saWQgI2YwMCAhaW1wb3J0YW50JyxcbiAgICAgICAgICB0aXRsZTogJ1JlcXVpcmVkJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFkZEVycm9yKGAke2lkfV8ke25hbWV9YCwgJ1JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUVycm9yKGAke2lkfV8ke25hbWV9YClcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT0gJ21ha2VfdGltZScpIHtcbiAgICAgICAgaWYgKCF2YWx1ZS5tYXRjaCgvKFswLTldezJ9KTooWzAtOV17Mn0pOihbMC05XXsyfSkvKSkge1xuICAgICAgICAgICQoZS50YXJnZXQpLmF0dHIoe1xuICAgICAgICAgICAgc3R5bGU6ICdib3JkZXI6IDFweCBzb2xpZCAjZjAwISBpbXBvcnRhbnQnLFxuICAgICAgICAgICAgdGl0bGU6ICdGb3JtYXQgSEg6TU06U1MnXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmFkZEVycm9yKGAke2lkfV8ke25hbWV9YCwgJ0Zvcm1hdCBISDpNTTpTUycpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihgJHtpZH1fJHtuYW1lfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLmVycm9yc1tgJHtpZH1fJHtuYW1lfWBdKSB7XG4gICAgICAgICQoZS50YXJnZXQpLmNzcygnYm9yZGVyJywgJ25vbmUnKVxuICAgICAgICAkKGUudGFyZ2V0KS5jc3MoJ2NvbG9yJywgJyMwMDAnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGRFcnJvciAobmFtZSwgbWVzc2FnZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5lcnJvcnMsIHtbbmFtZV06IG1lc3NhZ2V9KVxuICB9XG5cbiAgcmVtb3ZlRXJyb3IgKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5lcnJvcnNbbmFtZV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvblN0b3JlKClcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9