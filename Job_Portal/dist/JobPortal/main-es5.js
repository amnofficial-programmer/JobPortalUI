(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+yIM":
    /*!************************************************************!*\
      !*** ./src/app/demo-component/demo-component.component.ts ***!
      \************************************************************/

    /*! exports provided: DemoComponentComponent */

    /***/
    function yIM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoComponentComponent", function () {
        return DemoComponentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DemoComponentComponent_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.college);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r2.collegeName);
        }
      }

      function DemoComponentComponent_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r3.abbrev);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r3.abbrev, " ");
        }
      }

      var DemoComponentComponent = /*#__PURE__*/function () {
        function DemoComponentComponent() {
          _classCallCheck(this, DemoComponentComponent);

          this.states = [{
            name: 'Arizona',
            abbrev: 'AZ'
          }, {
            name: 'California',
            abbrev: 'CA'
          }, {
            name: 'Colorado',
            abbrev: 'CO'
          }, {
            name: 'New York',
            abbrev: 'NY'
          }, {
            name: 'Pennsylvania',
            abbrev: 'PA'
          }];
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.states[3])
          });
        }

        _createClass(DemoComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.collegesList = [{
              collegeName: 'My School 1'
            }, {
              collegeName: 'My School 2'
            }];
            this.demoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              college: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            console.log(this.demoForm.value);
          }
        }]);

        return DemoComponentComponent;
      }();

      DemoComponentComponent.ɵfac = function DemoComponentComponent_Factory(t) {
        return new (t || DemoComponentComponent)();
      };

      DemoComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DemoComponentComponent,
        selectors: [["app-demo-component"]],
        decls: 14,
        vars: 7,
        consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "text"], ["formControlName", "college", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "formGroup"], ["formControlName", "state"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]],
        template: function DemoComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DemoComponentComponent_Template_form_ngSubmit_0_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemoComponentComponent_option_5_Template, 2, 2, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DemoComponentComponent_option_10_Template, 2, 2, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.demoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collegesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, ctx.form.value), "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-demo-component',
            templateUrl: './demo-component.component.html',
            styleUrls: ['./demo-component.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/1LO":
    /*!********************************************************!*\
      !*** ./src/app/pages/chat-home/chat-home.component.ts ***!
      \********************************************************/

    /*! exports provided: ChatHomeComponent */

    /***/
    function LO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatHomeComponent", function () {
        return ChatHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../chat-client/chat-client.component */
      "vYcK");

      var ChatHomeComponent = /*#__PURE__*/function () {
        function ChatHomeComponent() {
          _classCallCheck(this, ChatHomeComponent);
        }

        _createClass(ChatHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatHomeComponent;
      }();

      ChatHomeComponent.ɵfac = function ChatHomeComponent_Factory(t) {
        return new (t || ChatHomeComponent)();
      };

      ChatHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatHomeComponent,
        selectors: [["app-chat-home"]],
        decls: 355,
        vars: 0,
        consts: [[1, "section-full", "browse-job-find"], [1, "container"], [1, "find-job-bx"], [1, "content-block", "my-5"], [1, "section-full", "browse-job", "p-b50"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12"], [1, "job-bx-title", "clearfix"], [1, ""], [1, "select-title"], [1, "bs-select-hidden"], [1, "post-job-bx"], [1, "post-bx"], [1, "d-flex", "m-b30"], [1, "job-post-company"], ["href", "javascript:void(0);"], ["alt", "", "src", "./assets/images/logo/icon1.png"], [1, "job-post-info"], ["href", ""], [1, "fa", "fa-map-marker"], [1, "fa", "fa-bookmark-o"], [1, "fa", "fa-clock-o"], [1, "my-2"], [1, "fa", "fa-graduation-cap"], [1, "fa", "fa-lock"], [1, "fa", "fa-tag"], [1, "d-flex"], [1, "job-time", "mr-auto"], ["href", "javascript:void(0);", 1, "mr-1"], ["href", "javascript:void(0);", 1, "ml-1"], [1, "salary-bx"], [1, "like-btn"], ["type", "checkbox"], [1, "checkmark"], [1, "pagination-bx", "m-t30"], [1, "pagination"], [1, "previous"], [1, "ti-arrow-left"], [1, "active"], [1, "next"], [1, "ti-arrow-right"]],
        template: function ChatHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sort By");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Functional Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Web Designing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Java");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "React");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fresher");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Less than 1 Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1+ Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2+ Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3+ Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Expected Salary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "10k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "10-50k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "50k-1L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "1+ L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Qualification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Diploma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Graduate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Post Graduate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Course");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "B.Tech.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "B.C.A.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "M.Tech.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "M.C.A.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Sacramento, California ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Full Time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Published 11 months ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Software Engineering - IIT/NIT/BITS - B.Tech/MBA - CSE/EE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 1 - 3 Years | Rs 10 - 20 LPA | Pune India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " #Product Management # Hooked # User-Centric # Mobile Internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Sacramento, California ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Full Time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Published 11 months ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Software Engineering - IIT/NIT/BITS - B.Tech/MBA - CSE/EE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " 1 - 3 Years | Rs 10 - 20 LPA | Pune India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " #Product Management # Hooked # User-Centric # Mobile Internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Sacramento, California ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Full Time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Published 11 months ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Software Engineering - IIT/NIT/BITS - B.Tech/MBA - CSE/EE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " 1 - 3 Years | Rs 10 - 20 LPA | Pune India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " #Product Management # Hooked # User-Centric # Mobile Internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Sacramento, California ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Full Time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Published 11 months ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Software Engineering - IIT/NIT/BITS - B.Tech/MBA - CSE/EE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " 1 - 3 Years | Rs 10 - 20 LPA | Pune India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " #Product Management # Hooked # User-Centric # Mobile Internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Sacramento, California ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Full Time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " Published 11 months ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Software Engineering - IIT/NIT/BITS - B.Tech/MBA - CSE/EE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " 1 - 3 Years | Rs 10 - 20 LPA | Pune India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " #Product Management # Hooked # User-Centric # Mobile Internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " Sacramento, California ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Full Time ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Published 11 months ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Software Engineering - IIT/NIT/BITS - B.Tech/MBA - CSE/EE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " 1 - 3 Years | Rs 10 - 20 LPA | Pune India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " #Product Management # Hooked # User-Centric # Mobile Internet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "ul", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, " Prev");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "app-chat-client");
          }
        },
        directives: [_common_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_3__["ChatClientComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWhvbWUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatHomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-home',
            templateUrl: './chat-home.component.html',
            styleUrls: ['./chat-home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Gajanan\Personal_pro\git\JobPortalUI\Job_Portal\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0UPu":
    /*!****************************!*\
      !*** ./src/app/api-url.ts ***!
      \****************************/

    /*! exports provided: Constants */

    /***/
    function UPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Constants", function () {
        return Constants;
      });

      var Constants = function Constants() {
        _classCallCheck(this, Constants);
      };

      Constants.URL = {
        HOST_URL: 'http://macraxuserapiapp-env.eba-e7h2xmg2.ap-south-1.elasticbeanstalk.com/macrax/',
        // HOST_URL:'http://localhost:8090/macrax/',
        User_Singup: 'auth/signup',
        Login: 'auth/authenticate',
        Job_Seeker_Add: 'user/add/jobSeeker',
        College: 'user/colleges',
        Degree: 'user/degrees',
        Department: 'user/departments',
        Experience: 'user/experience',
        JobLocation: 'user/job/location',
        Functional_Area: 'user/functionalAreas',
        Salary_Range: 'user/salaryRange',
        Skills: 'user/skills',
        Recruiter: 'user/recruiter/onboarding',
        Upload_Jd_File: 'uplaod/jd/doc',
        Upload_Verification_Doc: 'uplaod/verification/doc',
        Upload_Jd_Video: 'uplaod/jd/video',
        GetRecruiters: 'auth/users?role=',
        GetJobSeekers: 'auth/users?role='
      };
      Constants.Roles = {
        Job_Seeker: '0',
        Recuriter: '1',
        Admin: '2'
      };
      /***/
    },

    /***/
    1:
    /*!******************************!*\
      !*** min-document (ignored) ***!
      \******************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1487":
    /*!************************************************!*\
      !*** ./src/app/services/job-seeker.service.ts ***!
      \************************************************/

    /*! exports provided: JobSeekerService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobSeekerService", function () {
        return JobSeekerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-url */
      "0UPu"); // Angular
      // Models


      var JobSeekerService = /*#__PURE__*/function () {
        function JobSeekerService(http) {
          _classCallCheck(this, JobSeekerService);

          this.http = http;
          this.token = localStorage.getItem('macrax-token');
        }

        _createClass(JobSeekerService, [{
          key: "getHTTPHeaders",
          value: function getHTTPHeaders() {
            var result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            result = result.set('Content-Type', 'application/json');
            result = result.set('Authorization', 'Bearer ' + this.token);
            return result;
          }
        }, {
          key: "createJobSeekerProfile",
          value: function createJobSeekerProfile(jobSeeker) {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Job_Seeker_Add, jobSeeker, {
              headers: httpHeaders
            });
          } //get all Read
          // READ

        }, {
          key: "getAllJobSeekers",
          value: function getAllJobSeekers(role) {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.GetJobSeekers + role, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllColleges",
          value: function getAllColleges() {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.College, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllDegrees",
          value: function getAllDegrees() {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Degree, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllDepartments",
          value: function getAllDepartments(id) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('degreeId', id.toString());
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Department, {
              headers: httpHeaders,
              params: httpParams
            });
          }
        }, {
          key: "getAllExperience",
          value: function getAllExperience() {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Experience, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllJobLocation",
          value: function getAllJobLocation() {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.JobLocation, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllFunctionalAreas",
          value: function getAllFunctionalAreas() {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Functional_Area, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllSalaryRanges",
          value: function getAllSalaryRanges() {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Salary_Range, {
              headers: httpHeaders
            });
          }
        }, {
          key: "getAllSkills",
          value: function getAllSkills(ids) {
            debugger; // const queryParams: any = {};
            // queryParams.myArray = JSON.stringify(ids);
            // const httpParams =new HttpParams()
            // .set('functionalAreaId',queryParams )
            // const httpHeaders = this.getHTTPHeaders();
            // return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Skills,{   headers: httpHeaders,params:httpParams});

            var httpHeaders = this.getHTTPHeaders();
            return this.http.put(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Skills, ids, {
              headers: httpHeaders
            });
          }
        }]);

        return JobSeekerService;
      }();

      JobSeekerService.ɵfac = function JobSeekerService_Factory(t) {
        return new (t || JobSeekerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      JobSeekerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JobSeekerService,
        factory: JobSeekerService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobSeekerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chat-client/chat-client.component */
      "vYcK");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isLoggedInUser",
          value: function isLoggedInUser() {//localStorage.setItem('macrax-emailId',responseObj.userName);
            //localStorage.setItem('macrax-password',this.loginFormJobSeeker.value.password);
            //const userName = localStorage.getItem('macrax-emailId');
            //const password = localStorage.getItem('macrax-password');
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 535,
        vars: 0,
        consts: [[1, "section-full", "content-inner-2", "bg-light"], [1, "container"], [1, "row"], [1, "col-md-6", "m-b30"], [1, "p-a30", "border", "m-b30", "contact-area", "border-1", "radius-sm", "bg-white"], [1, "m-b10", "text-primary"], [1, "no-margin"], [1, "icon-bx-wraper", "left", "m-b10", "d-flex", "justify-content-start", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-2x", "fa-pull-left", "fa-border", "text-primary"], [1, "section-full", "job-categories", "content-inner-2", "bg-white"], [1, "section-head", "text-center"], [1, "m-b5"], [1, "fw4"], [1, "row", "sp20"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "icon-bx-wraper"], [1, "icon-content"], [1, "icon-md", "text-primary", "m-b20"], [1, "ti-location-pin"], ["href", "company-manage-job.html", 1, "dez-tilte"], [1, "m-a0"], [1, "rotate-icon"], [1, "ti-wand"], [1, "ti-wallet"], [1, "ti-cloud-up"], [1, "ti-bar-chart"], [1, "ti-tablet"], [1, "ti-camera"], [1, "ti-panel"], [1, "col-lg-12", "text-center", "m-t30"], [1, "site-button", "radius-xl"], [1, "section-full", "content-inner-2", "call-to-action", "overlay-black-dark", "text-white", "text-center", "bg-img-fix", 2, "background-image", "url(./assets/images/background/bg4.jpg)"], [1, "col-lg-12"], [1, "m-b10"], [1, "m-b0"], ["href", "register-2.html", 1, "site-button", "m-t20", "outline", "outline-2", "radius-xl"], [1, "section-full", "bg-white", "content-inner-2"], [1, "d-flex", "job-title-bx", "section-head"], [1, "mr-auto"], [1, "fw4", "m-b0"], [1, "align-self-end"], ["href", "error-404.html", 1, "site-button", "button-sm"], [1, "fa", "fa-long-arrow-right"], [1, "col-lg-9"], [1, "post-job-bx", "browse-job"], [1, "post-bx"], [1, "d-flex", "m-b30"], [1, "job-post-company"], ["alt", "", "src", "./assets/images/logo/icon1.png"], [1, "job-post-info"], ["href", "job-detail.html"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-bookmark-o"], [1, "fa", "fa-clock-o"], [1, "d-flex"], [1, "job-time", "mr-auto"], ["href", "javascript:void(0);"], [1, "salary-bx"], [1, "like-btn"], ["type", "checkbox"], [1, "checkmark"], [1, "m-t30"], ["href", "javascript:void(0);", 1, "site-button", "button-sm", "mr-auto"], [1, "ti-arrow-left"], ["href", "javascript:void(0);", 1, "site-button", "button-sm"], [1, "ti-arrow-right"], [1, "col-lg-3"], [1, "sticky-top"], [1, "candidates-are-sys", "m-b30"], [1, "candidates-bx"], [1, "testimonial-pic", "radius"], ["src", "./assets/images/testimonials/pic3.jpg", "alt", "", "width", "100", "height", "100"], [1, "testimonial-text"], [1, "testimonial-detail"], [1, "testimonial-name"], [1, "testimonial-position"], [1, "quote-bx"], [1, "quote-info"], ["href", "register.html", 1, "site-button"], [1, "section-full", "p-tb70", "overlay-black-dark", "text-white", "text-center", "bg-img-fix", 2, "background-image", "url(./assets/images/background/bg4.jpg)"], [1, "section-head", "text-center", "text-white"], [1, "blog-carousel-center", "owl-carousel", "owl-none"], [1, "item"], [1, "testimonial-5"], [1, "testimonial-detail", "clearfix"], [1, "testimonial-pic", "radius", "shadow"], ["src", "./assets/images/testimonials/pic1.jpg", "width", "100", "height", "100", "alt", ""], ["src", "./assets/images/testimonials/pic2.jpg", "width", "100", "height", "100", "alt", ""], ["src", "./assets/images/testimonials/pic3.jpg", "width", "100", "height", "100", "alt", ""], [1, "section-full", "content-inner-2", "overlay-white-middle"], [1, "section-head", "text-black", "text-center"], [1, "text-uppercase", "m-b0"], [1, "blog-carousel", "owl-carousel", "owl-btn-center-lr", "owl-btn-3", "owl-theme", "owl-btn-center-lr", "owl-btn-1"], [1, "blog-post", "blog-grid", "blog-style-1"], [1, "dez-post-media", "dez-img-effect", "radius-sm"], ["href", "blog-details.html"], ["src", "./assets/images/blog/grid/pic4.jpg", "alt", ""], [1, "dez-info"], [1, "dez-post-meta"], [1, "d-flex", "align-items-center"], [1, "post-date"], [1, "fa", "fa-calendar"], [1, "post-comment"], [1, "fa", "fa-comments-o"], ["href", "#"], [1, "dez-post-title"], [1, "post-title", "font-20"], [1, "dez-post-text"], [1, "dez-post-readmore", "blog-share"], ["href", "blog-details.html", "title", "READ MORE", "rel", "bookmark", 1, "site-button-link"], [1, "fw6"], ["src", "./assets/images/blog/grid/pic3.jpg", "alt", ""], ["src", "./assets/images/blog/grid/pic2.jpg", "alt", ""], ["src", "./assets/images/blog/grid/pic1.jpg", "alt", ""]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CORE VALUES FOR JOB-SEEKERS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Instant Jobs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Only Verified Jobs and Company ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Video Job Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Direct Chat with Verified Recruiter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CORE VALUES FOR RECRUITERS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Instant Hiring ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Only Verified Profiles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Only IIT, NIT, BITS, IIIT and DTU ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Video Resume ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Popular Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "20+ Catetories work wating for you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Design, Art & Multimedia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Education Training");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Accounting / Finance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Human Resource");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Telecommunications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Restaurant / Food Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Construction / Facilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Health");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "198 Open Positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "All Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h2", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Make a Difference with Your Online Resume!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Lorem Ipsum is simply dummy text of the printing and typesetting industry...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Create an Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Recent Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h6", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "20+ Recently Added Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Browse All Jobs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "ul", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Sacramento, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Published 11 months ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Sacramento, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Published 11 months ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Sacramento, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Published 11 months ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Sacramento, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Published 11 months ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " Sacramento, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " Published 11 months ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Digital Marketing Executive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " Sacramento, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Published 11 months ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "$1200 - $ 2500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "label", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "span", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Prev");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "img", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "strong", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Richard Anderson");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Nevada, USA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Make a Difference with Your Online Resume!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Your resume in minutes with JobBoard resume assistant is ready!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Create an Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Testimonials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Few words from candidates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "strong", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "David Matin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "strong", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "David Matin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "img", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "strong", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "David Matin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "h2", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Our Latest Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "img", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "ul", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "September 18, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "li", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "a", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "5k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "h5", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Do you have a job that the average person doesn even know exists?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "a", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "span", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "READ MORE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "img", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "ul", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "September 18, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "li", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "a", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "5k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "h5", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Do you have a job that the average person doesn even know exists?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "a", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "span", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "READ MORE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "img", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "ul", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "September 18, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "li", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "a", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "5k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "h5", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Do you have a job that the average person doesn even know exists?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "a", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "READ MORE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](512, "img", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "ul", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "September 18, 2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "li", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "a", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "5k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "h5", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Do you have a job that the average person doesn even know exists?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "a", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "span", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "READ MORE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "app-chat-client");
          }
        },
        directives: [_common_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_2__["ChatClientComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3SRX":
    /*!*******************************************!*\
      !*** ./src/app/models/recruiter.model.ts ***!
      \*******************************************/

    /*! exports provided: RecruiterModel */

    /***/
    function SRX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterModel", function () {
        return RecruiterModel;
      });

      var RecruiterModel = function RecruiterModel() {
        _classCallCheck(this, RecruiterModel);
      };
      /***/

    },

    /***/
    "4Em8":
    /*!*****************************************!*\
      !*** ./src/app/models/message.model.ts ***!
      \*****************************************/

    /*! exports provided: Message */

    /***/
    function Em8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Message", function () {
        return Message;
      });

      var Message = /*#__PURE__*/function () {
        function Message() {
          _classCallCheck(this, Message);
        }

        _createClass(Message, [{
          key: "deserialize",
          value: function deserialize(input) {
            return Object.assign(this, input);
          }
        }]);

        return Message;
      }();
      /***/

    },

    /***/
    "83yU":
    /*!*********************************************************!*\
      !*** ./src/app/pages/common/footer/footer.component.ts ***!
      \*********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function yU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 100,
        vars: 0,
        consts: [[1, "site-footer"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-4", "col-md-12", "col-sm-12"], [1, "widget"], ["src", "./assets/images/logo-white.png", "width", "180", "alt", "", 1, "m-b15"], [1, "text-capitalize", "m-b20"], [1, "subscribe-form", "m-b20"], [1, "list-inline", "m-a0"], ["href", "javascript:void(0);", 1, "site-button", "white", "facebook", "circle"], [1, "fa", "fa-facebook"], ["href", "javascript:void(0);", 1, "site-button", "white", "google-plus", "circle"], [1, "fa", "fa-google-plus"], ["href", "javascript:void(0);", 1, "site-button", "white", "linkedin", "circle"], [1, "fa", "fa-linkedin"], ["href", "javascript:void(0);", 1, "site-button", "white", "instagram", "circle"], [1, "fa", "fa-instagram"], ["href", "javascript:void(0);", 1, "site-button", "white", "twitter", "circle"], [1, "fa", "fa-twitter"], [1, "col-xl-5", "col-lg-5", "col-md-8", "col-sm-8", "col-12"], [1, "widget", "border-0"], [1, "m-b30", "text-white"], [1, "list-2", "list-line"], ["href", "javascript:void(0);"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-4", "col-12"], [1, "list-2", "w10", "list-line"], [1, "footer-bottom"], [1, "col-lg-12", "text-center"], [1, "fa", "fa-heart", "m-lr5", "text-red", "heart"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Frequently Asked Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Privacy & Seurty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Terms of Serice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Communications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Referral Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lending Licnses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "How It Works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "For Employers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Underwriting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Lending Licnses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Find Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "US Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Canada Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "UK Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Emplois en Fnce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Jobs in Deuts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Vacatures China");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \xA9 Copyright 2020 by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "SoftRevamp ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " All rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ap0D":
    /*!*********************************************************!*\
      !*** ./src/app/pages/common/slider/slider.component.ts ***!
      \*********************************************************/

    /*! exports provided: SliderComponent */

    /***/
    function Ap0D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
        return SliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SliderComponent = /*#__PURE__*/function () {
        function SliderComponent() {
          _classCallCheck(this, SliderComponent);
        }

        _createClass(SliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SliderComponent;
      }();

      SliderComponent.ɵfac = function SliderComponent_Factory(t) {
        return new (t || SliderComponent)();
      };

      SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SliderComponent,
        selectors: [["app-slider"]],
        decls: 0,
        vars: 0,
        template: function SliderComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        SOCKET_ENDPOINT: 'http://localhost:3000'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BUfL":
    /*!********************************************************************!*\
      !*** ./src/app/pages/forget-password/forget-password.component.ts ***!
      \********************************************************************/

    /*! exports provided: ForgetPasswordComponent */

    /***/
    function BUfL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
        return ForgetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgetPasswordComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_ng_container_4_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.sendEmailBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Send OTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.EmailConfirmationForm);
        }
      }

      function ForgetPasswordComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confim OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "OTP *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_ng_container_5_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.otpCheckBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Confirm OTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.otpConfirmation);
        }
      }

      function ForgetPasswordComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Forget Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm Password *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_ng_container_6_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.changePasswordBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Change Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.forgetPasswordForm);
        }
      }

      var ForgetPasswordComponent = /*#__PURE__*/function () {
        function ForgetPasswordComponent(_formBuilder) {
          _classCallCheck(this, ForgetPasswordComponent);

          this._formBuilder = _formBuilder;
          this.hasFormErrors = false;
          this.ifEmailId = true;
          this.ifSendOtp = false;
          this.ifPassword = false;
        }

        _createClass(ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.EmailConfirmationForm = this._formBuilder.group({
              emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.otpConfirmation = this._formBuilder.group({
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.forgetPasswordForm = this._formBuilder.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "sendEmailBtnClick",
          value: function sendEmailBtnClick() {
            this.hasFormErrors = false;
            var controls = this.EmailConfirmationForm.controls;
            /** check form */

            if (this.EmailConfirmationForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            this.ifEmailId = false;
            this.ifSendOtp = true;
          }
        }, {
          key: "otpCheckBtnClick",
          value: function otpCheckBtnClick() {
            this.hasFormErrors = false;
            var controls = this.otpConfirmation.controls;
            /** check form */

            if (this.otpConfirmation.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            this.ifEmailId = false;
            this.ifSendOtp = false;
            this.ifPassword = true;
          }
        }, {
          key: "changePasswordBtnClick",
          value: function changePasswordBtnClick() {
            this.hasFormErrors = false;
            var controls = this.forgetPasswordForm.controls;
            /** check form */

            if (this.forgetPasswordForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }
          }
        }]);

        return ForgetPasswordComponent;
      }();

      ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
        return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgetPasswordComponent,
        selectors: [["app-forget-password"]],
        decls: 7,
        vars: 3,
        consts: [[1, "section-full", "content-inner-2", "shop-account"], [1, "container"], [1, "max-w500", "m-auto", "bg-white", "m-b30"], [1, "p-a30", "job-bx", "browse-job", "radius-sm", "seth"], [4, "ngIf"], [1, "tab-content", "nav", "mb-2"], ["id", "EmailConfirmationForm", 1, "col-12", "p-a0", "mb-2", 3, "formGroup"], [1, "font-weight-700"], [1, "form-group"], ["name", "passowrd", "formControlName", "emailId", "required", "", "placeholder", "Type Password", "type", "password", 1, "form-control"], [1, "text-center", "mb-2"], [1, "site-button", "m-r5", "button-lg", 3, "click"], ["id", "otpConfirmation", 1, "col-12", "p-a0", 3, "formGroup"], ["name", "otp-confirmation", "formControlName", "otp", "required", "", "placeholder", "Enter OTP", "type", "password", 1, "form-control"], ["id", "forgetPasswordForm", 1, "col-12", "p-a0", 3, "formGroup"], ["name", "passowrd", "formControlName", "password", "required", "", "placeholder", "Enter a new Password", "type", "password", 1, "form-control"], ["name", "passowrd", "formControlName", "confirmPassword", "required", "", "placeholder", "Confirm Password", "type", "password", 1, "form-control"]],
        template: function ForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgetPasswordComponent_ng_container_4_Template, 13, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgetPasswordComponent_ng_container_5_Template, 13, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgetPasswordComponent_ng_container_6_Template, 17, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifEmailId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifSendOtp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifPassword);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_formBuilder) {
          _classCallCheck(this, LoginComponent);

          this._formBuilder = _formBuilder;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginFormRecruiter = this._formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              termsAndCondtions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.loginFormJobSeeker = this._formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              termsAndCondtions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 72,
        vars: 2,
        consts: [[1, "section-full", "content-inner-2", "shop-account"], [1, "container"], [1, "max-w500", "m-auto", "bg-white", "m-b30"], [1, "p-a30", "job-bx", "browse-job", "radius-sm", "seth"], [1, "tab-content", "nav"], ["id", "loginJobSeekerForm", 1, "tab-pane", "active", "col-12", "p-a0", 3, "formGroup"], [1, "font-weight-700"], ["data-toggle", "tab", "href", "#loginRecruiterForm", 1, "forget-pass", "float-right", "text-primary"], [1, "form-group"], ["name", "email", "required", "", "formControlName", "userName", "placeholder", "Your Email Address", "type", "email", 1, "form-control"], ["name", "passowrd", "formControlName", "password", "required", "", "placeholder", "Type Password", "type", "password", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", "checked", "", "formControlName", "termsAndCondtion", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["href", "", "target", "_blank"], [1, "text-left"], ["href", "/dashboard/profile-registration", 1, "site-button", "m-r5", "button-lg", 2, "color", "white"], ["href", "/", 1, "m-l5", "m-t15", "forget-pass", "float-right"], [1, "fa", "fa-sign-in"], ["href", "/jobseeker-signup", 1, "m-l5", "m-t15", "forget-pass", "float-right"], ["id", "loginRecruiterForm", 1, "tab-pane", "fade", "col-12", "p-a0", 3, "formGroup"], ["data-toggle", "tab", "href", "#loginJobSeekerForm", 1, "forget-pass", "float-right", "text-primary"], [1, "site-button", "m-r5", "button-lg"], ["href", "/recruiter-signup", 1, "m-l5", "m-t15", "forget-pass", "float-right"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login as Job Seeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " or Login as Recruiter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "PASSWORD *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Agree to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Terms and Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Forgot Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Not registered yet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Login as Recruiter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " or Login as JobSeeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "PASSWORD *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Agree to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Terms and Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Forgot Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Not registered yet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormJobSeeker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormRecruiter);
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api-url */
      "0UPu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3"); // Models


      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "singUpUser",
          value: function singUpUser(user) {
            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_1__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_1__["Constants"].URL.User_Singup, user);
          }
        }, {
          key: "loginUser",
          value: function loginUser(login) {
            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_1__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_1__["Constants"].URL.Login, login);
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FM+r":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile-register/profile-register.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProfileRegisterComponent, FuncationAreaDropDown, SkillsDropDown */

    /***/
    function FMR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRegisterComponent", function () {
        return ProfileRegisterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncationAreaDropDown", function () {
        return FuncationAreaDropDown;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsDropDown", function () {
        return SkillsDropDown;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_job_seeker_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/job-seeker.model */
      "leH8");
      /* harmony import */


      var video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! video.js */
      "8OJ3");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! recordrtc */
      "qe5e");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! videojs-record/dist/videojs.record.js */
      "OWZb");
      /* harmony import */


      var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/job-seeker.service */
      "1487");
      /* harmony import */


      var src_app_services_file_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/file-upload.service */
      "FO31");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");

      function ProfileRegisterComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile Headline is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var college_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", college_r20.collegeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r20.collegeName);
        }
      }

      function ProfileRegisterComponent_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "College is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_span_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRegisterComponent_mat_option_51_Template_mat_option_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var degree_r21 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.onChangeDegreeCombox($event, degree_r21.degreeName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var degree_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", degree_r21.degreeName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](degree_r21.degreeName);
        }
      }

      function ProfileRegisterComponent_span_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Degree is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_mat_option_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", experience_r24.experienceRange);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r24.experienceRange);
        }
      }

      function ProfileRegisterComponent_span_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Experience is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_mat_option_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRegisterComponent_mat_option_72_Template_mat_option_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.onChangeDepartmentCombox($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r25.departmentName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r25.departmentName);
        }
      }

      function ProfileRegisterComponent_span_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Department is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_mat_option_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var salary_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", salary_r28.salaryRange);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](salary_r28.salaryRange);
        }
      }

      function ProfileRegisterComponent_span_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expected Salary is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_span_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Functional Area is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_span_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skills is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_span_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_ngx_dropzone_preview_147_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ProfileRegisterComponent_ngx_dropzone_preview_147_Template_ngx_dropzone_preview_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var f_r29 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onRemove(f_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r29.name, " (", f_r29.type, ")");
        }
      }

      function ProfileRegisterComponent_span_168_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Document Type is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileRegisterComponent_ngx_dropzone_preview_190_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ProfileRegisterComponent_ngx_dropzone_preview_190_Template_ngx_dropzone_preview_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var f_r32 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.onRemove1(f_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r32.name, " (", f_r32.type, ")");
        }
      }

      var ProfileRegisterComponent = /*#__PURE__*/function () {
        function ProfileRegisterComponent(_formBuilder, router, jobSeekerService, elementRef, uploadService) {
          _classCallCheck(this, ProfileRegisterComponent);

          this._formBuilder = _formBuilder;
          this.router = router;
          this.jobSeekerService = jobSeekerService;
          this.uploadService = uploadService;
          this.isLinear = false;
          this.collegesList = [];
          this.departmentsList = [];
          this.degreeList = [];
          this.functaionAreaList = [];
          this.skillList = [];
          this.experienceList = [];
          this.salaryRangesList = []; // disabled = false;
          // ShowFilter = false;
          // limitSelection = false;
          // funcationAreaDropDownList:FuncationAreaDropDown[]=[]
          // selectedItems: any = [];
          // dropdownSettings: any = {};

          this.selectedItems = []; // dropdownSettings : IMultiSelectSettings={};

          this.funcationAreaList = new Array();
          this.funcationArea = "";
          this.MultSelect = {};
          this.selectedAreas = [];
          this.MultSelectSkill = {};
          this.ids = []; // index to create unique ID for component

          this.idx = 'clip1';
          this.ifAllowCamera = false; //   allowCamera(){
          // this.ifAllowCamera=true;
          // }
          //file upload

          this.files = [];
          this.files1 = []; // City Names

          this.City = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
          this.player = false; // save reference to plugin (so it initializes)

          this.plugin = videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__; // video.js configuration

          this.config = {
            controls: true,
            autoplay: false,
            fluid: false,
            loop: false,
            width: 320,
            height: 240,
            bigPlayButton: false,
            type: 'video/mp4',
            controlBar: {
              volumePanel: false
            },
            plugins: {
              /*
              // wavesurfer section is only needed when recording audio-only
              wavesurfer: {
                  backend: 'WebAudio',
                  waveColor: '#36393b',
                  progressColor: 'black',
                  debug: true,
                  cursorWidth: 1,
                  displayMilliseconds: true,
                  hideScrollbar: true,
                  plugins: [
                      // enable microphone plugin
                      WaveSurfer.microphone.create({
                          bufferSize: 4096,
                          numberOfInputChannels: 1,
                          numberOfOutputChannels: 1,
                          constraints: {
                              video: false,
                              audio: true
                          }
                      })
                  ]
              },
              */
              // configure videojs-record plugin
              record: {
                audio: true,
                video: true,
                debug: true
              }
            }
          };
        }

        _createClass(ProfileRegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.MultSelect = {
              singleSelection: false,
              idField: 'id',
              textField: 'functionalArea',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 5,
              allowSearchFilter: true
            };
            this.MultSelectSkill = {
              singleSelection: false,
              idField: 'id',
              textField: 'skill',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 5,
              allowSearchFilter: true
            };
            this.selectedAreas = [];
            this.createForm();
            this.getAllSararyRanges();
            this.getAllColleges();
            this.getAllDegree(); // this.getAllDepartments();

            this.getAllExprience();
            this.getAllFuncationalArea(); // this.getAllSkills();

            this.states = [{
              name: 'MH'
            }, {
              name: 'GJ'
            }, {
              name: 'KR'
            }]; // this.configDropDownSetting();
          } // id:number;
          // functionalArea:string;

        }, {
          key: "configDropDownSetting",
          value: function configDropDownSetting() {// this.dropdownSettings = {
            // 	singleSelection: false,
            // 	text: "Select Health History",
            // 	selectAllText: 'Select All',
            // 	unSelectAllText: 'UnSelect All',
            // 	enableSearchFilter: true,
            // 	// classes:"myclass custom-class"
            //   };
          } //get all 

        }, {
          key: "getAllColleges",
          value: function getAllColleges() {
            var _this = this;

            this.jobSeekerService.getAllColleges().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this.collegesList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllDepartments",
          value: function getAllDepartments(id) {
            var _this2 = this;

            this.jobSeekerService.getAllDepartments(id).subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this2.departmentsList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllDegree",
          value: function getAllDegree() {
            var _this3 = this;

            this.jobSeekerService.getAllDegrees().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this3.degreeList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllFuncationalArea",
          value: function getAllFuncationalArea() {
            var _this4 = this;

            this.jobSeekerService.getAllFunctionalAreas().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this4.configDropDownSetting();

                _this4.functaionAreaList = res.data; // this.functaionAreaList.forEach(element=>{
                // 	this.funcationAreaList.push({'id':element.id,'itemName':element.functionalArea});
                // })
                // this.funcationAreaList = []
                // this.funcationAreaList.push({'id':1,'functionalArea':'functionalArea1'});
                // this.funcationAreaList.push({'id':2,'functionalArea':'functionalArea2'});
                // this.funcationAreaList.push({'id':3,'functionalArea':'functionalArea3'});
                // this.funcationAreaList.push({'id':4,'functionalArea':'functionalArea4'});
                // this.funcationAreaList.push({'id':5,'functionalArea':'functionalArea1'});
                // this.funcationAreaList.push({'id':6,'functionalArea':'functionalArea2'});
                // this.funcationAreaList.push({'id':7,'functionalArea':'functionalArea3'});
                // this.funcationAreaList.push({'id':8,'functionalArea':'functionalArea4'});

                console.log("Area Lists" + _this4.functaionAreaList);
              } else {
                alert(res.msg);
              }
            }, function (err) {// this.funcationAreaList = []
              // this.funcationAreaList.push({'id':1,'functionalArea':'functionalArea1'});
              // this.funcationAreaList.push({'id':2,'functionalArea':'functionalArea2'});
              // this.funcationAreaList.push({'id':3,'functionalArea':'functionalArea3'});
              // this.funcationAreaList.push({'id':4,'functionalArea':'functionalArea4'});
              // this.funcationAreaList.push({'id':5,'functionalArea':'functionalArea1'});
              // this.funcationAreaList.push({'id':6,'functionalArea':'functionalArea2'});
              // this.funcationAreaList.push({'id':7,'functionalArea':'functionalArea3'});
              // this.funcationAreaList.push({'id':8,'functionalArea':'functionalArea4'});
              // console.log("Area Lists"+this.funcationAreaList);
            });
          }
        }, {
          key: "getAllSkills",
          value: function getAllSkills(ids) {
            var _this5 = this;

            debugger;
            this.jobSeekerService.getAllSkills(ids).subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this5.skillList = res.data; // this.skillList = []
                // this.skillList.push({'id':1,'skill':'skill1',functionalAreaId:1});
                // this.skillList.push({'id':2,'skill':'skill2',functionalAreaId:1});
                // this.skillList.push({'id':3,'skill':'skill3',functionalAreaId:1});
                // this.skillList.push({'id':4,'skill':'skill4',functionalAreaId:1});
                // this.skillList.push({'id':5,'skill':'skill1',functionalAreaId:1});
                // this.skillList.push({'id':6,'skill':'skill2',functionalAreaId:1});
                // this.skillList.push({'id':7,'skill':'skill3',functionalAreaId:1});
                // this.skillList.push({'id':8,'skill':'skill4',functionalAreaId:1});

                console.log("Skill Lists" + _this5.skillList);
              } else {
                alert(res.msg);
              }
            }, function (err) {// this.skillList = []
              // this.skillList.push({'id':1,'skill':'skill1',functionalAreaId:1});
              // this.skillList.push({'id':2,'skill':'skill2',functionalAreaId:1});
              // this.skillList.push({'id':3,'skill':'skill3',functionalAreaId:1});
              // this.skillList.push({'id':4,'skill':'skill4',functionalAreaId:1});
              // this.skillList.push({'id':5,'skill':'skill1',functionalAreaId:1});
              // this.skillList.push({'id':6,'skill':'skill2',functionalAreaId:1});
              // this.skillList.push({'id':7,'skill':'skill3',functionalAreaId:1});
              // this.skillList.push({'id':8,'skill':'skill4',functionalAreaId:1});
              // console.log("Skill Lists"+this.skillList);
            });
          }
        }, {
          key: "getAllExprience",
          value: function getAllExprience() {
            var _this6 = this;

            this.jobSeekerService.getAllExperience().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this6.experienceList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllSararyRanges",
          value: function getAllSararyRanges() {
            var _this7 = this;

            this.jobSeekerService.getAllSalaryRanges().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this7.salaryRangesList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          } // ngOnInit() {
          // this.cities = [
          // 	{ item_id: 1, item_text: 'New Delhi' },
          // 	{ item_id: 2, item_text: 'Mumbai' },
          // 	{ item_id: 3, item_text: 'Bangalore' },
          // 	{ item_id: 4, item_text: 'Pune' },
          // 	{ item_id: 5, item_text: 'Chennai' },
          // 	{ item_id: 6, item_text: 'Navsari' }
          // ];
          // this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];

        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            //debugger
            console.log(item);
            this.ids.push(item.id);
            this.getAllSkills(this.ids);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            var _this8 = this;

            console.log(items);
            items.map(function (item) {
              _this8.ids.push(item.id);
            });
            this.getAllSkills(this.ids);
          }
        }, {
          key: "onItemDeSelect",
          value: function onItemDeSelect(item) {
            var _this9 = this;

            debugger;
            console.log(item);
            this.ids.map(function (id) {
              if (id == item.id) {
                var index = _this9.ids.findIndex(function (id) {
                  return id === item.id;
                });

                _this9.ids.splice(index, 1);
              }
            });
            this.getAllSkills(this.ids);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
            this.ids = items;
            this.ids = [];
          }
        }, {
          key: "onItemSelectSkill",
          value: function onItemSelectSkill(item) {
            console.log(item);
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.createJobSeekerCard = this._formBuilder.group({
              fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              profileHeadline: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              department: [''],
              //Validators.required
              degree: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              functionalArea: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              expected_salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              // skill1: ['', Validators.required],
              // skill2: ['', Validators.required],
              // skill3: ['', Validators.required],
              // skill4: ['', Validators.required]
              skills: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }); // this.createJobSeekerCard = new FormGroup({
            // 	fullName: new FormControl(''),
            // 	profileHeadline: new FormControl(''),
            // 	college: new FormControl(''),
            // 	companyName: new FormControl(''),
            // 	department: new FormControl(''),
            // 	//Validators.required
            // 	degree: new FormControl(''),
            // 	experience: new FormControl(''),
            // 	functionalArea: new FormControl([]),
            // 	expected_salary: new FormControl([]),
            // 	// skill1: ['', Validators.required],
            // 	// skill2: ['', Validators.required],
            // 	// skill3: ['', Validators.required],
            // 	// skill4: ['', Validators.required]
            // 	skills: new FormControl([]),
            // });

            this.videoResume = this._formBuilder.group({
              uploadVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.uploadResume = this._formBuilder.group({
              uploadResume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.verification = this._formBuilder.group({
              selectDocumentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              uploadDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.createJobSeekerCard.patchValue({
              college: 'Select College'
            });
          }
        }, {
          key: "onChangeDegreeCombox",
          value: function onChangeDegreeCombox(event, degreeName) {
            var obj = this.degreeList.find(function (x) {
              return x.degreeName === degreeName;
            });
            this.getAllDepartments(obj.id);
          }
        }, {
          key: "onChangeFunctionaAreaCombox",
          value: function onChangeFunctionaAreaCombox(id) {
            this.getAllSkills(id);
          }
        }, {
          key: "onChangeDepartmentCombox",
          value: function onChangeDepartmentCombox(department) {}
        }, {
          key: "prepareJobSeeker",
          value: function prepareJobSeeker() {
            var controls = this.createJobSeekerCard.controls;

            var _jobSeeker = new src_app_models_job_seeker_model__WEBPACK_IMPORTED_MODULE_2__["JobSeekerModel"]();

            _jobSeeker.fullName = controls.fullName.value;
            _jobSeeker.profileHeadline = controls.profileHeadline.value;
            _jobSeeker.experience = controls.experience.value;
            _jobSeeker.expected_salary = controls.expected_salary.value;
            _jobSeeker.department = controls.department.value;
            _jobSeeker.degree = controls.degree.value;
            _jobSeeker.companyName = controls.companyName.value;
            _jobSeeker.college = controls.college.value;
            var username = localStorage.getItem('macrax-emailId');
            _jobSeeker.userName = username;
            var funcationArea = [];
            var skill = []; //funcationArea= controls.functionalArea.value.join('');
            // skill.push(controls.skills1.value);
            // skill.push(controls.skills2.value);
            // skill.push(controls.skills3.value);
            // skill.push(controls.skills4.value);

            var f = []; //f[0] = funcationArea

            controls.functionalArea.value.forEach(function (element) {
              funcationArea.push(element['functionalArea']);
            });
            controls.skills.value.forEach(function (element) {
              skill.push(element['skill']);
            });
            _jobSeeker.functionalArea = funcationArea;
            _jobSeeker.vedioUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx';
            _jobSeeker.docUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx';
            _jobSeeker.verificationCardId = '2';
            _jobSeeker.verificationCardUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx';
            _jobSeeker.profileUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx';
            _jobSeeker.skills = skill;
            return _jobSeeker;
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this10 = this;

            // this.hasFormErrors = false;
            var controls = this.createJobSeekerCard.controls;
            console.log(this.createJobSeekerCard);
            /** check form */

            if (this.createJobSeekerCard.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              }); // this.hasFormErrors = true;

              ;
            } // this.hasFormErrors = false;


            var controls1 = this.videoResume.controls;
            console.log(this.videoResume);
            /** check form */

            if (this.videoResume.invalid) {
              Object.keys(controls1).forEach(function (controlName) {
                return controls1[controlName].markAsTouched();
              }); // this.hasFormErrors = true;

              ;
            } // this.hasFormErrors = false;


            var controls2 = this.verification.controls;
            console.log(this.verification);
            /** check form */

            if (this.verification.invalid) {
              Object.keys(controls2).forEach(function (controlName) {
                return controls2[controlName].markAsTouched();
              }); // this.hasFormErrors = true;

              return;
            }

            var jobSeekerObj = this.prepareJobSeeker();
            this.jobSeekerService.createJobSeekerProfile(jobSeekerObj).subscribe(function (res) {
              if (res.status == 200) {
                alert(res.msg);

                _this10.router.navigateByUrl('dashboard/chat-home');
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          } // use ngAfterViewInit to make sure we initialize the videojs element
          // after the component template itself has been rendered

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this11 = this;

            // ID with which to access the template's video element
            var el = 'video_' + this.idx; // setup the player via the unique element ID

            this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.getElementById(el), this.config, function () {
              console.log('player ready! id:', el); // print version information at startup

              var msg = 'Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_3__["default"].VERSION + ' with videojs-record ' + video_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPluginVersion('record') + ' and recordrtc ' + recordrtc__WEBPACK_IMPORTED_MODULE_4__["version"];
              video_js__WEBPACK_IMPORTED_MODULE_3__["default"].log(msg);
            }); // device is ready

            this.player.on('deviceReady', function () {
              console.log('device is ready!');
            }); // user clicked the record button and started recording

            this.player.on('startRecord', function () {
              console.log('started recording!');
            }); // user completed recording and stream is available

            this.player.on('finishRecord', function () {
              // recordedData is a blob object containing the recorded data that
              // can be downloaded by the user, stored on server etc.
              console.log('finished recording: ', _this11.player.recordedData);

              _this11.player.record().saveAs({
                'video': 'my-video-file-name.webm'
              }); //   var videoBlob = this.player.recordedData.getBlob();
              //   var videoBlobMp4 = new Blob(videoBlob, {type: 'video/mp4'});
              //   video.src = URL.createObjectURL(videoBlob);


              _this11.uploadVideo(_this11.player.recordedData);
            }); // error handling

            this.player.on('error', function (element, error) {
              console.warn(error);
            });
            this.player.on('deviceError', function () {
              console.error('device error:', _this11.player.deviceErrorCode);
            });
          }
        }, {
          key: "uploadVideo",
          value: function uploadVideo(video) {
            var _this12 = this;

            this.uploadService.uploadJdVideo(video).subscribe(function (res) {
              _this12.videoResume.controls['uploadVideo'].setValue(res);

              console.log(res);
            }, function (err) {});
          } // use ngOnDestroy to detach event handlers and remove the player

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.player) {
              this.player.dispose();
              this.player = false;
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this$files;

            console.log(event);

            (_this$files = this.files).push.apply(_this$files, _toConsumableArray(event.rejectedFiles));

            this.uploadResumeFile();
          }
        }, {
          key: "onRemove",
          value: function onRemove(event) {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
          }
        }, {
          key: "uploadResumeFile",
          value: function uploadResumeFile() {
            var _this13 = this;

            if (this.files.length > 0) {
              this.uploadService.uploadJdFile(this.files[0]).subscribe(function (res) {
                console.log(res);

                _this13.uploadResume.controls['uploadResume'].setValue(res);
              }, function (err) {});
            }
          }
        }, {
          key: "onSelect1",
          value: function onSelect1(event) {
            var _this$files2;

            console.log(event);

            (_this$files2 = this.files1).push.apply(_this$files2, _toConsumableArray(event.rejectedFiles));

            this.uploadDocumentFile();
          }
        }, {
          key: "onRemove1",
          value: function onRemove1(event) {
            console.log(event);
            this.files1.splice(this.files1.indexOf(event), 1);
          }
        }, {
          key: "uploadDocumentFile",
          value: function uploadDocumentFile() {
            var _this14 = this;

            if (this.files1.length > 0) {
              this.uploadService.verificationDocFile(this.files1[0]).subscribe(function (res) {
                _this14.verification.controls['uploadDocument'].setValue(res);

                console.log(res);
              }, function (err) {});
            }
          } // Choose city using select dropdown

        }, {
          key: "changeCity",
          value: function changeCity(e) {
            console.log(e.value);
            this.college.setValue(e.target.value, {
              onlySelf: true
            });
          } // Getter method to access formcontrols

        }, {
          key: "college",
          get: function get() {
            return this.createJobSeekerCard.get('college');
          }
        }]);

        return ProfileRegisterComponent;
      }();

      ProfileRegisterComponent.ɵfac = function ProfileRegisterComponent_Factory(t) {
        return new (t || ProfileRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__["JobSeekerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_file_upload_service__WEBPACK_IMPORTED_MODULE_8__["FileUploadService"]));
      };

      ProfileRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileRegisterComponent,
        selectors: [["app-profile-register"]],
        decls: 197,
        vars: 42,
        consts: [[1, "section-full", "job-categories", "content-inner-2", "bg-white"], [1, "container"], [3, "linear"], ["stepper", ""], ["label", "Create Job-Seeker Card", 3, "stepControl"], [1, "job-bx", "job-profile"], [1, "job-bx-title", "clearfix"], [1, "font-weight-700", "pull-left", "text-uppercase"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "Alexander Weir", "formControlName", "fullName", "required", "", 1, "form-control"], [4, "ngIf"], ["type", "text", "placeholder", "e.g. Software Developer | Java | React JS", "formControlName", "profileHeadline", 1, "form-control"], ["formControlName", "college", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. Microsoft", "formControlName", "companyName", 1, "form-control"], ["id", "degree", "formControlName", "degree", 1, "form-control"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "experience", 1, "form-control"], ["formControlName", "department", 1, "form-control"], ["formControlName", "expected_salary", 1, "form-control"], ["formControlName", "functionalArea", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], ["formControlName", "skills", 3, "placeholder", "data", "settings", "onSelect"], ["mat-button", "", "matStepperNext", "", 1, "site-button", "m-b30"], ["label", "Video Resume", 3, "stepControl"], [1, "font-weight-700", "text-uppercase"], [1, "float-right"], ["href", ""], [1, "row", "m-b30"], [1, "col-lg-12", "col-md-12"], ["playsinline", "", 1, "video-js", "vjs-default-skin", 3, "id"], ["mat-button", "", "matStepperPrevious", "", 1, "site-button", "m-b30", "m-r30"], ["label", "Upload Resume", 3, "stepControl"], [1, "attach-resume", 3, "formGroup"], [3, "multiple", "maxFileSize", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "text-center"], ["label", "Verification", 3, "stepControl"], [1, "row", "mb-3"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "name", "selectDocumentType", "id", "aluminiIDCard", "value", "aluminiIDCard", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "aluminiIDCard", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "studentIDCard", "value", "studentIDCard", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "studentIDCard", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "transcript", "value", "transcript", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "transcript", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "degreeCertificate", "value", "degreeCertificate", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "degreeCertificate", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "hostelCard", "value", "hostelCard", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "hostelCard", 1, "custom-control-label"], ["mat-button", "", 1, "site-button", "m-b30", 3, "click"], [3, "value", "click"], [3, "removable", "removed"]],
        template: function ProfileRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileRegisterComponent_span_17_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Profile Headline:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileRegisterComponent_span_24_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "College:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileRegisterComponent_mat_option_33_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileRegisterComponent_span_35_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Last Company:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProfileRegisterComponent_span_42_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Degree:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProfileRegisterComponent_mat_option_51_Template, 2, 2, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProfileRegisterComponent_span_53_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Experience:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ProfileRegisterComponent_mat_option_61_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ProfileRegisterComponent_span_63_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Department:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ProfileRegisterComponent_mat_option_72_Template, 2, 2, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ProfileRegisterComponent_span_74_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Expected Salary:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ProfileRegisterComponent_mat_option_82_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ProfileRegisterComponent_span_84_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Functional Area:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ng-multiselect-dropdown", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function ProfileRegisterComponent_Template_ng_multiselect_dropdown_onSelect_90_listener($event) {
              return ctx.onItemSelect($event);
            })("onSelectAll", function ProfileRegisterComponent_Template_ng_multiselect_dropdown_onSelectAll_90_listener($event) {
              return ctx.onSelectAll($event);
            })("onDeSelect", function ProfileRegisterComponent_Template_ng_multiselect_dropdown_onDeSelect_90_listener($event) {
              return ctx.onItemDeSelect($event);
            })("onDeSelectAll", function ProfileRegisterComponent_Template_ng_multiselect_dropdown_onDeSelectAll_90_listener($event) {
              return ctx.onDeSelectAll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ProfileRegisterComponent_span_92_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Skills:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ng-multiselect-dropdown", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function ProfileRegisterComponent_Template_ng_multiselect_dropdown_onSelect_98_listener($event) {
              return ctx.onItemSelectSkill($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ProfileRegisterComponent_span_100_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-step", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Walk Recruiters through your Video Resume. Don't miss your 1st impression! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "small", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Skip this step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " 1] Allow access to your Webcam and microphone to start recording your video Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " 2] In case you have cliked on \"Block\", you can refresh this page and Allow again. Don't worry, It's 100% safe & secured");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " 3] Please ensure that you are wearing a decent attire and in a silent area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 4] Ensure to cover your core values and achievements within 60 Seconds of video");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "video", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, ProfileRegisterComponent_span_130_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-step", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Upload your updated Resume. Macrax support PDF, DOC, and DOCX formats only");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "form", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ngx-dropzone", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileRegisterComponent_Template_ngx_dropzone_change_144_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ngx-dropzone-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "You can also drag & drop here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, ProfileRegisterComponent_ngx_dropzone_preview_147_Template, 3, 3, "ngx-dropzone-preview", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Note: File size shouldn't exceed 15 MBs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-step", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Upload one of the following documents to verify your College, Department and Degree as mentioned");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "form", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Alumini ID Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, ProfileRegisterComponent_span_168_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Student ID Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Transcript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Degree Certificate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Hostel Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ngx-dropzone", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileRegisterComponent_Template_ngx_dropzone_change_187_listener($event) {
              return ctx.onSelect1($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ngx-dropzone-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "You can also drag & drop here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](190, ProfileRegisterComponent_ngx_dropzone_preview_190_Template, 3, 3, "ngx-dropzone-preview", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileRegisterComponent_Template_button_click_195_listener() {
              return ctx.onSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.createJobSeekerCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createJobSeekerCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("fullName").valid && ctx.createJobSeekerCard.get("fullName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("profileHeadline").valid && ctx.createJobSeekerCard.get("profileHeadline").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collegesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("college").valid && ctx.createJobSeekerCard.get("college").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("companyName").valid && ctx.createJobSeekerCard.get("companyName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.degreeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("degree").valid && ctx.createJobSeekerCard.get("degree").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experienceList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("experience").valid && ctx.createJobSeekerCard.get("experience").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departmentsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("department").valid && ctx.createJobSeekerCard.get("department").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salaryRangesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("expected_salary").valid && ctx.createJobSeekerCard.get("expected_salary").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Multi select")("data", ctx.functaionAreaList)("settings", ctx.MultSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("functionalArea").valid && ctx.createJobSeekerCard.get("functionalArea").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Multi select")("data", ctx.skillList)("settings", ctx.MultSelectSkill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("skills").valid && ctx.createJobSeekerCard.get("skills").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 40, ctx.createJobSeekerCard.value), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.videoResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.videoResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "video_", ctx.idx, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.videoResume.get("uploadVideo").valid && ctx.videoResume.get("uploadVideo").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.uploadResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("maxFileSize", 2000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.verification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.verification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.verification.get("selectDocumentType").valid && ctx.verification.get("selectDocumentType").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("maxFileSize", 2000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files1);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["MultiSelectComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperPrevious"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__["NgxDropzonePreviewComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"]],
        styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%]\r\n{\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InByb2ZpbGUtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5oNVxyXG57XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile-register',
            templateUrl: './profile-register.component.html',
            styleUrls: ['./profile-register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__["JobSeekerService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: src_app_services_file_upload_service__WEBPACK_IMPORTED_MODULE_8__["FileUploadService"]
          }];
        }, null);
      })();

      var FuncationAreaDropDown = function FuncationAreaDropDown() {
        _classCallCheck(this, FuncationAreaDropDown);
      };

      var SkillsDropDown = function SkillsDropDown() {
        _classCallCheck(this, SkillsDropDown);
      };
      /***/

    },

    /***/
    "FO31":
    /*!*************************************************!*\
      !*** ./src/app/services/file-upload.service.ts ***!
      \*************************************************/

    /*! exports provided: FileUploadService */

    /***/
    function FO31(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
        return FileUploadService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-url */
      "0UPu"); // Models


      var FileUploadService = /*#__PURE__*/function () {
        function FileUploadService(http) {
          _classCallCheck(this, FileUploadService);

          this.http = http;
          this.token = localStorage.getItem('macrax-token');
          this.emailId = localStorage.getItem('macrax-emailId');
        }

        _createClass(FileUploadService, [{
          key: "getHTTPHeaders",
          value: function getHTTPHeaders() {
            var result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](); // result = result.set('Content-Type', 'application/json');

            result = result.set('Authorization', 'Bearer ' + this.token); // multipart/form-data

            return result;
          }
        }, {
          key: "uploadJdFile",
          value: function uploadJdFile(file) {
            var formData = new FormData();
            formData.append('file', file);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailId', this.emailId);
            var httpHeaders = this.getHTTPHeaders();
            var requestOptions = {
              /* other options here */
              headers: httpHeaders,
              params: httpParams,
              responseType: 'text'
            }; // headers: httpHeaders,responseType: 'text'}

            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Upload_Jd_File, formData, requestOptions);
          }
        }, {
          key: "uploadJdVideo",
          value: function uploadJdVideo(file) {
            var formData = new FormData();
            formData.append('file', file, "video_" + Date.now() + ".mp4");
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailId', this.emailId);
            var httpHeaders = this.getHTTPHeaders();
            var requestOptions = {
              /* other options here */
              headers: httpHeaders,
              params: httpParams,
              responseType: 'text'
            };
            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Upload_Jd_Video, formData, requestOptions);
          }
        }, {
          key: "verificationDocFile",
          value: function verificationDocFile(file) {
            var formData = new FormData();
            formData.append('file', file);
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailId', this.emailId);
            var httpHeaders = this.getHTTPHeaders();
            var requestOptions = {
              /* other options here */
              headers: httpHeaders,
              params: httpParams,
              responseType: 'text'
            };
            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Upload_Verification_Doc, formData, requestOptions);
          }
        }]);

        return FileUploadService;
      }();

      FileUploadService.ɵfac = function FileUploadService_Factory(t) {
        return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FileUploadService,
        factory: FileUploadService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GqXI":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/recruiter-profile-register/recruiter-profile-register.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: RecruiterProfileRegisterComponent, FuncationAreaDropDown, SkillsDropDown */

    /***/
    function GqXI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterProfileRegisterComponent", function () {
        return RecruiterProfileRegisterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FuncationAreaDropDown", function () {
        return FuncationAreaDropDown;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsDropDown", function () {
        return SkillsDropDown;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_recruiter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/recruiter.model */
      "3SRX");
      /* harmony import */


      var video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! video.js */
      "8OJ3");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! recordrtc */
      "qe5e");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! videojs-record/dist/videojs.record.js */
      "OWZb");
      /* harmony import */


      var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/job-seeker.service */
      "1487");
      /* harmony import */


      var src_app_services_recruiter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/recruiter.service */
      "hTrY");
      /* harmony import */


      var src_app_services_file_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/file-upload.service */
      "FO31");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/"); //capture video
      // register videojs-record plugin with this import


      function RecruiterProfileRegisterComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r22.experienceRange);
        }
      }

      function RecruiterProfileRegisterComponent_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Experience is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_span_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var joblocation_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](joblocation_r23.location);
        }
      }

      function RecruiterProfileRegisterComponent_span_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Job Location is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_span_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Job Role is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var salary_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](salary_r24.salaryRange);
        }
      }

      function RecruiterProfileRegisterComponent_span_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Offered Salary is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var college_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](college_r25.collegeName);
        }
      }

      function RecruiterProfileRegisterComponent_span_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "College is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_option_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var degree_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](degree_r26.degreeName);
        }
      }

      function RecruiterProfileRegisterComponent_span_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Degree is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_span_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Functional Area is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_option_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r27.departmentName);
        }
      }

      function RecruiterProfileRegisterComponent_span_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Department is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_span_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skills is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_span_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_ngx_dropzone_preview_148_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function RecruiterProfileRegisterComponent_ngx_dropzone_preview_148_Template_ngx_dropzone_preview_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var f_r28 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onRemove(f_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r28.name, " (", f_r28.type, ")");
        }
      }

      function RecruiterProfileRegisterComponent_span_169_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Document Type is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterProfileRegisterComponent_ngx_dropzone_preview_191_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-preview", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function RecruiterProfileRegisterComponent_ngx_dropzone_preview_191_Template_ngx_dropzone_preview_removed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var f_r31 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.onRemove1(f_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", f_r31.name, " (", f_r31.type, ")");
        }
      }

      var RecruiterProfileRegisterComponent = /*#__PURE__*/function () {
        function RecruiterProfileRegisterComponent(_formBuilder, router, jobSeekerService, recruiterService, elementRef, uploadService) {
          _classCallCheck(this, RecruiterProfileRegisterComponent);

          this._formBuilder = _formBuilder;
          this.router = router;
          this.jobSeekerService = jobSeekerService;
          this.recruiterService = recruiterService;
          this.uploadService = uploadService;
          this.isLinear = false;
          this.collegesList = [];
          this.departmentsList = [];
          this.degreeList = [];
          this.functaionAreaList = [];
          this.skillList = [];
          this.experienceList = [];
          this.salaryRangesList = [];
          this.disabled = false;
          this.ShowFilter = false;
          this.limitSelection = false;
          this.funcationAreaDropDownList = [];
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.data = []; // index to create unique ID for component

          this.idx = 'clip1';
          this.ifAllowCamera = false;
          this.MultSelect = {};
          this.selectedAreas = [];
          this.MultSelectSkill = {};
          this.ids = [];
          this.joblocationList = []; //file upload

          this.files = [];
          this.files1 = [];
          this.player = false; // save reference to plugin (so it initializes)

          this.plugin = videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_5__; // video.js configuration

          this.config = {
            controls: true,
            autoplay: false,
            fluid: false,
            loop: false,
            width: 320,
            height: 240,
            bigPlayButton: false,
            controlBar: {
              volumePanel: false
            },
            plugins: {
              /*
              // wavesurfer section is only needed when recording audio-only
              wavesurfer: {
                  backend: 'WebAudio',
                  waveColor: '#36393b',
                  progressColor: 'black',
                  debug: true,
                  cursorWidth: 1,
                  displayMilliseconds: true,
                  hideScrollbar: true,
                  plugins: [
                      // enable microphone plugin
                      WaveSurfer.microphone.create({
                          bufferSize: 4096,
                          numberOfInputChannels: 1,
                          numberOfOutputChannels: 1,
                          constraints: {
                              video: false,
                              audio: true
                          }
                      })
                  ]
              },
              */
              // configure videojs-record plugin
              record: {
                audio: true,
                video: true,
                debug: true
              }
            }
          };
        }

        _createClass(RecruiterProfileRegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.MultSelect = {
              singleSelection: false,
              idField: 'id',
              textField: 'functionalArea',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 5,
              allowSearchFilter: true
            };
            this.MultSelectSkill = {
              singleSelection: false,
              idField: 'id',
              textField: 'skill',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 5,
              allowSearchFilter: true
            };
            this.selectedAreas = [];
            this.createForm();
            this.getAllColleges();
            this.getAllDegree();
            this.getAllJobLocation(); // this.getAllDepartments();

            this.getAllExprience();
            this.getAllSararyRanges();
            this.getAllFuncationalArea(); // this.getAllSkills();
            // this.configDropDownSetting();
          }
        }, {
          key: "configDropDownSetting",
          value: function configDropDownSetting() {
            // this.dropdownSettings = {
            // 	singleSelection: false,
            // 	idField: 'item_id',
            // 	textField: 'item_text',
            // 	enableCheckAll: true,
            // 	selectAllText: 'Chọn All',
            // 	unSelectAllText: 'Hủy chọn',
            // 	allowSearchFilter: true,
            // 	limitSelection: -1,
            // 	clearSearchFilter: true,
            // 	maxHeight: 197,
            // 	itemsShowLimit: 3,
            // 	searchPlaceholderText: 'Tìm kiếm',
            // 	noDataAvailablePlaceholderText: 'Không có dữ liệu',
            // 	closeDropDownOnSelection: false,
            // 	showSelectedItemsAtTop: false,
            // 	defaultOpen: false
            //   };
            // this.data = [
            // 	{ item_id: 1, item_text: 'Hanoi' },
            // 	{ item_id: 2, item_text: 'Lang Son' },
            // 	{ item_id: 3, item_text: 'Vung Tau' },
            // 	{ item_id: 4, item_text: 'Hue' },
            // 	{ item_id: 5, item_text: 'Cu Chi' }
            //   ];
            this.dropdownSettings = {
              singleSelection: false,
              idField: 'item_id',
              textField: 'item_text',
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              itemsShowLimit: 3,
              allowSearchFilter: false
            };
          } //get all 

        }, {
          key: "getAllColleges",
          value: function getAllColleges() {
            var _this15 = this;

            this.jobSeekerService.getAllColleges().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this15.collegesList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllDepartments",
          value: function getAllDepartments(id) {
            var _this16 = this;

            this.jobSeekerService.getAllDepartments(id).subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this16.departmentsList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllDegree",
          value: function getAllDegree() {
            var _this17 = this;

            this.jobSeekerService.getAllDegrees().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this17.degreeList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllFuncationalArea",
          value: function getAllFuncationalArea() {
            var _this18 = this;

            debugger;
            this.jobSeekerService.getAllFunctionalAreas().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this18.configDropDownSetting();

                _this18.functaionAreaList = res.data; // this.functaionAreaList.forEach(element=>{
                // 	this.funcationAreaList.push({'id':element.id,'itemName':element.functionalArea});
                // })
                // this.funcationAreaList = []
                // this.funcationAreaList.push({'id':1,'functionalArea':'functionalArea1'});
                // this.funcationAreaList.push({'id':2,'functionalArea':'functionalArea2'});
                // this.funcationAreaList.push({'id':3,'functionalArea':'functionalArea3'});
                // this.funcationAreaList.push({'id':4,'functionalArea':'functionalArea4'});
                // this.funcationAreaList.push({'id':5,'functionalArea':'functionalArea1'});
                // this.funcationAreaList.push({'id':6,'functionalArea':'functionalArea2'});
                // this.funcationAreaList.push({'id':7,'functionalArea':'functionalArea3'});
                // this.funcationAreaList.push({'id':8,'functionalArea':'functionalArea4'});
                //console.log("Area Lists"+this.functaionAreaList);
              } else {
                alert(res.msg);
              }
            }, function (err) {// this.funcationAreaList = []
              // this.funcationAreaList.push({'id':1,'functionalArea':'functionalArea1'});
              // this.funcationAreaList.push({'id':2,'functionalArea':'functionalArea2'});
              // this.funcationAreaList.push({'id':3,'functionalArea':'functionalArea3'});
              // this.funcationAreaList.push({'id':4,'functionalArea':'functionalArea4'});
              // this.funcationAreaList.push({'id':5,'functionalArea':'functionalArea1'});
              // this.funcationAreaList.push({'id':6,'functionalArea':'functionalArea2'});
              // this.funcationAreaList.push({'id':7,'functionalArea':'functionalArea3'});
              // this.funcationAreaList.push({'id':8,'functionalArea':'functionalArea4'});
              // console.log("Area Lists"+this.funcationAreaList);
            });
          }
        }, {
          key: "getAllSkills",
          value: function getAllSkills(ids) {
            var _this19 = this;

            this.jobSeekerService.getAllSkills(ids).subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this19.skillList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllExprience",
          value: function getAllExprience() {
            var _this20 = this;

            this.jobSeekerService.getAllExperience().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this20.experienceList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllJobLocation",
          value: function getAllJobLocation() {
            var _this21 = this;

            //debugger
            this.jobSeekerService.getAllJobLocation().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this21.joblocationList = res.data;
                console.log("jobloc:" + _this21.joblocationList);
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllSararyRanges",
          value: function getAllSararyRanges() {
            var _this22 = this;

            this.jobSeekerService.getAllSalaryRanges().subscribe(function (res) {
              console.log(res);

              if (res.status == 200) {
                _this22.salaryRangesList = res.data;
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          } // ngOnInit() {
          // this.cities = [
          // 	{ item_id: 1, item_text: 'New Delhi' },
          // 	{ item_id: 2, item_text: 'Mumbai' },
          // 	{ item_id: 3, item_text: 'Bangalore' },
          // 	{ item_id: 4, item_text: 'Pune' },
          // 	{ item_id: 5, item_text: 'Chennai' },
          // 	{ item_id: 6, item_text: 'Navsari' }
          // ];
          // this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];

        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            debugger;
            console.log(item);
            this.ids.push(item.id);
            this.getAllSkills(this.ids);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            var _this23 = this;

            console.log(items);
            items.map(function (item) {
              _this23.ids.push(item.id);
            });
            this.getAllSkills(this.ids);
          }
        }, {
          key: "onItemDeSelect",
          value: function onItemDeSelect(item) {
            var _this24 = this;

            debugger;
            console.log(item);
            this.ids.map(function (id) {
              if (id == item.id) {
                var index = _this24.ids.findIndex(function (id) {
                  return id === item.id;
                });

                _this24.ids.splice(index, 1);
              }
            });
            this.getAllSkills(this.ids);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
            this.ids = items;
            this.ids = [];
          }
        }, {
          key: "onItemSelectSkill",
          value: function onItemSelectSkill(item) {
            console.log(item);
          }
        }, {
          key: "toogleShowFilter",
          value: function toogleShowFilter() {
            this.ShowFilter = !this.ShowFilter;
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
              allowSearchFilter: this.ShowFilter
            });
          }
        }, {
          key: "handleLimitSelection",
          value: function handleLimitSelection() {
            if (this.limitSelection) {
              this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
                limitSelection: 2
              });
            } else {
              this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
                limitSelection: null
              });
            }
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.createJobSeekerCard = this._formBuilder.group({
              fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              // profileHeadline: ['', Validators.required],
              college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              degree: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              functionalArea: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              expected_salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              jobLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              jobRole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              // skill1: ['', Validators.required],
              // skill2: ['', Validators.required],
              // skill3: ['', Validators.required],
              // skill4: ['', Validators.required]
              skills: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] // profileUrl:string;
              // 	
              // verificationCardUrl:string;	
              // verificationCardId:string;	
              // verificationStatus:string;	
              // deleteStatus:string;	
              //  addDateTime:Date;	
              // updateDateTime:Date;

            });
            this.videoResume = this._formBuilder.group({
              uploadVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.uploadResume = this._formBuilder.group({
              uploadResume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.verification = this._formBuilder.group({
              selectDocumentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              uploadDocument: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onChangeDegreeCombox",
          value: function onChangeDegreeCombox(id) {
            this.getAllDepartments(id);
          }
        }, {
          key: "onChangeFunctionaAreaCombox",
          value: function onChangeFunctionaAreaCombox(id) {
            this.getAllSkills(id);
          }
        }, {
          key: "prepareJobSeeker",
          value: function prepareJobSeeker() {
            var controls = this.createJobSeekerCard.controls;

            var _jobSeeker = new src_app_models_recruiter_model__WEBPACK_IMPORTED_MODULE_2__["RecruiterModel"]();

            _jobSeeker.fullName = controls.fullName.value;
            _jobSeeker.profileHeadline = controls.profileHeadline.value;
            _jobSeeker.experience = controls.experience.value;
            _jobSeeker.expected_salary = controls.expected_salary.value;
            _jobSeeker.department = controls.department.value;
            _jobSeeker.degree = controls.degree.value;
            _jobSeeker.companyName = controls.companyName.value;
            _jobSeeker.college = controls.college.value;
            var funcationArea = [];
            var skill = [];
            funcationArea.push(controls.functionalArea.value);
            skill.push(controls.skills1.value);
            skill.push(controls.skills2.value);
            skill.push(controls.skills3.value);
            skill.push(controls.skills4.value); // _jobSeeker.functionalArea=funcationArea;
            // _jobSeeker.skills=skill;

            return _jobSeeker;
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this25 = this;

            // this.hasFormErrors = false;
            var controls = this.createJobSeekerCard.controls;
            /** check form */

            if (this.createJobSeekerCard.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              }); // this.hasFormErrors = true;

              ;
            } // this.hasFormErrors = false;


            var controls1 = this.videoResume.controls;
            console.log(this.videoResume);
            /** check form */

            if (this.videoResume.invalid) {
              Object.keys(controls1).forEach(function (controlName) {
                return controls1[controlName].markAsTouched();
              }); // this.hasFormErrors = true;

              ;
            } // this.hasFormErrors = false;


            var controls2 = this.verification.controls;
            console.log(this.verification);
            /** check form */

            if (this.verification.invalid) {
              Object.keys(controls2).forEach(function (controlName) {
                return controls2[controlName].markAsTouched();
              }); // this.hasFormErrors = true;

              return;
            }

            var jobSeekerObj = this.prepareJobSeeker();
            this.recruiterService.createRecruiterProfile(jobSeekerObj).subscribe(function (res) {
              if (res.status == 200) {
                alert(res.msg);

                _this25.router.navigateByUrl('dashboard/chat-home');
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          } //capture video

        }, {
          key: "allowCamera",
          value: function allowCamera() {
            this.ifAllowCamera = true;
          } // use ngAfterViewInit to make sure we initialize the videojs element
          // after the component template itself has been rendered

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this26 = this;

            // ID with which to access the template's video element
            var el = 'video_' + this.idx; // setup the player via the unique element ID

            this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_3__["default"])(document.getElementById(el), this.config, function () {
              console.log('player ready! id:', el); // print version information at startup

              var msg = 'Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_3__["default"].VERSION + ' with videojs-record ' + video_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPluginVersion('record') + ' and recordrtc ' + recordrtc__WEBPACK_IMPORTED_MODULE_4__["version"];
              video_js__WEBPACK_IMPORTED_MODULE_3__["default"].log(msg);
            }); // device is ready

            this.player.on('deviceReady', function () {
              console.log('device is ready!');
            }); // user clicked the record button and started recording

            this.player.on('startRecord', function () {
              console.log('started recording!');
            }); // user completed recording and stream is available

            this.player.on('finishRecord', function () {
              // recordedData is a blob object containing the recorded data that
              // can be downloaded by the user, stored on server etc.
              console.log('finished recording: ', _this26.player.recordedData);
              var fileName = "video_" + new Date().getMilliseconds() + ".webm"; // will be interpreted in the server as a file

              _this26.uploadVideo(_this26.player.recordedData);
            }); // error handling

            this.player.on('error', function (element, error) {
              console.warn(error);
            });
            this.player.on('deviceError', function () {
              console.error('device error:', _this26.player.deviceErrorCode);
            });
          }
        }, {
          key: "uploadVideo",
          value: function uploadVideo(video) {
            var _this27 = this;

            // var videoBlobMp4 = new Blob(video, {type: 'video/mp4'});
            this.uploadService.uploadJdVideo(video).subscribe(function (res) {
              // this.videoResume.('uploadVideo').se
              _this27.videoResume.controls['uploadVideo'].setValue(res);

              console.log(res);
            }, function (err) {});
          } // use ngOnDestroy to detach event handlers and remove the player

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.player) {
              this.player.dispose();
              this.player = false;
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this$files3;

            console.log(event);

            (_this$files3 = this.files).push.apply(_this$files3, _toConsumableArray(event.rejectedFiles));

            this.uploadResumeFile();
          }
        }, {
          key: "onRemove",
          value: function onRemove(event) {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
          }
        }, {
          key: "uploadResumeFile",
          value: function uploadResumeFile() {
            var _this28 = this;

            if (this.files.length > 0) {
              this.uploadService.uploadJdFile(this.files[0]).subscribe(function (res) {
                _this28.uploadResume.controls['uploadResume'].setValue(res);

                console.log(res);
              }, function (err) {});
            }
          }
        }, {
          key: "onSelect1",
          value: function onSelect1(event) {
            var _this$files4;

            console.log(event);

            (_this$files4 = this.files1).push.apply(_this$files4, _toConsumableArray(event.rejectedFiles));

            this.uploadDocumentFile();
          }
        }, {
          key: "onRemove1",
          value: function onRemove1(event) {
            console.log(event);
            this.files1.splice(this.files1.indexOf(event), 1);
          }
        }, {
          key: "uploadDocumentFile",
          value: function uploadDocumentFile() {
            var _this29 = this;

            if (this.files1.length > 0) {
              this.uploadService.verificationDocFile(this.files1[0]).subscribe(function (res) {
                _this29.verification.controls['uploadDocument'].setValue(res);

                console.log(res);
              }, function (err) {});
            }
          }
        }]);

        return RecruiterProfileRegisterComponent;
      }();

      RecruiterProfileRegisterComponent.ɵfac = function RecruiterProfileRegisterComponent_Factory(t) {
        return new (t || RecruiterProfileRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__["JobSeekerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recruiter_service__WEBPACK_IMPORTED_MODULE_8__["RecruiterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_file_upload_service__WEBPACK_IMPORTED_MODULE_9__["FileUploadService"]));
      };

      RecruiterProfileRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecruiterProfileRegisterComponent,
        selectors: [["app-recruiter-profile-register"]],
        decls: 198,
        vars: 41,
        consts: [[1, "section-full", "job-categories", "content-inner-2", "bg-white"], [1, "container"], [3, "linear"], ["stepper", ""], ["label", "Create Job-Seeker Card", 3, "stepControl"], [1, "job-bx", "job-profile"], [1, "job-bx-title", "clearfix"], [1, "font-weight-700", "pull-left", "text-uppercase"], [3, "formGroup"], [1, "row", "m-b30"], [1, "col-lg-6", "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "Alexander Weir", "formControlName", "fullName", 1, "form-control"], [4, "ngIf"], ["formControlName", "experience", 1, "form-control"], ["value", ""], ["value", "experience.experienceRange", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. Microsoft", "formControlName", "companyName", 1, "form-control"], ["formControlName", "jobLocation", 1, "form-control"], ["value", "joblocation.id", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "e.g. Microsoft", "formControlName", "jobRole", 1, "form-control"], ["formControlName", "expected_salary", 1, "form-control"], ["value", "salary.salaryRange", 4, "ngFor", "ngForOf"], ["formControlName", "college", 1, "form-control"], ["value", "college.collegeName", 4, "ngFor", "ngForOf"], ["formControlName", "degree", 1, "form-control"], ["value", "degree.id", 4, "ngFor", "ngForOf"], ["formControlName", "functionalArea", 3, "placeholder", "data", "settings", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], ["formControlName", "department", 1, "form-control"], ["value", "department.departmentName", 4, "ngFor", "ngForOf"], ["formControlName", "skills", 3, "placeholder", "data", "settings", "onSelect"], [1, "site-button", "m-b30"], ["label", "Video Resume", 3, "stepControl"], [1, "font-weight-700", "text-uppercase"], [1, "float-right"], ["href", ""], [1, "col-lg-12", "col-md-12"], [1, "text-center", "site-button", "m-b30", "m-r30", 3, "click"], ["playsinline", "", 1, "video-js", "vjs-default-skin", 3, "id"], ["mat-button", "", "matStepperPrevious", "", 1, "site-button", "m-b30", "m-r30"], ["mat-button", "", "matStepperNext", "", 1, "site-button", "m-b30"], ["label", "Upload Resume", 3, "stepControl"], [1, "attach-resume", 3, "formGroup"], [1, "row"], [3, "multiple", "maxFileSize", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "text-center"], ["label", "Verification", 3, "stepControl"], [1, "row", "mb-3"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "name", "selectDocumentType", "id", "aluminiIDCard", "value", "aluminiIDCard", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "aluminiIDCard", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "studentIDCard", "value", "studentIDCard", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "studentIDCard", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "transcript", "value", "transcript", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "transcript", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "degreeCertificate", "value", "degreeCertificate", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "degreeCertificate", 1, "custom-control-label"], ["type", "radio", "name", "selectDocumentType", "id", "hostelCard", "value", "hostelCard", "formControlName", "selectDocumentType", 1, "custom-control-input"], ["for", "hostelCard", 1, "custom-control-label"], ["mat-button", "", 1, "site-button", "m-b30"], ["value", "experience.experienceRange"], ["value", "joblocation.id"], ["value", "salary.salaryRange"], ["value", "college.collegeName"], ["value", "degree.id"], ["value", "department.departmentName"], [3, "removable", "removed"]],
        template: function RecruiterProfileRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecruiterProfileRegisterComponent_span_17_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Required Experience:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RecruiterProfileRegisterComponent_option_25_Template, 2, 1, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RecruiterProfileRegisterComponent_span_27_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Company Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RecruiterProfileRegisterComponent_span_34_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Job Location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RecruiterProfileRegisterComponent_option_42_Template, 2, 1, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RecruiterProfileRegisterComponent_span_44_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Your Job Role:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RecruiterProfileRegisterComponent_span_51_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Offered Salary:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RecruiterProfileRegisterComponent_option_59_Template, 2, 1, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RecruiterProfileRegisterComponent_span_61_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Expected College:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, RecruiterProfileRegisterComponent_option_69_Template, 2, 1, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, RecruiterProfileRegisterComponent_span_71_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Expected Degree:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RecruiterProfileRegisterComponent_option_79_Template, 2, 1, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, RecruiterProfileRegisterComponent_span_81_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Functional Area:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ng-multiselect-dropdown", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function RecruiterProfileRegisterComponent_Template_ng_multiselect_dropdown_onSelect_86_listener($event) {
              return ctx.onItemSelect($event);
            })("onSelectAll", function RecruiterProfileRegisterComponent_Template_ng_multiselect_dropdown_onSelectAll_86_listener($event) {
              return ctx.onSelectAll($event);
            })("onDeSelect", function RecruiterProfileRegisterComponent_Template_ng_multiselect_dropdown_onDeSelect_86_listener($event) {
              return ctx.onItemDeSelect($event);
            })("onDeSelectAll", function RecruiterProfileRegisterComponent_Template_ng_multiselect_dropdown_onDeSelectAll_86_listener($event) {
              return ctx.onDeSelectAll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, RecruiterProfileRegisterComponent_span_88_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Department:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Select from list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, RecruiterProfileRegisterComponent_option_96_Template, 2, 1, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, RecruiterProfileRegisterComponent_span_98_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Skills:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ng-multiselect-dropdown", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function RecruiterProfileRegisterComponent_Template_ng_multiselect_dropdown_onSelect_103_listener($event) {
              return ctx.onItemSelectSkill($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, RecruiterProfileRegisterComponent_span_105_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-step", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Walk Recruiters through your Video Resume. Don't miss your 1st impression! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "small", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Skip this step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " 1] Allow access to your Webcam and microphone to start recording your video Job Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " 2] In case you have cliked on \"Block\", you can refresh this page and Allow again. Don't worry, It's 100% safe & secured");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " 3] Please ensure that you are wearing a decent attire and in a silent area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " 4] Ensure to cover your core values and achievements within 60 Seconds of video");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterProfileRegisterComponent_Template_button_click_127_listener() {
              return ctx.allowCamera();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Allow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "video", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, RecruiterProfileRegisterComponent_span_131_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-step", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Upload your updated Resume. Macrax support PDF, DOC, and DOCX formats only");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ngx-dropzone", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RecruiterProfileRegisterComponent_Template_ngx_dropzone_change_145_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ngx-dropzone-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "You can also drag & drop here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, RecruiterProfileRegisterComponent_ngx_dropzone_preview_148_Template, 3, 3, "ngx-dropzone-preview", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Note: File size shouldn't exceed 15 MBs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-step", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Upload one of the following documents to verify your College, Department and Degree as mentioned");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Alumini ID Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, RecruiterProfileRegisterComponent_span_169_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Student ID Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Transcript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Degree Certificate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Hostel Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ngx-dropzone", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RecruiterProfileRegisterComponent_Template_ngx_dropzone_change_188_listener($event) {
              return ctx.onSelect1($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "ngx-dropzone-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "You can also drag & drop here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, RecruiterProfileRegisterComponent_ngx_dropzone_preview_191_Template, 3, 3, "ngx-dropzone-preview", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.createJobSeekerCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createJobSeekerCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("fullName").valid && ctx.createJobSeekerCard.get("fullName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experienceList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("experience").valid && ctx.createJobSeekerCard.get("experience").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("companyName").valid && ctx.createJobSeekerCard.get("companyName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.joblocationList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("jobLocation").valid && ctx.createJobSeekerCard.get("jobLocation").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("jobRole").valid && ctx.createJobSeekerCard.get("jobRole").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salaryRangesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("expected_salary").valid && ctx.createJobSeekerCard.get("expected_salary").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collegesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("college").valid && ctx.createJobSeekerCard.get("college").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.degreeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("degree").valid && ctx.createJobSeekerCard.get("degree").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Multi select")("data", ctx.functaionAreaList)("settings", ctx.MultSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("functionalArea").valid && ctx.createJobSeekerCard.get("functionalArea").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departmentsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("department").valid && ctx.createJobSeekerCard.get("department").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Multi select")("data", ctx.skillList)("settings", ctx.MultSelectSkill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.createJobSeekerCard.get("skills").valid && ctx.createJobSeekerCard.get("skills").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.videoResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.videoResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "video_", ctx.idx, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.videoResume.get("uploadVideo").valid && ctx.videoResume.get("uploadVideo").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.uploadResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadResume);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("maxFileSize", 2000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.verification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.verification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.verification.get("selectDocumentType").valid && ctx.verification.get("selectDocumentType").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false)("maxFileSize", 2000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files1);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["MultiSelectComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzoneComponent"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["ɵb"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__["NgxDropzonePreviewComponent"]],
        styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n  \n  .mat-form-field[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n  \n  h5[_ngcontent-%COMP%]\n  {\n    font-size: 20px;\n    line-height: 28px;\n    margin-bottom: 10px;\n    font-weight: 500;\n  }\n  \n  .video-js[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    background-color: white;\n}\n  \n  .video-js[_ngcontent-%COMP%]   .vjs-tech[_ngcontent-%COMP%]{\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3J1aXRlci1wcm9maWxlLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUNBOztJQUVFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLHVCQUF1QjtBQUMzQjs7RUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJyZWNydWl0ZXItcHJvZmlsZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIGg1XG4gIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC52aWRlby1qcyB2aWRlbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udmlkZW8tanMgLnZqcy10ZWNoe1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruiterProfileRegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recruiter-profile-register',
            templateUrl: './recruiter-profile-register.component.html',
            styleUrls: ['./recruiter-profile-register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__["JobSeekerService"]
          }, {
            type: src_app_services_recruiter_service__WEBPACK_IMPORTED_MODULE_8__["RecruiterService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: src_app_services_file_upload_service__WEBPACK_IMPORTED_MODULE_9__["FileUploadService"]
          }];
        }, null);
      })();

      var FuncationAreaDropDown = function FuncationAreaDropDown() {
        _classCallCheck(this, FuncationAreaDropDown);
      };

      var SkillsDropDown = function SkillsDropDown() {
        _classCallCheck(this, SkillsDropDown);
      };
      /***/

    },

    /***/
    "MaJH":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/jobseeker-signup/jobseeker-signup.component.ts ***!
      \**********************************************************************/

    /*! exports provided: JobseekerSignupComponent */

    /***/
    function MaJH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobseekerSignupComponent", function () {
        return JobseekerSignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/user.model */
      "Tj/N");
      /* harmony import */


      var src_app_api_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api-url */
      "0UPu");
      /* harmony import */


      var src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/job-seeker.service */
      "1487");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sms.service */
      "RElC");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      function JobseekerSignupComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Address is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobseekerSignupComponent_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobseekerSignupComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobseekerSignupComponent_span_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OTP is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var JobseekerSignupComponent = /*#__PURE__*/function () {
        function JobseekerSignupComponent(_formBuilder, jobSeekerService, router, smsService, loginService) {
          _classCallCheck(this, JobseekerSignupComponent);

          this._formBuilder = _formBuilder;
          this.jobSeekerService = jobSeekerService;
          this.router = router;
          this.smsService = smsService;
          this.loginService = loginService;
          this.hasFormErrors = false;
        }

        _createClass(JobseekerSignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createFormJobSeeker();
          }
        }, {
          key: "createFormJobSeeker",
          value: function createFormJobSeeker() {
            this.jobSeekerRegisterForm = this._formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
              mobileNo: [''],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              privacyPolicies: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "prepareUser",
          value: function prepareUser() {
            var controls = this.jobSeekerRegisterForm.controls;

            var _user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();

            _user.userName = controls.userName.value;
            _user.password = controls.password.value;
            _user.mobileNo = controls.mobileNo.value;
            _user.role = src_app_api_url__WEBPACK_IMPORTED_MODULE_3__["Constants"].Roles.Job_Seeker;
            _user.otp = controls.otp.value;
            return _user;
          }
        }, {
          key: "isControlInvalid",
          value: function isControlInvalid(controlName) {
            var control = this.jobSeekerRegisterForm.controls[controlName];
            var result = control.invalid && control.touched;
            return result;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            debugger;
            this.hasFormErrors = false;
            var controls = this.jobSeekerRegisterForm.controls;
            /** check form */

            if (this.jobSeekerRegisterForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            console.log(controls);
            var user = this.prepareUser();
            this.createUser(user);
          }
        }, {
          key: "createUser",
          value: function createUser(_user) {
            var _this30 = this;

            this.loginService.singUpUser(_user).subscribe(function (res) {
              console.log(res);

              if (!res) {
                return;
              }

              if (res.msg == "This email id is already registered with system.") {
                alert(res.msg + "Please use another email id");
                return;
              } else {
                alert(res.msg);
                localStorage.setItem('macrax-emailId', res.data);

                _this30.router.navigateByUrl('/jobseeker-login'); // this.router.navigateByUrl('/dashboard/job-seeker-profilereg')

              }

              ;
            });
          }
        }, {
          key: "sendOtp",
          value: function sendOtp() {
            var controls = this.jobSeekerRegisterForm.controls;
            var data = {
              "expiry": 900,
              "message": "Your otp code is {code}",
              "mobile": 8459263834,
              "sender_id": "SMSInfo",
              "userName": controls.userName.value
            };
            this.smsService.sendOtp(data).subscribe(function (res) {
              console.log(res);
            });
          }
        }]);

        return JobseekerSignupComponent;
      }();

      JobseekerSignupComponent.ɵfac = function JobseekerSignupComponent_Factory(t) {
        return new (t || JobseekerSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_4__["JobSeekerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_6__["SmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]));
      };

      JobseekerSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobseekerSignupComponent,
        selectors: [["app-jobseeker-signup"]],
        decls: 58,
        vars: 5,
        consts: [[1, "section-full", "content-inner", "browse-job", "shop-account"], [1, "container"], [1, "row"], [1, "col-md-6", "m-b30", "mx-auto"], [1, "p-a30", "job-bx", "radius-sm", "bg-white", "m-auto"], [1, ""], ["id", "recruiterRegisterForm", 1, "col-12", "p-a0", 3, "formGroup"], [1, "font-weight-700", "m-b5"], [1, "form-group"], [1, "font-weight-700"], ["name", "emailId", "required", "", "placeholder", "Your Email Address", "type", "email", "formControlName", "userName", 1, "form-control"], [4, "ngIf"], ["name", "mobileNumber", "required", "", "placeholder", "Your Mobile Number", "type", "text", "formControlName", "mobileNo", 1, "form-control"], ["name", "setPassword", "required", "", "placeholder", "Enter Password", "type", "password", "formControlName", "password", 1, "form-control"], ["name", "confirmPassword", "required", "", "placeholder", "Confirm Password", "type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["for", ""], [1, "site-button", "button-sm", "float-right", 3, "click"], ["name", "otp", "required", "", "placeholder", "Enter OTP", "type", "password", "formControlName", "otp", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "privacyPolicies", "checked", "", "formControlName", "privacyPolicies", 1, "custom-control-input"], ["for", "privacyPolicies", 1, "custom-control-label"], ["href", "", "target", "_blank"], [1, "text-left"], [1, "site-button", "button-lg", "outline", "outline-2", 3, "click"], ["href", "/jobseeker-login", 1, "m-l5", "m-t15", "forget-pass", "float-right"], [1, "fa", "fa-sign-in"]],
        template: function JobseekerSignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign up as Job Seeker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JobseekerSignupComponent_span_16_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Set Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, JobseekerSignupComponent_span_26_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirm Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, JobseekerSignupComponent_span_32_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Send OTP to above email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobseekerSignupComponent_Template_button_click_36_listener() {
              return ctx.sendOtp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Send OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "OTP *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, JobseekerSignupComponent_span_43_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "By Registering, you agree to our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobseekerSignupComponent_Template_button_click_52_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sign Up as Job Seeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Login Now. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.jobSeekerRegisterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobSeekerRegisterForm.get("userName").valid && ctx.jobSeekerRegisterForm.get("userName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobSeekerRegisterForm.get("password").valid && ctx.jobSeekerRegisterForm.get("password").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobSeekerRegisterForm.get("confirmPassword").valid && ctx.jobSeekerRegisterForm.get("confirmPassword").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobSeekerRegisterForm.get("otp").valid && ctx.jobSeekerRegisterForm.get("otp").touched);
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzZWVrZXItc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobseekerSignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-jobseeker-signup',
            templateUrl: './jobseeker-signup.component.html',
            styleUrls: ['./jobseeker-signup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_4__["JobSeekerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_6__["SmsService"]
          }, {
            type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QvHX":
    /*!********************************************!*\
      !*** ./src/app/services/window.service.ts ***!
      \********************************************/

    /*! exports provided: WindowService */

    /***/
    function QvHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowService", function () {
        return WindowService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WindowService = /*#__PURE__*/function () {
        function WindowService() {
          _classCallCheck(this, WindowService);
        }

        _createClass(WindowService, [{
          key: "windowRef",
          get: function get() {
            return window;
          }
        }]);

        return WindowService;
      }();

      WindowService.ɵfac = function WindowService_Factory(t) {
        return new (t || WindowService)();
      };

      WindowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WindowService,
        factory: WindowService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RElC":
    /*!*****************************************!*\
      !*** ./src/app/services/sms.service.ts ***!
      \*****************************************/

    /*! exports provided: SmsService */

    /***/
    function RElC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmsService", function () {
        return SmsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-url */
      "0UPu"); // Models


      var SmsService = /*#__PURE__*/function () {
        function SmsService(http) {
          _classCallCheck(this, SmsService);

          this.http = http;
          this.url = 'otp/generateOtp?userName=';
          this.token = localStorage.getItem('macrax-token');
        }

        _createClass(SmsService, [{
          key: "getHTTPHeaders",
          value: function getHTTPHeaders() {
            var result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            result = result.set('Content-Type', 'application/json');
            result = result.set('Authorization', 'Bearer ' + this.token);
            return result;
          }
        }, {
          key: "sendOtp",
          value: function sendOtp(data) {
            // req.headers({
            //     "authorization": "Basic TUFDUkFYOk9mZmljaWFsQDEyMzQ1",
            //     "x-rapidapi-host": "d7sms.p.rapidapi.com",
            //     "x-rapidapi-key": "c4211c398emsh86eb1cad5fbcfbbp14b4c1jsn7e91a0ab752b",
            //     "useQueryString": true
            // });
            // let httpHeaders = new HttpHeaders()
            //     .set('authorization', 'Basic TUFDUkFYOk9mZmljaWFsQDEyMzQ1')
            //     .set('x-rapidapi-host', 'd7sms.p.rapidapi.com')
            //     .set('x-rapidapi-key', 'c4211c398emsh86eb1cad5fbcfbbp14b4c1jsn7e91a0ab752b')
            //     .set( "useQueryString", 'true');
            var userName = localStorage.getItem('macrax-emailId'); //const httpHeaders = this.getHTTPHeaders();

            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + this.url + data['userName']); //return this.http.post(this.url,data,{headers: httpHeaders });
          }
        }]);

        return SmsService;
      }();

      SmsService.ɵfac = function SmsService_Factory(t) {
        return new (t || SmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SmsService,
        factory: SmsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'JobPortal';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Tj/N":
    /*!**************************************!*\
      !*** ./src/app/models/user.model.ts ***!
      \**************************************/

    /*! exports provided: UserModel */

    /***/
    function TjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModel", function () {
        return UserModel;
      });

      var UserModel = /*#__PURE__*/function () {
        function UserModel() {
          _classCallCheck(this, UserModel);
        }

        _createClass(UserModel, [{
          key: "UserModel",
          value: function UserModel() {
            this.id = 0;
            this.userName = '';
            this.password = '';
            this.role = '';
            this.mobileNo = '';
            this.ipAddress = '';
            this.rightPosition = '';
            this.messages = [];
            this.otp = '';
          }
        }, {
          key: "deserialize",
          value: function deserialize(input) {
            return Object.assign(this, input);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.id = 0;
            this.userName = '';
            this.password = '';
            this.role = '';
          }
        }, {
          key: "setRightPosition",
          value: function setRightPosition(rightPosition) {
            this.rightPosition = rightPosition;
          }
        }, {
          key: "setId",
          value: function setId(id) {
            this.id = id;
          }
        }, {
          key: "setUsername",
          value: function setUsername(username) {
            this.userName = username;
          }
        }, {
          key: "setRole",
          value: function setRole(role) {
            this.role = role;
          }
        }, {
          key: "setMessages",
          value: function setMessages(messages) {
            this.messages = messages;
          }
        }]);

        return UserModel;
      }();
      /***/

    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 3,
        vars: 0,
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "U7iZ":
    /*!************************************************************!*\
      !*** ./src/app/videojs-record/videojs-record.component.ts ***!
      \************************************************************/

    /*! exports provided: VideojsRecordComponent */

    /***/
    function U7iZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideojsRecordComponent", function () {
        return VideojsRecordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! video.js */
      "8OJ3");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! recordrtc */
      "qe5e");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! videojs-record/dist/videojs.record.js */
      "OWZb");
      /* harmony import */


      var videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3__);
      /*
      // Required imports when recording audio-only using the videojs-wavesurfer plugin
      import * as WaveSurfer from 'wavesurfer.js';
      import * as MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
      WaveSurfer.microphone = MicrophonePlugin;
      
      // Register videojs-wavesurfer plugin
      import * as Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
      */
      // register videojs-record plugin with this import


      var VideojsRecordComponent = /*#__PURE__*/function () {
        // constructor initializes our declared vars
        function VideojsRecordComponent(elementRef) {
          _classCallCheck(this, VideojsRecordComponent);

          // index to create unique ID for component
          this.idx = 'clip1';
          this.player = false; // save reference to plugin (so it initializes)

          this.plugin = videojs_record_dist_videojs_record_js__WEBPACK_IMPORTED_MODULE_3__; // video.js configuration

          this.config = {
            controls: true,
            autoplay: false,
            fluid: false,
            loop: false,
            width: 320,
            height: 240,
            bigPlayButton: false,
            controlBar: {
              volumePanel: false
            },
            plugins: {
              /*
              // wavesurfer section is only needed when recording audio-only
              wavesurfer: {
                  backend: 'WebAudio',
                  waveColor: '#36393b',
                  progressColor: 'black',
                  debug: true,
                  cursorWidth: 1,
                  displayMilliseconds: true,
                  hideScrollbar: true,
                  plugins: [
                      // enable microphone plugin
                      WaveSurfer.microphone.create({
                          bufferSize: 4096,
                          numberOfInputChannels: 1,
                          numberOfOutputChannels: 1,
                          constraints: {
                              video: false,
                              audio: true
                          }
                      })
                  ]
              },
              */
              // configure videojs-record plugin
              record: {
                audio: false,
                video: true,
                debug: true
              }
            }
          };
        }

        _createClass(VideojsRecordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // use ngAfterViewInit to make sure we initialize the videojs element
          // after the component template itself has been rendered

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this31 = this;

            // ID with which to access the template's video element
            var el = 'video_' + this.idx; // setup the player via the unique element ID

            this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById(el), this.config, function () {
              console.log('player ready! id:', el); // print version information at startup

              var msg = 'Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].VERSION + ' with videojs-record ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPluginVersion('record') + ' and recordrtc ' + recordrtc__WEBPACK_IMPORTED_MODULE_2__["version"];
              video_js__WEBPACK_IMPORTED_MODULE_1__["default"].log(msg);
            }); // device is ready

            this.player.on('deviceReady', function () {
              console.log('device is ready!');
            }); // user clicked the record button and started recording

            this.player.on('startRecord', function () {
              console.log('started recording!');
            }); // user completed recording and stream is available

            this.player.on('finishRecord', function () {
              // recordedData is a blob object containing the recorded data that
              // can be downloaded by the user, stored on server etc.
              console.log('finished recording: ', _this31.player.recordedData);
            }); // error handling

            this.player.on('error', function (element, error) {
              console.warn(error);
            });
            this.player.on('deviceError', function () {
              console.error('device error:', _this31.player.deviceErrorCode);
            });
          } // use ngOnDestroy to detach event handlers and remove the player

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.player) {
              this.player.dispose();
              this.player = false;
            }
          }
        }]);

        return VideojsRecordComponent;
      }();

      VideojsRecordComponent.ɵfac = function VideojsRecordComponent_Factory(t) {
        return new (t || VideojsRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      VideojsRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideojsRecordComponent,
        selectors: [["app-videojs-record"]],
        decls: 1,
        vars: 1,
        consts: [["playsinline", "", 1, "video-js", "vjs-default-skin", 3, "id"]],
        template: function VideojsRecordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "video_", ctx.idx, "");
          }
        },
        styles: [".video-js[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvanMtcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InZpZGVvanMtcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjaGFuZ2UgcGxheWVyIGJhY2tncm91bmQgY29sb3IgKi9cbi52aWRlby1qcyB2aWRlbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideojsRecordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-videojs-record',
            templateUrl: './videojs-record.component.html',
            styleUrls: ['./videojs-record.component.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 2,
        vars: 0,
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_common_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/common/header/header.component */
      "zotE");
      /* harmony import */


      var _pages_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/common/footer/footer.component */
      "83yU");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/common/navbar/navbar.component */
      "fid/");
      /* harmony import */


      var _pages_common_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _pages_profile_register_profile_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/profile-register/profile-register.component */
      "FM+r");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_common_slider_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/common/slider/slider.component */
      "Ap0D");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var _pages_jobseeker_signup_jobseeker_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pages/jobseeker-signup/jobseeker-signup.component */
      "MaJH");
      /* harmony import */


      var _pages_recruiter_signup_recruiter_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/recruiter-signup/recruiter-signup.component */
      "rZHi");
      /* harmony import */


      var _pages_recruiter_login_recruiter_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/recruiter-login/recruiter-login.component */
      "jcVv");
      /* harmony import */


      var _pages_jobseeker_login_jobseeker_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/jobseeker-login/jobseeker-login.component */
      "zqXR");
      /* harmony import */


      var _services_job_seeker_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./services/job-seeker.service */
      "1487");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _pages_recruiter_profile_register_recruiter_profile_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./pages/recruiter-profile-register/recruiter-profile-register.component */
      "GqXI");
      /* harmony import */


      var _services_recruiter_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./services/recruiter.service */
      "hTrY");
      /* harmony import */


      var _services_sms_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./services/sms.service */
      "RElC");
      /* harmony import */


      var _videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./videojs-record/videojs-record.component */
      "U7iZ");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./services/login.service */
      "EFyh");
      /* harmony import */


      var ng2_multiselect__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ng2-multiselect */
      "zYan");
      /* harmony import */


      var _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./pages/chat-screen/chat-screen.component */
      "bB/R");
      /* harmony import */


      var _pages_chat_home_chat_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pages/chat-home/chat-home.component */
      "/1LO");
      /* harmony import */


      var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./pages/forget-password/forget-password.component */
      "BUfL");
      /* harmony import */


      var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./services/file-upload.service */
      "FO31");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");
      /* harmony import */


      var _pages_recruiter_forget_password_recruiter_forget_password_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./pages/recruiter-forget-password/recruiter-forget-password.component */
      "ysUA");
      /* harmony import */


      var _demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./demo-component/demo-component.component */
      "+yIM");
      /* harmony import */


      var _pages_chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./pages/chat-client/chat-client.component */
      "vYcK");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_27__["JobSeekerService"], _services_recruiter_service__WEBPACK_IMPORTED_MODULE_31__["RecruiterService"], _services_sms_service__WEBPACK_IMPORTED_MODULE_32__["SmsService"], _services_login_service__WEBPACK_IMPORTED_MODULE_34__["LoginService"], _services_file_upload_service__WEBPACK_IMPORTED_MODULE_39__["FileUploadService"]],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBBootstrapModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["ButtonsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_29__["NgMultiSelectDropDownModule"].forRoot(), ng2_multiselect__WEBPACK_IMPORTED_MODULE_35__["MultiselectDropdownModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_40__["NgxDropzoneModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _pages_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _pages_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _pages_common_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"], _pages_profile_register_profile_register_component__WEBPACK_IMPORTED_MODULE_17__["ProfileRegisterComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], _pages_common_slider_slider_component__WEBPACK_IMPORTED_MODULE_20__["SliderComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"], _pages_jobseeker_signup_jobseeker_signup_component__WEBPACK_IMPORTED_MODULE_23__["JobseekerSignupComponent"], _pages_recruiter_signup_recruiter_signup_component__WEBPACK_IMPORTED_MODULE_24__["RecruiterSignupComponent"], _pages_recruiter_login_recruiter_login_component__WEBPACK_IMPORTED_MODULE_25__["RecruiterLoginComponent"], _pages_jobseeker_login_jobseeker_login_component__WEBPACK_IMPORTED_MODULE_26__["JobseekerLoginComponent"], _pages_recruiter_profile_register_recruiter_profile_register_component__WEBPACK_IMPORTED_MODULE_30__["RecruiterProfileRegisterComponent"], _videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_33__["VideojsRecordComponent"], _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_36__["ChatScreenComponent"], _pages_chat_home_chat_home_component__WEBPACK_IMPORTED_MODULE_37__["ChatHomeComponent"], _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgetPasswordComponent"], _pages_recruiter_forget_password_recruiter_forget_password_component__WEBPACK_IMPORTED_MODULE_41__["RecruiterForgetPasswordComponent"], _demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_42__["DemoComponentComponent"], _pages_chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_43__["ChatClientComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBRootModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["ButtonsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_29__["NgMultiSelectDropDownModule"], ng2_multiselect__WEBPACK_IMPORTED_MODULE_35__["MultiselectDropdownModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_40__["NgxDropzoneModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _pages_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _pages_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _pages_common_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"], _pages_profile_register_profile_register_component__WEBPACK_IMPORTED_MODULE_17__["ProfileRegisterComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], _pages_common_slider_slider_component__WEBPACK_IMPORTED_MODULE_20__["SliderComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"], _pages_jobseeker_signup_jobseeker_signup_component__WEBPACK_IMPORTED_MODULE_23__["JobseekerSignupComponent"], _pages_recruiter_signup_recruiter_signup_component__WEBPACK_IMPORTED_MODULE_24__["RecruiterSignupComponent"], _pages_recruiter_login_recruiter_login_component__WEBPACK_IMPORTED_MODULE_25__["RecruiterLoginComponent"], _pages_jobseeker_login_jobseeker_login_component__WEBPACK_IMPORTED_MODULE_26__["JobseekerLoginComponent"], _pages_recruiter_profile_register_recruiter_profile_register_component__WEBPACK_IMPORTED_MODULE_30__["RecruiterProfileRegisterComponent"], _videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_33__["VideojsRecordComponent"], _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_36__["ChatScreenComponent"], _pages_chat_home_chat_home_component__WEBPACK_IMPORTED_MODULE_37__["ChatHomeComponent"], _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_38__["ForgetPasswordComponent"], _pages_recruiter_forget_password_recruiter_forget_password_component__WEBPACK_IMPORTED_MODULE_41__["RecruiterForgetPasswordComponent"], _demo_component_demo_component_component__WEBPACK_IMPORTED_MODULE_42__["DemoComponentComponent"], _pages_chat_client_chat_client_component__WEBPACK_IMPORTED_MODULE_43__["ChatClientComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBBootstrapModule"].forRoot(), angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["ButtonsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_29__["NgMultiSelectDropDownModule"].forRoot(), ng2_multiselect__WEBPACK_IMPORTED_MODULE_35__["MultiselectDropdownModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_40__["NgxDropzoneModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"]],
            // exports: [
            //   MatButtonModule,
            //   MatFormFieldModule,
            //   MatInputModule,
            //   MatRippleModule,
            // ],
            providers: [_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_27__["JobSeekerService"], _services_recruiter_service__WEBPACK_IMPORTED_MODULE_31__["RecruiterService"], _services_sms_service__WEBPACK_IMPORTED_MODULE_32__["SmsService"], _services_login_service__WEBPACK_IMPORTED_MODULE_34__["LoginService"], _services_file_upload_service__WEBPACK_IMPORTED_MODULE_39__["FileUploadService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bB/R":
    /*!************************************************************!*\
      !*** ./src/app/pages/chat-screen/chat-screen.component.ts ***!
      \************************************************************/

    /*! exports provided: ChatScreenComponent */

    /***/
    function bBR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatScreenComponent", function () {
        return ChatScreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");

      var ChatScreenComponent = /*#__PURE__*/function () {
        function ChatScreenComponent() {
          _classCallCheck(this, ChatScreenComponent);
        }

        _createClass(ChatScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatScreenComponent;
      }();

      ChatScreenComponent.ɵfac = function ChatScreenComponent_Factory(t) {
        return new (t || ChatScreenComponent)();
      };

      ChatScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatScreenComponent,
        selectors: [["app-chat-screen"]],
        decls: 121,
        vars: 0,
        consts: [["id", "wrapper", 1, "container", "my-4"], [1, "messaging"], [1, "inbox_msg"], [1, "inbox_people"], [1, "headind_srch"], [1, "recent_heading"], [1, "srch_bar"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], [1, "inbox_chat"], [1, "chat_list", "active_chat"], [1, "chat_people"], [1, "chat_img"], ["src", "https://ptetutorials.com/images/user-profile.png", "alt", "sunil"], [1, "chat_ib"], [1, "chat_date"], [1, "chat_list"], [1, "card"], [1, "card-header"], [1, "mb-0", "text-bold"], [1, "card-body"], [1, "mesgs"], [1, "msg_history"], [1, "incoming_msg"], [1, "incoming_msg_img"], [1, "received_msg"], [1, "received_withd_msg"], [1, "time_date"], [1, "outgoing_msg"], [1, "sent_msg"], [1, "input-group"], ["aria-label", "With textarea", "placeholder", "Type a message", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text", "btn", "btn-outline-primary"], [1, "fa", "fa-paper-plane-o"]],
        template: function ChatScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Xyz ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Dec 25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Test, which is a new approach to have all solutions astrology under one roof. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " ABC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dec 25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Test, which is a new approach to have all solutions astrology under one roof. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " EFX ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dec 25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Test, which is a new approach to have all solutions astrology under one roof. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Xyz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Test which is a new approach to have all solutions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " 11:01 AM | June 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "textarea", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_common_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"]],
        styles: ["h5[_ngcontent-%COMP%] {\r\n\tfont-size: 20px !important;\r\n\tline-height: 28px !important;\r\n\tmargin-bottom: 10px !important;\r\n\tfont-weight: 500 !important;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\tline-height: 28px;\r\n\t\r\n\tfont-weight: 500;\r\n}\r\nh4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #232323;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n.inbox_people[_ngcontent-%COMP%] {\r\n\tbackground: #f8f8f8 none repeat scroll 0 0;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\twidth: 40%;\r\n\tborder-right: 1px solid #c4c4c4;\r\n}\r\n.inbox_msg[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #c4c4c4;\r\n\tclear: both;\r\n\toverflow: hidden;\r\n}\r\n.top_spac[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0 0;\r\n}\r\n.recent_heading[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n}\r\n.srch_bar[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\twidth: 60%;\r\n\t\r\n}\r\n.headind_srch[_ngcontent-%COMP%] {\r\n\tpadding: 10px 29px 10px 20px;\r\n\toverflow: hidden;\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n}\r\n.recent_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tcolor: #2e55fa;\r\n\tfont-size: 21px;\r\n\tmargin: auto;\r\n}\r\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #cdcdcd;\r\n\tborder-width: 0 0 1px 0;\r\n\twidth: 80%;\r\n\tpadding: 2px 0 4px 6px;\r\n\tbackground: none;\r\n}\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tpadding: 0;\r\n\tcolor: #707070;\r\n\tfont-size: 16px;\r\n}\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n\tmargin: 0 0 0 -27px;\r\n}\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n\tfont-size: 15px;\r\n\tcolor: #464646;\r\n\tmargin: 0 0 8px 0;\r\n}\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tfloat: right;\r\n}\r\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tcolor: #989898;\r\n\tmargin: auto;\r\n}\r\n.chat_img[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 11%;\r\n}\r\n.chat_ib[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tpadding: 0 0 0 15px;\r\n\twidth: 88%;\r\n}\r\n.chat_people[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tclear: both;\r\n}\r\n.chat_list[_ngcontent-%COMP%] {\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n\tmargin: 0;\r\n\tpadding: 18px 16px 10px;\r\n}\r\n.inbox_chat[_ngcontent-%COMP%] {\r\n\theight: 550px;\r\n\toverflow-y: scroll;\r\n}\r\n.active_chat[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb;\r\n}\r\n.incoming_msg_img[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\twidth: 6%;\r\n}\r\n.received_msg[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 0 0 10px;\r\n\tvertical-align: top;\r\n\twidth: 92%;\r\n}\r\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tcolor: #646464;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n.time_date[_ngcontent-%COMP%] {\r\n\tcolor: #747474;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin: 8px 0 0;\r\n}\r\n.received_withd_msg[_ngcontent-%COMP%] {\r\n\twidth: 57%;\r\n}\r\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #2e55fa none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tcolor: #fff;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n.outgoing_msg[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tmargin: 26px 0 26px;\r\n}\r\n.sent_msg[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\twidth: 46%;\r\n}\r\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tcolor: #4c4c4c;\r\n\tfont-size: 15px;\r\n\tmin-height: 48px;\r\n\twidth: 100%;\r\n}\r\n.type_msg[_ngcontent-%COMP%] {\r\n\tborder-top: 1px solid #c4c4c4;\r\n\tposition: relative;\r\n}\r\n.msg_send_btn[_ngcontent-%COMP%] {\r\n\tbackground: #2e55fa none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfont-size: 17px;\r\n\theight: 33px;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 11px;\r\n\twidth: 33px;\r\n}\r\n.messaging[_ngcontent-%COMP%] {\r\n\tpadding: 0 0 50px 0;\r\n}\r\n.msg_history[_ngcontent-%COMP%] {\r\n\theight: 516px;\r\n\toverflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLDhCQUE4QjtDQUM5QiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQywwQ0FBMEM7Q0FDMUMsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLDRCQUE0QjtDQUM1QixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFlBQVk7QUFDYjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsbURBQW1EO0NBQ25ELG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsY0FBYztDQUNkLGVBQWU7QUFDaEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFDQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLFNBQVM7Q0FDVCx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFNBQVM7QUFDVjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYO0FBQ0E7Q0FDQywwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsU0FBUztDQUNULDBCQUEwQjtDQUMxQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsU0FBUztDQUNULFdBQVc7Q0FDWCwwQkFBMEI7Q0FDMUIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osVUFBVTtBQUNYO0FBQ0E7Q0FDQyxtREFBbUQ7Q0FDbkQsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsMENBQTBDO0NBQzFDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGVBQWU7Q0FDZixlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULFdBQVc7QUFDWjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6ImNoYXQtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNSB7XHJcblx0Zm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcblx0bGluZS1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcbmg0IHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0LyogbWFyZ2luLWJvdHRvbTogMTVweDsgKi9cclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmg0IGEge1xyXG5cdGNvbG9yOiAjMjMyMzIzO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uaW5ib3hfcGVvcGxlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbn1cclxuLmluYm94X21zZyB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50b3Bfc3BhYyB7XHJcblx0bWFyZ2luOiAyMHB4IDAgMDtcclxufVxyXG5cclxuLnJlY2VudF9oZWFkaW5nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcbi5zcmNoX2JhciB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0LyogcGFkZGluZzogNXB4OyAqL1xyXG59XHJcbi5oZWFkaW5kX3NyY2gge1xyXG5cdHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG5cclxuLnJlY2VudF9oZWFkaW5nIGg0IHtcclxuXHRjb2xvcjogIzJlNTVmYTtcclxuXHRmb250LXNpemU6IDIxcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG59XHJcbi5zcmNoX2JhciBpbnB1dCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcclxuXHRib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuXHR3aWR0aDogODAlO1xyXG5cdHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRjb2xvcjogIzcwNzA3MDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcblx0bWFyZ2luOiAwIDAgMCAtMjdweDtcclxufVxyXG5cclxuLmNoYXRfaWIgaDUge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogIzQ2NDY0NjtcclxuXHRtYXJnaW46IDAgMCA4cHggMDtcclxufVxyXG4uY2hhdF9pYiBoNSBzcGFuIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5jaGF0X2liIHAge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzk4OTg5ODtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuLmNoYXRfaW1nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTElO1xyXG59XHJcbi5jaGF0X2liIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwYWRkaW5nOiAwIDAgMCAxNXB4O1xyXG5cdHdpZHRoOiA4OCU7XHJcbn1cclxuXHJcbi5jaGF0X3Blb3BsZSB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG4uY2hhdF9saXN0IHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMThweCAxNnB4IDEwcHg7XHJcbn1cclxuLmluYm94X2NoYXQge1xyXG5cdGhlaWdodDogNTUwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYWN0aXZlX2NoYXQge1xyXG5cdGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5pbmNvbWluZ19tc2dfaW1nIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDYlO1xyXG59XHJcbi5yZWNlaXZlZF9tc2cge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAwIDAgMCAxMHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0d2lkdGg6IDkyJTtcclxufVxyXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xyXG5cdGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4udGltZV9kYXRlIHtcclxuXHRjb2xvcjogIzc0NzQ3NDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luOiA4cHggMCAwO1xyXG59XHJcbi5yZWNlaXZlZF93aXRoZF9tc2cge1xyXG5cdHdpZHRoOiA1NyU7XHJcbn1cclxuXHJcbi5zZW50X21zZyBwIHtcclxuXHRiYWNrZ3JvdW5kOiAjMmU1NWZhIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLm91dGdvaW5nX21zZyB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXJnaW46IDI2cHggMCAyNnB4O1xyXG59XHJcbi5zZW50X21zZyB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHdpZHRoOiA0NiU7XHJcbn1cclxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcblx0Y29sb3I6ICM0YzRjNGM7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50eXBlX21zZyB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjNGM0YzQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tc2dfc2VuZF9idG4ge1xyXG5cdGJhY2tncm91bmQ6ICMyZTU1ZmEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdGhlaWdodDogMzNweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAxMXB4O1xyXG5cdHdpZHRoOiAzM3B4O1xyXG59XHJcbi5tZXNzYWdpbmcge1xyXG5cdHBhZGRpbmc6IDAgMCA1MHB4IDA7XHJcbn1cclxuLm1zZ19oaXN0b3J5IHtcclxuXHRoZWlnaHQ6IDUxNnB4O1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatScreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-screen',
            templateUrl: './chat-screen.component.html',
            styleUrls: ['./chat-screen.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fid/":
    /*!*********************************************************!*\
      !*** ./src/app/pages/common/navbar/navbar.component.ts ***!
      \*********************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function fid(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 10,
        vars: 0,
        consts: [["id", "navbarNavDropdown", 1, "header-nav", "navbar-collapse", "collapse", "justify-content-start"], [1, "nav", "navbar-nav", "ml-auto"], [1, ""], ["href", "/jobseeker-signup", 1, "site-button", 2, "color", "white"], [1, "fa", "fa-user"], ["href", "/recruiter-signup", 1, "site-button", 2, "color", "white"], [1, "fa", "fa-lock"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Job Seeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Recruiter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hTrY":
    /*!***********************************************!*\
      !*** ./src/app/services/recruiter.service.ts ***!
      \***********************************************/

    /*! exports provided: RecruiterService */

    /***/
    function hTrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterService", function () {
        return RecruiterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api-url */
      "0UPu"); // Models


      var RecruiterService = /*#__PURE__*/function () {
        function RecruiterService(http) {
          _classCallCheck(this, RecruiterService);

          this.http = http;
          this.token = localStorage.getItem('macrax-token');
        } //     createRecruiterUser(user: UserModel): Observable<ResponseModel> {
        // 		return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Job_Seeker, user);
        // 	}


        _createClass(RecruiterService, [{
          key: "getHTTPHeaders",
          value: function getHTTPHeaders() {
            var result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            result = result.set('Content-Type', 'application/json');
            result = result.set('Authorization', 'Bearer ' + this.token);
            return result;
          }
        }, {
          key: "createRecruiterProfile",
          value: function createRecruiterProfile(jobSeeker) {
            return this.http.post(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.Job_Seeker_Add, jobSeeker);
          }
        }, {
          key: "getAllRecruiters",
          value: function getAllRecruiters(role) {
            var httpHeaders = this.getHTTPHeaders();
            return this.http.get(_api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.HOST_URL + _api_url__WEBPACK_IMPORTED_MODULE_2__["Constants"].URL.GetRecruiters + role, {
              headers: httpHeaders
            });
          }
        }]);

        return RecruiterService;
      }();

      RecruiterService.ɵfac = function RecruiterService_Factory(t) {
        return new (t || RecruiterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RecruiterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecruiterService,
        factory: RecruiterService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruiterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iz0i":
    /*!*********************************************************!*\
      !*** ./src/app/pages/common/banner/banner.component.ts ***!
      \*********************************************************/

    /*! exports provided: BannerComponent */

    /***/
    function iz0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
        return BannerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BannerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MACRAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "INDIA's only job community for IIT, NIT, BITS, IIIT and DTU Graduates and Students");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function BannerComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.page);
        }
      }

      var BannerComponent = /*#__PURE__*/function () {
        function BannerComponent(router) {
          _classCallCheck(this, BannerComponent);

          this.router = router;
          console.log(this.router.url);
          this.page = this.router.url.split("/")[2]; // alert(this.page)
        }

        _createClass(BannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BannerComponent;
      }();

      BannerComponent.ɵfac = function BannerComponent_Factory(t) {
        return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BannerComponent,
        selectors: [["app-banner"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["elseData", ""], [1, "dez-bnr-inr", "dez-bnr-inr-md", "overlay-black-dark", 2, "background-image", "url(./assets/images/main-slider/slide1.jpg)"], [1, "container"], [1, "dez-bnr-inr-entry", "align-m", "text-white"], [1, "job-search-form"], [1, "text-center"], [1, "dez-bnr-inr", "overlay-black-middle", 2, "background-image", "url(./assets/images/banner/bnr1.jpg)"], [1, "dez-bnr-inr-entry"], [1, "text-white"], [1, "breadcrumb-row"], [1, "list-inline"], ["href", "#"]],
        template: function BannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BannerComponent_ng_container_0_Template, 9, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_template_1_Template, 12, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == "home")("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".job-search-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    font-weight: 500;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n    line-height: 50px;\r\n}\r\n.job-search-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    margin-top: 0;\r\n    margin-bottom: 30px;\r\n}\r\n.carousel[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    -o-object-fit:cover;\r\n       object-fit:cover;\r\n    top: 0;\r\n    left: 0;\r\n    min-height: 650px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBZ0I7T0FBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpvYi1zZWFyY2gtZm9ybSBoMntcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5qb2Itc2VhcmNoLWZvcm0gaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jcVv":
    /*!********************************************************************!*\
      !*** ./src/app/pages/recruiter-login/recruiter-login.component.ts ***!
      \********************************************************************/

    /*! exports provided: RecruiterLoginComponent */

    /***/
    function jcVv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterLoginComponent", function () {
        return RecruiterLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      function RecruiterLoginComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Address is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterLoginComponent_span_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RecruiterLoginComponent = /*#__PURE__*/function () {
        function RecruiterLoginComponent(_formBuilder, router, loginService) {
          _classCallCheck(this, RecruiterLoginComponent);

          this._formBuilder = _formBuilder;
          this.router = router;
          this.loginService = loginService;
          this.hasFormErrors = false;
        }

        _createClass(RecruiterLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginFormRecruiter = this._formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            var _this32 = this;

            this.hasFormErrors = false;
            var controls = this.loginFormRecruiter.controls;
            /** check form */

            if (this.loginFormRecruiter.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            this.loginService.loginUser(this.loginFormRecruiter.value).subscribe(function (res) {
              console.log(res);

              if (res.msg == "Invalid Username/password!") {
                alert(res.msg);
              } else {
                alert("Login sucessfully");
                var responseObj = res['data'];
                localStorage.setItem('macrax-token', responseObj.token);
                localStorage.setItem('macrax-emailId', responseObj.userName);
                localStorage.setItem('macrax-password', _this32.loginFormRecruiter.value.password);
                localStorage.setItem('role', '1');

                if (responseObj.IsOnboard == 0) {
                  _this32.router.navigateByUrl('/dashboard/recruiter-profilereg');
                } else {
                  _this32.router.navigateByUrl('/dashboard/home');
                }
              }
            }, function (err) {
              console.log(err);
              alert("Login Filed");
            });
          }
        }]);

        return RecruiterLoginComponent;
      }();

      RecruiterLoginComponent.ɵfac = function RecruiterLoginComponent_Factory(t) {
        return new (t || RecruiterLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
      };

      RecruiterLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecruiterLoginComponent,
        selectors: [["app-recruiter-login"]],
        decls: 34,
        vars: 3,
        consts: [[1, "section-full", "content-inner-2", "shop-account"], [1, "container"], [1, "max-w500", "m-auto", "bg-white", "m-b30"], [1, "p-a30", "job-bx", "browse-job", "radius-sm", "seth"], [1, "tab-content", "nav"], ["id", "loginRecruiterForm", 1, "col-12", "p-a0", 3, "formGroup"], [1, "font-weight-700"], [1, "form-group"], ["name", "email", "required", "", "formControlName", "userName", "placeholder", "Your Email Address", "type", "email", 1, "form-control"], [4, "ngIf"], ["name", "passowrd", "formControlName", "password", "required", "", "placeholder", "Type Password", "type", "password", 1, "form-control"], [1, "text-center", "mb-2"], [1, "site-button", "m-r5", "button-lg", 3, "click"], [1, "mt-2", "border-top"], ["href", "dashboard/recruiter-forgot-password", 1, "m-l5", "m-t15", "forget-pass", "float-left"], [1, "fa", "fa-sign-in"], ["href", "/recruiter-signup", 1, "m-l5", "m-t15", "forget-pass", "float-right"]],
        template: function RecruiterLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login as Recruiter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecruiterLoginComponent_span_16_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PASSWORD *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RecruiterLoginComponent_span_22_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterLoginComponent_Template_button_click_24_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Not registered yet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormRecruiter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginFormRecruiter.get("userName").valid && ctx.loginFormRecruiter.get("userName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginFormRecruiter.get("password").valid && ctx.loginFormRecruiter.get("password").touched);
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0ZXItbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruiterLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recruiter-login',
            templateUrl: './recruiter-login.component.html',
            styleUrls: ['./recruiter-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "leH8":
    /*!********************************************!*\
      !*** ./src/app/models/job-seeker.model.ts ***!
      \********************************************/

    /*! exports provided: JobSeekerModel */

    /***/
    function leH8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobSeekerModel", function () {
        return JobSeekerModel;
      });

      var JobSeekerModel = function JobSeekerModel() {
        _classCallCheck(this, JobSeekerModel);
      };
      /***/

    },

    /***/
    "o97b":
    /*!**************************************************!*\
      !*** ./src/app/pages/signup/signup.component.ts ***!
      \**************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function o97b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(_formBuilder) {
          _classCallCheck(this, SignupComponent);

          this._formBuilder = _formBuilder;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.jobSeekerRegister = this._formBuilder.group({
              emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              setPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.recruiterRegister = this._formBuilder.group({
              emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              setPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 108,
        vars: 2,
        consts: [[1, "section-full", "content-inner", "browse-job", "shop-account"], [1, "container"], [1, "row"], [1, "col-md-6", "m-b30"], [1, "p-a30", "border", "m-b30", "contact-area", "border-1", "radius-sm", "bg-white"], [1, "m-b10", "text-primary"], [1, "no-margin"], [1, "icon-bx-wraper", "left", "m-b10", "d-flex", "justify-content-start", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-2x", "fa-pull-left", "fa-border", "text-primary"], [1, "p-a30", "job-bx", "radius-sm", "bg-white", "m-auto"], [1, "tab-content", "nav"], ["id", "jobSeekerRegisterForm", 1, "tab-pane", "active", "col-12", "p-a0", 3, "formGroup"], [1, "font-weight-700", "m-b5"], ["data-toggle", "tab", "href", "#recruiterRegisterForm", 1, "forget-pass", "float-right", "text-primary"], [1, "form-group"], [1, "font-weight-700"], ["name", "emailId", "required", "", "placeholder", "Your Email Address", "type", "email", "formControlName", "emailId", 1, "form-control"], ["name", "setPassword", "required", "", "placeholder", "Type Password", "type", "password", "formControlName", "setPassword", 1, "form-control"], ["name", "confirmPassword", "required", "", "placeholder", "Type Password", "type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["for", ""], [1, "site-button", "button-sm", "float-right"], ["name", "", "required", "", "placeholder", "Type Password", "type", "password", "formControlName", "otp", 1, "form-control"], [1, "text-left"], [1, "site-button", "button-lg", "outline", "outline-2"], ["href", "/login", 1, "m-l5", "m-t15", "forget-pass", "float-right"], [1, "fa", "fa-sign-in"], ["id", "recruiterRegisterForm", 1, "tab-pane", "fade", "col-12", "p-a0", 3, "formGroup"], ["data-toggle", "tab", "href", "#jobSeekerRegisterForm", 1, "forget-pass", "float-right", "text-primary"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CORE VALUES FOR JOB-SEEKERS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Instant Jobs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Only Verified Jobs and Company ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Video Job Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Direct Chat with Verified Recruiter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CORE VALUES FOR RECRUITERS:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Instant Hiring ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Only Verified Profiles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Only IIT, NIT, BITS, IIIT and DTU ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Video Resume ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Sign up as JobSeeker ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " or Register as Recruiter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Set Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Confirm Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Send OTP to above email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Send Otp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "OTP *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Register as JobSeeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Login Now. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "form", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Sign up as Recruiter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " or Register as JobSeeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Set Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Confirm Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Send OTP to above email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Send Otp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "OTP *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Register as Recruiter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Login Now. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.jobSeekerRegister);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recruiterRegister);
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rZHi":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/recruiter-signup/recruiter-signup.component.ts ***!
      \**********************************************************************/

    /*! exports provided: RecruiterSignupComponent */

    /***/
    function rZHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterSignupComponent", function () {
        return RecruiterSignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/user.model */
      "Tj/N");
      /* harmony import */


      var src_app_api_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api-url */
      "0UPu");
      /* harmony import */


      var src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/job-seeker.service */
      "1487");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/sms.service */
      "RElC");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      function RecruiterSignupComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Address is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterSignupComponent_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterSignupComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecruiterSignupComponent_span_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OTP is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RecruiterSignupComponent = /*#__PURE__*/function () {
        function RecruiterSignupComponent(_formBuilder, jobseekerService, router, loginService, smsService) {
          _classCallCheck(this, RecruiterSignupComponent);

          this._formBuilder = _formBuilder;
          this.jobseekerService = jobseekerService;
          this.router = router;
          this.loginService = loginService;
          this.smsService = smsService;
          this.hasFormErrors = false;
        }

        _createClass(RecruiterSignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createFormRecruiter();
          }
        }, {
          key: "createFormRecruiter",
          value: function createFormRecruiter() {
            this.recruiterRegister = this._formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
              mobileNo: ['', ''],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              privacyPolicies: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "prepareUser",
          value: function prepareUser() {
            var controls = this.recruiterRegister.controls;

            var _user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();

            _user.userName = controls.userName.value;
            _user.password = controls.password.value;
            _user.mobileNo = controls.mobileNo.value;
            _user.role = src_app_api_url__WEBPACK_IMPORTED_MODULE_3__["Constants"].Roles.Recuriter;
            return _user;
          }
        }, {
          key: "isControlInvalid",
          value: function isControlInvalid(controlName) {
            var control = this.recruiterRegister.controls[controlName];
            var result = control.invalid && control.touched;
            return result;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.hasFormErrors = false;
            var controls = this.recruiterRegister.controls;
            /** check form */

            if (this.recruiterRegister.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            console.log(controls);
            var user = this.prepareUser();
            this.createUser(user);
          }
        }, {
          key: "createUser",
          value: function createUser(_user) {
            var _this33 = this;

            this.loginService.singUpUser(_user).subscribe(function (res) {
              console.log(res);

              if (!res) {
                return;
              }

              if (res.msg == "This email id is already registered with system.") {
                alert(res.msg + "This email id is already registered with system. Please use another email id");
                return;
              } else if (res.msg == "Not allowed to enter personal mail.") {
                alert(res.msg + "Not allowed to enter personal mail.");
                return;
              } else {
                alert(res.msg);
                localStorage.setItem('macrax-emailId', res.data);

                _this33.router.navigateByUrl('/recruiter-login'); // this.router.navigateByUrl('/dashboard/recruiter-profilereg')

              }
            });
          }
        }, {
          key: "sendOtp",
          value: function sendOtp() {
            var controls = this.recruiterRegister.controls;
            var data = {
              "expiry": 900,
              "message": "Your otp code is {code}",
              "mobile": 8459263834,
              "sender_id": "SMSInfo",
              "userName": controls.userName.value
            };
            this.smsService.sendOtp(data).subscribe(function (res) {
              console.log(res);
            });
          }
        }]);

        return RecruiterSignupComponent;
      }();

      RecruiterSignupComponent.ɵfac = function RecruiterSignupComponent_Factory(t) {
        return new (t || RecruiterSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_4__["JobSeekerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_7__["SmsService"]));
      };

      RecruiterSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecruiterSignupComponent,
        selectors: [["app-recruiter-signup"]],
        decls: 58,
        vars: 5,
        consts: [[1, "section-full", "content-inner", "browse-job", "shop-account"], [1, "container"], [1, "row"], [1, "col-md-6", "m-b30", "mx-auto"], [1, "p-a30", "job-bx", "radius-sm", "bg-white", "m-auto"], [1, "tab-content", "nav"], ["id", "recruiterRegisterForm", 1, "col-12", "p-a0", 3, "formGroup"], [1, "font-weight-700", "m-b5"], [1, "form-group"], [1, "font-weight-700"], ["name", "emailId", "required", "", "placeholder", "Your Email Address", "type", "email", "formControlName", "userName", 1, "form-control"], [4, "ngIf"], ["name", "mobileNumber", "required", "", "placeholder", "Your Mobile Number", "type", "text", "formControlName", "mobileNo", 1, "form-control"], ["name", "setPassword", "required", "", "placeholder", "Type Password", "type", "password", "formControlName", "password", 1, "form-control"], ["name", "confirmPassword", "required", "", "placeholder", "Type Password", "type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["for", ""], [1, "site-button", "button-sm", "float-right", 3, "click"], ["name", "", "required", "", "placeholder", "Type Password", "type", "password", "formControlName", "otp", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "privacyPolicies", "checked", "", "formControlName", "privacyPolicies", 1, "custom-control-input"], ["for", "privacyPolicies", 1, "custom-control-label"], ["href", "", "target", "_blank"], [1, "text-left"], [1, "site-button", "button-lg", "outline", "outline-2", 3, "click"], ["href", "/recruiter-login", 1, "m-l5", "m-t15", "forget-pass", "float-right"], [1, "fa", "fa-sign-in"]],
        template: function RecruiterSignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign up as Recruiter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecruiterSignupComponent_span_16_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Set Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RecruiterSignupComponent_span_26_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirm Password *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RecruiterSignupComponent_span_32_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Send OTP to above email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterSignupComponent_Template_button_click_36_listener() {
              return ctx.sendOtp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Send Otp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "OTP *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RecruiterSignupComponent_span_43_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "By Registering, you agree to our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterSignupComponent_Template_button_click_52_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Register as Recruiter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Login Now. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recruiterRegister);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recruiterRegister.get("userName").valid && ctx.recruiterRegister.get("userName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recruiterRegister.get("password").valid && ctx.recruiterRegister.get("password").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recruiterRegister.get("confirmPassword").valid && ctx.recruiterRegister.get("confirmPassword").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recruiterRegister.get("otp").valid && ctx.recruiterRegister.get("otp").touched);
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0ZXItc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruiterSignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recruiter-signup',
            templateUrl: './recruiter-signup.component.html',
            styleUrls: ['./recruiter-signup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_4__["JobSeekerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
          }, {
            type: src_app_services_sms_service__WEBPACK_IMPORTED_MODULE_7__["SmsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sjK5":
    /*!******************************************!*\
      !*** ./src/app/services/chat.service.ts ***!
      \******************************************/

    /*! exports provided: ChatService */

    /***/
    function sjK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! socket.io-client */
      "jifJ");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var ChatService = /*#__PURE__*/function () {
        function ChatService() {
          _classCallCheck(this, ChatService);

          this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SOCKET_ENDPOINT, null);

          try {//this.socket = io(environment.SOCKET_ENDPOINT, null);
          } catch (error) {
            console.error('Error occured while creating a connection with chat server', error);
          }
        }

        _createClass(ChatService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setupChatRoom",
          value: function setupChatRoom(from, to) {
            var msg = {
              from: from,
              to: to
            };

            if (undefined != this.socket) {
              this.socket.emit('joinChatRoom', msg);
            } else {
              console.log('Chat server is not running, Please contact administrator');
            }
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(message) {
            this.emitMessage('message', message);
            console.log(message);
          }
        }, {
          key: "getMessages",
          value: function getMessages() {
            var _this34 = this;

            if (undefined != this.socket) {
              this.socket.on('message1', function (message) {
                _this34.observer.next(message);
              });
            }

            return this.createObservable();
          }
        }, {
          key: "createObservable",
          value: function createObservable() {
            var _this35 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this35.observer = observer;
            });
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            this.socket.emit('disconnect');
          }
        }, {
          key: "emitMessage",
          value: function emitMessage(type, message) {
            if (undefined != this.socket) {
              this.socket.emit(type, message);
            } else {
              console.log('Chat server is not running, Please contact administrator');
            }
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)();
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_jobseeker_login_jobseeker_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/jobseeker-login/jobseeker-login.component */
      "zqXR");
      /* harmony import */


      var _pages_jobseeker_signup_jobseeker_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/jobseeker-signup/jobseeker-signup.component */
      "MaJH");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_profile_register_profile_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/profile-register/profile-register.component */
      "FM+r");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_recruiter_login_recruiter_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/recruiter-login/recruiter-login.component */
      "jcVv");
      /* harmony import */


      var _pages_recruiter_signup_recruiter_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/recruiter-signup/recruiter-signup.component */
      "rZHi");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_recruiter_profile_register_recruiter_profile_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/recruiter-profile-register/recruiter-profile-register.component */
      "GqXI");
      /* harmony import */


      var _videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./videojs-record/videojs-record.component */
      "U7iZ");
      /* harmony import */


      var _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/chat-screen/chat-screen.component */
      "bB/R");
      /* harmony import */


      var _pages_chat_home_chat_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/chat-home/chat-home.component */
      "/1LO");
      /* harmony import */


      var _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/forget-password/forget-password.component */
      "BUfL");
      /* harmony import */


      var _pages_recruiter_forget_password_recruiter_forget_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/recruiter-forget-password/recruiter-forget-password.component */
      "ysUA");

      var routes = [{
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
      }, {
        path: 'jobseeker-signup',
        component: _pages_jobseeker_signup_jobseeker_signup_component__WEBPACK_IMPORTED_MODULE_5__["JobseekerSignupComponent"]
      }, {
        path: 'jobseeker-login',
        component: _pages_jobseeker_login_jobseeker_login_component__WEBPACK_IMPORTED_MODULE_4__["JobseekerLoginComponent"]
      }, {
        path: 'recruiter-signup',
        component: _pages_recruiter_signup_recruiter_signup_component__WEBPACK_IMPORTED_MODULE_10__["RecruiterSignupComponent"]
      }, {
        path: 'recruiter-login',
        component: _pages_recruiter_login_recruiter_login_component__WEBPACK_IMPORTED_MODULE_9__["RecruiterLoginComponent"]
      }, {
        path: 'dashbaord',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        }, {
          path: 'home',
          component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
        }, {
          path: 'profile',
          component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
        }, {
          path: 'job-seeker-profilereg',
          component: _pages_profile_register_profile_register_component__WEBPACK_IMPORTED_MODULE_7__["ProfileRegisterComponent"]
        }, {
          path: 'recruiter-profilereg',
          component: _pages_recruiter_profile_register_recruiter_profile_register_component__WEBPACK_IMPORTED_MODULE_12__["RecruiterProfileRegisterComponent"]
        }, {
          path: 'video',
          component: _videojs_record_videojs_record_component__WEBPACK_IMPORTED_MODULE_13__["VideojsRecordComponent"]
        }, {
          path: 'chat',
          component: _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_14__["ChatScreenComponent"]
        }, {
          path: 'chat-home',
          component: _pages_chat_home_chat_home_component__WEBPACK_IMPORTED_MODULE_15__["ChatHomeComponent"]
        }, {
          path: 'recruiter-forgot-password',
          component: _pages_recruiter_forget_password_recruiter_forget_password_component__WEBPACK_IMPORTED_MODULE_17__["RecruiterForgetPasswordComponent"]
        }, {
          path: 'forgot-password',
          component: _pages_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgetPasswordComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vYcK":
    /*!************************************************************!*\
      !*** ./src/app/pages/chat-client/chat-client.component.ts ***!
      \************************************************************/

    /*! exports provided: ChatClientComponent */

    /***/
    function vYcK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatClientComponent", function () {
        return ChatClientComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/user.model */
      "Tj/N");
      /* harmony import */


      var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/message.model */
      "4Em8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/chat.service */
      "sjK5");
      /* harmony import */


      var _services_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/window.service */
      "QvHX");
      /* harmony import */


      var src_app_services_recruiter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/recruiter.service */
      "hTrY");
      /* harmony import */


      var src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/job-seeker.service */
      "1487");

      var _c0 = ["ngChatPeople"];
      var _c1 = ["ngChatTitle"];
      var _c2 = ["ngChatWindowContainer"];
      var _c3 = ["ngChatWindow"];

      function ChatClientComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatClientComponent_li_9_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var user_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.openChatWithUser($event, user_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", user_r4.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r4.userName);
        }
      }

      function ChatClientComponent_div_10_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11.time);
        }
      }

      function ChatClientComponent_div_10_div_12_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11.time);
        }
      }

      function ChatClientComponent_div_10_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatClientComponent_div_10_div_12_div_1_Template, 7, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatClientComponent_div_10_div_12_ng_template_2_Template, 6, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r11 = ctx.$implicit;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.isCurrentUser(message_r11["from"]))("ngIfElse", _r13);
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "right": a0
        };
      };

      function ChatClientComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatClientComponent_div_10_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var user_r7 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.toggleChatWindow(user_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatClientComponent_div_10_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var user_r7 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.closeNgChatWindow(user_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatClientComponent_div_10_div_12_Template, 4, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChatClientComponent_div_10_Template_input_keyup_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var user_r7 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return $event.keyCode == 13 ? ctx_r20.sendMessage($event, user_r7) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", user_r7.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, user_r7.rightPosition));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r7.userName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r7.messages);
        }
      }

      var ChatClientComponent = /*#__PURE__*/function () {
        function ChatClientComponent(chatServie, windowService, recruiterService, jobSeekerService) {
          _classCallCheck(this, ChatClientComponent);

          this.chatServie = chatServie;
          this.windowService = windowService;
          this.recruiterService = recruiterService;
          this.jobSeekerService = jobSeekerService;
          this.recruiter = [];
          this.messages = [];
          this.users = [];
          this.ngChatWindows = [];
          this.currentRight = 0;
          this.userMessage = '';
          this.flag = false;
          this.recruiter = [];
          this.userName = localStorage.getItem('macrax-emailId');
          this.userId = this.setUserId();
        }

        _createClass(ChatClientComponent, [{
          key: "setUserId",
          value: function setUserId() {
            var _this36 = this;

            var role = localStorage.getItem('role');
            var id = 0;

            if (role === '0') {
              this.jobSeekerService.getAllJobSeekers('0').subscribe(function (res) {
                if (res.status == 200) {
                  //this.users=res.data;
                  res.data.forEach(function (element) {
                    var normalUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
                    normalUser.deserialize(element);

                    if (normalUser.userName == _this36.userName) {
                      id = normalUser.id;
                    }
                  });
                } else {
                  id = 0;
                }
              }, function (err) {
                id = 0;
              });
            }

            if (role === '1') {
              var jobseekers = [];
              this.recruiterService.getAllRecruiters('1').subscribe(function (res) {
                if (res.status == 200) {
                  //this.users=res.data;
                  res.data.forEach(function (element) {
                    var normalUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
                    normalUser.deserialize(element);

                    if (normalUser.userName == _this36.userName) {
                      id = normalUser.id;
                    }
                  });
                } else {
                  id = 0;
                }
              }, function (err) {
                id = 0;
              });
            }

            return id;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this.chatServie.getMessages().subscribe(function (message) {
              _this37.messages.push(message);

              _this37.users.forEach(function (u) {
                if (u.messages === undefined) {
                  u.messages = [];
                }

                if (message['from'] === u.id.toString()) {
                  u.messages.push(message);
                }

                if (message['to'] === u.id.toString()) {
                  u.messages.push(message);
                }
              });

              console.log(message);
            });
            var role = localStorage.getItem('role');

            if (role == '0') {
              this.getAllRecruiters();
            } else {
              this.getAllJobSeekers();
            }
          }
        }, {
          key: "getAllJobSeekers",
          value: function getAllJobSeekers() {
            var _this38 = this;

            this.jobSeekerService.getAllJobSeekers('0').subscribe(function (res) {
              if (res.status == 200) {
                //this.users=res.data;
                res.data.forEach(function (element) {
                  var normalUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
                  normalUser.deserialize(element);

                  _this38.users.push(normalUser);
                });
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "getAllRecruiters",
          value: function getAllRecruiters() {
            var _this39 = this;

            this.recruiterService.getAllRecruiters('1').subscribe(function (res) {
              if (res.status == 200) {
                //this.users=res.data;
                res.data.forEach(function (element) {
                  var normalUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
                  normalUser.deserialize(element);

                  _this39.users.push(normalUser);
                });
              } else {
                alert(res.msg);
              }
            }, function (err) {});
          }
        }, {
          key: "isCurrentUser",
          value: function isCurrentUser(from) {
            if (this.userName === from) {
              return true;
            }

            return false;
          }
        }, {
          key: "toggleChat",
          value: function toggleChat() {
            if (this.ngChatPeople.nativeElement.style.display === 'none') {
              this.ngChatPeople.nativeElement.style.display = 'block';
              this.ngChatTitle.nativeElement.style.marginRight = '0px';
            } else {
              this.ngChatPeople.nativeElement.style.display = 'none';
              this.ngChatTitle.nativeElement.style.marginRight = '10px';
              this.ngChatTitle.nativeElement.style.width = '240px';
            }
          }
        }, {
          key: "openChatWithUser",
          value: function openChatWithUser(event, user) {
            if (!this.checkAlreadyExists(user)) {
              if (this.checkChatWindowCanBePlcaed()) {
                console.log('Placing chat window');
                this.pushToChatWindows(user);
              } else {
                this.removeAndOpenChatWithUser(user);
              }
            }
          }
        }, {
          key: "removeAndOpenChatWithUser",
          value: function removeAndOpenChatWithUser(user) {
            this.ngChatWindows.pop();
            this.currentRight = this.currentRight - 320;
            this.pushToChatWindows(user);
          }
        }, {
          key: "checkAlreadyExists",
          value: function checkAlreadyExists(user) {
            var u = this.ngChatWindows.find(function (us) {
              return us.id === user.id;
            });

            if (undefined != u && null != u) {
              return true;
            }

            return false;
          }
        }, {
          key: "pushToChatWindows",
          value: function pushToChatWindows(user) {
            if (this.checkAlreadyExists(user)) {
              console.log(this.ngChatWindows);
            } else {
              var position = '';

              if (this.ngChatWindows.length <= 0) {
                this.currentRight = this.currentRight + 280;
                position = this.currentRight.toString() + 'px';
              } else {
                this.currentRight = this.currentRight + 320;
                position = this.currentRight.toString() + 'px';
              }

              user.setRightPosition(position);
              this.ngChatWindows.push(user);
              this.createRoomWithUser(user);
            }
          }
        }, {
          key: "createRoomWithUser",
          value: function createRoomWithUser(user) {
            this.joinRoom(this.userName, user.userName.toString());
          }
        }, {
          key: "joinRoom",
          value: function joinRoom(from, to) {
            this.chatServie.setupChatRoom(from, to);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(event, user) {
            this.message = new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]();
            var from = localStorage.getItem('macrax-emailId');
            this.message['from'] = this.userId.toString();
            this.message['to'] = user.id.toString();
            this.message['text'] = event.target.value;
            this.message['time'] = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'dd/MM/yy hh:mm a', 'en-US', '+0530'); //this.messages.push(this.message);

            this.chatServie.sendMessage(this.message);
          }
        }, {
          key: "checkChatWindowCanBePlcaed",
          value: function checkChatWindowCanBePlcaed() {
            var currentScreenWidth = this.windowService.windowRef.innerWidth;
            var ngChatPeopleWidth = 240;
            var ngChatWindowWidth = 300;
            var midSpace = 40;
            var remainingspace = currentScreenWidth - (ngChatPeopleWidth + midSpace + ngChatWindowWidth * this.ngChatWindows.length + 20);

            if (remainingspace > ngChatWindowWidth) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "closeNgChatWindow",
          value: function closeNgChatWindow(user) {
            var index = this.ngChatWindows.indexOf(user);

            if (index > -1) {
              this.ngChatWindows.splice(index, 1);
            }

            if (this.ngChatWindows.length === 0) {
              this.currentRight = this.currentRight - 280;
            } else {
              this.currentRight = this.currentRight - 320;
            }
          }
        }, {
          key: "toggleChatWindow",
          value: function toggleChatWindow(user) {
            this.ngChatWindow.forEach(function (div) {
              if (div.nativeElement.id === user.id.toString()) {
                var container = div.nativeElement.querySelector('.ng-chat-window-container');

                if (container.style.display === 'none') {
                  container.style.display = 'block';
                  div.nativeElement.style.height = '360px';
                } else {
                  container.style.display = 'none';
                  div.nativeElement.style.height = '30px';
                }
              }
            });
          }
        }]);

        return ChatClientComponent;
      }();

      ChatClientComponent.ɵfac = function ChatClientComponent_Factory(t) {
        return new (t || ChatClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recruiter_service__WEBPACK_IMPORTED_MODULE_6__["RecruiterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__["JobSeekerService"]));
      };

      ChatClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatClientComponent,
        selectors: [["app-chat-client"]],
        viewQuery: function ChatClientComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngChatPeople = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngChatTitle = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngChatWindowContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngChatWindow = _t);
          }
        },
        decls: 11,
        vars: 2,
        consts: [["id", "ng-chat", 1, "dark-theme"], [1, "ng-chat-title", "secondary-background", "shadowed", "setMargin", 3, "click"], ["ngChatTitle", ""], ["id", "ng-chat-people"], ["ngChatPeople", ""], ["id", "ng-chat-search_friend", "type", "search", "placeholder", "Search", 1, "friends-search-bar", "ng-untouched", "ng-pristine", "ng-valid"], ["id", "ng-chat-users", 1, "offset-search"], [3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "ng-chat-window primary-outline-color", 3, "id", "ngStyle", 4, "ngFor", "ngForOf"], [3, "id", "click"], [1, "ng-chat-friends-list-container"], ["alt", "", "height", "30", "width", "30", "src", "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj", 1, "avatar"], ["title", "Arya Stark"], ["title", "", 1, "ng-chat-participant-status", "online"], [1, "ng-chat-unread-messages-count", "unread-messages-counter-container"], [1, "ng-chat-window", "primary-outline-color", 3, "id", "ngStyle"], ["ngChatWindow", ""], [1, "ng-chat-title", "secondary-background", 3, "click"], [1, "ng-chat-title-visibility-toggle-area"], ["title", "Hodor"], ["title", "", 1, "ng-chat-participant-status", "offline"], [1, "ng-chat-close", "primary-text", 3, "click"], [1, "ng-chat-window-container"], ["ngChatWindowContainer", ""], [1, "ng-chat-messages", "primary-background"], [4, "ngFor", "ngForOf"], [1, "ng-chat-footer", "primary-outline-color", "primary-background"], ["type", "text", "placeholder", "Type a message", 1, "chat-window-input", "ng-pristine", "ng-valid", "ng-touched", 3, "keyup"], ["class", "ng-chat-message ng-chat-message-received", 4, "ngIf", "ngIfElse"], ["other_content", ""], [1, "ng-chat-message", "ng-chat-message-received"], ["alt", "", "height", "30", "width", "30", "src", "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg", 1, "avatar"], [1, "received-chat-message-container"], [1, "message-sent-date"], [1, "ng-chat-message"], [1, "sent-chat-message-container"]],
        template: function ChatClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatClientComponent_Template_a_click_1_listener() {
              return ctx.toggleChat();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Friends ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatClientComponent_li_9_Template, 8, 2, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatClientComponent_div_10_Template, 15, 6, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ngChatWindows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["#ng-chat-people[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 240px;\r\n  height: 330px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  margin-right: 20px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);\r\n  border-bottom: 0;\r\n  background: #212529;\r\n  display: block;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]{\r\n  color: #453ae3;\r\n  font-family: Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .primary-outline-color[_ngcontent-%COMP%] {\r\n    border-color: #353535;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .primary-background[_ngcontent-%COMP%] {\r\n    background-color: #565656;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .secondary-background[_ngcontent-%COMP%]{\r\n    background-color: #444;\r\n}\r\n\r\n#ng-chat[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  z-index: 999;\r\n  right: 0;\r\n  bottom: 0;\r\n  box-sizing: initial;\r\n  font-size: 11pt;\r\n  text-align: left;\r\n}\r\n\r\n.ng-chat-title[_ngcontent-%COMP%]{\r\n    \r\n}\r\n\r\n.ng-chat-title[_ngcontent-%COMP%], .ng-chat-title[_ngcontent-%COMP%]:hover {\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    font-size: .9em;\r\n    padding: 0 10px;\r\n    display: block;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.ng-chat-title.setMargin[_ngcontent-%COMP%] {\r\n    margin-right: 20px\r\n}\r\n\r\n.ng-chat-title[_ngcontent-%COMP%]   .ng-chat-title-visibility-toggle-area[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  width: 85%;\r\n}\r\n\r\n#ng-chat[_ngcontent-%COMP%]   .shadowed[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px rgba(0,0,0,.25);\r\n}\r\n\r\n#ng-chat-search_friend[_ngcontent-%COMP%]{\r\n  display: block;\r\n  padding: 7px 10px;\r\n  margin: 10px auto 0;\r\n  width: calc(100% - 20px);\r\n  font-size: .9em;\r\n  -webkit-appearance: searchfield;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .friends-search-bar[_ngcontent-%COMP%] {\r\n    background-color: #444;\r\n    border: 1px solid #444;\r\n    color: #fff;\r\n}\r\n\r\n[type=search][_ngcontent-%COMP%] {\r\n    outline-offset: -2px;\r\n    -webkit-appearance: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n}\r\n\r\n#ng-chat-users[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n    list-style: none;\r\n    margin: 0;\r\n    overflow: auto;\r\n    position: absolute;\r\n    top: 42px;\r\n    bottom: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#ng-chat-users.offset-search[_ngcontent-%COMP%] {\r\n    top: 84px;\r\n}\r\n\r\n#ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    max-height: 30px;\r\n}\r\n\r\n#ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ng-chat-friends-list-container[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n#ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ng-chat-friends-list-container[_ngcontent-%COMP%] > .icon-wrapper[_ngcontent-%COMP%], #ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ng-chat-friends-list-container[_ngcontent-%COMP%] > img.avatar[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 5px;\r\n    border-radius: 25px;\r\n}\r\n\r\n#ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    max-height: 30px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n\r\n\r\n#ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ng-chat-friends-list-container[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%] {\r\n    float: left;\r\n    line-height: 30px;\r\n    font-size: .8em;\r\n    max-width: 57%;\r\n    max-height: 30px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n#ng-chat-users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ng-chat-friends-list-container[_ngcontent-%COMP%] > .ng-chat-participant-status[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.ng-chat-participant-status.online[_ngcontent-%COMP%] {\r\n    background-color: #92a400;\r\n}\r\n\r\n.ng-chat-participant-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border-radius: 25px;\r\n    width: 8px;\r\n    height: 8px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .ng-chat-people-action[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .ng-chat-people-action[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .unread-messages-counter-container[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    color: #444;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.ng-chat-unread-messages-count[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    padding: 0 5px;\r\n    border-radius: 25px;\r\n    font-size: .9em;\r\n    line-height: 30px;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%] {\r\n    right: 260px;\r\n    height: 360px;\r\n    z-index: 999;\r\n    bottom: 0;\r\n    width: 300px;\r\n    position: fixed;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-bottom: 0;\r\n    box-shadow: 0 4px 8px rgba(0,0,0,.25);\r\n}\r\n\r\n.ng-chat-title[_ngcontent-%COMP%]   .ng-chat-title-visibility-toggle-area[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 85%;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .secondary-background[_ngcontent-%COMP%] {\r\n    background-color: #444;\r\n}\r\n\r\n.ng-chat-close[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    float: right;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .primary-text[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: Arial,Helvetica,sans-serif;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-window-container[_ngcontent-%COMP%]{\r\n  display: block;\r\n  height: 100%;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    height: calc(90% - 30px);\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    overflow: auto;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .ng-chat-footer[_ngcontent-%COMP%] {\r\n    background-color: #444;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-footer[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    display: block;\r\n    height: calc(10%);\r\n    width: 100%;\r\n    border: none;\r\n    border-top: 1px solid transparent;\r\n    border-color: inherit;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n    width:100px;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%] > .icon-wrapper[_ngcontent-%COMP%], .ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%] > img.avatar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 10px;\r\n    border-radius: 25px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  vertical-align: middle;\r\n  border-style: none;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message.ng-chat-message-received[_ngcontent-%COMP%] > div.received-chat-message-container[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-left: 40px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    border-style: solid;\r\n    border-width: 3px;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 182px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n    font-size: .9em;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .file-message-container.received[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .received-chat-message-container[_ngcontent-%COMP%] {\r\n    background-color: #565656;\r\n    border-color: #444;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-messages[_ngcontent-%COMP%]   .ng-chat-message[_ngcontent-%COMP%]   .message-sent-date[_ngcontent-%COMP%] {\r\n    font-size: .8em;\r\n    display: block;\r\n    text-align: right;\r\n    margin-top: 5px;\r\n}\r\n\r\n.ng-chat-window[_ngcontent-%COMP%]   .ng-chat-footer[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n    font-size: .8em;\r\n    box-sizing: border-box;\r\n    padding: 0 5px;\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n    border: none;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .chat-window-input[_ngcontent-%COMP%] {\r\n    background-color: #444;\r\n    color: #fff;\r\n}\r\n\r\n.dark-theme[_ngcontent-%COMP%]   .file-message-container[_ngcontent-%COMP%], .dark-theme[_ngcontent-%COMP%]   .sent-chat-message-container[_ngcontent-%COMP%] {\r\n    border-color: #444;\r\n    background-color: #444;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVDQUF1QztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJO0FBQ0o7O0FBSUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLFNBQVM7QUFDYjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1Q0FBdUM7QUFDM0M7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJjaGF0LWNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25nLWNoYXQtcGVvcGxle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiAzMzBweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMyMTI1Mjk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kYXJrLXRoZW1le1xyXG4gIGNvbG9yOiAjNDUzYWUzO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxufVxyXG4gIFxyXG4uZGFyay10aGVtZSAucHJpbWFyeS1vdXRsaW5lLWNvbG9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzM1MzUzNTtcclxufVxyXG5cclxuLmRhcmstdGhlbWUgLnByaW1hcnktYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xyXG59XHJcblxyXG4uZGFyay10aGVtZSwgLmRhcmstdGhlbWUgLnByaW1hcnktdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmRhcmstdGhlbWUgLnNlY29uZGFyeS1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxufVxyXG5cclxuI25nLWNoYXR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYm94LXNpemluZzogaW5pdGlhbDtcclxuICBmb250LXNpemU6IDExcHQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5nLWNoYXQtdGl0bGV7XHJcbiAgICBcclxufVxyXG5cclxuLm5nLWNoYXQtdGl0bGUsIC5uZy1jaGF0LXRpdGxlOmhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xyXG59XHJcbi5uZy1jaGF0LXRpdGxlLnNldE1hcmdpbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxufVxyXG4gXHJcblxyXG5cclxuLm5nLWNoYXQtdGl0bGUgLm5nLWNoYXQtdGl0bGUtdmlzaWJpbGl0eS10b2dnbGUtYXJlYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuI25nLWNoYXQgLnNoYWRvd2VkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4yNSk7XHJcbn1cclxuXHJcbiNuZy1jaGF0LXNlYXJjaF9mcmllbmR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgZm9udC1zaXplOiAuOWVtO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogc2VhcmNoZmllbGQ7XHJcbn1cclxuXHJcblxyXG4uZGFyay10aGVtZSAuZnJpZW5kcy1zZWFyY2gtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblt0eXBlPXNlYXJjaF0ge1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW5wdXQge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcblxyXG5idXR0b24sIGlucHV0LCBvcHRncm91cCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4jbmctY2hhdC11c2VycyB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQycHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4jbmctY2hhdC11c2Vycy5vZmZzZXQtc2VhcmNoIHtcclxuICAgIHRvcDogODRweDtcclxufVxyXG5cclxuXHJcbiNuZy1jaGF0LXVzZXJzIGxpIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4jbmctY2hhdC11c2VycyBsaSAubmctY2hhdC1mcmllbmRzLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbmctY2hhdC11c2VycyBsaSAubmctY2hhdC1mcmllbmRzLWxpc3QtY29udGFpbmVyPi5pY29uLXdyYXBwZXIsICNuZy1jaGF0LXVzZXJzIGxpIC5uZy1jaGF0LWZyaWVuZHMtbGlzdC1jb250YWluZXI+aW1nLmF2YXRhciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuI25nLWNoYXQtdXNlcnMgbGkge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi8qIGltZ1tBdHRyaWJ1dGVzIFN0eWxlXSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufSAqL1xyXG5cclxuI25nLWNoYXQtdXNlcnMgbGkgLm5nLWNoYXQtZnJpZW5kcy1saXN0LWNvbnRhaW5lcj5zdHJvbmcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIG1heC13aWR0aDogNTclO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiNuZy1jaGF0LXVzZXJzIGxpIC5uZy1jaGF0LWZyaWVuZHMtbGlzdC1jb250YWluZXI+Lm5nLWNoYXQtcGFydGljaXBhbnQtc3RhdHVzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5nLWNoYXQtcGFydGljaXBhbnQtc3RhdHVzLm9ubGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJhNDAwO1xyXG59XHJcblxyXG4ubmctY2hhdC1wYXJ0aWNpcGFudC1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uZGFyay10aGVtZSAubmctY2hhdC1wZW9wbGUtYWN0aW9uLCAuZGFyay10aGVtZSAubmctY2hhdC1wZW9wbGUtYWN0aW9uPmksIC5kYXJrLXRoZW1lIC51bnJlYWQtbWVzc2FnZXMtY291bnRlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4uZGFyay10aGVtZSwgLmRhcmstdGhlbWUgLnByaW1hcnktdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm5nLWNoYXQtdW5yZWFkLW1lc3NhZ2VzLWNvdW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcbi5uZy1jaGF0LXdpbmRvdyB7XHJcbiAgICByaWdodDogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4yNSk7XHJcbn1cclxuXHJcbi5uZy1jaGF0LXRpdGxlIC5uZy1jaGF0LXRpdGxlLXZpc2liaWxpdHktdG9nZ2xlLWFyZWEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuLmRhcmstdGhlbWUgLnNlY29uZGFyeS1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5uZy1jaGF0LWNsb3NlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRhcmstdGhlbWUsIC5kYXJrLXRoZW1lIC5wcmltYXJ5LXRleHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uZy1jaGF0LXdpbmRvdyAubmctY2hhdC13aW5kb3ctY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5nLWNoYXQtd2luZG93IC5uZy1jaGF0LW1lc3NhZ2VzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoOTAlIC0gMzBweCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5kYXJrLXRoZW1lIC5uZy1jaGF0LWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4ubmctY2hhdC13aW5kb3cgLm5nLWNoYXQtZm9vdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDoxMDBweDtcclxufVxyXG5cclxuLm5nLWNoYXQtd2luZG93IC5uZy1jaGF0LW1lc3NhZ2VzIC5uZy1jaGF0LW1lc3NhZ2Uge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5uZy1jaGF0LXdpbmRvdyAubmctY2hhdC1tZXNzYWdlcyAubmctY2hhdC1tZXNzYWdlPi5pY29uLXdyYXBwZXIsIC5uZy1jaGF0LXdpbmRvdyAubmctY2hhdC1tZXNzYWdlcyAubmctY2hhdC1tZXNzYWdlPmltZy5hdmF0YXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm5nLWNoYXQtd2luZG93IC5uZy1jaGF0LW1lc3NhZ2VzIC5uZy1jaGF0LW1lc3NhZ2UubmctY2hhdC1tZXNzYWdlLXJlY2VpdmVkPmRpdi5yZWNlaXZlZC1jaGF0LW1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uZy1jaGF0LXdpbmRvdyAubmctY2hhdC1tZXNzYWdlcyAubmctY2hhdC1tZXNzYWdlPmRpdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTgycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmRhcmstdGhlbWUgLmZpbGUtbWVzc2FnZS1jb250YWluZXIucmVjZWl2ZWQsIC5kYXJrLXRoZW1lIC5yZWNlaXZlZC1jaGF0LW1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjU2NTY7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5uZy1jaGF0LXdpbmRvdyAubmctY2hhdC1tZXNzYWdlcyAubmctY2hhdC1tZXNzYWdlIC5tZXNzYWdlLXNlbnQtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuLm5nLWNoYXQtd2luZG93IC5uZy1jaGF0LWZvb3Rlcj5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZGFyay10aGVtZSAuY2hhdC13aW5kb3ctaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZGFyay10aGVtZSAuZmlsZS1tZXNzYWdlLWNvbnRhaW5lciwgLmRhcmstdGhlbWUgLnNlbnQtY2hhdC1tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NDQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatClientComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-client',
            templateUrl: './chat-client.component.html',
            styleUrls: ['./chat-client.component.css']
          }]
        }], function () {
          return [{
            type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
          }, {
            type: _services_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]
          }, {
            type: src_app_services_recruiter_service__WEBPACK_IMPORTED_MODULE_6__["RecruiterService"]
          }, {
            type: src_app_services_job_seeker_service__WEBPACK_IMPORTED_MODULE_7__["JobSeekerService"]
          }];
        }, {
          ngChatPeople: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ngChatPeople', {
              "static": false
            }]
          }],
          ngChatTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ngChatTitle', {
              "static": false
            }]
          }],
          ngChatWindowContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ngChatWindowContainer', {
              "static": false
            }]
          }],
          ngChatWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['ngChatWindow']
          }]
        });
      })();
      /***/

    },

    /***/
    "ysUA":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/recruiter-forget-password/recruiter-forget-password.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: RecruiterForgetPasswordComponent */

    /***/
    function ysUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruiterForgetPasswordComponent", function () {
        return RecruiterForgetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RecruiterForgetPasswordComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterForgetPasswordComponent_ng_container_4_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.sendEmailBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Send OTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.EmailConfirmationForm);
        }
      }

      function RecruiterForgetPasswordComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confim OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "OTP *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterForgetPasswordComponent_ng_container_5_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.otpCheckBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Confirm OTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.otpConfirmation);
        }
      }

      function RecruiterForgetPasswordComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Forget Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm Password *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterForgetPasswordComponent_ng_container_6_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.changePasswordBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Change Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.forgetPasswordForm);
        }
      }

      var RecruiterForgetPasswordComponent = /*#__PURE__*/function () {
        function RecruiterForgetPasswordComponent(_formBuilder) {
          _classCallCheck(this, RecruiterForgetPasswordComponent);

          this._formBuilder = _formBuilder;
          this.hasFormErrors = false;
          this.ifEmailId = true;
          this.ifSendOtp = false;
          this.ifPassword = false;
        }

        _createClass(RecruiterForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.EmailConfirmationForm = this._formBuilder.group({
              emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.otpConfirmation = this._formBuilder.group({
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.forgetPasswordForm = this._formBuilder.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "sendEmailBtnClick",
          value: function sendEmailBtnClick() {
            this.hasFormErrors = false;
            var controls = this.EmailConfirmationForm.controls;
            /** check form */

            if (this.EmailConfirmationForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            this.ifEmailId = false;
            this.ifSendOtp = true;
          }
        }, {
          key: "otpCheckBtnClick",
          value: function otpCheckBtnClick() {
            this.hasFormErrors = false;
            var controls = this.otpConfirmation.controls;
            /** check form */

            if (this.otpConfirmation.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            this.ifEmailId = false;
            this.ifSendOtp = false;
            this.ifPassword = true;
          }
        }, {
          key: "changePasswordBtnClick",
          value: function changePasswordBtnClick() {
            this.hasFormErrors = false;
            var controls = this.forgetPasswordForm.controls;
            /** check form */

            if (this.forgetPasswordForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }
          }
        }]);

        return RecruiterForgetPasswordComponent;
      }();

      RecruiterForgetPasswordComponent.ɵfac = function RecruiterForgetPasswordComponent_Factory(t) {
        return new (t || RecruiterForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      RecruiterForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecruiterForgetPasswordComponent,
        selectors: [["app-recruiter-forget-password"]],
        decls: 7,
        vars: 3,
        consts: [[1, "section-full", "content-inner-2", "shop-account"], [1, "container"], [1, "max-w500", "m-auto", "bg-white", "m-b30"], [1, "p-a30", "job-bx", "browse-job", "radius-sm", "seth"], [4, "ngIf"], [1, "tab-content", "nav", "mb-2"], ["id", "EmailConfirmationForm", 1, "col-12", "p-a0", "mb-2", 3, "formGroup"], [1, "font-weight-700"], [1, "form-group"], ["name", "passowrd", "formControlName", "emailId", "required", "", "placeholder", "Type Password", "type", "password", 1, "form-control"], [1, "text-center", "mb-2"], [1, "site-button", "m-r5", "button-lg", 3, "click"], ["id", "otpConfirmation", 1, "col-12", "p-a0", 3, "formGroup"], ["name", "otp-confirmation", "formControlName", "otp", "required", "", "placeholder", "Enter OTP", "type", "password", 1, "form-control"], ["id", "forgetPasswordForm", 1, "col-12", "p-a0", 3, "formGroup"], ["name", "passowrd", "formControlName", "password", "required", "", "placeholder", "Enter a new Password", "type", "password", 1, "form-control"], ["name", "passowrd", "formControlName", "confirmPassword", "required", "", "placeholder", "Confirm Password", "type", "password", 1, "form-control"]],
        template: function RecruiterForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecruiterForgetPasswordComponent_ng_container_4_Template, 13, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecruiterForgetPasswordComponent_ng_container_5_Template, 13, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecruiterForgetPasswordComponent_ng_container_6_Template, 17, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifEmailId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifSendOtp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifPassword);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0ZXItZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecruiterForgetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recruiter-forget-password',
            templateUrl: './recruiter-forget-password.component.html',
            styleUrls: ['./recruiter-forget-password.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zotE":
    /*!*********************************************************!*\
      !*** ./src/app/pages/common/header/header.component.ts ***!
      \*********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function zotE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "fid/");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 13,
        vars: 0,
        consts: [[1, "page-wraper"], [1, "site-header", "mo-left", "header", "fullwidth"], [1, "sticky-header", "main-bar-wraper", "navbar-expand-lg"], [1, "main-bar", "clearfix"], [1, "container", "clearfix"], [1, "logo-header", "mostion"], ["href", "/"], ["src", "./assets/images/logo.png", "alt", "", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed", "navicon", "justify-content-end"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zqXR":
    /*!********************************************************************!*\
      !*** ./src/app/pages/jobseeker-login/jobseeker-login.component.ts ***!
      \********************************************************************/

    /*! exports provided: JobseekerLoginComponent */

    /***/
    function zqXR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobseekerLoginComponent", function () {
        return JobseekerLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/login.service */
      "EFyh");
      /* harmony import */


      var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/header/header.component */
      "zotE");
      /* harmony import */


      var _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/banner/banner.component */
      "iz0i");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/footer/footer.component */
      "83yU");

      function JobseekerLoginComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Address is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobseekerLoginComponent_span_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var JobseekerLoginComponent = /*#__PURE__*/function () {
        function JobseekerLoginComponent(_formBuilder, router, loginService) {
          _classCallCheck(this, JobseekerLoginComponent);

          this._formBuilder = _formBuilder;
          this.router = router;
          this.loginService = loginService;
          this.hasFormErrors = false;
        }

        _createClass(JobseekerLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginFormJobSeeker = this._formBuilder.group({
              userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            var _this40 = this;

            this.hasFormErrors = false;
            var controls = this.loginFormJobSeeker.controls;
            /** check form */

            if (this.loginFormJobSeeker.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              this.hasFormErrors = true;
              return;
            }

            this.loginService.loginUser(this.loginFormJobSeeker.value).subscribe(function (res) {
              console.log(res);

              if (res.msg == "Invalid Username/password!") {
                alert(res.msg);
              } else {
                alert("Login sucessfully");
                var responseObj = res['data'];
                localStorage.setItem('macrax-token', responseObj.token);
                localStorage.setItem('macrax-emailId', responseObj.userName);
                localStorage.setItem('macrax-password', _this40.loginFormJobSeeker.value.password);
                localStorage.setItem('role', '0');

                if (responseObj.IsOnboard == 0) {
                  _this40.router.navigateByUrl('/dashboard/job-seeker-profilereg');
                } else {
                  _this40.router.navigateByUrl('/dashboard/home');
                }
              }
            }, function (err) {
              console.log(err);
              alert("Login Filed");
            });
          }
        }]);

        return JobseekerLoginComponent;
      }();

      JobseekerLoginComponent.ɵfac = function JobseekerLoginComponent_Factory(t) {
        return new (t || JobseekerLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
      };

      JobseekerLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobseekerLoginComponent,
        selectors: [["app-jobseeker-login"]],
        decls: 34,
        vars: 3,
        consts: [[1, "section-full", "content-inner-2", "shop-account"], [1, "container"], [1, "max-w500", "m-auto", "bg-white", "m-b30"], [1, "p-a30", "job-bx", "browse-job", "radius-sm", "seth"], [1, "tab-content", "nav"], ["id", "loginJobSeekerForm", 1, "col-12", "p-a0", 3, "formGroup"], [1, "font-weight-700"], [1, "form-group"], ["name", "email", "required", "", "formControlName", "userName", "placeholder", "Your Email Address", "type", "email", 1, "form-control"], [4, "ngIf"], ["name", "passowrd", "formControlName", "password", "required", "", "placeholder", "Type Password", "type", "password", 1, "form-control"], [1, "text-center", "mb-2"], [1, "site-button", "m-r5", "button-lg", 3, "click"], [1, "mt-2", "border-top"], ["href", "dashboard/forgot-password", 1, "m-l5", "m-t15", "forget-pass", "float-left"], [1, "fa", "fa-sign-in"], ["href", "/jobseeker-signup", 1, "m-l5", "m-t15", "forget-pass", "float-right"]],
        template: function JobseekerLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login as Job Seeker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-MAIL *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JobseekerLoginComponent_span_16_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PASSWORD *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, JobseekerLoginComponent_span_22_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobseekerLoginComponent_Template_button_click_24_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Forgot Password ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Not registered yet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormJobSeeker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginFormJobSeeker.get("userName").valid && ctx.loginFormJobSeeker.get("userName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginFormJobSeeker.get("password").valid && ctx.loginFormJobSeeker.get("password").touched);
          }
        },
        directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _common_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzZWVrZXItbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobseekerLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-jobseeker-login',
            templateUrl: './jobseeker-login.component.html',
            styleUrls: ['./jobseeker-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
          }];
        }, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map