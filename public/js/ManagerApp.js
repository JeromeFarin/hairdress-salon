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
/* harmony import */ var _stores_UserStore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stores/UserStore */ "./assets/ManagerApp/js/stores/UserStore.js");
/* harmony import */ var _components_Modal_EditRolesModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Modal/EditRolesModal */ "./assets/ManagerApp/js/components/Modal/EditRolesModal.js");
/* harmony import */ var _stores_ModalStore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stores/ModalStore */ "./assets/ManagerApp/js/stores/ModalStore.js");
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Filter */ "./assets/ManagerApp/js/components/Filter.js");













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














var ManagerApp = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_14__["inject"])('prestationStore', 'statuStore', 'taxeStore', 'userStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_14__["observer"])(_class = (_temp =
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

        case 'users':
          this.props.userStore.loadUsers();
          this.setState({
            store: this.props.userStore
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Modal_EditRolesModal__WEBPACK_IMPORTED_MODULE_22__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Filter__WEBPACK_IMPORTED_MODULE_24__["default"], {
        store: this.state.store
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
        ths: this.state.store.ths != null ? this.state.store.ths : [],
        tds: this.state.store.tds != null ? this.state.store.tds : []
      }));
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
    taxeStore: _stores_TaxeStore__WEBPACK_IMPORTED_MODULE_19__["default"],
    userStore: _stores_UserStore__WEBPACK_IMPORTED_MODULE_21__["default"],
    modalStore: _stores_ModalStore__WEBPACK_IMPORTED_MODULE_23__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(ManagerApp, {
    type: document.getElementById('manager_app_react').dataset.type
  })), document.getElementById('manager_app_react'));
}

/***/ }),

/***/ "./assets/ManagerApp/js/components/Filter.js":
/*!***************************************************!*\
  !*** ./assets/ManagerApp/js/components/Filter.js ***!
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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);

















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Filter =
/*#__PURE__*/
function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Filter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      filters: ['last_name', 'first_name', 'roles', 'name', 'make_time', 'price_ht', 'start', 'end', 'hire_date']
    };

    _this.handleChange = function (e) {
      var tds = _this.props.store.tds_loaded.map(function (td) {
        for (var i = 0; i < _this.state.filters.length; i++) {
          if (td[_this.state.filters[i]] != null && _this.state.filters[i] == 'roles') {
            for (var j = 0; j < td[_this.state.filters[i]].length; j++) {
              if (_this.checkValue(td[_this.state.filters[i]], e.target.value)) {
                return td;
              }
            }
          }

          if (_this.checkValue(td[_this.state.filters[i]], e.target.value)) {
            return td;
          }
        }
      });

      _this.props.store.tds = tds.filter(function (td) {
        return td != null;
      });
    };

    return _this;
  }

  _createClass(Filter, [{
    key: "checkValue",
    value: function checkValue(first, second) {
      if (first != null && String(first).toLowerCase().search(second.toLowerCase()) > -1) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("input", {
        type: "text",
        placeholder: "Filter",
        onChange: this.handleChange
      });
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./assets/ManagerApp/js/components/Modal/EditRolesModal.js":
/*!*****************************************************************!*\
  !*** ./assets/ManagerApp/js/components/Modal/EditRolesModal.js ***!
  \*****************************************************************/
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
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");















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




var EditRolesModal = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_16__["inject"])('modalStore', 'userStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_16__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(EditRolesModal, _Component);

  function EditRolesModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditRolesModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditRolesModal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      roles: ['ROLE_ADMIN', 'ROLE_STAFF', 'ROLE_CLIENT'],
      selected: []
    };

    _this.handleClick = function () {
      _this.props.modalStore.toggleEditRolesModal();
    };

    _this.handleChange = function (e) {
      var selected = [];

      for (var i = 0, len = e.target.options.length; i < len; i++) {
        if (event.target.options[i].selected) {
          selected.push(event.target.options[i].value);
        }
      }

      _this.setState({
        selected: selected
      });
    };

    _this.handleConfirm = function (e) {
      e.preventDefault();
      console.log(_this.state.selected, e.target.dataset.id);

      _this.props.modalStore.toggleEditRolesModal();
    };

    return _this;
  }

  _createClass(EditRolesModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = {};

      if (this.props.userStore.user > 0) {
        user = this.props.userStore.users.find(function (user) {
          return user.id == _this2.props.userStore.user;
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Modal"], {
        id: "edit_roles_modal",
        show: this.props.modalStore.edit_roles_modal,
        onHide: this.handleClick,
        centered: true
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Modal"].Header, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "Edit Roles")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Modal"].Body, {
        className: "d-flex flex-column align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
        id: "edit_roles_form",
        onSubmit: this.handleConfirm,
        "data-id": user.id
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("select", {
        onChange: this.handleChange,
        defaultValue: user.roles,
        name: "roles",
        multiple: true
      }, this.state.roles.map(function (elt) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
          key: elt,
          value: elt
        }, elt);
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        variant: "primary",
        type: "submit",
        form: "edit_roles_form"
      }, "Confirm"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        variant: "secondary",
        onClick: this.handleClick
      }, "Cancel")));
    }
  }]);

  return EditRolesModal;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (EditRolesModal);

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
        style: {
          display: this.props.ths.find(function (th) {
            return th.name == 'roles';
          }) == null ? 'block' : 'none'
        },
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
/* harmony import */ var _ModalStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ModalStore */ "./assets/ManagerApp/js/stores/ModalStore.js");
/* harmony import */ var _UserStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./UserStore */ "./assets/ManagerApp/js/stores/UserStore.js");
















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
    key: "handleChangeRoles",
    value: function handleChangeRoles(e) {
      _UserStore__WEBPACK_IMPORTED_MODULE_18__["default"].user = e.target.dataset.id;
      _ModalStore__WEBPACK_IMPORTED_MODULE_17__["default"].toggleEditRolesModal();
    }
  }, {
    key: "formatValue",
    value: function formatValue(td, th) {
      var value = {};
      value.type = th.type;
      value['data-id'] = td.id;
      value.name = th.name;
      value.defaultValue = td[th.name];
      value.placeholder = th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' '); // specific value

      switch (th.name) {
        case 'active':
          value.defaultChecked = td[th.name] ? true : false;
          break;

        case 'make_time':
          if (td[th.name] == null) {
            value.defaultValue = '00:00:00';
          } else {
            value.defaultValue = moment__WEBPACK_IMPORTED_MODULE_16___default()(td[th.name]).format('HH:mm:ss');
          }

          value.placeholder = 'HH:MM:SS';
          break;

        case 'start':
        case 'end':
        case 'hire_date':
          if (td[th.name] == null) {
            value.defaultValue = '';
          } else {
            value.defaultValue = moment__WEBPACK_IMPORTED_MODULE_16___default()(td[th.name]).format('YYYY-MM-DD');
          }

          break;

        case 'color':
          if (td[th.name] == null) {
            value.defaultValue = '#000';
          }

          break;

        case 'roles':
          value.onClick = this.handleChangeRoles;
          break;

        case 'first_name':
        case 'last_name':
          value.disabled = true;
          break;
      }

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











var _class, _descriptor, _descriptor2, _descriptor3, _temp;

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

    _initializerDefineProperty(this, "tds_loaded", _descriptor3, this);
  }

  _createClass(LoadStore, [{
    key: "loadValues",
    value: function loadValues(values, options) {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_10__["runInAction"])(function () {
        var ths = {};
        values.map(function (value) {
          if (ths.length < Object.keys(value).length || ths.length == null) {
            ths = Object.keys(value);
          }
        });
        options.map(function (option) {
          var check = ths.find(function (value) {
            return value === option.name;
          });

          if (check != null) {
            _this.ths.push(option);
          }
        });
        _this.tds_loaded = values;
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
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "tds_loaded", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (LoadStore);

/***/ }),

/***/ "./assets/ManagerApp/js/stores/ModalStore.js":
/*!***************************************************!*\
  !*** ./assets/ManagerApp/js/stores/ModalStore.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");








var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


var ModalStore = (_class = (_temp = function ModalStore() {
  var _this = this;

  _classCallCheck(this, ModalStore);

  _initializerDefineProperty(this, "edit_roles_modal", _descriptor, this);

  this.toggleEditRolesModal = function () {
    Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
      _this.edit_roles_modal = !_this.edit_roles_modal;
    });
  };
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "edit_roles_modal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new ModalStore());

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

/***/ "./assets/ManagerApp/js/stores/UserStore.js":
/*!**************************************************!*\
  !*** ./assets/ManagerApp/js/stores/UserStore.js ***!
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




















var _class, _descriptor, _descriptor2, _temp;

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



var UserStore = (_class = (_temp =
/*#__PURE__*/
function (_LoadStore) {
  _inherits(UserStore, _LoadStore);

  function UserStore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "users", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "user", _descriptor2, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(UserStore, [{
    key: "loadUsers",
    value: function loadUsers() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_19__["runInAction"])(function () {
        window.fetch('/api/users', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.users = JSON.parse(data);

          _this2.loadValues(_this2.users, [{
            name: 'first_name',
            type: 'text'
          }, {
            name: 'last_name',
            type: 'text'
          }, {
            name: 'color',
            type: 'color'
          }, {
            name: 'hire_date',
            type: 'date'
          }, {
            name: 'roles',
            type: 'button'
          }]);
        })["catch"](function (error) {
          console.error(error.message);
        });
      });
    }
  }]);

  return UserStore;
}(_LoadStore__WEBPACK_IMPORTED_MODULE_20__["default"]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "users", [mobx__WEBPACK_IMPORTED_MODULE_19__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "user", [mobx__WEBPACK_IMPORTED_MODULE_19__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new UserStore());

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

        if (value == '' && name != 'hire_date') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9NYW5hZ2VyQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvTW9kYWwvRWRpdFJvbGVzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvRWRpdFN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9Mb2FkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL01vZGFsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1ByZXN0YXRpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvU3RhdHVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvVGF4ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9Vc2VyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1ZhbGlkYXRpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiTWFuYWdlckFwcCIsImluamVjdCIsIm9ic2VydmVyIiwic3RhdGUiLCJzdG9yZSIsInByb3BzIiwidHlwZSIsInByZXN0YXRpb25TdG9yZSIsImxvYWRQcmVzdGF0aW9ucyIsInNldFN0YXRlIiwic3RhdHVTdG9yZSIsImxvYWRTdGF0dXMiLCJ0YXhlU3RvcmUiLCJsb2FkVGF4ZXMiLCJ1c2VyU3RvcmUiLCJsb2FkVXNlcnMiLCJ0aHMiLCJ0ZHMiLCJDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJQcmVzdGF0aW9uU3RvcmUiLCJFZGl0U3RvcmUiLCJWYWxpZGF0aW9uU3RvcmUiLCJTdGF0dVN0b3JlIiwiVGF4ZVN0b3JlIiwiVXNlclN0b3JlIiwiTW9kYWxTdG9yZSIsImRhdGFzZXQiLCJGaWx0ZXIiLCJmaWx0ZXJzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRkc19sb2FkZWQiLCJtYXAiLCJ0ZCIsImkiLCJsZW5ndGgiLCJqIiwiY2hlY2tWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwiZmlyc3QiLCJzZWNvbmQiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaCIsIkVkaXRSb2xlc01vZGFsIiwicm9sZXMiLCJzZWxlY3RlZCIsImhhbmRsZUNsaWNrIiwibW9kYWxTdG9yZSIsInRvZ2dsZUVkaXRSb2xlc01vZGFsIiwibGVuIiwib3B0aW9ucyIsImV2ZW50IiwicHVzaCIsImhhbmRsZUNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVzZXIiLCJ1c2VycyIsImZpbmQiLCJlZGl0X3JvbGVzX21vZGFsIiwiZWx0IiwiVGFibGUiLCIkIiwiYmx1ciIsIk9iamVjdCIsImtleXMiLCJ2YWxpZGF0aW9uU3RvcmUiLCJlcnJvcnMiLCJlZGl0U3RvcmUiLCJ2YWx1ZXMiLCJzYXZlVmFsdWVzIiwidmFsaWRhdGUiLCJ1cGRhdGVWYWx1ZXMiLCJoYW5kbGVCbHVyIiwiaGFuZGxlUm93IiwibmV3X3JvdyIsImFzc2lnbiIsInRoIiwibW9tZW50IiwiaG91ciIsIm1pbnV0ZSIsImF0dHIiLCJwb3AiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicmVwbGFjZSIsImZvcm1hdFZhbHVlIiwiZGlzcGxheSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdENoZWNrZWQiLCJmb3JtYXQiLCJvbkNsaWNrIiwiaGFuZGxlQ2hhbmdlUm9sZXMiLCJkaXNhYmxlZCIsInJ1bkluQWN0aW9uIiwib2xkX3ZhbHVlIiwiY2hlY2tlZCIsImNzcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvYnNlcnZhYmxlIiwiTG9hZFN0b3JlIiwib3B0aW9uIiwiY2hlY2siLCJ3aW5kb3ciLCJmZXRjaCIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInByZXN0YXRpb25zIiwicGFyc2UiLCJsb2FkVmFsdWVzIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwidGF4ZXMiLCJzdHlsZSIsInRpdGxlIiwiYWRkRXJyb3IiLCJyZW1vdmVFcnJvciIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBSU1BLFUsV0FGTEMsMERBQU0sQ0FBQyxpQkFBRCxFQUFvQixZQUFwQixFQUFrQyxXQUFsQyxFQUErQyxXQUEvQyxDLGdCQUNOQyw0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFQ0MsSyxHQUFRO0FBQ05DLFdBQUssRUFBRTtBQURELEs7Ozs7Ozt3Q0FJWTtBQUNsQixjQUFRLEtBQUtDLEtBQUwsQ0FBV0MsSUFBbkI7QUFDRSxhQUFLLGFBQUw7QUFDRSxlQUFLRCxLQUFMLENBQVdFLGVBQVgsQ0FBMkJDLGVBQTNCO0FBQ0EsZUFBS0MsUUFBTCxDQUFjO0FBQUNMLGlCQUFLLEVBQUcsS0FBS0MsS0FBTCxDQUFXRTtBQUFwQixXQUFkO0FBQ0E7O0FBRUYsYUFBSyxR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6Ik1hbmFnZXJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIsIGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IFByZXN0YXRpb25TdG9yZSBmcm9tICcuL3N0b3Jlcy9QcmVzdGF0aW9uU3RvcmUnXG5pbXBvcnQgRWRpdFN0b3JlIGZyb20gJy4vc3RvcmVzL0VkaXRTdG9yZSdcbmltcG9ydCBWYWxpZGF0aW9uU3RvcmUgZnJvbSAnLi9zdG9yZXMvVmFsaWRhdGlvblN0b3JlJ1xuaW1wb3J0IFN0YXR1U3RvcmUgZnJvbSAnLi9zdG9yZXMvU3RhdHVTdG9yZSdcbmltcG9ydCBUYXhlU3RvcmUgZnJvbSAnLi9zdG9yZXMvVGF4ZVN0b3JlJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vY29tcG9uZW50cy9UYWJsZSdcbmltcG9ydCBVc2VyU3RvcmUgZnJvbSAnLi9zdG9yZXMvVXNlclN0b3JlJ1xuaW1wb3J0IEVkaXRSb2xlc01vZGFsIGZyb20gJy4vY29tcG9uZW50cy9Nb2RhbC9FZGl0Um9sZXNNb2RhbCdcbmltcG9ydCBNb2RhbFN0b3JlIGZyb20gJy4vc3RvcmVzL01vZGFsU3RvcmUnXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vY29tcG9uZW50cy9GaWx0ZXInXG5cbkBpbmplY3QoJ3ByZXN0YXRpb25TdG9yZScsICdzdGF0dVN0b3JlJywgJ3RheGVTdG9yZScsICd1c2VyU3RvcmUnKVxuQG9ic2VydmVyXG5jbGFzcyBNYW5hZ2VyQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RvcmU6IHt9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgY2FzZSAncHJlc3RhdGlvbnMnOlxuICAgICAgICB0aGlzLnByb3BzLnByZXN0YXRpb25TdG9yZS5sb2FkUHJlc3RhdGlvbnMoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdG9yZSA6IHRoaXMucHJvcHMucHJlc3RhdGlvblN0b3JlfSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgICAgIHRoaXMucHJvcHMuc3RhdHVTdG9yZS5sb2FkU3RhdHVzKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnN0YXR1U3RvcmV9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndGF4ZXMnOlxuICAgICAgICB0aGlzLnByb3BzLnRheGVTdG9yZS5sb2FkVGF4ZXMoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdG9yZSA6IHRoaXMucHJvcHMudGF4ZVN0b3JlfSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3VzZXJzJzpcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU3RvcmUubG9hZFVzZXJzKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnVzZXJTdG9yZX0pXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxFZGl0Um9sZXNNb2RhbC8+XG4gICAgICAgIDxGaWx0ZXIgc3RvcmU9e3RoaXMuc3RhdGUuc3RvcmV9Lz5cbiAgICAgICAgPFRhYmxlIHRocz17dGhpcy5zdGF0ZS5zdG9yZS50aHMgIT0gbnVsbCA/IHRoaXMuc3RhdGUuc3RvcmUudGhzIDogW119IHRkcz17dGhpcy5zdGF0ZS5zdG9yZS50ZHMgIT0gbnVsbCA/IHRoaXMuc3RhdGUuc3RvcmUudGRzIDogW119Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXJfYXBwX3JlYWN0JykgIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlclxuICAgICAgcHJlc3RhdGlvblN0b3JlPXtQcmVzdGF0aW9uU3RvcmV9XG4gICAgICBlZGl0U3RvcmU9e0VkaXRTdG9yZX1cbiAgICAgIHZhbGlkYXRpb25TdG9yZT17VmFsaWRhdGlvblN0b3JlfVxuICAgICAgc3RhdHVTdG9yZT17U3RhdHVTdG9yZX1cbiAgICAgIHRheGVTdG9yZT17VGF4ZVN0b3JlfVxuICAgICAgdXNlclN0b3JlPXtVc2VyU3RvcmV9XG4gICAgICBtb2RhbFN0b3JlPXtNb2RhbFN0b3JlfVxuICAgID5cbiAgICAgIDxNYW5hZ2VyQXBwIHR5cGU9e2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyX2FwcF9yZWFjdCcpLmRhdGFzZXQudHlwZX0gLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlcl9hcHBfcmVhY3QnKVxuICApXG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZmlsdGVyczogW1xuICAgICAgJ2xhc3RfbmFtZScsXG4gICAgICAnZmlyc3RfbmFtZScsXG4gICAgICAncm9sZXMnLFxuICAgICAgJ25hbWUnLFxuICAgICAgJ21ha2VfdGltZScsXG4gICAgICAncHJpY2VfaHQnLFxuICAgICAgJ3N0YXJ0JyxcbiAgICAgICdlbmQnLFxuICAgICAgJ2hpcmVfZGF0ZSdcbiAgICBdXG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgdGRzID0gdGhpcy5wcm9wcy5zdG9yZS50ZHNfbG9hZGVkLm1hcCh0ZCA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGRbdGhpcy5zdGF0ZS5maWx0ZXJzW2ldXSAhPSBudWxsICYmIHRoaXMuc3RhdGUuZmlsdGVyc1tpXSA9PSAncm9sZXMnKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZFt0aGlzLnN0YXRlLmZpbHRlcnNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlKHRkW3RoaXMuc3RhdGUuZmlsdGVyc1tpXV0sIGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlKHRkW3RoaXMuc3RhdGUuZmlsdGVyc1tpXV0sIGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0ZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMucHJvcHMuc3RvcmUudGRzID0gdGRzLmZpbHRlcih0ZCA9PiB0ZCAhPSBudWxsKVxuICAgIFxuICB9XG5cbiAgY2hlY2tWYWx1ZSAoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCAhPSBudWxsICYmIFN0cmluZyhmaXJzdCkudG9Mb3dlckNhc2UoKS5zZWFyY2goc2Vjb25kLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdGaWx0ZXInIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCdcblxuQGluamVjdCgnbW9kYWxTdG9yZScsICd1c2VyU3RvcmUnKVxuQG9ic2VydmVyXG5jbGFzcyBFZGl0Um9sZXNNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJvbGVzOiBbJ1JPTEVfQURNSU4nLCdST0xFX1NUQUZGJywnUk9MRV9DTElFTlQnXSxcbiAgICBzZWxlY3RlZDogW11cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZS50YXJnZXQub3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5vcHRpb25zW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0Lm9wdGlvbnNbaV0udmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkIH0pXG4gIH1cblxuICBoYW5kbGVDb25maXJtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkLCBlLnRhcmdldC5kYXRhc2V0LmlkKVxuICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCB1c2VyID0ge31cbiAgICBpZiAodGhpcy5wcm9wcy51c2VyU3RvcmUudXNlciA+IDApIHtcbiAgICAgIHVzZXIgPSB0aGlzLnByb3BzLnVzZXJTdG9yZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09IHRoaXMucHJvcHMudXNlclN0b3JlLnVzZXIpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgaWQ9J2VkaXRfcm9sZXNfbW9kYWwnIHNob3c9e3RoaXMucHJvcHMubW9kYWxTdG9yZS5lZGl0X3JvbGVzX21vZGFsfSBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xpY2t9IGNlbnRlcmVkPlxuICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxoMz5FZGl0IFJvbGVzPC9oMz5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPGZvcm0gaWQ9J2VkaXRfcm9sZXNfZm9ybScgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ29uZmlybX0gZGF0YS1pZD17dXNlci5pZH0+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt1c2VyLnJvbGVzfSBuYW1lPSdyb2xlcycgbXVsdGlwbGU+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvbGVzLm1hcChlbHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17ZWx0fSB2YWx1ZT17ZWx0fT57ZWx0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgdHlwZT0nc3VibWl0JyBmb3JtPSdlZGl0X3JvbGVzX2Zvcm0nPkNvbmZpcm08L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3NlY29uZGFyeScgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFJvbGVzTW9kYWxcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbkBpbmplY3QoJ2VkaXRTdG9yZScsICd2YWxpZGF0aW9uU3RvcmUnLCAncHJlc3RhdGlvblN0b3JlJywgJ3N0YXR1U3RvcmUnLCAndGF4ZVN0b3JlJylcbkBvYnNlcnZlclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAkKCc6Zm9jdXMnKS5ibHVyKClcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5sZW5ndGggPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmVkaXRTdG9yZS52YWx1ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMuZWRpdFN0b3JlLnNhdmVWYWx1ZXMoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUudmFsaWRhdGUoZSlcbiAgICB0aGlzLnByb3BzLmVkaXRTdG9yZS51cGRhdGVWYWx1ZXMoZSwgdGhpcy5wcm9wcy50ZHMpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS52YWxpZGF0ZShlKVxuICB9XG5cbiAgaGFuZGxlUm93ID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50ZHMuZmluZCgodGQpID0+IHRkLmlkID09ICduZXcnKSA9PSBudWxsKSB7XG4gICAgICBsZXQgbmV3X3JvdyA9IHt9XG4gICAgICBPYmplY3QuYXNzaWduKG5ld19yb3csIHtpZDogJ25ldyd9KVxuICAgICAgdGhpcy5wcm9wcy50aHMubWFwKCh0aCkgPT4ge1xuICAgICAgICBpZiAodGggPT0gJ21ha2VfdGltZScpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld19yb3csIHtbdGhdOiBtb21lbnQoKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge1t0aF06ICcnfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMudGRzLnB1c2gobmV3X3JvdylcbiAgICAgICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJywgJ2ZhIGZhLW1pbnVzLWNpcmNsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMudGRzLnBvcCgpXG4gICAgICAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycsICdmYSBmYS1wbHVzLWNpcmNsZScpXG4gICAgICBkZWxldGUgdGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzWyduZXcnXVxuICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQuc2VhcmNoKFwibmV3XCIpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9yc1tlbGVtZW50XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGRpc2FibGVkPXtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS5lcnJvcnMpLmxlbmd0aCA9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZWRpdFN0b3JlLnZhbHVlcykubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZSB9PlNhdmUgQUxMIGNoYW5nZTwvYnV0dG9uPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aHMubWFwKCh0aCkgPT4gPHRoIGtleT17dGgubmFtZX0+e3RoLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aC5uYW1lLnNsaWNlKDEpLnJlcGxhY2UoJ18nLCAnICcpfTwvdGg+KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZHMubWFwKCh0ZCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3RkLmlkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGhzLm1hcCh0aCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7dGQuaWR9XyR7dGgubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4udGhpcy5wcm9wcy5lZGl0U3RvcmUuZm9ybWF0VmFsdWUodGQsdGgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1wbHVzLWNpcmNsZScgb25DbGljaz17dGhpcy5oYW5kbGVSb3d9IHN0eWxlPXt7IGRpc3BsYXkgOiB0aGlzLnByb3BzLnRocy5maW5kKHRoID0+IHRoLm5hbWUgPT0gJ3JvbGVzJykgPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScgfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxici8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQ9e09iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9ycykubGVuZ3RoID09IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzKS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlIH0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+U2F2ZSBBTEwgY2hhbmdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IG1vZGFsU3RvcmUgZnJvbSAnLi9Nb2RhbFN0b3JlJ1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tICcuL1VzZXJTdG9yZSdcblxuY2xhc3MgRWRpdFN0b3JlIHtcbiAgQG9ic2VydmFibGUgdmFsdWVzID0ge31cblxuICBoYW5kbGVDaGFuZ2VSb2xlcyAoZSkge1xuICAgIFVzZXJTdG9yZS51c2VyID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgIG1vZGFsU3RvcmUudG9nZ2xlRWRpdFJvbGVzTW9kYWwoKVxuICB9XG5cbiAgZm9ybWF0VmFsdWUgKHRkLHRoKSB7XG4gICAgbGV0IHZhbHVlID0ge31cblxuICAgIHZhbHVlLnR5cGUgPSB0aC50eXBlXG4gICAgdmFsdWVbJ2RhdGEtaWQnXSA9IHRkLmlkXG4gICAgdmFsdWUubmFtZSA9IHRoLm5hbWVcbiAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSB0ZFt0aC5uYW1lXVxuICAgIHZhbHVlLnBsYWNlaG9sZGVyID0gdGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJylcblxuICAgIC8vIHNwZWNpZmljIHZhbHVlXG4gICAgc3dpdGNoICh0aC5uYW1lKSB7XG4gICAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgICB2YWx1ZS5kZWZhdWx0Q2hlY2tlZCA9IHRkW3RoLm5hbWVdID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ21ha2VfdGltZSc6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJzAwOjAwOjAwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdISDptbTpzcycpXG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUucGxhY2Vob2xkZXIgPSAnSEg6TU06U1MnXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgY2FzZSAnaGlyZV9kYXRlJzpcbiAgICAgICAgaWYgKHRkW3RoLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSAnJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJyMwMDAnXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JvbGVzJzpcbiAgICAgICAgdmFsdWUub25DbGljayA9IHRoaXMuaGFuZGxlQ2hhbmdlUm9sZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ZpcnN0X25hbWUnOlxuICAgICAgY2FzZSAnbGFzdF9uYW1lJzpcbiAgICAgICAgdmFsdWUuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdXBkYXRlVmFsdWVzIChlLCB0ZHMpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgbGV0IG9sZF92YWx1ZSA9IHRkcy5maW5kKCh0ZCkgPT4gdGQuaWQgPT0gaWQpW25hbWVdXG4gIFxuICAgICAgLy8gZm9ybWF0IHNwZWNpZmljIGZpZWxkXG4gICAgICBpZiAobmFtZSA9PSAnbWFrZV90aW1lJykge1xuICAgICAgICBvbGRfdmFsdWUgPSBtb21lbnQob2xkX3ZhbHVlKS5mb3JtYXQoJ0hIOm1tOnNzJylcbiAgICAgIH1cbiAgXG4gICAgICBpZiAobmFtZSA9PSAnYWN0aXZlJykge1xuICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgb2xkX3ZhbHVlID0gb2xkX3ZhbHVlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICB9XG4gIFxuICAgICAgLy8gdXBkYXRlIHZhbHVlc1xuICAgICAgaWYgKHZhbHVlICE9IG9sZF92YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbaWRdKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlc1tpZF0sIHtbbmFtZV06IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywge1tpZF06e1tuYW1lXTogdmFsdWV9fSk7XG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjZmZhNTAwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc1tpZF1bbmFtZV1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudmFsdWVzW2lkXSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjMDAwJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2F2ZVZhbHVlcyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy52YWx1ZXMpKVxuICAgICAgLy8gd2luZG93LmZldGNoKCcvYXBpL3ByZXN0YXRpb25zJywge1xuICAgICAgLy8gICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLnByZXN0YXRpb25zID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgLy8gICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVkaXRTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5cbmNsYXNzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHRocyA9IFtdXG5cbiAgQG9ic2VydmFibGUgdGRzID0gW11cblxuICBAb2JzZXJ2YWJsZSB0ZHNfbG9hZGVkID0gW11cblxuICBsb2FkVmFsdWVzKHZhbHVlcywgb3B0aW9ucykge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIGxldCB0aHMgPSB7fVxuXG4gICAgICB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHRocy5sZW5ndGggPCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoIHx8IHRocy5sZW5ndGggPT0gbnVsbCkge1xuICAgICAgICAgIHRocyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjaGVjayA9IHRocy5maW5kKHZhbHVlID0+IHZhbHVlID09PSBvcHRpb24ubmFtZSlcbiAgICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50aHMucHVzaChvcHRpb24pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgdGhpcy50ZHNfbG9hZGVkID0gdmFsdWVzXG4gICAgICB0aGlzLnRkcyA9IHZhbHVlc1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZFN0b3JlXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5cbmNsYXNzIE1vZGFsU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBlZGl0X3JvbGVzX21vZGFsID0gZmFsc2VcblxuICB0b2dnbGVFZGl0Um9sZXNNb2RhbCA9ICgpID0+IHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRfcm9sZXNfbW9kYWwgPSAhdGhpcy5lZGl0X3JvbGVzX21vZGFsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kYWxTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgTG9hZFN0b3JlIGZyb20gJy4vTG9hZFN0b3JlJ1xuXG5jbGFzcyBQcmVzdGF0aW9uU3RvcmUgZXh0ZW5kcyBMb2FkU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBwcmVzdGF0aW9ucyA9IFtdXG5cbiAgbG9hZFByZXN0YXRpb25zICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvcHJlc3RhdGlvbnMnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlc3RhdGlvbnMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKHRoaXMucHJlc3RhdGlvbnMsIFtcbiAgICAgICAgICAgIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ21ha2VfdGltZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ3ByaWNlX2h0JywgdHlwZTogJ251bWJlcid9LFxuICAgICAgICAgICAge25hbWU6ICdhY3RpdmUnLCB0eXBlOiAnY2hlY2tib3gnfSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByZXN0YXRpb25TdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgTG9hZFN0b3JlIGZyb20gJy4vTG9hZFN0b3JlJ1xuXG5jbGFzcyBTdGF0dVN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgc3RhdHVzID0gW11cblxuICBsb2FkU3RhdHVzICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvc3RhdHVzJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy5zdGF0dXMsIFtcbiAgICAgICAgICAgIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0J31cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0YXR1U3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgVGF4ZVN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgdGF4ZXMgPSBbXVxuXG4gIGxvYWRUYXhlcyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3RheGVzJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnRheGVzID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgIHRoaXMubG9hZFZhbHVlcyh0aGlzLnRheGVzLCBbXG4gICAgICAgICAgICB7bmFtZTogJ3ZhbHVlJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnc3RhcnQnLCB0eXBlOiAnZGF0ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdlbmQnLCB0eXBlOiAnZGF0ZSd9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUYXhlU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgVXNlclN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgdXNlcnMgPSBbXVxuXG4gIEBvYnNlcnZhYmxlIHVzZXIgPSAwXG5cbiAgbG9hZFVzZXJzICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvdXNlcnMnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMudXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKHRoaXMudXNlcnMsIFtcbiAgICAgICAgICAgIHtuYW1lOiAnZmlyc3RfbmFtZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ2xhc3RfbmFtZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ2NvbG9yJywgdHlwZTogJ2NvbG9yJ30sXG4gICAgICAgICAgICB7bmFtZTogJ2hpcmVfZGF0ZScsIHR5cGU6ICdkYXRlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ3JvbGVzJywgdHlwZTogJ2J1dHRvbid9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuXG5jbGFzcyBWYWxpZGF0aW9uU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBlcnJvcnMgPSB7fVxuXG4gIHZhbGlkYXRlIChlKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgICAgXG4gICAgICBpZiAodmFsdWUgPT0gJycgJiYgbmFtZSAhPSAnaGlyZV9kYXRlJykge1xuICAgICAgICAkKGUudGFyZ2V0KS5hdHRyKHtcbiAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMXB4IHNvbGlkICNmMDAgIWltcG9ydGFudCcsXG4gICAgICAgICAgdGl0bGU6ICdSZXF1aXJlZCdcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZGRFcnJvcihgJHtpZH1fJHtuYW1lfWAsICdSZXF1aXJlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihgJHtpZH1fJHtuYW1lfWApXG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09ICdtYWtlX3RpbWUnKSB7XG4gICAgICAgIGlmICghdmFsdWUubWF0Y2goLyhbMC05XXsyfSk6KFswLTldezJ9KTooWzAtOV17Mn0pLykpIHtcbiAgICAgICAgICAkKGUudGFyZ2V0KS5hdHRyKHtcbiAgICAgICAgICAgIHN0eWxlOiAnYm9yZGVyOiAxcHggc29saWQgI2YwMCEgaW1wb3J0YW50JyxcbiAgICAgICAgICAgIHRpdGxlOiAnRm9ybWF0IEhIOk1NOlNTJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5hZGRFcnJvcihgJHtpZH1fJHtuYW1lfWAsICdGb3JtYXQgSEg6TU06U1MnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoYCR7aWR9XyR7bmFtZX1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghdGhpcy5lcnJvcnNbYCR7aWR9XyR7bmFtZX1gXSkge1xuICAgICAgICAkKGUudGFyZ2V0KS5jc3MoJ2JvcmRlcicsICdub25lJylcbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjMDAwJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkRXJyb3IgKG5hbWUsIG1lc3NhZ2UpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuZXJyb3JzLCB7W25hbWVdOiBtZXNzYWdlfSlcbiAgfVxuXG4gIHJlbW92ZUVycm9yIChuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZXJyb3JzW25hbWVdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZhbGlkYXRpb25TdG9yZSgpXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==