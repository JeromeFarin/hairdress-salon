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
      var ths = [];
      var tds = [];

      if (this.state.store.ths != null) {
        ths = this.state.store.ths;
        tds = this.state.store.tds;
      }

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Modal_EditRolesModal__WEBPACK_IMPORTED_MODULE_22__["default"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
        ths: ths,
        tds: tds
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9NYW5hZ2VyQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL2NvbXBvbmVudHMvTW9kYWwvRWRpdFJvbGVzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvRWRpdFN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9Mb2FkU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL01vZGFsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1ByZXN0YXRpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvU3RhdHVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvTWFuYWdlckFwcC9qcy9zdG9yZXMvVGF4ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9NYW5hZ2VyQXBwL2pzL3N0b3Jlcy9Vc2VyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL01hbmFnZXJBcHAvanMvc3RvcmVzL1ZhbGlkYXRpb25TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiTWFuYWdlckFwcCIsImluamVjdCIsIm9ic2VydmVyIiwic3RhdGUiLCJzdG9yZSIsInByb3BzIiwidHlwZSIsInByZXN0YXRpb25TdG9yZSIsImxvYWRQcmVzdGF0aW9ucyIsInNldFN0YXRlIiwic3RhdHVTdG9yZSIsImxvYWRTdGF0dXMiLCJ0YXhlU3RvcmUiLCJsb2FkVGF4ZXMiLCJ1c2VyU3RvcmUiLCJsb2FkVXNlcnMiLCJ0aHMiLCJ0ZHMiLCJDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJQcmVzdGF0aW9uU3RvcmUiLCJFZGl0U3RvcmUiLCJWYWxpZGF0aW9uU3RvcmUiLCJTdGF0dVN0b3JlIiwiVGF4ZVN0b3JlIiwiVXNlclN0b3JlIiwiTW9kYWxTdG9yZSIsImRhdGFzZXQiLCJFZGl0Um9sZXNNb2RhbCIsInJvbGVzIiwic2VsZWN0ZWQiLCJoYW5kbGVDbGljayIsIm1vZGFsU3RvcmUiLCJ0b2dnbGVFZGl0Um9sZXNNb2RhbCIsImhhbmRsZUNoYW5nZSIsImUiLCJpIiwibGVuIiwidGFyZ2V0Iiwib3B0aW9ucyIsImxlbmd0aCIsImV2ZW50IiwicHVzaCIsInZhbHVlIiwiaGFuZGxlQ29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwidXNlciIsInVzZXJzIiwiZmluZCIsImVkaXRfcm9sZXNfbW9kYWwiLCJtYXAiLCJlbHQiLCJUYWJsZSIsIiQiLCJibHVyIiwiT2JqZWN0Iiwia2V5cyIsInZhbGlkYXRpb25TdG9yZSIsImVycm9ycyIsImVkaXRTdG9yZSIsInZhbHVlcyIsInNhdmVWYWx1ZXMiLCJ2YWxpZGF0ZSIsInVwZGF0ZVZhbHVlcyIsImhhbmRsZUJsdXIiLCJoYW5kbGVSb3ciLCJ0ZCIsIm5ld19yb3ciLCJhc3NpZ24iLCJ0aCIsIm1vbWVudCIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJhdHRyIiwicG9wIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzZWFyY2giLCJuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2UiLCJmb3JtYXRWYWx1ZSIsImRpc3BsYXkiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRDaGVja2VkIiwiZm9ybWF0Iiwib25DbGljayIsImhhbmRsZUNoYW5nZVJvbGVzIiwiZGlzYWJsZWQiLCJydW5JbkFjdGlvbiIsIm9sZF92YWx1ZSIsImNoZWNrZWQiLCJjc3MiLCJKU09OIiwic3RyaW5naWZ5Iiwib2JzZXJ2YWJsZSIsIkxvYWRTdG9yZSIsIm9wdGlvbiIsImNoZWNrIiwid2luZG93IiwiZmV0Y2giLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwcmVzdGF0aW9ucyIsInBhcnNlIiwibG9hZFZhbHVlcyIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsInRheGVzIiwic3R5bGUiLCJ0aXRsZSIsImFkZEVycm9yIiwicmVtb3ZlRXJyb3IiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUlNQSxVLFdBRkxDLDBEQUFNLENBQUMsaUJBQUQsRUFBb0IsWUFBcEIsRUFBa0MsV0FBbEMsRUFBK0MsV0FBL0MsQyxnQkFDTkMsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRUNDLEssR0FBUTtBQUNOQyxXQUFLLEVBQUU7QUFERCxLOzs7Ozs7d0NBSVk7QUFDbEIsY0FBUSxLQUFLQyxLQUFMLENBQVdDLElBQW5CO0FBQ0UsYUFBSyxhQUFMO0FBQ0UsZUFBS0QsS0FBTCxDQUFXRSxlQUFYLENBQTJCQyxlQUEzQjtBQUNBLGVBQUtDLFFBQUwsQ0FBYztBQUFDTCxpQkFBSyxFQUFHLEtBQUtDLEtBQUwsQ0FBV0U7QUFBcEIsV0FBZDtBQUNBOztBQUVGLGFBQUssUUFBTDtBQUNFLGVBQUtGLEtBQUwsQ0FBV0ssVUFBWCxDQUFzQkMsVUFBdEI7QUFDQSxlQUFLRixRQUFMLENBQWM7QUFBQ0wsaUJBQUssRUFBRyxLQUFLQyxLQUFMLENBQVdLO0FBQXBCLFdBQWQ7QUFDQTs7QUFFRixhQUFLLE9BQUw7QUFDRSxlQUFLTCxLQUFMLENBQVdP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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiTWFuYWdlckFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm92aWRlciwgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5pbXBvcnQgUHJlc3RhdGlvblN0b3JlIGZyb20gJy4vc3RvcmVzL1ByZXN0YXRpb25TdG9yZSdcbmltcG9ydCBFZGl0U3RvcmUgZnJvbSAnLi9zdG9yZXMvRWRpdFN0b3JlJ1xuaW1wb3J0IFZhbGlkYXRpb25TdG9yZSBmcm9tICcuL3N0b3Jlcy9WYWxpZGF0aW9uU3RvcmUnXG5pbXBvcnQgU3RhdHVTdG9yZSBmcm9tICcuL3N0b3Jlcy9TdGF0dVN0b3JlJ1xuaW1wb3J0IFRheGVTdG9yZSBmcm9tICcuL3N0b3Jlcy9UYXhlU3RvcmUnXG5pbXBvcnQgVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL1RhYmxlJ1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tICcuL3N0b3Jlcy9Vc2VyU3RvcmUnXG5pbXBvcnQgRWRpdFJvbGVzTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsL0VkaXRSb2xlc01vZGFsJ1xuaW1wb3J0IE1vZGFsU3RvcmUgZnJvbSAnLi9zdG9yZXMvTW9kYWxTdG9yZSdcblxuQGluamVjdCgncHJlc3RhdGlvblN0b3JlJywgJ3N0YXR1U3RvcmUnLCAndGF4ZVN0b3JlJywgJ3VzZXJTdG9yZScpXG5Ab2JzZXJ2ZXJcbmNsYXNzIE1hbmFnZXJBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzdG9yZToge31cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICBjYXNlICdwcmVzdGF0aW9ucyc6XG4gICAgICAgIHRoaXMucHJvcHMucHJlc3RhdGlvblN0b3JlLmxvYWRQcmVzdGF0aW9ucygpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy5wcmVzdGF0aW9uU3RvcmV9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgICAgdGhpcy5wcm9wcy5zdGF0dVN0b3JlLmxvYWRTdGF0dXMoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdG9yZSA6IHRoaXMucHJvcHMuc3RhdHVTdG9yZX0pXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YXhlcyc6XG4gICAgICAgIHRoaXMucHJvcHMudGF4ZVN0b3JlLmxvYWRUYXhlcygpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0b3JlIDogdGhpcy5wcm9wcy50YXhlU3RvcmV9KVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndXNlcnMnOlxuICAgICAgICAgIHRoaXMucHJvcHMudXNlclN0b3JlLmxvYWRVc2VycygpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RvcmUgOiB0aGlzLnByb3BzLnVzZXJTdG9yZX0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgdGhzID0gW11cbiAgICBsZXQgdGRzID0gW11cbiAgICBcbiAgICBpZiAodGhpcy5zdGF0ZS5zdG9yZS50aHMgIT0gbnVsbCkge1xuICAgICAgdGhzID0gdGhpcy5zdGF0ZS5zdG9yZS50aHNcbiAgICAgIHRkcyA9IHRoaXMuc3RhdGUuc3RvcmUudGRzXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxFZGl0Um9sZXNNb2RhbC8+XG4gICAgICAgIDxUYWJsZSB0aHM9e3Roc30gdGRzPXt0ZHN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbmFnZXJfYXBwX3JlYWN0JykgIT09IG51bGwpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlclxuICAgICAgcHJlc3RhdGlvblN0b3JlPXtQcmVzdGF0aW9uU3RvcmV9XG4gICAgICBlZGl0U3RvcmU9e0VkaXRTdG9yZX1cbiAgICAgIHZhbGlkYXRpb25TdG9yZT17VmFsaWRhdGlvblN0b3JlfVxuICAgICAgc3RhdHVTdG9yZT17U3RhdHVTdG9yZX1cbiAgICAgIHRheGVTdG9yZT17VGF4ZVN0b3JlfVxuICAgICAgdXNlclN0b3JlPXtVc2VyU3RvcmV9XG4gICAgICBtb2RhbFN0b3JlPXtNb2RhbFN0b3JlfVxuICAgID5cbiAgICAgIDxNYW5hZ2VyQXBwIHR5cGU9e2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VyX2FwcF9yZWFjdCcpLmRhdGFzZXQudHlwZX0gLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlcl9hcHBfcmVhY3QnKVxuICApXG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCdcblxuQGluamVjdCgnbW9kYWxTdG9yZScsICd1c2VyU3RvcmUnKVxuQG9ic2VydmVyXG5jbGFzcyBFZGl0Um9sZXNNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJvbGVzOiBbJ1JPTEVfQURNSU4nLCdST0xFX1NUQUZGJywnUk9MRV9DTElFTlQnXSxcbiAgICBzZWxlY3RlZDogW11cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZS50YXJnZXQub3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5vcHRpb25zW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0Lm9wdGlvbnNbaV0udmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkIH0pXG4gIH1cblxuICBoYW5kbGVDb25maXJtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkLCBlLnRhcmdldC5kYXRhc2V0LmlkKVxuICAgIHRoaXMucHJvcHMubW9kYWxTdG9yZS50b2dnbGVFZGl0Um9sZXNNb2RhbCgpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCB1c2VyID0ge31cbiAgICBpZiAodGhpcy5wcm9wcy51c2VyU3RvcmUudXNlciA+IDApIHtcbiAgICAgIHVzZXIgPSB0aGlzLnByb3BzLnVzZXJTdG9yZS51c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09IHRoaXMucHJvcHMudXNlclN0b3JlLnVzZXIpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgaWQ9J2VkaXRfcm9sZXNfbW9kYWwnIHNob3c9e3RoaXMucHJvcHMubW9kYWxTdG9yZS5lZGl0X3JvbGVzX21vZGFsfSBvbkhpZGU9e3RoaXMuaGFuZGxlQ2xpY2t9IGNlbnRlcmVkPlxuICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxoMz5FZGl0IFJvbGVzPC9oMz5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgPGZvcm0gaWQ9J2VkaXRfcm9sZXNfZm9ybScgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ29uZmlybX0gZGF0YS1pZD17dXNlci5pZH0+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt1c2VyLnJvbGVzfSBuYW1lPSdyb2xlcycgbXVsdGlwbGU+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvbGVzLm1hcChlbHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17ZWx0fSB2YWx1ZT17ZWx0fT57ZWx0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ncHJpbWFyeScgdHlwZT0nc3VibWl0JyBmb3JtPSdlZGl0X3JvbGVzX2Zvcm0nPkNvbmZpcm08L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3NlY29uZGFyeScgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFJvbGVzTW9kYWxcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbkBpbmplY3QoJ2VkaXRTdG9yZScsICd2YWxpZGF0aW9uU3RvcmUnLCAncHJlc3RhdGlvblN0b3JlJywgJ3N0YXR1U3RvcmUnLCAndGF4ZVN0b3JlJylcbkBvYnNlcnZlclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAkKCc6Zm9jdXMnKS5ibHVyKClcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5sZW5ndGggPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmVkaXRTdG9yZS52YWx1ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvcHMuZWRpdFN0b3JlLnNhdmVWYWx1ZXMoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUudmFsaWRhdGUoZSlcbiAgICB0aGlzLnByb3BzLmVkaXRTdG9yZS51cGRhdGVWYWx1ZXMoZSwgdGhpcy5wcm9wcy50ZHMpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS52YWxpZGF0ZShlKVxuICB9XG5cbiAgaGFuZGxlUm93ID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50ZHMuZmluZCgodGQpID0+IHRkLmlkID09ICduZXcnKSA9PSBudWxsKSB7XG4gICAgICBsZXQgbmV3X3JvdyA9IHt9XG4gICAgICBPYmplY3QuYXNzaWduKG5ld19yb3csIHtpZDogJ25ldyd9KVxuICAgICAgdGhpcy5wcm9wcy50aHMubWFwKCh0aCkgPT4ge1xuICAgICAgICBpZiAodGggPT0gJ21ha2VfdGltZScpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG5ld19yb3csIHtbdGhdOiBtb21lbnQoKS5ob3VyKDApLm1pbnV0ZSgwKS5zZWNvbmQoMCl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3X3Jvdywge1t0aF06ICcnfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMudGRzLnB1c2gobmV3X3JvdylcbiAgICAgICQoZS50YXJnZXQpLmF0dHIoJ2NsYXNzJywgJ2ZhIGZhLW1pbnVzLWNpcmNsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMudGRzLnBvcCgpXG4gICAgICAkKGUudGFyZ2V0KS5hdHRyKCdjbGFzcycsICdmYSBmYS1wbHVzLWNpcmNsZScpXG4gICAgICBkZWxldGUgdGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzWyduZXcnXVxuICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0aW9uU3RvcmUuZXJyb3JzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQuc2VhcmNoKFwibmV3XCIpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9yc1tlbGVtZW50XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGRpc2FibGVkPXtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZhbGlkYXRpb25TdG9yZS5lcnJvcnMpLmxlbmd0aCA9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZWRpdFN0b3JlLnZhbHVlcykubGVuZ3RoID4gMCA/IGZhbHNlIDogdHJ1ZSB9PlNhdmUgQUxMIGNoYW5nZTwvYnV0dG9uPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aHMubWFwKCh0aCkgPT4gPHRoIGtleT17dGgubmFtZX0+e3RoLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aC5uYW1lLnNsaWNlKDEpLnJlcGxhY2UoJ18nLCAnICcpfTwvdGg+KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZHMubWFwKCh0ZCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3RkLmlkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGhzLm1hcCh0aCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17YCR7dGQuaWR9XyR7dGgubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4udGhpcy5wcm9wcy5lZGl0U3RvcmUuZm9ybWF0VmFsdWUodGQsdGgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1wbHVzLWNpcmNsZScgb25DbGljaz17dGhpcy5oYW5kbGVSb3d9IHN0eWxlPXt7IGRpc3BsYXkgOiB0aGlzLnByb3BzLnRocy5maW5kKHRoID0+IHRoLm5hbWUgPT0gJ3JvbGVzJykgPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScgfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjxici8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQ9e09iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGlvblN0b3JlLmVycm9ycykubGVuZ3RoID09IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5lZGl0U3RvcmUudmFsdWVzKS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlIH0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+U2F2ZSBBTEwgY2hhbmdlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IG1vZGFsU3RvcmUgZnJvbSAnLi9Nb2RhbFN0b3JlJ1xuaW1wb3J0IFVzZXJTdG9yZSBmcm9tICcuL1VzZXJTdG9yZSdcblxuY2xhc3MgRWRpdFN0b3JlIHtcbiAgQG9ic2VydmFibGUgdmFsdWVzID0ge31cblxuICBoYW5kbGVDaGFuZ2VSb2xlcyAoZSkge1xuICAgIFVzZXJTdG9yZS51c2VyID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgIG1vZGFsU3RvcmUudG9nZ2xlRWRpdFJvbGVzTW9kYWwoKVxuICB9XG5cbiAgZm9ybWF0VmFsdWUgKHRkLHRoKSB7XG4gICAgbGV0IHZhbHVlID0ge31cblxuICAgIHZhbHVlLnR5cGUgPSB0aC50eXBlXG4gICAgdmFsdWVbJ2RhdGEtaWQnXSA9IHRkLmlkXG4gICAgdmFsdWUubmFtZSA9IHRoLm5hbWVcbiAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSB0ZFt0aC5uYW1lXVxuICAgIHZhbHVlLnBsYWNlaG9sZGVyID0gdGgubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoLm5hbWUuc2xpY2UoMSkucmVwbGFjZSgnXycsICcgJylcblxuICAgIC8vIHNwZWNpZmljIHZhbHVlXG4gICAgc3dpdGNoICh0aC5uYW1lKSB7XG4gICAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgICB2YWx1ZS5kZWZhdWx0Q2hlY2tlZCA9IHRkW3RoLm5hbWVdID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ21ha2VfdGltZSc6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJzAwOjAwOjAwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdISDptbTpzcycpXG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUucGxhY2Vob2xkZXIgPSAnSEg6TU06U1MnXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgY2FzZSAnaGlyZV9kYXRlJzpcbiAgICAgICAgaWYgKHRkW3RoLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5kZWZhdWx0VmFsdWUgPSAnJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmRlZmF1bHRWYWx1ZSA9IG1vbWVudCh0ZFt0aC5uYW1lXSkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGlmICh0ZFt0aC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUuZGVmYXVsdFZhbHVlID0gJyMwMDAnXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JvbGVzJzpcbiAgICAgICAgdmFsdWUub25DbGljayA9IHRoaXMuaGFuZGxlQ2hhbmdlUm9sZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ZpcnN0X25hbWUnOlxuICAgICAgY2FzZSAnbGFzdF9uYW1lJzpcbiAgICAgICAgdmFsdWUuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdXBkYXRlVmFsdWVzIChlLCB0ZHMpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkXG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgbGV0IG9sZF92YWx1ZSA9IHRkcy5maW5kKCh0ZCkgPT4gdGQuaWQgPT0gaWQpW25hbWVdXG4gIFxuICAgICAgLy8gZm9ybWF0IHNwZWNpZmljIGZpZWxkXG4gICAgICBpZiAobmFtZSA9PSAnbWFrZV90aW1lJykge1xuICAgICAgICBvbGRfdmFsdWUgPSBtb21lbnQob2xkX3ZhbHVlKS5mb3JtYXQoJ0hIOm1tOnNzJylcbiAgICAgIH1cbiAgXG4gICAgICBpZiAobmFtZSA9PSAnYWN0aXZlJykge1xuICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgb2xkX3ZhbHVlID0gb2xkX3ZhbHVlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICB9XG4gIFxuICAgICAgLy8gdXBkYXRlIHZhbHVlc1xuICAgICAgaWYgKHZhbHVlICE9IG9sZF92YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXNbaWRdKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlc1tpZF0sIHtbbmFtZV06IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywge1tpZF06e1tuYW1lXTogdmFsdWV9fSk7XG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjZmZhNTAwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc1tpZF1bbmFtZV1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudmFsdWVzW2lkXSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy52YWx1ZXNbaWRdXG4gICAgICAgIH1cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdjb2xvcicsICcjMDAwJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2F2ZVZhbHVlcyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy52YWx1ZXMpKVxuICAgICAgLy8gd2luZG93LmZldGNoKCcvYXBpL3ByZXN0YXRpb25zJywge1xuICAgICAgLy8gICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLnByZXN0YXRpb25zID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgLy8gICB9KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVkaXRTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5cbmNsYXNzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHRocyA9IFtdXG5cbiAgQG9ic2VydmFibGUgdGRzID0gW11cblxuICBsb2FkVmFsdWVzKHZhbHVlcywgb3B0aW9ucykge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIGxldCB0aHMgPSB7fVxuXG4gICAgICB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHRocy5sZW5ndGggPCBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoIHx8IHRocy5sZW5ndGggPT0gbnVsbCkge1xuICAgICAgICAgIHRocyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBjaGVjayA9IHRocy5maW5kKHZhbHVlID0+IHZhbHVlID09PSBvcHRpb24ubmFtZSlcbiAgICAgICAgICBpZiAoY2hlY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50aHMucHVzaChvcHRpb24pXG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgdGhpcy50ZHMgPSB2YWx1ZXNcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRTdG9yZVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuXG5jbGFzcyBNb2RhbFN0b3JlIHtcbiAgQG9ic2VydmFibGUgZWRpdF9yb2xlc19tb2RhbCA9IGZhbHNlXG5cbiAgdG9nZ2xlRWRpdFJvbGVzTW9kYWwgPSAoKSA9PiB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0X3JvbGVzX21vZGFsID0gIXRoaXMuZWRpdF9yb2xlc19tb2RhbFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGFsU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgUHJlc3RhdGlvblN0b3JlIGV4dGVuZHMgTG9hZFN0b3JlIHtcbiAgQG9ic2VydmFibGUgcHJlc3RhdGlvbnMgPSBbXVxuXG4gIGxvYWRQcmVzdGF0aW9ucyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3ByZXN0YXRpb25zJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnByZXN0YXRpb25zID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgIHRoaXMubG9hZFZhbHVlcyh0aGlzLnByZXN0YXRpb25zLCBbXG4gICAgICAgICAgICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdtYWtlX3RpbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdwcmljZV9odCcsIHR5cGU6ICdudW1iZXInfSxcbiAgICAgICAgICAgIHtuYW1lOiAnYWN0aXZlJywgdHlwZTogJ2NoZWNrYm94J30sXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmVzdGF0aW9uU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IExvYWRTdG9yZSBmcm9tICcuL0xvYWRTdG9yZSdcblxuY2xhc3MgU3RhdHVTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHN0YXR1cyA9IFtdXG5cbiAgbG9hZFN0YXR1cyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3N0YXR1cycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKHRoaXMuc3RhdHVzLCBbXG4gICAgICAgICAgICB7bmFtZTogJ25hbWUnLCB0eXBlOiAndGV4dCd9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTdGF0dVN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBMb2FkU3RvcmUgZnJvbSAnLi9Mb2FkU3RvcmUnXG5cbmNsYXNzIFRheGVTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHRheGVzID0gW11cblxuICBsb2FkVGF4ZXMgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS90YXhlcycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy50YXhlcyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXModGhpcy50YXhlcywgW1xuICAgICAgICAgICAge25hbWU6ICd2YWx1ZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0JywgdHlwZTogJ2RhdGUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kJywgdHlwZTogJ2RhdGUnfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGF4ZVN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBMb2FkU3RvcmUgZnJvbSAnLi9Mb2FkU3RvcmUnXG5cbmNsYXNzIFVzZXJTdG9yZSBleHRlbmRzIExvYWRTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHVzZXJzID0gW11cblxuICBAb2JzZXJ2YWJsZSB1c2VyID0gMFxuXG4gIGxvYWRVc2VycyAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgd2luZG93LmZldGNoKCcvYXBpL3VzZXJzJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJzID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgIHRoaXMubG9hZFZhbHVlcyh0aGlzLnVzZXJzLCBbXG4gICAgICAgICAgICB7bmFtZTogJ2ZpcnN0X25hbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdsYXN0X25hbWUnLCB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdjb2xvcicsIHR5cGU6ICdjb2xvcid9LFxuICAgICAgICAgICAge25hbWU6ICdoaXJlX2RhdGUnLCB0eXBlOiAnZGF0ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdyb2xlcycsIHR5cGU6ICdidXR0b24nfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcblxuY2xhc3MgVmFsaWRhdGlvblN0b3JlIHtcbiAgQG9ic2VydmFibGUgZXJyb3JzID0ge31cblxuICB2YWxpZGF0ZSAoZSkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lXG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcbiAgICAgIFxuICAgICAgaWYgKHZhbHVlID09ICcnICYmIG5hbWUgIT0gJ2hpcmVfZGF0ZScpIHtcbiAgICAgICAgJChlLnRhcmdldCkuYXR0cih7XG4gICAgICAgICAgc3R5bGU6ICdib3JkZXI6IDFweCBzb2xpZCAjZjAwICFpbXBvcnRhbnQnLFxuICAgICAgICAgIHRpdGxlOiAnUmVxdWlyZWQnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWRkRXJyb3IoYCR7aWR9XyR7bmFtZX1gLCAnUmVxdWlyZWQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoYCR7aWR9XyR7bmFtZX1gKVxuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PSAnbWFrZV90aW1lJykge1xuICAgICAgICBpZiAoIXZhbHVlLm1hdGNoKC8oWzAtOV17Mn0pOihbMC05XXsyfSk6KFswLTldezJ9KS8pKSB7XG4gICAgICAgICAgJChlLnRhcmdldCkuYXR0cih7XG4gICAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMXB4IHNvbGlkICNmMDAhIGltcG9ydGFudCcsXG4gICAgICAgICAgICB0aXRsZTogJ0Zvcm1hdCBISDpNTTpTUydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuYWRkRXJyb3IoYCR7aWR9XyR7bmFtZX1gLCAnRm9ybWF0IEhIOk1NOlNTJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUVycm9yKGAke2lkfV8ke25hbWV9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoIXRoaXMuZXJyb3JzW2Ake2lkfV8ke25hbWV9YF0pIHtcbiAgICAgICAgJChlLnRhcmdldCkuY3NzKCdib3JkZXInLCAnbm9uZScpXG4gICAgICAgICQoZS50YXJnZXQpLmNzcygnY29sb3InLCAnIzAwMCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZEVycm9yIChuYW1lLCBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmVycm9ycywge1tuYW1lXTogbWVzc2FnZX0pXG4gIH1cblxuICByZW1vdmVFcnJvciAobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tuYW1lXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWYWxpZGF0aW9uU3RvcmUoKVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=