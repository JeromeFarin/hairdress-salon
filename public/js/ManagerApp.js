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
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../store/ModalStore */ "./assets/store/ModalStore.js");
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
    modalStore: _store_ModalStore__WEBPACK_IMPORTED_MODULE_23__["default"]
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
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
















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




var EditRolesModal = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_17__["inject"])('modalStore', 'userStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_17__["observer"])(_class = (_temp =
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
      window.fetch('/admin/api/user/roles', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          id: e.target.dataset.id,
          value: _this.state.selected
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (JSON.parse(data) == true) {
          _this.props.modalStore.toggleEditRolesModal();

          location.reload();
        }
      })["catch"](function (error) {
        console.error(error.message);
      });
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

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"], {
        id: "edit_roles_modal",
        show: this.props.modalStore.edit_roles_modal,
        onHide: this.handleClick,
        centered: true
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"].Header, null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("h3", null, "Edit Roles")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"].Body, {
        className: "d-flex flex-column align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
        id: "edit_roles_form",
        onSubmit: this.handleConfirm,
        "data-id": user.id
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("select", {
        onChange: this.handleChange,
        defaultValue: user.roles,
        name: "roles",
        multiple: true
      }, this.state.roles.map(function (elt) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("option", {
          key: elt,
          value: elt
        }, elt);
      })))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"].Footer, null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        variant: "primary",
        type: "submit",
        disabled: this.state.selected.length > 0 ? false : true,
        form: "edit_roles_form"
      }, "Confirm"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        variant: "secondary",
        onClick: this.handleClick
      }, "Cancel")));
    }
  }]);

  return EditRolesModal;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]), _temp)) || _class) || _class);
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
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_26__);

























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




var Table = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_25__["inject"])('editStore', 'validationStore', 'prestationStore', 'statusStore', 'taxeStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_25__["observer"])(_class = (_temp =
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
          if (th.name == 'make_time') {
            Object.assign(new_row, _defineProperty({}, th.name, moment__WEBPACK_IMPORTED_MODULE_26___default()().hour(0).minute(0).second(0)));
          } else {
            Object.assign(new_row, _defineProperty({}, th.name, ''));
          } // exclude field required


          if (!['active'].includes(th.name)) {
            _this.props.validationStore.addError("new_".concat(th.name), 'Required');
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

      return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.handleSave,
        disabled: Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0 ? false : true
      }, "Save ALL change"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("table", {
        className: "table text-center"
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("tr", null, this.props.ths.map(function (th) {
        return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("th", {
          key: th.name
        }, th.name.charAt(0).toUpperCase() + th.name.slice(1).replace('_', ' '));
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("tbody", null, this.props.tds.map(function (td) {
        return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("tr", {
          key: td.id,
          onChange: _this2.handleChange
        }, _this2.props.ths.map(function (th) {
          return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("td", {
            key: "".concat(td.id, "_").concat(th.name)
          }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("input", _this2.props.editStore.formatValue(td, th)));
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("i", {
        className: "fa fa-plus-circle",
        onClick: this.handleRow,
        style: {
          display: this.props.ths.find(function (th) {
            return th.name == 'roles';
          }) == null ? 'block' : 'none'
        },
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: Object.keys(this.props.validationStore.errors).length == 0 && Object.keys(this.props.editStore.values).length > 0 ? false : true,
        onClick: this.handleSave
      }, "Save ALL change"));
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_24__["Component"]), _temp)) || _class) || _class);
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
/* harmony import */ var _store_ModalStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../store/ModalStore */ "./assets/store/ModalStore.js");
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
      _store_ModalStore__WEBPACK_IMPORTED_MODULE_18__["default"].toggleEditRolesModal();
    }
  }, {
    key: "formatValue",
    value: function formatValue(td, th) {
      var value = {};

      if (td.id === 'new') {
        value.style = {
          border: '1px solid #f00'
        };
      }

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

/***/ })

},[["./assets/ManagerApp/js/ManagerApp.js","runtime","vendors~ManagerApp~PlanningApp~ReservationApp","vendors~ManagerApp","ManagerApp~PlanningApp~ReservationApp"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9NYW5hZ2VyQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvTW9kYWwvRWRpdFJvbGVzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvRWRpdFN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9Mb2FkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1ByZXN0YXRpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvU3RhdHVzU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1RheGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvVXNlclN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9WYWxpZGF0aW9uU3RvcmUuanMiXSwibmFtZXMiOlsiTWFuYWdlckFwcCIsImluamVjdCIsIm9ic2VydmVyIiwic3RhdGUiLCJzdG9yZSIsInByb3BzIiwidHlwZSIsInByZXN0YXRpb25TdG9yZSIsImxvYWQiLCJzZXRTdGF0ZSIsInN0YXR1c1N0b3JlIiwidGF4ZVN0b3JlIiwidXNlclN0b3JlIiwidGhzIiwidGRzIiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUHJlc3RhdGlvblN0b3JlIiwiRWRpdFN0b3JlIiwiVmFsaWRhdGlvblN0b3JlIiwiU3RhdHVzU3RvcmUiLCJUYXhlU3RvcmUiLCJVc2VyU3RvcmUiLCJNb2RhbFN0b3JlIiwiZGF0YXNldCIsIkZpbHRlciIsImZpbHRlcnMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGRzX2xvYWRlZCIsIm1hcCIsInRkIiwiaSIsImxlbmd0aCIsImoiLCJjaGVja1ZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJmaXJzdCIsInNlY29uZCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwic2VhcmNoIiwiRWRpdFJvbGVzTW9kYWwiLCJyb2xlcyIsInNlbGVjdGVkIiwiaGFuZGxlQ2xpY2siLCJtb2RhbFN0b3JlIiwidG9nZ2xlRWRpdFJvbGVzTW9kYWwiLCJsZW4iLCJvcHRpb25zIiwiZXZlbnQiLCJwdXNoIiwiaGFuZGxlQ29uZmlybSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiZmV0Y2giLCJoZWFkZXJzIiwiQWNjZXB0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicGFyc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJ1c2VyIiwidXNlcnMiLCJmaW5kIiwiZWRpdF9yb2xlc19tb2RhbCIsImVsdCIsIlRhYmxlIiwiaGFuZGxlU2F2ZSIsIiQiLCJibHVyIiwiT2JqZWN0Iiwia2V5cyIsInZhbGlkYXRpb25TdG9yZSIsImVycm9ycyIsImVkaXRTdG9yZSIsInZhbHVlcyIsInNhdmVWYWx1ZXMiLCJ2YWxpZGF0ZSIsInVwZGF0ZVZhbHVlcyIsImhhbmRsZUJsdXIiLCJoYW5kbGVSb3ciLCJuZXdfcm93IiwiYXNzaWduIiwidGgiLCJuYW1lIiwibW9tZW50IiwiaG91ciIsIm1pbnV0ZSIsImluY2x1ZGVzIiwiYWRkRXJyb3IiLCJhdHRyIiwicG9wIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwicmVwbGFjZSIsImZvcm1hdFZhbHVlIiwiZGlzcGxheSIsInN0eWxlIiwiYm9yZGVyIiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0Q2hlY2tlZCIsImZvcm1hdCIsIm9uQ2xpY2siLCJoYW5kbGVDaGFuZ2VSb2xlcyIsImRpc2FibGVkIiwicnVuSW5BY3Rpb24iLCJvbGRfdmFsdWUiLCJjaGVja2VkIiwiY3NzIiwib2JzZXJ2YWJsZSIsIkxvYWRTdG9yZSIsIm9wdGlvbiIsImNoZWNrIiwicHJlc3RhdGlvbnMiLCJsb2FkVmFsdWVzIiwic3RhdHVzIiwidGF4ZXMiLCJ0aXRsZSIsInJlbW92ZUVycm9yIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFJTUEsVSxXQUZMQywwREFBTSxDQUFDLGlCQUFELEVBQW9CLGFBQXBCLEVBQW1DLFdBQW5DLEVBQWdELFdBQWhELEMsZ0JBQ05DLDREOzs7Ozs7Ozs7Ozs7Ozs7OztVQUVDQyxLLEdBQVE7QUFDTkMsV0FBSyxFQUFFO0FBREQsSzs7Ozs7O3dDQUlZO0FBQ2xCLGNBQVEsS0FBS0MsS0FBTCxDQUFXQyxJQUFuQjtBQUNFLGFBQUssWUFBTDtBQUNFLGVBQUtELEtBQUwsQ0FBV0UsZUFBWCxDQUEyQkMsSUFBM0I7QUFDQSxlQUFLQyxRQUFMLENBQWM7QUFBQ0wsaUJBQUssRUFBRyxLQUFLQyxLQUFMLENBQVdFO0FBQXBCLFdBQWQ7QUFDQTs7QUFFRixhQUFLLFFBQUw7QUFDRSxlQUFLRixLQUFMLENBQVdLLFdBQVgsQ0FBdUJGLElBQXZCO0FBQ0EsZUFBS0MsUUFBTCxDQUFjO0FBQUNMLGlCQUFLLEVBQUcsS0FBS0MsS0FBTCxDQUFX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dCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm92aWRlciwgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgUHJlc3RhdGlvblN0b3JlIGZyb20gJy4vc3RvcmVzL1ByZXN0YXRpb25TdG9yZSdcbmltcG9ydCBFZGl0U3RvcmUgZnJvbSAnLi9zdG9yZXMvRWRpdFN0b3JlJ1xuaW1wb3J0IFZhbGlkYXRpb25TdG9yZSBmcm9tICcuL3N0b3Jlcy9WYWxpZGF0aW9uU3RvcmUnXG5pbXBvcnQgU3RhdHVzU3RvcmUgZnJvbSAnLi9zdG9yZXMvU3RhdHVzU3RvcmUnXG5pbXBvcnQgVGF4ZVN0b3JlIGZyb20gJy4vc3RvcmVzL1RheGVTdG9yZSdcbmltcG9ydCBUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvVGFibGUnXG5pbXBvcnQgVXNlclN0b3JlIGZyb20gJy4vc3RvcmVzL1VzZXJTdG9yZSdcbmltcG9ydCBFZGl0Um9sZXNNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvTW9kYWwvRWRpdFJvbGVzTW9kYWwnXG5pbXBvcnQgTW9kYWxTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Nb2RhbFN0b3JlJ1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyJ1xuXG5AaW5qZWN0KCdwcmVzdGF0aW9uU3RvcmUnLCAnc3RhdHVzU3RvcmUnLCAndGF4ZVN0b3JlJywgJ3VzZXJTdG9yZScpXG5Ab2JzZXJ2ZXJcbmNsYXNzIE1hbmFnZXJBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzdG9yZToge31cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICBjYXNlICdwcmVzdGF0aW9uJzpcbiAgICAgICAgdGhpcy5wcm9wcy5wcmVzdGF0aW9uU3RvcmUubG9hZCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy5wcmVzdGF0aW9uU3RvcmV9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgICAgdGhpcy5wcm9wcy5zdGF0dXNTdG9yZS5sb2FkKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnN0YXR1c1N0b3JlfSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RheGUnOlxuICAgICAgICB0aGlzLnByb3BzLnRheGVTdG9yZS5sb2FkKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnRheGVTdG9yZX0pXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyU3RvcmUubG9hZCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy51c2VyU3RvcmV9KVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RWRpdFJvbGVzTW9kYWwvPlxuICAgICAgICA8RmlsdGVyIHN0b3JlPXt0aGlzLnN0YXRlLnN0b3JlfS8+XG4gICAgICAgIDxUYWJsZSB0eXBlPXt0aGlzLnByb3BzLnR5cGV9IHRocz17dGhpcy5zdGF0ZS5zdG9yZS50aHMgIT0gbnVsbCA/IHRoaXMuc3RhdGUuc3RvcmUudGhzIDogW119IHRkcz17dGhpcy5zdGF0ZS5zdG9yZS50ZHMgIT0gbnVsbCA/IHRoaXMuc3RhdGUuc3RvcmUudGRzIDogW119Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXJfYXBwX3JlYWN0JykgIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlclxuICAgICAgcHJlc3RhdGlvblN0b3JlPXtQcmVzdGF0aW9uU3RvcmV9XG4gICAgICBlZGl0U3RvcmU9e0VkaXRTdG9yZX1cbiAgICAgIHZhbGlkYXRpb25TdG9yZT17VmFsaWRhdGlvblN0b3JlfVxuICAgICAgc3RhdHVzU3RvcmU9e1N0YXR1c1N0b3JlfVxuICAgICAgdGF4ZVN0b3JlPXtUYXhlU3RvcmV9XG4gICAgICB1c2VyU3RvcmU9e1VzZXJTdG9yZX1cbiAgICAgIG1vZGFsU3RvcmU9e01vZGFsU3RvcmV9XG4gICAgPlxuICAgICAgPE1hbmFnZXJBcHAgdHlwZT17ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXJfYXBwX3JlYWN0JykuZGF0YXNldC50eXBlfSAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyX2FwcF9yZWFjdCcpXG4gIClcbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBmaWx0ZXJzOiBbXG4gICAgICAnbGFzdF9uYW1lJyxcbiAgICAgICdmaXJzdF9uYW1lJyxcbiAgICAgICdyb2xlcycsXG4gICAgICAnbmFtZScsXG4gICAgICAnbWFrZV90aW1lJyxcbiAgICAgICdwcmljZV9odCcsXG4gICAgICAnc3RhcnQnLFxuICAgICAgJ2VuZCcsXG4gICAgICAnaGlyZV9kYXRlJ1xuICAgIF1cbiAgfVxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB0ZHMgPSB0aGlzLnByb3BzLnN0b3JlLnRkc19sb2FkZWQubWFwKHRkID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5maWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZFt0aGlzLnN0YXRlLmZpbHRlcnNbaV1dICE9IG51bGwgJiYgdGhpcy5zdGF0ZS5maWx0ZXJzW2ldID09ICdyb2xlcycpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRkW3RoaXMuc3RhdGUuZmlsdGVyc1tpXV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVmFsdWUodGRbdGhpcy5zdGF0ZS5maWx0ZXJzW2ldXSwgZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrVmFsdWUodGRbdGhpcy5zdGF0ZS5maWx0ZXJzW2ldXSwgZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5wcm9wcy5zdG9yZS50ZHMgPSB0ZHMuZmlsdGVyKHRkID0+IHRkICE9IG51bGwpXG4gICAgXG4gIH1cblxuICBjaGVja1ZhbHVlIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgaWYgKGZpcnN0ICE9IG51bGwgJiYgU3RyaW5nKGZpcnN0KS50b0xvd2VyQ2FzZSgpLnNlYXJjaChzZWNvbmQudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0ZpbHRlcicgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuXG5AaW5qZWN0KCdtb2RhbFN0b3JlJywgJ3VzZXJTdG9yZScpXG5Ab2JzZXJ2ZXJcbmNsYXNzIEVkaXRSb2xlc01vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcm9sZXM6IFsnUk9MRV9BRE1JTicsJ1JPTEVfU1RBRkYnLCdST0xFX0NMSUVOVCddLFxuICAgIHNlbGVjdGVkOiBbXVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5tb2RhbFN0b3JlLnRvZ2dsZUVkaXRSb2xlc01vZGFsKClcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlLnRhcmdldC5vcHRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQub3B0aW9uc1tpXS52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQgfSlcbiAgfVxuXG4gIGhhbmRsZUNvbmZpcm0gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHdpbmRvdy5mZXRjaCgnL2FkbWluL2FwaS91c2VyL3JvbGVzJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZDogZS50YXJnZXQuZGF0YXNldC5pZCxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKEpTT04ucGFyc2UoZGF0YSkgPT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHVzZXIgPSB7fVxuICAgIGlmICh0aGlzLnByb3BzLnVzZXJTdG9yZS51c2VyID4gMCkge1xuICAgICAgdXNlciA9IHRoaXMucHJvcHMudXNlclN0b3JlLnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT0gdGhpcy5wcm9wcy51c2VyU3RvcmUudXNlcilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCBpZD0nZWRpdF9yb2xlc19tb2RhbCcgc2hvdz17dGhpcy5wcm9wcy5tb2RhbFN0b3JlLmVkaXRfcm9sZXNfbW9kYWx9IG9uSGlkZT17dGhpcy5oYW5kbGVDbGlja30gY2VudGVyZWQ+XG4gICAgICAgIDxNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPGgzPkVkaXQgUm9sZXM8L2gzPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICA8Zm9ybSBpZD0nZWRpdF9yb2xlc19mb3JtJyBvblN1Ym1pdD17dGhpcy5oYW5kbGVDb25maXJtfSBkYXRhLWlkPXt1c2VyLmlkfT5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBkZWZhdWx0VmFsdWU9e3VzZXIucm9sZXN9IG5hbWU9J3JvbGVzJyBtdWx0aXBsZT5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9sZXMubWFwKGVsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtlbHR9IHZhbHVlPXtlbHR9PntlbHR9PC9vcHRpb24+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5JyB0eXBlPSdzdWJtaXQnIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWV9IGZvcm09J2VkaXRfcm9sZXNfZm9ybSc+Q29uZmlybTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nc2Vjb25kYXJ5JyBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0Um9sZXNNb2RhbFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuQGluamVjdCgnZWRpdFN0b3JlJywgJ3ZhbGlkYXRpb25TdG9yZScsICdwcmVzdGF0aW9uU3RvcmUnLCAnc3RhdHVzU3RvcmUnLCAndGF4ZVN0b3JlJylcbkBvYnNlcnZlclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgICQoJzpmb2N1cycpLmJsdXIoKVxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS5lcnJvcnMpLmxlbmd0aCA9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZWRpdFN0b3JlLnZhbHVlcykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9wcy5lZGl0U3RvcmUuc2F2ZVZhbHVlcyh0aGlzLnByb3BzLnR5cGUpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS52YWxpZGF0ZShlKVxuICAgIHRoaXMucHJvcHMuZWRpdFN0b3JlLnVwZGF0ZVZhbHVlcyhlLCB0aGlzLnByb3BzLnRkcylcbiAgfVxuXG4gIGhhbmRsZUJsdXIgPSAoZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLnZhbGlkYXRlKGUpXG4gIH1cblxuICBoYW5kbGVSb3cgPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnRkcy5maW5kKCh0ZCkgPT4gdGQuaWQgPT0gJ25ldycpID09IG51bGwpIHtcbiAgICAgIGxldCBuZXdfcm93ID0ge31cbiAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge2lkOiAnbmV3J30pXG4gICAgICB0aGlzLnByb3BzLnRocy5tYXAoKHRoKSA9PiB7XG4gICAgICAgIGlmICh0aC5uYW1lID09ICdtYWtlX3RpbWUnKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdfcm93LCB7W3RoLm5hbWVdOiBtb21lbnQoKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge1t0aC5uYW1lXTogJyd9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGV4Y2x1ZGUgZmllbGQgcmVxdWlyZWRcbiAgICAgICAgaWYgKCFbJ2FjdGl2ZSddLmluY2x1ZGVzKHRoLm5hbWUpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuYWRkRXJyb3IoYG5ld18ke3RoLm5hbWV9YCwgJ1JlcXVpcmVkJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMudGRzLnB1c2gobmV3X3JvdylcbiAgICAgICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJywgJ2ZhIGZhLW1pbnVzLWNpcmNsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMudGRzLnBvcCgpXG4gICAgICAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycsICdmYSBmYS1wbHVzLWNpcmNsZScpXG4gICAgICBkZWxldGUgdGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzWyduZXcnXVxuICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQuc2VhcmNoKFwibmV3XCIpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9yc1tlbGVtZW50XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0gZGlzYWJsZWQ9e09iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9ycykubGVuZ3RoID09IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzKS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlIH0+U2F2ZSBBTEwgY2hhbmdlPC9idXR0b24+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRleHQtY2VudGVyJz5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRocy5tYXAoKHRoKSA9PiA8dGgga2V5PXt0aC5uYW1lfT57dGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJyl9PC90aD4pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRkcy5tYXAoKHRkKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17dGQuaWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aHMubWFwKHRoID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtgJHt0ZC5pZH1fJHt0aC5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi50aGlzLnByb3BzLmVkaXRTdG9yZS5mb3JtYXRWYWx1ZSh0ZCx0aCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBsdXMtY2lyY2xlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVJvd30gc3R5bGU9e3sgZGlzcGxheSA6IHRoaXMucHJvcHMudGhzLmZpbmQodGggPT4gdGgubmFtZSA9PSAncm9sZXMnKSA9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyB9fSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PGJyLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZD17T2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5sZW5ndGggPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmVkaXRTdG9yZS52YWx1ZXMpLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWUgfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PlNhdmUgQUxMIGNoYW5nZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBtb2RhbFN0b3JlIGZyb20gJy4uLy4uLy4uL3N0b3JlL01vZGFsU3RvcmUnXG5pbXBvcnQgdXNlclN0b3JlIGZyb20gJy4vVXNlclN0b3JlJ1xuXG5jbGFzcyBFZGl0U3RvcmUge1xuICBAb2JzZXJ2YWJsZSB2YWx1ZXMgPSB7fVxuXG4gIGhhbmRsZUNoYW5nZVJvbGVzIChlKSB7XG4gICAgdXNlclN0b3JlLnVzZXIgPSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgbW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICBmb3JtYXRWYWx1ZSAodGQsdGgpIHtcbiAgICBsZXQgdmFsdWUgPSB7fVxuXG4gICAgaWYgKHRkLmlkID09PSAnbmV3Jykge1xuICAgICAgdmFsdWUuc3R5bGUgPSB7Ym9yZGVyOiAnMXB4IHNvbGlkICNmMDAnfVxuICAgIH1cblxuICAgIHZhbHVlLnR5cGUgPSB0aC50eXBlXG4gICAgdmFsdWVbJ2RhdGEtaWQnXSA9IHRkLmlkXG4gICAgdmFsdWUubmFtZSA9IHRoLm5hbWVcbiAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSB0ZFt0aC5uYW1lXVxuICAgIHZhbHVlLnBsYWNlaG9sZGVyID0gdGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJylcblxuICAgIC8vIHNwZWNpZmljIHZhbHVlXG4gICAgc3dpdGNoICh0aC5uYW1lKSB7XG4gICAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgICB2YWx1ZS5kZWZhdWx0Q2hlY2tlZCA9IHRkW3RoLm5hbWVdID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ21ha2VfdGltZSc6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJzAwOjAwOjAwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdISDptbTpzcycpXG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUucGxhY2Vob2xkZXIgPSAnSEg6TU06U1MnXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgY2FzZSAnaGlyZV9kYXRlJzpcbiAgICAgICAgaWYgKHRkW3RoLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSAnJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJyMwMDAnXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JvbGVzJzpcbiAgICAgICAgdmFsdWUub25DbGljayA9IHRoaXMuaGFuZGxlQ2hhbmdlUm9sZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ZpcnN0X25hbWUnOlxuICAgICAgY2FzZSAnbGFzdF9uYW1lJzpcbiAgICAgICAgdmFsdWUuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdXBkYXRlVmFsdWVzIChlLCB0ZHMpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgbGV0IG9sZF92YWx1ZSA9IHRkcy5maW5kKCh0ZCkgPT4gdGQuaWQgPT0gaWQpW25hbWVdXG4gIFxuICAgICAgLy8gZm9ybWF0IHNwZWNpZmljIGZpZWxkXG4gICAgICBpZiAobmFtZSA9PSAnbWFrZV90aW1lJykge1xuICAgICAgICBvbGRfdmFsdWUgPSBtb21lbnQob2xkX3ZhbHVlKS5mb3JtYXQoJ0hIOm1tOnNzJylcbiAgICAgIH1cbiAgXG4gICAgICBpZiAobmFtZSA9PSAnYWN0aXZlJykge1xuICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgb2xkX3ZhbHVlID0gb2xkX3ZhbHVlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICB9XG4gIFxuICAgICAgLy8gdXBkYXRlIHZhbHVlc1xuICAgICAgaWYgKHZhbHVlICE9IG9sZF92YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbaWRdKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlc1tpZF0sIHtbbmFtZV06IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywge1tpZF06e1tuYW1lXTogdmFsdWV9fSk7XG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjZmZhNTAwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc1tpZF1bbmFtZV1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudmFsdWVzW2lkXSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjMDAwJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2F2ZVZhbHVlcyAodHlwZSkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FkbWluL2FwaS9tYW5hZ2VyJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3R5cGU6IHR5cGUsIHZhbHVlOiB0aGlzLnZhbHVlc30pXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoSlNPTi5wYXJzZShkYXRhKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFZGl0U3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuXG5jbGFzcyBMb2FkU3RvcmUge1xuICBAb2JzZXJ2YWJsZSB0aHMgPSBbXVxuXG4gIEBvYnNlcnZhYmxlIHRkcyA9IFtdXG5cbiAgQG9ic2VydmFibGUgdGRzX2xvYWRlZCA9IFtdXG5cbiAgbG9hZFZhbHVlcyh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnRocyA9IFtdXG4gICAgICB0aGlzLnRkcyA9IFtdXG5cbiAgICAgIGxldCB0aHMgPSB7fVxuXG4gICAgICB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHRocy5sZW5ndGggPCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoIHx8IHRocy5sZW5ndGggPT0gbnVsbCkge1xuICAgICAgICAgIHRocyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjaGVjayA9IHRocy5maW5kKHZhbHVlID0+IHZhbHVlID09PSBvcHRpb24ubmFtZSlcbiAgICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50aHMucHVzaChvcHRpb24pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgdGhpcy50ZHNfbG9hZGVkID0gdmFsdWVzXG4gICAgICB0aGlzLnRkcyA9IHZhbHVlc1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZFN0b3JlXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgTG9hZFN0b3JlIGZyb20gJy4vTG9hZFN0b3JlJ1xuXG5jbGFzcyBQcmVzdGF0aW9uU3RvcmUgZXh0ZW5kcyBMb2FkU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBwcmVzdGF0aW9ucyA9IFtdXG5cbiAgbG9hZCAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3ByZXN0YXRpb25zJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnByZXN0YXRpb25zID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgIHRoaXMubG9hZFZhbHVlcyh0aGlzLnByZXN0YXRpb25zLCBbXG4gICAgICAgICAgICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdtYWtlX3RpbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdwcmljZV9odCcsIHR5cGU6ICdudW1iZXInfSxcbiAgICAgICAgICAgIHtuYW1lOiAnYWN0aXZlJywgdHlwZTogJ2NoZWNrYm94J30sXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmVzdGF0aW9uU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgU3RhdHVzU3RvcmUgZXh0ZW5kcyBMb2FkU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBzdGF0dXMgPSBbXVxuXG4gIGxvYWQgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9zdGF0dXMnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdHVzID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgIHRoaXMubG9hZFZhbHVlcyh0aGlzLnN0YXR1cywgW1xuICAgICAgICAgICAge25hbWU6ICduYW1lJywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhdHVzU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgVGF4ZVN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgdGF4ZXMgPSBbXVxuXG4gIGxvYWQgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS90YXhlcycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy50YXhlcyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy50YXhlcywgW1xuICAgICAgICAgICAge25hbWU6ICd2YWx1ZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0JywgdHlwZTogJ2RhdGUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kJywgdHlwZTogJ2RhdGUnfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGF4ZVN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBMb2FkU3RvcmUgZnJvbSAnLi9Mb2FkU3RvcmUnXG5cbmNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHVzZXJzID0gW11cblxuICBAb2JzZXJ2YWJsZSB1c2VyID0gMFxuXG4gIGxvYWQgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS91c2VycycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VycyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy51c2VycywgW1xuICAgICAgICAgICAge25hbWU6ICdmaXJzdF9uYW1lJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnbGFzdF9uYW1lJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnY29sb3InLCB0eXBlOiAnY29sb3InfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGlyZV9kYXRlJywgdHlwZTogJ2RhdGUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAncm9sZXMnLCB0eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5cbmNsYXNzIFZhbGlkYXRpb25TdG9yZSB7XG4gIEBvYnNlcnZhYmxlIGVycm9ycyA9IHt9XG5cbiAgdmFsaWRhdGUgKGUpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgICBcbiAgICAgIGlmICh2YWx1ZSA9PSAnJyAmJiBuYW1lICE9ICdoaXJlX2RhdGUnKSB7XG4gICAgICAgICQoZS50YXJnZXQpLmF0dHIoe1xuICAgICAgICAgIHN0eWxlOiAnYm9yZGVyOiAxcHggc29saWQgI2YwMCAhaW1wb3J0YW50JyxcbiAgICAgICAgICB0aXRsZTogJ1JlcXVpcmVkJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFkZEVycm9yKGAke2lkfV8ke25hbWV9YCwgJ1JlcXVpcmVkJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUVycm9yKGAke2lkfV8ke25hbWV9YClcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT0gJ21ha2VfdGltZScpIHtcbiAgICAgICAgaWYgKCF2YWx1ZS5tYXRjaCgvXihbMC05XXsyfSk6KFswLTldezJ9KTooWzAtOV17Mn0pJC8pKSB7XG4gICAgICAgICAgJChlLnRhcmdldCkuYXR0cih7XG4gICAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMXB4IHNvbGlkICNmMDAhIGltcG9ydGFudCcsXG4gICAgICAgICAgICB0aXRsZTogJ0Zvcm1hdCBISDpNTTpTUydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuYWRkRXJyb3IoYCR7aWR9XyR7bmFtZX1gLCAnRm9ybWF0IEhIOk1NOlNTJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUVycm9yKGAke2lkfV8ke25hbWV9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXRoaXMuZXJyb3JzW2Ake2lkfV8ke25hbWV9YF0pIHtcbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdib3JkZXInLCAnbm9uZScpXG4gICAgICAgICQoZS50YXJnZXQpLmNzcygnY29sb3InLCAnIzAwMCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZEVycm9yIChuYW1lLCBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmVycm9ycywge1tuYW1lXTogbWVzc2FnZX0pXG4gIH1cblxuICByZW1vdmVFcnJvciAobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tuYW1lXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWYWxpZGF0aW9uU3RvcmUoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==