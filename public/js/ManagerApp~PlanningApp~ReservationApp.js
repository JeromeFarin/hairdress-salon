(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ManagerApp~PlanningApp~ReservationApp"],{

/***/ "./assets/ReservationApp/js/stores/ErrorStore.js":
/*!*******************************************************!*\
  !*** ./assets/ReservationApp/js/stores/ErrorStore.js ***!
  \*******************************************************/
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


var ErrorStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function ErrorStore() {
    _classCallCheck(this, ErrorStore);

    _initializerDefineProperty(this, "errors", _descriptor, this);
  }

  _createClass(ErrorStore, [{
    key: "updateErrors",
    value: function updateErrors() {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this.errors = _this.errors + 1;
      });
    }
  }]);

  return ErrorStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "errors", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new ErrorStore());

/***/ }),

/***/ "./assets/ReservationApp/js/stores/PlaceStore.js":
/*!*******************************************************!*\
  !*** ./assets/ReservationApp/js/stores/PlaceStore.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SlotStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SlotStore */ "./assets/ReservationApp/js/stores/SlotStore.js");
/* harmony import */ var _PrestationStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PrestationStore */ "./assets/ReservationApp/js/stores/PrestationStore.js");











var _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





var PlaceStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function PlaceStore() {
    _classCallCheck(this, PlaceStore);

    _initializerDefineProperty(this, "place", _descriptor, this);

    _initializerDefineProperty(this, "places", _descriptor2, this);

    _initializerDefineProperty(this, "slotId", _descriptor3, this);
  }

  _createClass(PlaceStore, [{
    key: "loadPlaces",
    value: function loadPlaces() {
      var _slotStore$getSlot = _SlotStore__WEBPACK_IMPORTED_MODULE_12__["default"].getSlot(this.slotId),
          slot = Object.assign({}, _slotStore$getSlot);

      var availableTime = moment__WEBPACK_IMPORTED_MODULE_11___default()(slot.end).valueOf() - _PrestationStore__WEBPACK_IMPORTED_MODULE_13__["default"].getTime();
      this.places = [];

      for (var i = moment__WEBPACK_IMPORTED_MODULE_11___default()(slot.start).valueOf(); i < availableTime; i += 300000) {
        this.places.push({
          id: i,
          start: moment__WEBPACK_IMPORTED_MODULE_11___default()(i),
          end: moment__WEBPACK_IMPORTED_MODULE_11___default()(i + _PrestationStore__WEBPACK_IMPORTED_MODULE_13__["default"].getTime()),
          staff: slot.staff
        });
      }
    }
  }, {
    key: "setPlace",
    value: function setPlace(id) {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_10__["runInAction"])(function () {
        var _this$places$find = _this.places.find(function (place) {
          return parseInt(place.id, 10) === parseInt(id, 10);
        }),
            place = Object.assign({}, _this$places$find);

        place.prestations = _PrestationStore__WEBPACK_IMPORTED_MODULE_13__["default"].selectedPrestations();
        _this.place = place;
      });
    }
  }, {
    key: "setPlaceWithStorage",
    value: function setPlaceWithStorage() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_10__["runInAction"])(function () {
        _this2.place = JSON.parse(sessionStorage.getItem('place'));
      });
    }
  }]);

  return PlaceStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "place", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "places", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "slotId", [mobx__WEBPACK_IMPORTED_MODULE_10__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new PlaceStore());

/***/ }),

/***/ "./assets/ReservationApp/js/stores/PrestationStore.js":
/*!************************************************************!*\
  !*** ./assets/ReservationApp/js/stores/PrestationStore.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ErrorStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ErrorStore */ "./assets/ReservationApp/js/stores/ErrorStore.js");













var _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




var PrestationStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function PrestationStore() {
    _classCallCheck(this, PrestationStore);

    _initializerDefineProperty(this, "prestations", _descriptor, this);

    _initializerDefineProperty(this, "isSelected", _descriptor2, this);
  }

  _createClass(PrestationStore, [{
    key: "loadActivePrestations",
    value: function loadActivePrestations() {
      var _this = this;

      window.fetch('/api/prestations/active', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_12__["autorun"])(function () {
          _this.prestations = JSON.parse(data);
        });
      })["catch"](function (error) {
        console.error(error.message);
        _ErrorStore__WEBPACK_IMPORTED_MODULE_14__["default"].updateErrors();
      });
    }
  }, {
    key: "selectedPrestations",
    value: function selectedPrestations() {
      return this.prestations.filter(function (prestation) {
        return prestation.selected;
      });
    }
  }, {
    key: "loadSelected",
    value: function loadSelected() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_12__["autorun"])(function () {
        if (_this2.selectedPrestations().length > 0) {
          _this2.isSelected = false;
        } else {
          _this2.isSelected = true;
        }
      });
    }
  }, {
    key: "prestationUpdate",
    value: function prestationUpdate(id) {
      var _this3 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_12__["runInAction"])(function () {
        _this3.prestations.find(function (prestation) {
          if (prestation.id === id) {
            if (prestation.selected && _this3.selectedPrestations().length > 1) {
              prestation.selected = !prestation.selected;
            } else if (!prestation.selected) {
              prestation.selected = !prestation.selected;
            }
          }
        });
      });
    }
  }, {
    key: "getTime",
    value: function getTime() {
      var time = 0;
      this.prestations.map(function (prestation) {
        if (prestation.selected) {
          time = time + moment__WEBPACK_IMPORTED_MODULE_13___default()(prestation.make_time).hour() * 3600000 + moment__WEBPACK_IMPORTED_MODULE_13___default()(prestation.make_time).minute() * 60000 - 60000;
        }
      });
      return time;
    }
  }]);

  return PrestationStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "prestations", [mobx__WEBPACK_IMPORTED_MODULE_12__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isSelected", [mobx__WEBPACK_IMPORTED_MODULE_12__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new PrestationStore());

/***/ }),

/***/ "./assets/ReservationApp/js/stores/SlotStore.js":
/*!******************************************************!*\
  !*** ./assets/ReservationApp/js/stores/SlotStore.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_DateStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/DateStore */ "./assets/store/DateStore.js");
/* harmony import */ var _StaffStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./StaffStore */ "./assets/ReservationApp/js/stores/StaffStore.js");
/* harmony import */ var _UnavailabilityStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UnavailabilityStore */ "./assets/ReservationApp/js/stores/UnavailabilityStore.js");












var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






var SlotStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function SlotStore() {
    _classCallCheck(this, SlotStore);

    _initializerDefineProperty(this, "slots", _descriptor, this);

    this.slotsId = 0;
  }

  _createClass(SlotStore, [{
    key: "addSlot",
    value: function addSlot(type, staff, day, start, end) {
      var size = this.getSize(start, end);
      this.slotsId = this.slotsId + 1;
      var id = this.slotsId;
      this.slots.push({
        id: id,
        type: type,
        staff: staff,
        day: day,
        start: start,
        end: end,
        size: size
      });
    }
  }, {
    key: "getSize",
    value: function getSize(start, end) {
      var dateTimeStart = moment__WEBPACK_IMPORTED_MODULE_12___default()(moment__WEBPACK_IMPORTED_MODULE_12___default()(start).format('YYYY-MM-DD') + ' ' + _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].opened.start).valueOf();
      var dateTimeEnd = moment__WEBPACK_IMPORTED_MODULE_12___default()(moment__WEBPACK_IMPORTED_MODULE_12___default()(end).format('YYYY-MM-DD') + ' ' + _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].opened.end).valueOf();
      return (moment__WEBPACK_IMPORTED_MODULE_12___default()(end).valueOf() - moment__WEBPACK_IMPORTED_MODULE_12___default()(start).valueOf()) * 100 / (dateTimeEnd - dateTimeStart);
    }
  }, {
    key: "getSlot",
    value: function getSlot(id) {
      return this.slots.find(function (slot) {
        return slot.id === parseInt(id, 10);
      });
    }
  }, {
    key: "loadSlots",
    value: function loadSlots() {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_11__["autorun"])(function () {
        Object(mobx__WEBPACK_IMPORTED_MODULE_11__["observe"])(_UnavailabilityStore__WEBPACK_IMPORTED_MODULE_15__["default"], function () {
          _this.slots = [];

          var _loop = function _loop(d) {
            var day = _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].date.day(d).format('YYYY-MM-DD');
            _StaffStore__WEBPACK_IMPORTED_MODULE_14__["default"].staffSelected().map(function (staff) {
              var dateTimeStart = moment__WEBPACK_IMPORTED_MODULE_12___default()(day + ' ' + _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].opened.start).format();
              var dateTimeEnd = moment__WEBPACK_IMPORTED_MODULE_12___default()(day + ' ' + _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].opened.end).format(); // if no unavailabilities set staff available for all at day

              if (_UnavailabilityStore__WEBPACK_IMPORTED_MODULE_15__["default"].unavailabilities.length > 0) {
                // start unavailabilities loop for staff
                _UnavailabilityStore__WEBPACK_IMPORTED_MODULE_15__["default"].unavailabilities.filter(function (unavailability) {
                  return unavailability.staff === staff.id;
                }).map(function (unavailability) {
                  // check if unavailability start < end && gStart = gEnd
                  if (moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format() < moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format()) {
                    // unavailability start <= gStart && unavailability end > gStart
                    if (moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format() <= dateTimeStart && moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format() > dateTimeStart) {
                      // unavailability end > gEnd
                      if (moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format() >= dateTimeEnd) {
                        _this.addSlot('0', staff, d, dateTimeStart, dateTimeEnd);

                        dateTimeStart = dateTimeEnd;
                      } else {
                        _this.addSlot('0', staff, d, dateTimeStart, moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format());

                        dateTimeStart = moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format();
                      } // gStart < gEnd && unavailability end > gStart

                    } else if (dateTimeStart < dateTimeEnd && moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format() > dateTimeStart) {
                      // unavailability start > gEnd
                      if (moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format() > dateTimeEnd) {
                        _this.addSlot('1', staff, d, dateTimeStart, dateTimeEnd);

                        dateTimeStart = dateTimeEnd;
                      } else {
                        _this.addSlot('1', staff, d, dateTimeStart, moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format());

                        dateTimeStart = moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format();
                      } // unavailability end > gEnd


                      if (dateTimeStart < dateTimeEnd) {
                        if (moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format() > dateTimeEnd) {
                          _this.addSlot('0', staff, d, moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format(), dateTimeEnd);

                          dateTimeStart = dateTimeEnd;
                        } else {
                          _this.addSlot('0', staff, d, moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.start).format(), moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format());

                          dateTimeStart = moment__WEBPACK_IMPORTED_MODULE_12___default()(unavailability.end).format();
                        }
                      }
                    }
                  }
                });
              }

              if (dateTimeStart !== dateTimeEnd) {
                _this.addSlot('1', staff, d, dateTimeStart, dateTimeEnd);

                dateTimeStart = dateTimeEnd;
              }
            });
          };

          for (var d = 1; d < 7; d += 1) {
            _loop(d);
          }
        });
      });
    }
  }]);

  return SlotStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "slots", [mobx__WEBPACK_IMPORTED_MODULE_11__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new SlotStore());

/***/ }),

/***/ "./assets/ReservationApp/js/stores/StaffStore.js":
/*!*******************************************************!*\
  !*** ./assets/ReservationApp/js/stores/StaffStore.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _ErrorStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ErrorStore */ "./assets/ReservationApp/js/stores/ErrorStore.js");













var _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var StaffStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function StaffStore() {
    _classCallCheck(this, StaffStore);

    _initializerDefineProperty(this, "staffs", _descriptor, this);

    _initializerDefineProperty(this, "isSelected", _descriptor2, this);
  }

  _createClass(StaffStore, [{
    key: "loadStaffs",
    value: function loadStaffs() {
      var _this = this;

      window.fetch('/api/staffs', {
        headers: {
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_12__["autorun"])(function () {
          _this.staffs = JSON.parse(data);
        });
      })["catch"](function (error) {
        console.error(error.message);
        _ErrorStore__WEBPACK_IMPORTED_MODULE_13__["default"].updateErrors();
      });
    }
  }, {
    key: "loadSelected",
    value: function loadSelected() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_12__["runInAction"])(function () {
        if (_this2.staffSelected().length !== _this2.staffs.length) {
          _this2.isSelected = false;
        } else {
          _this2.isSelected = true;
        }
      });
    }
  }, {
    key: "staffUpdate",
    value: function staffUpdate(id) {
      var _this3 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_12__["runInAction"])(function () {
        _this3.staffs.find(function (staff) {
          if (staff.id === id) {
            if (staff.selected && _this3.staffSelected().length > 1) {
              staff.selected = !staff.selected;
            } else if (!staff.selected) {
              staff.selected = !staff.selected;
            }
          }
        });
      });
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      var _this4 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_12__["runInAction"])(function () {
        _this4.staffs.filter(function (staff) {
          return staff.selected === false;
        }).map(function (staff) {
          _this4.staffUpdate(staff.id);
        });
      });
    }
  }, {
    key: "staffSelected",
    value: function staffSelected() {
      return this.staffs.filter(function (staff) {
        return staff.selected;
      });
    }
  }]);

  return StaffStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "staffs", [mobx__WEBPACK_IMPORTED_MODULE_12__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isSelected", [mobx__WEBPACK_IMPORTED_MODULE_12__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new StaffStore());

/***/ }),

/***/ "./assets/ReservationApp/js/stores/UnavailabilityStore.js":
/*!****************************************************************!*\
  !*** ./assets/ReservationApp/js/stores/UnavailabilityStore.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_DateStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/DateStore */ "./assets/store/DateStore.js");
/* harmony import */ var _ErrorStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ErrorStore */ "./assets/ReservationApp/js/stores/ErrorStore.js");












var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





var UnavailabilityStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function UnavailabilityStore() {
    _classCallCheck(this, UnavailabilityStore);

    _initializerDefineProperty(this, "unavailabilities", _descriptor, this);

    this.noLoaded = [];
  }

  _createClass(UnavailabilityStore, [{
    key: "load",
    value: function load() {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_11__["autorun"])(function () {
        _this.loadUnavailabilities();

        _this.loadReservations();
      });
    }
  }, {
    key: "loadUnavailabilities",
    value: function loadUnavailabilities() {
      var _this2 = this;

      window.fetch('/api/unavailabilities', {
        method: 'POST',
        body: JSON.stringify({
          start: _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].date.day(1).startOf('day').format(),
          end: _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].date.day(6).endOf('day').format()
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.orderUnavailabilities(JSON.parse(data));
      })["catch"](function (error) {
        console.error("loadUnavailabilities : ".concat(error.message));
        _ErrorStore__WEBPACK_IMPORTED_MODULE_14__["default"].updateErrors();
      });
    }
  }, {
    key: "loadReservations",
    value: function loadReservations() {
      var _this3 = this;

      window.fetch('/api/reservations', {
        method: 'POST',
        body: JSON.stringify({
          start: _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].date.day(1).startOf('day').format(),
          end: _store_DateStore__WEBPACK_IMPORTED_MODULE_13__["default"].date.day(6).endOf('day').format()
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this3.orderUnavailabilities(JSON.parse(data));
      })["catch"](function (error) {
        console.error("loadReservations : ".concat(error.message));
        _ErrorStore__WEBPACK_IMPORTED_MODULE_14__["default"].updateErrors();
      });
    }
  }, {
    key: "orderUnavailabilities",
    value: function orderUnavailabilities(data) {
      var _this4 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_11__["runInAction"])(function () {
        data.map(function (elt) {
          _this4.noLoaded.push(elt);
        });
        _this4.unavailabilities = _this4.noLoaded.slice().sort(function (a, b) {
          return moment__WEBPACK_IMPORTED_MODULE_12___default()(a.start).valueOf() - moment__WEBPACK_IMPORTED_MODULE_12___default()(b.start).valueOf();
        });
      });
    }
  }]);

  return UnavailabilityStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "unavailabilities", [mobx__WEBPACK_IMPORTED_MODULE_11__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new UnavailabilityStore());

/***/ }),

/***/ "./assets/store/DateStore.js":
/*!***********************************!*\
  !*** ./assets/store/DateStore.js ***!
  \***********************************/
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
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);










var _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var DateStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function DateStore() {
    _classCallCheck(this, DateStore);

    _initializerDefineProperty(this, "date", _descriptor, this);

    _initializerDefineProperty(this, "opened", _descriptor2, this);
  }

  _createClass(DateStore, [{
    key: "loadOpened",
    value: function loadOpened() {
      var _this = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_9__["runInAction"])(function () {
        window.fetch('/api/opened', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this.opened = data;
        })["catch"](function (error) {
          console.error("loadOpened : ".concat(error.message));
        });
      });
    }
  }, {
    key: "addWeek",
    value: function addWeek() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_9__["runInAction"])(function () {
        _this2.date = moment__WEBPACK_IMPORTED_MODULE_10___default()(_this2.date).add(7, 'd');
      });
    }
  }, {
    key: "removeWeek",
    value: function removeWeek() {
      var _this3 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_9__["runInAction"])(function () {
        _this3.date = moment__WEBPACK_IMPORTED_MODULE_10___default()(_this3.date).subtract(7, 'd');
      });
    }
  }, {
    key: "selectMonth",
    value: function selectMonth(month) {
      this.date = moment__WEBPACK_IMPORTED_MODULE_10___default()().month(month);
    }
  }]);

  return DateStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "date", [mobx__WEBPACK_IMPORTED_MODULE_9__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return moment__WEBPACK_IMPORTED_MODULE_10___default()();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "opened", [mobx__WEBPACK_IMPORTED_MODULE_9__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      'start': '10:00:00',
      'end': '15:00:00'
    };
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new DateStore());

/***/ }),

/***/ "./assets/store/ModalStore.js":
/*!************************************!*\
  !*** ./assets/store/ModalStore.js ***!
  \************************************/
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
/* harmony import */ var _ReservationApp_js_stores_PlaceStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ReservationApp/js/stores/PlaceStore */ "./assets/ReservationApp/js/stores/PlaceStore.js");








var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var ModalStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function ModalStore() {
    var _this = this;

    _classCallCheck(this, ModalStore);

    _initializerDefineProperty(this, "placeModal", _descriptor, this);

    _initializerDefineProperty(this, "monthModal", _descriptor2, this);

    _initializerDefineProperty(this, "staffModal", _descriptor3, this);

    _initializerDefineProperty(this, "prestationModal", _descriptor4, this);

    _initializerDefineProperty(this, "confirmModal", _descriptor5, this);

    _initializerDefineProperty(this, "flashUserModal", _descriptor6, this);

    _initializerDefineProperty(this, "staffWay", _descriptor7, this);

    _initializerDefineProperty(this, "detailModal", _descriptor8, this);

    _initializerDefineProperty(this, "modal_content", _descriptor9, this);

    _initializerDefineProperty(this, "edit_roles_modal", _descriptor10, this);

    this.toggleEditRolesModal = function () {
      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this.edit_roles_modal = !_this.edit_roles_modal;
      });
    };
  }

  _createClass(ModalStore, [{
    key: "togglePlaceModal",
    value: function togglePlaceModal() {
      var _this2 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _ReservationApp_js_stores_PlaceStore__WEBPACK_IMPORTED_MODULE_8__["default"].loadPlaces();
        _this2.placeModal = !_this2.placeModal;
      });
    }
  }, {
    key: "toggleMonthModal",
    value: function toggleMonthModal() {
      var _this3 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this3.monthModal = !_this3.monthModal;
      });
    }
  }, {
    key: "toggleStaffModal",
    value: function toggleStaffModal() {
      var _this4 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this4.staffModal = !_this4.staffModal;
      });
    }
  }, {
    key: "togglePrestationModal",
    value: function togglePrestationModal() {
      var _this5 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this5.prestationModal = !_this5.prestationModal;
      });
    }
  }, {
    key: "toggleConfirmModal",
    value: function toggleConfirmModal() {
      var _this6 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this6.confirmModal = !_this6.confirmModal;
      });
    }
  }, {
    key: "toggleFlashUserModal",
    value: function toggleFlashUserModal() {
      var _this7 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this7.flashUserModal = !_this7.flashUserModal;
      });
    }
  }, {
    key: "toggleDetailModal",
    value: function toggleDetailModal() {
      var _this8 = this;

      Object(mobx__WEBPACK_IMPORTED_MODULE_7__["runInAction"])(function () {
        _this8.detailModal = !_this8.detailModal;
      });
    }
  }]);

  return ModalStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "placeModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "monthModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "staffModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "prestationModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "confirmModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "flashUserModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "staffWay", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "detailModal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "modal_content", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "edit_roles_modal", [mobx__WEBPACK_IMPORTED_MODULE_7__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
/* harmony default export */ __webpack_exports__["default"] = (new ModalStore());

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvUmVzZXJ2YXRpb25BcHAvanMvc3RvcmVzL0Vycm9yU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1Jlc2VydmF0aW9uQXBwL2pzL3N0b3Jlcy9QbGFjZVN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9SZXNlcnZhdGlvbkFwcC9qcy9zdG9yZXMvUHJlc3RhdGlvblN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9SZXNlcnZhdGlvbkFwcC9qcy9zdG9yZXMvU2xvdFN0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9SZXNlcnZhdGlvbkFwcC9qcy9zdG9yZXMvU3RhZmZTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvUmVzZXJ2YXRpb25BcHAvanMvc3RvcmVzL1VuYXZhaWxhYmlsaXR5U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0b3JlL0RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3RvcmUvTW9kYWxTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiRXJyb3JTdG9yZSIsInJ1bkluQWN0aW9uIiwiZXJyb3JzIiwib2JzZXJ2YWJsZSIsIlBsYWNlU3RvcmUiLCJzbG90U3RvcmUiLCJnZXRTbG90Iiwic2xvdElkIiwic2xvdCIsImF2YWlsYWJsZVRpbWUiLCJtb21lbnQiLCJlbmQiLCJ2YWx1ZU9mIiwicHJlc3RhdGlvblN0b3JlIiwiZ2V0VGltZSIsInBsYWNlcyIsImkiLCJzdGFydCIsInB1c2giLCJpZCIsInN0YWZmIiwiZmluZCIsInBsYWNlIiwicGFyc2VJbnQiLCJwcmVzdGF0aW9ucyIsInNlbGVjdGVkUHJlc3RhdGlvbnMiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJQcmVzdGF0aW9uU3RvcmUiLCJ3aW5kb3ciLCJmZXRjaCIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImF1dG9ydW4iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZXJyb3JTdG9yZSIsInVwZGF0ZUVycm9ycyIsImZpbHRlciIsInByZXN0YXRpb24iLCJzZWxlY3RlZCIsImxlbmd0aCIsImlzU2VsZWN0ZWQiLCJ0aW1lIiwibWFwIiwibWFrZV90aW1lIiwiaG91ciIsIm1pbnV0ZSIsIlNsb3RTdG9yZSIsInNsb3RzSWQiLCJ0eXBlIiwiZGF5Iiwic2l6ZSIsImdldFNpemUiLCJzbG90cyIsImRhdGVUaW1lU3RhcnQiLCJmb3JtYXQiLCJkYXRlU3RvcmUiLCJvcGVuZWQiLCJkYXRlVGltZUVuZCIsIm9ic2VydmUiLCJ1bmF2YWlsYWJpbGl0eVN0b3JlIiwiZCIsImRhdGUiLCJzdGFmZlN0b3JlIiwic3RhZmZTZWxlY3RlZCIsInVuYXZhaWxhYmlsaXRpZXMiLCJ1bmF2YWlsYWJpbGl0eSIsImFkZFNsb3QiLCJTdGFmZlN0b3JlIiwic3RhZmZzIiwic3RhZmZVcGRhdGUiLCJVbmF2YWlsYWJpbGl0eVN0b3JlIiwibm9Mb2FkZWQiLCJsb2FkVW5hdmFpbGFiaWxpdGllcyIsImxvYWRSZXNlcnZhdGlvbnMiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5Iiwic3RhcnRPZiIsImVuZE9mIiwib3JkZXJVbmF2YWlsYWJpbGl0aWVzIiwiZWx0Iiwic2xpY2UiLCJzb3J0IiwiYSIsImIiLCJEYXRlU3RvcmUiLCJhZGQiLCJzdWJ0cmFjdCIsIm1vbnRoIiwiTW9kYWxTdG9yZSIsInRvZ2dsZUVkaXRSb2xlc01vZGFsIiwiZWRpdF9yb2xlc19tb2RhbCIsInBsYWNlU3RvcmUiLCJsb2FkUGxhY2VzIiwicGxhY2VNb2RhbCIsIm1vbnRoTW9kYWwiLCJzdGFmZk1vZGFsIiwicHJlc3RhdGlvbk1vZGFsIiwiY29uZmlybU1vZGFsIiwiZmxhc2hVc2VyTW9kYWwiLCJkZXRhaWxNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiTWFuYWdlckFwcH5QbGFubmluZ0FwcH5SZXNlcnZhdGlvbkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCc7XG5cbmNsYXNzIEVycm9yU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBlcnJvcnMgPSAwXG5cbiAgdXBkYXRlRXJyb3JzICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzICsgMVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVycm9yU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tICdtb2J4J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgc2xvdFN0b3JlIGZyb20gJy4vU2xvdFN0b3JlJ1xuaW1wb3J0IHByZXN0YXRpb25TdG9yZSBmcm9tICcuL1ByZXN0YXRpb25TdG9yZSdcblxuY2xhc3MgUGxhY2VTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHBsYWNlID0gW11cblxuICBAb2JzZXJ2YWJsZSBwbGFjZXMgPSBbXVxuXG4gIEBvYnNlcnZhYmxlIHNsb3RJZCA9IDBcblxuICBsb2FkUGxhY2VzICgpIHtcbiAgICBjb25zdCB7IC4uLnNsb3QgfSA9IHNsb3RTdG9yZS5nZXRTbG90KHRoaXMuc2xvdElkKVxuICAgIGNvbnN0IGF2YWlsYWJsZVRpbWUgPSBtb21lbnQoc2xvdC5lbmQpLnZhbHVlT2YoKSAtIHByZXN0YXRpb25TdG9yZS5nZXRUaW1lKClcbiAgICB0aGlzLnBsYWNlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gbW9tZW50KHNsb3Quc3RhcnQpLnZhbHVlT2YoKTsgaSA8IGF2YWlsYWJsZVRpbWU7IGkgKz0gMzAwMDAwKSB7XG4gICAgICB0aGlzLnBsYWNlcy5wdXNoKHtcbiAgICAgICAgaWQ6IGksXG4gICAgICAgIHN0YXJ0OiBtb21lbnQoaSksXG4gICAgICAgIGVuZDogbW9tZW50KGkgKyBwcmVzdGF0aW9uU3RvcmUuZ2V0VGltZSgpKSxcbiAgICAgICAgc3RhZmY6IHNsb3Quc3RhZmZcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc2V0UGxhY2UgKGlkKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgY29uc3Qgey4uLnBsYWNlfSA9IHRoaXMucGxhY2VzLmZpbmQoKHBsYWNlKSA9PiBwYXJzZUludChwbGFjZS5pZCwgMTApID09PSBwYXJzZUludChpZCwgMTApKVxuICAgICAgcGxhY2UucHJlc3RhdGlvbnMgPSBwcmVzdGF0aW9uU3RvcmUuc2VsZWN0ZWRQcmVzdGF0aW9ucygpXG4gICAgICB0aGlzLnBsYWNlID0gcGxhY2VcblxuICAgIH0pXG4gIH1cblxuICBzZXRQbGFjZVdpdGhTdG9yYWdlICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnBsYWNlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwbGFjZScpKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYWNlU3RvcmUoKVxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24sIGF1dG9ydW4gfSBmcm9tICdtb2J4J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgZXJyb3JTdG9yZSBmcm9tICcuL0Vycm9yU3RvcmUnXG5cbmNsYXNzIFByZXN0YXRpb25TdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHByZXN0YXRpb25zID0gW11cblxuICBAb2JzZXJ2YWJsZSBpc1NlbGVjdGVkID0gZmFsc2VcblxuICBsb2FkQWN0aXZlUHJlc3RhdGlvbnMgKCkge1xuICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9wcmVzdGF0aW9ucy9hY3RpdmUnLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgYXV0b3J1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVzdGF0aW9ucyA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgZXJyb3JTdG9yZS51cGRhdGVFcnJvcnMoKVxuICAgICAgfSlcbiAgfVxuXG4gIHNlbGVjdGVkUHJlc3RhdGlvbnMgKCkge1xuICAgIHJldHVybiB0aGlzLnByZXN0YXRpb25zLmZpbHRlcigocHJlc3RhdGlvbikgPT4gcHJlc3RhdGlvbi5zZWxlY3RlZClcbiAgfVxuXG4gIGxvYWRTZWxlY3RlZCAoKSB7XG4gICAgYXV0b3J1bigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFByZXN0YXRpb25zKCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVzdGF0aW9uVXBkYXRlIChpZCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMucHJlc3RhdGlvbnMuZmluZCgocHJlc3RhdGlvbikgPT4ge1xuICAgICAgICBpZiAocHJlc3RhdGlvbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBpZiAocHJlc3RhdGlvbi5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkUHJlc3RhdGlvbnMoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBwcmVzdGF0aW9uLnNlbGVjdGVkID0gIXByZXN0YXRpb24uc2VsZWN0ZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKCFwcmVzdGF0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBwcmVzdGF0aW9uLnNlbGVjdGVkID0gIXByZXN0YXRpb24uc2VsZWN0ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldFRpbWUgKCkge1xuICAgIGxldCB0aW1lID0gMFxuICAgIHRoaXMucHJlc3RhdGlvbnMubWFwKChwcmVzdGF0aW9uKSA9PiB7XG4gICAgICBpZiAocHJlc3RhdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICB0aW1lID0gdGltZSArIChtb21lbnQocHJlc3RhdGlvbi5tYWtlX3RpbWUpLmhvdXIoKSAqIDM2MDAwMDApICsgKG1vbWVudChwcmVzdGF0aW9uLm1ha2VfdGltZSkubWludXRlKCkgKiA2MDAwMCkgLSA2MDAwMFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRpbWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJlc3RhdGlvblN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIGF1dG9ydW4sIG9ic2VydmUgfSBmcm9tICdtb2J4J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgZGF0ZVN0b3JlIGZyb20gJy4uLy4uLy4uL3N0b3JlL0RhdGVTdG9yZSdcbmltcG9ydCBzdGFmZlN0b3JlIGZyb20gJy4vU3RhZmZTdG9yZSdcbmltcG9ydCB1bmF2YWlsYWJpbGl0eVN0b3JlIGZyb20gJy4vVW5hdmFpbGFiaWxpdHlTdG9yZSdcblxuY2xhc3MgU2xvdFN0b3JlIHtcbiAgQG9ic2VydmFibGUgc2xvdHMgPSBbXVxuXG4gIHNsb3RzSWQgPSAwXG5cbiAgYWRkU2xvdCAodHlwZSwgc3RhZmYsIGRheSwgc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemUoc3RhcnQsIGVuZClcbiAgICB0aGlzLnNsb3RzSWQgPSB0aGlzLnNsb3RzSWQgKyAxXG4gICAgY29uc3QgaWQgPSB0aGlzLnNsb3RzSWRcbiAgICB0aGlzLnNsb3RzLnB1c2goe1xuICAgICAgaWQsXG4gICAgICB0eXBlLFxuICAgICAgc3RhZmYsXG4gICAgICBkYXksXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICAgIHNpemVcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2l6ZSAoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IGRhdGVUaW1lU3RhcnQgPSBtb21lbnQobW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKSArICcgJyArIGRhdGVTdG9yZS5vcGVuZWQuc3RhcnQpLnZhbHVlT2YoKVxuICAgIGNvbnN0IGRhdGVUaW1lRW5kID0gbW9tZW50KG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsgJyAnICsgZGF0ZVN0b3JlLm9wZW5lZC5lbmQpLnZhbHVlT2YoKVxuXG4gICAgcmV0dXJuICgobW9tZW50KGVuZCkudmFsdWVPZigpIC0gbW9tZW50KHN0YXJ0KS52YWx1ZU9mKCkpICogMTAwKSAvIChkYXRlVGltZUVuZCAtIGRhdGVUaW1lU3RhcnQpXG4gIH1cblxuICBnZXRTbG90IChpZCkge1xuICAgIHJldHVybiB0aGlzLnNsb3RzLmZpbmQoKHNsb3QpID0+IHNsb3QuaWQgPT09IHBhcnNlSW50KGlkLCAxMCkpXG4gIH1cblxuICBsb2FkU2xvdHMgKCkge1xuICAgIGF1dG9ydW4oKCkgPT4ge1xuICAgICAgb2JzZXJ2ZSh1bmF2YWlsYWJpbGl0eVN0b3JlLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2xvdHMgPSBbXVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgZCA9IDE7IGQgPCA3OyBkICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBkYXkgPSBkYXRlU3RvcmUuZGF0ZS5kYXkoZCkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICBzdGFmZlN0b3JlLnN0YWZmU2VsZWN0ZWQoKS5tYXAoKHN0YWZmKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0ZVRpbWVTdGFydCA9IG1vbWVudChkYXkgKyAnICcgKyBkYXRlU3RvcmUub3BlbmVkLnN0YXJ0KS5mb3JtYXQoKVxuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWVFbmQgPSBtb21lbnQoZGF5ICsgJyAnICsgZGF0ZVN0b3JlLm9wZW5lZC5lbmQpLmZvcm1hdCgpXG4gICAgICAgICAgICAvLyBpZiBubyB1bmF2YWlsYWJpbGl0aWVzIHNldCBzdGFmZiBhdmFpbGFibGUgZm9yIGFsbCBhdCBkYXlcbiAgICAgICAgICAgIGlmICh1bmF2YWlsYWJpbGl0eVN0b3JlLnVuYXZhaWxhYmlsaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAvLyBzdGFydCB1bmF2YWlsYWJpbGl0aWVzIGxvb3AgZm9yIHN0YWZmXG4gICAgICAgICAgICAgIHVuYXZhaWxhYmlsaXR5U3RvcmUudW5hdmFpbGFiaWxpdGllcy5maWx0ZXIoKHVuYXZhaWxhYmlsaXR5KSA9PiB1bmF2YWlsYWJpbGl0eS5zdGFmZiA9PT0gc3RhZmYuaWQpLm1hcCgodW5hdmFpbGFiaWxpdHkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB1bmF2YWlsYWJpbGl0eSBzdGFydCA8IGVuZCAmJiBnU3RhcnQgPSBnRW5kXG4gICAgICAgICAgICAgICAgaWYgKG1vbWVudCh1bmF2YWlsYWJpbGl0eS5zdGFydCkuZm9ybWF0KCkgPCBtb21lbnQodW5hdmFpbGFiaWxpdHkuZW5kKS5mb3JtYXQoKSkge1xuICAgICAgICAgICAgICAgICAgLy8gdW5hdmFpbGFiaWxpdHkgc3RhcnQgPD0gZ1N0YXJ0ICYmIHVuYXZhaWxhYmlsaXR5IGVuZCA+IGdTdGFydFxuICAgICAgICAgICAgICAgICAgaWYgKG1vbWVudCh1bmF2YWlsYWJpbGl0eS5zdGFydCkuZm9ybWF0KCkgPD0gZGF0ZVRpbWVTdGFydCAmJiBtb21lbnQodW5hdmFpbGFiaWxpdHkuZW5kKS5mb3JtYXQoKSA+IGRhdGVUaW1lU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5hdmFpbGFiaWxpdHkgZW5kID4gZ0VuZFxuICAgICAgICAgICAgICAgICAgICBpZiAobW9tZW50KHVuYXZhaWxhYmlsaXR5LmVuZCkuZm9ybWF0KCkgPj0gZGF0ZVRpbWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNsb3QoJzAnLCBzdGFmZiwgZCwgZGF0ZVRpbWVTdGFydCwgZGF0ZVRpbWVFbmQpXG4gICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWVTdGFydCA9IGRhdGVUaW1lRW5kXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTbG90KCcwJywgc3RhZmYsIGQsIGRhdGVUaW1lU3RhcnQsIG1vbWVudCh1bmF2YWlsYWJpbGl0eS5lbmQpLmZvcm1hdCgpKVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lU3RhcnQgPSBtb21lbnQodW5hdmFpbGFiaWxpdHkuZW5kKS5mb3JtYXQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBnU3RhcnQgPCBnRW5kICYmIHVuYXZhaWxhYmlsaXR5IGVuZCA+IGdTdGFydFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlVGltZVN0YXJ0IDwgZGF0ZVRpbWVFbmQgJiYgbW9tZW50KHVuYXZhaWxhYmlsaXR5LmVuZCkuZm9ybWF0KCkgPiBkYXRlVGltZVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuYXZhaWxhYmlsaXR5IHN0YXJ0ID4gZ0VuZFxuICAgICAgICAgICAgICAgICAgICBpZiAobW9tZW50KHVuYXZhaWxhYmlsaXR5LnN0YXJ0KS5mb3JtYXQoKSA+IGRhdGVUaW1lRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTbG90KCcxJywgc3RhZmYsIGQsIGRhdGVUaW1lU3RhcnQsIGRhdGVUaW1lRW5kKVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lU3RhcnQgPSBkYXRlVGltZUVuZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2xvdCgnMScsIHN0YWZmLCBkLCBkYXRlVGltZVN0YXJ0LCBtb21lbnQodW5hdmFpbGFiaWxpdHkuc3RhcnQpLmZvcm1hdCgpKVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lU3RhcnQgPSBtb21lbnQodW5hdmFpbGFiaWxpdHkuc3RhcnQpLmZvcm1hdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5hdmFpbGFiaWxpdHkgZW5kID4gZ0VuZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZVRpbWVTdGFydCA8IGRhdGVUaW1lRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbWVudCh1bmF2YWlsYWJpbGl0eS5lbmQpLmZvcm1hdCgpID4gZGF0ZVRpbWVFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2xvdCgnMCcsIHN0YWZmLCBkLCBtb21lbnQodW5hdmFpbGFiaWxpdHkuc3RhcnQpLmZvcm1hdCgpLCBkYXRlVGltZUVuZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lU3RhcnQgPSBkYXRlVGltZUVuZFxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNsb3QoJzAnLCBzdGFmZiwgZCwgbW9tZW50KHVuYXZhaWxhYmlsaXR5LnN0YXJ0KS5mb3JtYXQoKSwgbW9tZW50KHVuYXZhaWxhYmlsaXR5LmVuZCkuZm9ybWF0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZVN0YXJ0ID0gbW9tZW50KHVuYXZhaWxhYmlsaXR5LmVuZCkuZm9ybWF0KClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRlVGltZVN0YXJ0ICE9PSBkYXRlVGltZUVuZCkge1xuICAgICAgICAgICAgICB0aGlzLmFkZFNsb3QoJzEnLCBzdGFmZiwgZCwgZGF0ZVRpbWVTdGFydCwgZGF0ZVRpbWVFbmQpXG4gICAgICAgICAgICAgIGRhdGVUaW1lU3RhcnQgPSBkYXRlVGltZUVuZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2xvdFN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uLCBhdXRvcnVuIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBlcnJvclN0b3JlIGZyb20gJy4vRXJyb3JTdG9yZSdcblxuY2xhc3MgU3RhZmZTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHN0YWZmcyA9IFtdXG5cbiAgQG9ic2VydmFibGUgaXNTZWxlY3RlZCA9IHRydWVcblxuICBsb2FkU3RhZmZzICgpIHtcbiAgICB3aW5kb3cuZmV0Y2goJy9hcGkvc3RhZmZzJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGF1dG9ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhZmZzID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICBlcnJvclN0b3JlLnVwZGF0ZUVycm9ycygpXG4gICAgICB9KVxuICB9XG5cbiAgbG9hZFNlbGVjdGVkICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGFmZlNlbGVjdGVkKCkubGVuZ3RoICE9PSB0aGlzLnN0YWZmcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhZmZVcGRhdGUgKGlkKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5zdGFmZnMuZmluZCgoc3RhZmYpID0+IHtcbiAgICAgICAgaWYgKHN0YWZmLmlkID09PSBpZCkge1xuICAgICAgICAgIGlmIChzdGFmZi5zZWxlY3RlZCAmJiB0aGlzLnN0YWZmU2VsZWN0ZWQoKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzdGFmZi5zZWxlY3RlZCA9ICFzdGFmZi5zZWxlY3RlZFxuICAgICAgICAgIH0gZWxzZSBpZiAoIXN0YWZmLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBzdGFmZi5zZWxlY3RlZCA9ICFzdGFmZi5zZWxlY3RlZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlQWxsICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YWZmcy5maWx0ZXIoKHN0YWZmKSA9PiBzdGFmZi5zZWxlY3RlZCA9PT0gZmFsc2UpLm1hcCgoc3RhZmYpID0+IHtcbiAgICAgICAgdGhpcy5zdGFmZlVwZGF0ZShzdGFmZi5pZClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YWZmU2VsZWN0ZWQgKCkge1xuICAgIHJldHVybiB0aGlzLnN0YWZmcy5maWx0ZXIoKHN0YWZmKSA9PiBzdGFmZi5zZWxlY3RlZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhZmZTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhdXRvcnVuLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBkYXRlU3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvRGF0ZVN0b3JlJ1xuaW1wb3J0IGVycm9yU3RvcmUgZnJvbSAnLi9FcnJvclN0b3JlJ1xuXG5jbGFzcyBVbmF2YWlsYWJpbGl0eVN0b3JlIHtcbiAgQG9ic2VydmFibGUgdW5hdmFpbGFiaWxpdGllcyA9IFtdXG5cbiAgbm9Mb2FkZWQgPSBbXVxuXG4gIGxvYWQgKCkge1xuICAgIGF1dG9ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkVW5hdmFpbGFiaWxpdGllcygpXG4gICAgICB0aGlzLmxvYWRSZXNlcnZhdGlvbnMoKVxuICAgIH0pXG4gIH1cblxuICBsb2FkVW5hdmFpbGFiaWxpdGllcyAoKSB7XG4gICAgd2luZG93LmZldGNoKCcvYXBpL3VuYXZhaWxhYmlsaXRpZXMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc3RhcnQ6IGRhdGVTdG9yZS5kYXRlLmRheSgxKS5zdGFydE9mKCdkYXknKS5mb3JtYXQoKSxcbiAgICAgICAgZW5kOiBkYXRlU3RvcmUuZGF0ZS5kYXkoNikuZW5kT2YoJ2RheScpLmZvcm1hdCgpXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9yZGVyVW5hdmFpbGFiaWxpdGllcyhKU09OLnBhcnNlKGRhdGEpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgbG9hZFVuYXZhaWxhYmlsaXRpZXMgOiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICAgICAgZXJyb3JTdG9yZS51cGRhdGVFcnJvcnMoKVxuICAgICAgfSlcbiAgfVxuXG4gIGxvYWRSZXNlcnZhdGlvbnMgKCkge1xuICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9yZXNlcnZhdGlvbnMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc3RhcnQ6IGRhdGVTdG9yZS5kYXRlLmRheSgxKS5zdGFydE9mKCdkYXknKS5mb3JtYXQoKSxcbiAgICAgICAgZW5kOiBkYXRlU3RvcmUuZGF0ZS5kYXkoNikuZW5kT2YoJ2RheScpLmZvcm1hdCgpXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm9yZGVyVW5hdmFpbGFiaWxpdGllcyhKU09OLnBhcnNlKGRhdGEpKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgbG9hZFJlc2VydmF0aW9ucyA6ICR7ZXJyb3IubWVzc2FnZX1gKVxuICAgICAgICBlcnJvclN0b3JlLnVwZGF0ZUVycm9ycygpXG4gICAgICB9KVxuICB9XG5cbiAgb3JkZXJVbmF2YWlsYWJpbGl0aWVzIChkYXRhKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgZGF0YS5tYXAoKGVsdCkgPT4ge1xuICAgICAgICB0aGlzLm5vTG9hZGVkLnB1c2goZWx0KVxuICAgICAgfSlcbiAgICAgIHRoaXMudW5hdmFpbGFiaWxpdGllcyA9IHRoaXMubm9Mb2FkZWQuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBtb21lbnQoYS5zdGFydCkudmFsdWVPZigpIC0gbW9tZW50KGIuc3RhcnQpLnZhbHVlT2YoKSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbmF2YWlsYWJpbGl0eVN0b3JlKClcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSAnbW9ieCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5jbGFzcyBEYXRlU3RvcmUge1xuICAgIEBvYnNlcnZhYmxlIGRhdGUgPSBtb21lbnQoKVxuXG4gICAgQG9ic2VydmFibGUgb3BlbmVkID0ge1xuICAgICAgJ3N0YXJ0JzogJzEwOjAwOjAwJyxcbiAgICAgICdlbmQnOiAnMTU6MDA6MDAnXG4gICAgfVxuXG4gICAgbG9hZE9wZW5lZCAoKSB7XG4gICAgICBydW5JbkFjdGlvbiAoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvb3BlbmVkJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBsb2FkT3BlbmVkIDogJHtlcnJvci5tZXNzYWdlfWApXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkV2VlayAoKSB7XG4gICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLmFkZCg3LCdkJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVtb3ZlV2VlayAoKSB7XG4gICAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCh0aGlzLmRhdGUpLnN1YnRyYWN0KDcsJ2QnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzZWxlY3RNb250aCAobW9udGgpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCgpLm1vbnRoKG1vbnRoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IERhdGVTdG9yZSgpXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5pbXBvcnQgcGxhY2VTdG9yZSBmcm9tICcuLi9SZXNlcnZhdGlvbkFwcC9qcy9zdG9yZXMvUGxhY2VTdG9yZSdcblxuY2xhc3MgTW9kYWxTdG9yZSB7XG4gIEBvYnNlcnZhYmxlIHBsYWNlTW9kYWwgPSBmYWxzZVxuXG4gIEBvYnNlcnZhYmxlIG1vbnRoTW9kYWwgPSBmYWxzZVxuXG4gIEBvYnNlcnZhYmxlIHN0YWZmTW9kYWwgPSBmYWxzZVxuXG4gIEBvYnNlcnZhYmxlIHByZXN0YXRpb25Nb2RhbCA9IHRydWVcblxuICBAb2JzZXJ2YWJsZSBjb25maXJtTW9kYWwgPSBmYWxzZVxuXG4gIEBvYnNlcnZhYmxlIGZsYXNoVXNlck1vZGFsID0gZmFsc2VcblxuICBAb2JzZXJ2YWJsZSBzdGFmZldheSA9IHRydWVcblxuICBAb2JzZXJ2YWJsZSBkZXRhaWxNb2RhbCA9IGZhbHNlXG5cbiAgQG9ic2VydmFibGUgbW9kYWxfY29udGVudCA9ICcnXG5cbiAgQG9ic2VydmFibGUgZWRpdF9yb2xlc19tb2RhbCA9IGZhbHNlXG5cbiAgdG9nZ2xlUGxhY2VNb2RhbCAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgcGxhY2VTdG9yZS5sb2FkUGxhY2VzKClcbiAgICAgIHRoaXMucGxhY2VNb2RhbCA9ICF0aGlzLnBsYWNlTW9kYWxcbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlTW9udGhNb2RhbCAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5tb250aE1vZGFsID0gIXRoaXMubW9udGhNb2RhbFxuICAgIH0pXG4gIH1cblxuICB0b2dnbGVTdGFmZk1vZGFsICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnN0YWZmTW9kYWwgPSAhdGhpcy5zdGFmZk1vZGFsXG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZVByZXN0YXRpb25Nb2RhbCAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5wcmVzdGF0aW9uTW9kYWwgPSAhdGhpcy5wcmVzdGF0aW9uTW9kYWxcbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlQ29uZmlybU1vZGFsICgpIHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9ICF0aGlzLmNvbmZpcm1Nb2RhbFxuICAgIH0pXG4gIH1cblxuICB0b2dnbGVGbGFzaFVzZXJNb2RhbCAoKSB7XG4gICAgcnVuSW5BY3Rpb24oKCkgPT4ge1xuICAgICAgdGhpcy5mbGFzaFVzZXJNb2RhbCA9ICF0aGlzLmZsYXNoVXNlck1vZGFsXG4gICAgfSlcbiAgfVxuICBcbiAgdG9nZ2xlRGV0YWlsTW9kYWwgKCkge1xuICAgIHJ1bkluQWN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGV0YWlsTW9kYWwgPSAhdGhpcy5kZXRhaWxNb2RhbFxuICAgIH0pXG4gIH1cblxuICB0b2dnbGVFZGl0Um9sZXNNb2RhbCA9ICgpID0+IHtcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRfcm9sZXNfbW9kYWwgPSAhdGhpcy5lZGl0X3JvbGVzX21vZGFsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kYWxTdG9yZSgpXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==