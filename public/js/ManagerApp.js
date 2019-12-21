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
/* harmony import */ var _stores_StatusStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stores/StatusStore */ "./assets/ManagerApp/js/stores/StatusStore.js");
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














var ManagerApp = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_14__["inject"])('prestationStore', 'statusStore', 'taxeStore', 'userStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_14__["observer"])(_class = (_temp =
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
        case 'prestation':
          this.props.prestationStore.load();
          this.setState({
            store: this.props.prestationStore
          });
          break;

        case 'status':
          this.props.statusStore.load();
          this.setState({
            store: this.props.statusStore
          });
          break;

        case 'taxe':
          this.props.taxeStore.load();
          this.setState({
            store: this.props.taxeStore
          });
          break;

        case 'user':
          this.props.userStore.load();
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
        type: this.props.type,
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
    statusStore: _stores_StatusStore__WEBPACK_IMPORTED_MODULE_18__["default"],
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




var Table = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_24__["inject"])('editStore', 'validationStore', 'prestationStore', 'statusStore', 'taxeStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_24__["observer"])(_class = (_temp =
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

    _this.handleSave = function () {
      $(':focus').blur();

      if (Object.keys(_this.props.validationStore.errors).length == 0 && Object.keys(_this.props.editStore.values).length > 0) {
        _this.props.editStore.saveValues(_this.props.type);
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
        onClick: this.handleSave,
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
        onClick: this.handleSave
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
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ModalStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModalStore */ "./assets/ManagerApp/js/stores/ModalStore.js");
/* harmony import */ var _UserStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UserStore */ "./assets/ManagerApp/js/stores/UserStore.js");

















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
      _UserStore__WEBPACK_IMPORTED_MODULE_19__["default"].user = e.target.dataset.id;
      _ModalStore__WEBPACK_IMPORTED_MODULE_18__["default"].toggleEditRolesModal();
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
            value.defaultValue = moment__WEBPACK_IMPORTED_MODULE_17___default()(td[th.name]).format('HH:mm:ss');
          }

          value.placeholder = 'HH:MM:SS';
          break;

        case 'start':
        case 'end':
        case 'hire_date':
          if (td[th.name] == null) {
            value.defaultValue = '';
          } else {
            value.defaultValue = moment__WEBPACK_IMPORTED_MODULE_17___default()(td[th.name]).format('YYYY-MM-DD');
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

      Object(mobx__WEBPACK_IMPORTED_MODULE_16__["runInAction"])(function () {
        var name = e.target.name;
        var id = e.target.dataset.id;
        var value = e.target.value;
        var old_value = tds.find(function (td) {
          return td.id == id;
        })[name]; // format specific field

        if (name == 'make_time') {
          old_value = moment__WEBPACK_IMPORTED_MODULE_17___default()(old_value).format('HH:mm:ss');
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
    value: function saveValues(type) {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_16__["runInAction"])(function () {
        window.fetch('/admin/api/manager', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            type: type,
            value: _this2.values
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (JSON.parse(data) == true) {
            location.reload();
          }
        })["catch"](function (error) {
          console.error(error.message);
        });
      });
    }
  }]);

  return EditStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "values", [mobx__WEBPACK_IMPORTED_MODULE_16__["observable"]], {
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
        _this.ths = [];
        _this.tds = [];
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
    key: "load",
    value: function load() {
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

/***/ "./assets/ManagerApp/js/stores/StatusStore.js":
/*!****************************************************!*\
  !*** ./assets/ManagerApp/js/stores/StatusStore.js ***!
  \****************************************************/
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



var StatusStore = (_class = (_temp =
/*#__PURE__*/
function (_LoadStore) {
  _inherits(StatusStore, _LoadStore);

  function StatusStore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StatusStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StatusStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "status", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(StatusStore, [{
    key: "load",
    value: function load() {
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

  return StatusStore;
}(_LoadStore__WEBPACK_IMPORTED_MODULE_20__["default"]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "status", [mobx__WEBPACK_IMPORTED_MODULE_19__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new StatusStore());

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
    key: "load",
    value: function load() {
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
    key: "load",
    value: function load() {
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
          if (!value.match(/^([0-9]{2}):([0-9]{2}):([0-9]{2})$/)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9NYW5hZ2VyQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvTW9kYWwvRWRpdFJvbGVzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvRWRpdFN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9Mb2FkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL01vZGFsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1ByZXN0YXRpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvU3RhdHVzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1RheGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvVXNlclN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9WYWxpZGF0aW9uU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIl0sIm5hbWVzIjpbIk1hbmFnZXJBcHAiLCJpbmplY3QiLCJvYnNlcnZlciIsInN0YXRlIiwic3RvcmUiLCJwcm9wcyIsInR5cGUiLCJwcmVzdGF0aW9uU3RvcmUiLCJsb2FkIiwic2V0U3RhdGUiLCJzdGF0dXNTdG9yZSIsInRheGVTdG9yZSIsInVzZXJTdG9yZSIsInRocyIsInRkcyIsIkNvbXBvbmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsIlByZXN0YXRpb25TdG9yZSIsIkVkaXRTdG9yZSIsIlZhbGlkYXRpb25TdG9yZSIsIlN0YXR1c1N0b3JlIiwiVGF4ZVN0b3JlIiwiVXNlclN0b3JlIiwiTW9kYWxTdG9yZSIsImRhdGFzZXQiLCJGaWx0ZXIiLCJmaWx0ZXJzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRkc19sb2FkZWQiLCJtYXAiLCJ0ZCIsImkiLCJsZW5ndGgiLCJqIiwiY2hlY2tWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwiZmlyc3QiLCJzZWNvbmQiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaCIsIkVkaXRSb2xlc01vZGFsIiwicm9sZXMiLCJzZWxlY3RlZCIsImhhbmRsZUNsaWNrIiwibW9kYWxTdG9yZSIsInRvZ2dsZUVkaXRSb2xlc01vZGFsIiwibGVuIiwib3B0aW9ucyIsImV2ZW50IiwicHVzaCIsImhhbmRsZUNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInVzZXIiLCJ1c2VycyIsImZpbmQiLCJlZGl0X3JvbGVzX21vZGFsIiwiZWx0IiwiVGFibGUiLCJoYW5kbGVTYXZlIiwiJCIsImJsdXIiLCJPYmplY3QiLCJrZXlzIiwidmFsaWRhdGlvblN0b3JlIiwiZXJyb3JzIiwiZWRpdFN0b3JlIiwidmFsdWVzIiwic2F2ZVZhbHVlcyIsInZhbGlkYXRlIiwidXBkYXRlVmFsdWVzIiwiaGFuZGxlQmx1ciIsImhhbmRsZVJvdyIsIm5ld19yb3ciLCJhc3NpZ24iLCJ0aCIsIm1vbWVudCIsImhvdXIiLCJtaW51dGUiLCJhdHRyIiwicG9wIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2UiLCJmb3JtYXRWYWx1ZSIsImRpc3BsYXkiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRDaGVja2VkIiwiZm9ybWF0Iiwib25DbGljayIsImhhbmRsZUNoYW5nZVJvbGVzIiwiZGlzYWJsZWQiLCJydW5JbkFjdGlvbiIsIm9sZF92YWx1ZSIsImNoZWNrZWQiLCJjc3MiLCJ3aW5kb3ciLCJmZXRjaCIsImhlYWRlcnMiLCJBY2NlcHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicGFyc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwibWVzc2FnZSIsIm9ic2VydmFibGUiLCJMb2FkU3RvcmUiLCJvcHRpb24iLCJjaGVjayIsInByZXN0YXRpb25zIiwibG9hZFZhbHVlcyIsInN0YXR1cyIsInRheGVzIiwic3R5bGUiLCJ0aXRsZSIsImFkZEVycm9yIiwicmVtb3ZlRXJyb3IiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUlNQSxVLFdBRkxDLDBEQUFNLENBQUMsaUJBQUQsRUFBb0IsYUFBcEIsRUFBbUMsV0FBbkMsRUFBZ0QsV0FBaEQsQyxnQkFDTkMsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRUNDLEssR0FBUTtBQUNOQyxXQUFLLEVBQUU7QUFERCxLOzs7Ozs7d0NBSVk7QUFDbEIsY0FBUSxLQUFLQyxLQUFMLENBQVdDLElBQW5CO0FBQ0UsYUFBSyxZQUFMO0FBQ0UsZUFBS0QsS0FBTCxDQUFXRSxlQUFYLENBQTJCQyxJQUEzQjtBQUNBLGVBQUtDLFFBQUwsQ0FBYztBQUFDTCxpQkFBSyxFQUFHLEtBQUtDLEtBQUwsQ0FBV0U7QUFBcEIsV0FBZDtBQUNBOztBQUVGLGFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6Ik1hbmFnZXJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIsIGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IFByZXN0YXRpb25TdG9yZSBmcm9tICcuL3N0b3Jlcy9QcmVzdGF0aW9uU3RvcmUnXG5pbXBvcnQgRWRpdFN0b3JlIGZyb20gJy4vc3RvcmVzL0VkaXRTdG9yZSdcbmltcG9ydCBWYWxpZGF0aW9uU3RvcmUgZnJvbSAnLi9zdG9yZXMvVmFsaWRhdGlvblN0b3JlJ1xuaW1wb3J0IFN0YXR1c1N0b3JlIGZyb20gJy4vc3RvcmVzL1N0YXR1c1N0b3JlJ1xuaW1wb3J0IFRheGVTdG9yZSBmcm9tICcuL3N0b3Jlcy9UYXhlU3RvcmUnXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJ1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tICcuL3N0b3Jlcy9Vc2VyU3RvcmUnXG5pbXBvcnQgRWRpdFJvbGVzTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsL0VkaXRSb2xlc01vZGFsJ1xuaW1wb3J0IE1vZGFsU3RvcmUgZnJvbSAnLi9zdG9yZXMvTW9kYWxTdG9yZSdcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcidcblxuQGluamVjdCgncHJlc3RhdGlvblN0b3JlJywgJ3N0YXR1c1N0b3JlJywgJ3RheGVTdG9yZScsICd1c2VyU3RvcmUnKVxuQG9ic2VydmVyXG5jbGFzcyBNYW5hZ2VyQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RvcmU6IHt9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgICAgY2FzZSAncHJlc3RhdGlvbic6XG4gICAgICAgIHRoaXMucHJvcHMucHJlc3RhdGlvblN0b3JlLmxvYWQoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdG9yZSA6IHRoaXMucHJvcHMucHJlc3RhdGlvblN0b3JlfSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgICAgIHRoaXMucHJvcHMuc3RhdHVzU3RvcmUubG9hZCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy5zdGF0dXNTdG9yZX0pXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YXhlJzpcbiAgICAgICAgdGhpcy5wcm9wcy50YXhlU3RvcmUubG9hZCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy50YXhlU3RvcmV9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndXNlcic6XG4gICAgICAgIHRoaXMucHJvcHMudXNlclN0b3JlLmxvYWQoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdG9yZSA6IHRoaXMucHJvcHMudXNlclN0b3JlfSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEVkaXRSb2xlc01vZGFsLz5cbiAgICAgICAgPEZpbHRlciBzdG9yZT17dGhpcy5zdGF0ZS5zdG9yZX0vPlxuICAgICAgICA8VGFibGUgdHlwZT17dGhpcy5wcm9wcy50eXBlfSB0aHM9e3RoaXMuc3RhdGUuc3RvcmUudGhzICE9IG51bGwgPyB0aGlzLnN0YXRlLnN0b3JlLnRocyA6IFtdfSB0ZHM9e3RoaXMuc3RhdGUuc3RvcmUudGRzICE9IG51bGwgPyB0aGlzLnN0YXRlLnN0b3JlLnRkcyA6IFtdfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyX2FwcF9yZWFjdCcpICE9PSBudWxsKSB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXJcbiAgICAgIHByZXN0YXRpb25TdG9yZT17UHJlc3RhdGlvblN0b3JlfVxuICAgICAgZWRpdFN0b3JlPXtFZGl0U3RvcmV9XG4gICAgICB2YWxpZGF0aW9uU3RvcmU9e1ZhbGlkYXRpb25TdG9yZX1cbiAgICAgIHN0YXR1c1N0b3JlPXtTdGF0dXNTdG9yZX1cbiAgICAgIHRheGVTdG9yZT17VGF4ZVN0b3JlfVxuICAgICAgdXNlclN0b3JlPXtVc2VyU3RvcmV9XG4gICAgICBtb2RhbFN0b3JlPXtNb2RhbFN0b3JlfVxuICAgID5cbiAgICAgIDxNYW5hZ2VyQXBwIHR5cGU9e2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyX2FwcF9yZWFjdCcpLmRhdGFzZXQudHlwZX0gLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlcl9hcHBfcmVhY3QnKVxuICApXG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZmlsdGVyczogW1xuICAgICAgJ2xhc3RfbmFtZScsXG4gICAgICAnZmlyc3RfbmFtZScsXG4gICAgICAncm9sZXMnLFxuICAgICAgJ25hbWUnLFxuICAgICAgJ21ha2VfdGltZScsXG4gICAgICAncHJpY2VfaHQnLFxuICAgICAgJ3N0YXJ0JyxcbiAgICAgICdlbmQnLFxuICAgICAgJ2hpcmVfZGF0ZSdcbiAgICBdXG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgdGRzID0gdGhpcy5wcm9wcy5zdG9yZS50ZHNfbG9hZGVkLm1hcCh0ZCA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuZmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGRbdGhpcy5zdGF0ZS5maWx0ZXJzW2ldXSAhPSBudWxsICYmIHRoaXMuc3RhdGUuZmlsdGVyc1tpXSA9PSAncm9sZXMnKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0ZFt0aGlzLnN0YXRlLmZpbHRlcnNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlKHRkW3RoaXMuc3RhdGUuZmlsdGVyc1tpXV0sIGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlKHRkW3RoaXMuc3RhdGUuZmlsdGVyc1tpXV0sIGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0ZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMucHJvcHMuc3RvcmUudGRzID0gdGRzLmZpbHRlcih0ZCA9PiB0ZCAhPSBudWxsKVxuICAgIFxuICB9XG5cbiAgY2hlY2tWYWx1ZSAoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCAhPSBudWxsICYmIFN0cmluZyhmaXJzdCkudG9Mb3dlckNhc2UoKS5zZWFyY2goc2Vjb25kLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdGaWx0ZXInIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCdcblxuQGluamVjdCgnbW9kYWxTdG9yZScsICd1c2VyU3RvcmUnKVxuQG9ic2VydmVyXG5jbGFzcyBFZGl0Um9sZXNNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJvbGVzOiBbJ1JPTEVfQURNSU4nLCdST0xFX1NUQUZGJywnUk9MRV9DTElFTlQnXSxcbiAgICBzZWxlY3RlZDogW11cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZS50YXJnZXQub3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5vcHRpb25zW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0Lm9wdGlvbnNbaV0udmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkIH0pXG4gIH1cblxuICBoYW5kbGVDb25maXJtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkLCBlLnRhcmdldC5kYXRhc2V0LmlkKVxuICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCB1c2VyID0ge31cbiAgICBpZiAodGhpcy5wcm9wcy51c2VyU3RvcmUudXNlciA+IDApIHtcbiAgICAgIHVzZXIgPSB0aGlzLnByb3BzLnVzZXJTdG9yZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09IHRoaXMucHJvcHMudXNlclN0b3JlLnVzZXIpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgaWQ9J2VkaXRfcm9sZXNfbW9kYWwnIHNob3c9e3RoaXMucHJvcHMubW9kYWxTdG9yZS5lZGl0X3JvbGVzX21vZGFsfSBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xpY2t9IGNlbnRlcmVkPlxuICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxoMz5FZGl0IFJvbGVzPC9oMz5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPGZvcm0gaWQ9J2VkaXRfcm9sZXNfZm9ybScgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ29uZmlybX0gZGF0YS1pZD17dXNlci5pZH0+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt1c2VyLnJvbGVzfSBuYW1lPSdyb2xlcycgbXVsdGlwbGU+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvbGVzLm1hcChlbHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17ZWx0fSB2YWx1ZT17ZWx0fT57ZWx0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgdHlwZT0nc3VibWl0JyBmb3JtPSdlZGl0X3JvbGVzX2Zvcm0nPkNvbmZpcm08L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3NlY29uZGFyeScgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFJvbGVzTW9kYWxcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbkBpbmplY3QoJ2VkaXRTdG9yZScsICd2YWxpZGF0aW9uU3RvcmUnLCAncHJlc3RhdGlvblN0b3JlJywgJ3N0YXR1c1N0b3JlJywgJ3RheGVTdG9yZScpXG5Ab2JzZXJ2ZXJcbmNsYXNzIFRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICAkKCc6Zm9jdXMnKS5ibHVyKClcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5sZW5ndGggPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmVkaXRTdG9yZS52YWx1ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMuZWRpdFN0b3JlLnNhdmVWYWx1ZXModGhpcy5wcm9wcy50eXBlKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUudmFsaWRhdGUoZSlcbiAgICB0aGlzLnByb3BzLmVkaXRTdG9yZS51cGRhdGVWYWx1ZXMoZSwgdGhpcy5wcm9wcy50ZHMpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS52YWxpZGF0ZShlKVxuICB9XG5cbiAgaGFuZGxlUm93ID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50ZHMuZmluZCgodGQpID0+IHRkLmlkID09ICduZXcnKSA9PSBudWxsKSB7XG4gICAgICBsZXQgbmV3X3JvdyA9IHt9XG4gICAgICBPYmplY3QuYXNzaWduKG5ld19yb3csIHtpZDogJ25ldyd9KVxuICAgICAgdGhpcy5wcm9wcy50aHMubWFwKCh0aCkgPT4ge1xuICAgICAgICBpZiAodGggPT0gJ21ha2VfdGltZScpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld19yb3csIHtbdGhdOiBtb21lbnQoKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge1t0aF06ICcnfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMudGRzLnB1c2gobmV3X3JvdylcbiAgICAgICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJywgJ2ZhIGZhLW1pbnVzLWNpcmNsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMudGRzLnBvcCgpXG4gICAgICAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycsICdmYSBmYS1wbHVzLWNpcmNsZScpXG4gICAgICBkZWxldGUgdGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzWyduZXcnXVxuICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQuc2VhcmNoKFwibmV3XCIpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9yc1tlbGVtZW50XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0gZGlzYWJsZWQ9e09iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9ycykubGVuZ3RoID09IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzKS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlIH0+U2F2ZSBBTEwgY2hhbmdlPC9idXR0b24+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRleHQtY2VudGVyJz5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRocy5tYXAoKHRoKSA9PiA8dGgga2V5PXt0aC5uYW1lfT57dGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJyl9PC90aD4pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRkcy5tYXAoKHRkKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17dGQuaWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aHMubWFwKHRoID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHt0ZC5pZH1fJHt0aC5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi50aGlzLnByb3BzLmVkaXRTdG9yZS5mb3JtYXRWYWx1ZSh0ZCx0aCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBsdXMtY2lyY2xlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVJvd30gc3R5bGU9e3sgZGlzcGxheSA6IHRoaXMucHJvcHMudGhzLmZpbmQodGggPT4gdGgubmFtZSA9PSAncm9sZXMnKSA9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyB9fSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PGJyLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZD17T2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5sZW5ndGggPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmVkaXRTdG9yZS52YWx1ZXMpLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWUgfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PlNhdmUgQUxMIGNoYW5nZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBtb2RhbFN0b3JlIGZyb20gJy4vTW9kYWxTdG9yZSdcbmltcG9ydCB1c2VyU3RvcmUgZnJvbSAnLi9Vc2VyU3RvcmUnXG5cbmNsYXNzIEVkaXRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHZhbHVlcyA9IHt9XG5cbiAgaGFuZGxlQ2hhbmdlUm9sZXMgKGUpIHtcbiAgICB1c2VyU3RvcmUudXNlciA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcbiAgICBtb2RhbFN0b3JlLnRvZ2dsZUVkaXRSb2xlc01vZGFsKClcbiAgfVxuXG4gIGZvcm1hdFZhbHVlICh0ZCx0aCkge1xuICAgIGxldCB2YWx1ZSA9IHt9XG5cbiAgICB2YWx1ZS50eXBlID0gdGgudHlwZVxuICAgIHZhbHVlWydkYXRhLWlkJ10gPSB0ZC5pZFxuICAgIHZhbHVlLm5hbWUgPSB0aC5uYW1lXG4gICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gdGRbdGgubmFtZV1cbiAgICB2YWx1ZS5wbGFjZWhvbGRlciA9IHRoLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aC5uYW1lLnNsaWNlKDEpLnJlcGxhY2UoJ18nLCAnICcpXG5cbiAgICAvLyBzcGVjaWZpYyB2YWx1ZVxuICAgIHN3aXRjaCAodGgubmFtZSkge1xuICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgdmFsdWUuZGVmYXVsdENoZWNrZWQgPSB0ZFt0aC5uYW1lXSA/IHRydWUgOiBmYWxzZVxuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdtYWtlX3RpbWUnOlxuICAgICAgICBpZiAodGRbdGgubmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9ICcwMDowMDowMCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSBtb21lbnQodGRbdGgubmFtZV0pLmZvcm1hdCgnSEg6bW06c3MnKVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnBsYWNlaG9sZGVyID0gJ0hIOk1NOlNTJ1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgIGNhc2UgJ2hpcmVfZGF0ZSc6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSBtb21lbnQodGRbdGgubmFtZV0pLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICBpZiAodGRbdGgubmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9ICcjMDAwJ1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyb2xlcyc6XG4gICAgICAgIHZhbHVlLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZUNoYW5nZVJvbGVzXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdmaXJzdF9uYW1lJzpcbiAgICAgIGNhc2UgJ2xhc3RfbmFtZSc6XG4gICAgICAgIHZhbHVlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyAoZSwgdGRzKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgIGxldCBvbGRfdmFsdWUgPSB0ZHMuZmluZCgodGQpID0+IHRkLmlkID09IGlkKVtuYW1lXVxuICBcbiAgICAgIC8vIGZvcm1hdCBzcGVjaWZpYyBmaWVsZFxuICAgICAgaWYgKG5hbWUgPT0gJ21ha2VfdGltZScpIHtcbiAgICAgICAgb2xkX3ZhbHVlID0gbW9tZW50KG9sZF92YWx1ZSkuZm9ybWF0KCdISDptbTpzcycpXG4gICAgICB9XG4gIFxuICAgICAgaWYgKG5hbWUgPT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgdmFsdWUgPSBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgIG9sZF92YWx1ZSA9IG9sZF92YWx1ZSA/IHRydWUgOiBmYWxzZVxuICAgICAgfVxuICBcbiAgICAgIC8vIHVwZGF0ZSB2YWx1ZXNcbiAgICAgIGlmICh2YWx1ZSAhPSBvbGRfdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzW2lkXSkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy52YWx1ZXNbaWRdLCB7W25hbWVdOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy52YWx1ZXMsIHtbaWRdOntbbmFtZV06IHZhbHVlfX0pO1xuICAgICAgICB9XG4gICAgICAgICQoZS50YXJnZXQpLmNzcygnY29sb3InLCAnI2ZmYTUwMCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNbaWRdW25hbWVdXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnZhbHVlc1tpZF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVzW2lkXVxuICAgICAgICB9XG4gICAgICAgICQoZS50YXJnZXQpLmNzcygnY29sb3InLCAnIzAwMCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNhdmVWYWx1ZXMgKHR5cGUpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hZG1pbi9hcGkvbWFuYWdlcicsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0eXBlOiB0eXBlLCB2YWx1ZTogdGhpcy52YWx1ZXN9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKEpTT04ucGFyc2UoZGF0YSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRWRpdFN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcblxuY2xhc3MgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgdGhzID0gW11cblxuICBAb2JzZXJ2YWJsZSB0ZHMgPSBbXVxuXG4gIEBvYnNlcnZhYmxlIHRkc19sb2FkZWQgPSBbXVxuXG4gIGxvYWRWYWx1ZXModmFsdWVzLCBvcHRpb25zKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy50aHMgPSBbXVxuICAgICAgdGhpcy50ZHMgPSBbXVxuXG4gICAgICBsZXQgdGhzID0ge31cblxuICAgICAgdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0aHMubGVuZ3RoIDwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCB8fCB0aHMubGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgICB0aHMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgb3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0aHMuZmluZCh2YWx1ZSA9PiB2YWx1ZSA9PT0gb3B0aW9uLm5hbWUpXG4gICAgICAgICAgaWYgKGNoZWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGhzLnB1c2gob3B0aW9uKVxuICAgICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIHRoaXMudGRzX2xvYWRlZCA9IHZhbHVlc1xuICAgICAgdGhpcy50ZHMgPSB2YWx1ZXNcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRTdG9yZVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuXG5jbGFzcyBNb2RhbFN0b3JlIHtcbiAgQG9ic2VydmFibGUgZWRpdF9yb2xlc19tb2RhbCA9IGZhbHNlXG5cbiAgdG9nZ2xlRWRpdFJvbGVzTW9kYWwgPSAoKSA9PiB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0X3JvbGVzX21vZGFsID0gIXRoaXMuZWRpdF9yb2xlc19tb2RhbFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGFsU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgUHJlc3RhdGlvblN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgcHJlc3RhdGlvbnMgPSBbXVxuXG4gIGxvYWQgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9wcmVzdGF0aW9ucycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVzdGF0aW9ucyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy5wcmVzdGF0aW9ucywgW1xuICAgICAgICAgICAge25hbWU6ICduYW1lJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnbWFrZV90aW1lJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAncHJpY2VfaHQnLCB0eXBlOiAnbnVtYmVyJ30sXG4gICAgICAgICAgICB7bmFtZTogJ2FjdGl2ZScsIHR5cGU6ICdjaGVja2JveCd9LFxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJlc3RhdGlvblN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBMb2FkU3RvcmUgZnJvbSAnLi9Mb2FkU3RvcmUnXG5cbmNsYXNzIFN0YXR1c1N0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgc3RhdHVzID0gW11cblxuICBsb2FkICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvc3RhdHVzJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy5zdGF0dXMsIFtcbiAgICAgICAgICAgIHtuYW1lOiAnbmFtZScsIHR5cGU6ICd0ZXh0J31cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0YXR1c1N0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBMb2FkU3RvcmUgZnJvbSAnLi9Mb2FkU3RvcmUnXG5cbmNsYXNzIFRheGVTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHRheGVzID0gW11cblxuICBsb2FkICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvdGF4ZXMnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMudGF4ZXMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKHRoaXMudGF4ZXMsIFtcbiAgICAgICAgICAgIHtuYW1lOiAndmFsdWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdzdGFydCcsIHR5cGU6ICdkYXRlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZCcsIHR5cGU6ICdkYXRlJ31cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRheGVTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgTG9hZFN0b3JlIGZyb20gJy4vTG9hZFN0b3JlJ1xuXG5jbGFzcyBVc2VyU3RvcmUgZXh0ZW5kcyBMb2FkU3RvcmUge1xuICBAb2JzZXJ2YWJsZSB1c2VycyA9IFtdXG5cbiAgQG9ic2VydmFibGUgdXNlciA9IDBcblxuICBsb2FkICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvdXNlcnMnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMudXNlcnMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKHRoaXMudXNlcnMsIFtcbiAgICAgICAgICAgIHtuYW1lOiAnZmlyc3RfbmFtZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ2xhc3RfbmFtZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ2NvbG9yJywgdHlwZTogJ2NvbG9yJ30sXG4gICAgICAgICAgICB7bmFtZTogJ2hpcmVfZGF0ZScsIHR5cGU6ICdkYXRlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ3JvbGVzJywgdHlwZTogJ2J1dHRvbid9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuXG5jbGFzcyBWYWxpZGF0aW9uU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBlcnJvcnMgPSB7fVxuXG4gIHZhbGlkYXRlIChlKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgICAgXG4gICAgICBpZiAodmFsdWUgPT0gJycgJiYgbmFtZSAhPSAnaGlyZV9kYXRlJykge1xuICAgICAgICAkKGUudGFyZ2V0KS5hdHRyKHtcbiAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMXB4IHNvbGlkICNmMDAgIWltcG9ydGFudCcsXG4gICAgICAgICAgdGl0bGU6ICdSZXF1aXJlZCdcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZGRFcnJvcihgJHtpZH1fJHtuYW1lfWAsICdSZXF1aXJlZCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihgJHtpZH1fJHtuYW1lfWApXG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09ICdtYWtlX3RpbWUnKSB7XG4gICAgICAgIGlmICghdmFsdWUubWF0Y2goL14oWzAtOV17Mn0pOihbMC05XXsyfSk6KFswLTldezJ9KSQvKSkge1xuICAgICAgICAgICQoZS50YXJnZXQpLmF0dHIoe1xuICAgICAgICAgICAgc3R5bGU6ICdib3JkZXI6IDFweCBzb2xpZCAjZjAwISBpbXBvcnRhbnQnLFxuICAgICAgICAgICAgdGl0bGU6ICdGb3JtYXQgSEg6TU06U1MnXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmFkZEVycm9yKGAke2lkfV8ke25hbWV9YCwgJ0Zvcm1hdCBISDpNTTpTUycpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihgJHtpZH1fJHtuYW1lfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLmVycm9yc1tgJHtpZH1fJHtuYW1lfWBdKSB7XG4gICAgICAgICQoZS50YXJnZXQpLmNzcygnYm9yZGVyJywgJ25vbmUnKVxuICAgICAgICAkKGUudGFyZ2V0KS5jc3MoJ2NvbG9yJywgJyMwMDAnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGRFcnJvciAobmFtZSwgbWVzc2FnZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5lcnJvcnMsIHtbbmFtZV06IG1lc3NhZ2V9KVxuICB9XG5cbiAgcmVtb3ZlRXJyb3IgKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5lcnJvcnNbbmFtZV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGlvblN0b3JlKClcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9