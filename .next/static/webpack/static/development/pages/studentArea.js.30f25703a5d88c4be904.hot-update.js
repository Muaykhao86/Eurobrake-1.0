webpackHotUpdate("static/development/pages/studentArea.js",{

/***/ "./components/forms/Abstract.js":
/*!**************************************!*\
  !*** ./components/forms/Abstract.js ***!
  \**************************************/
/*! exports provided: AbstractForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractForm", function() { return AbstractForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/Button.js");
/* harmony import */ var _FormSelects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSelects */ "./components/forms/FormSelects.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormControl */ "./components/forms/FormControl.js");
/* harmony import */ var _Formstyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Formstyles */ "./components/forms/Formstyles.js");
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormActions */ "./components/forms/FormActions.js");


var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/components/forms/Abstract.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var AbstractForm = function AbstractForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      presenter = _useState[0],
      setPresenter = _useState[1]; // if edit = true send back a preset form if not send a blank
  // * above- dont think i need this now, can just check if there aere presets and if not just use epty schema


  var presets = props.presets,
      csrf = props.csrf,
      apiUrl = props.apiUrl,
      paperId = props.paperId;
  var url = "https://prelude.eurobrake.net/authors/submit/".concat(paperId);
  console.log({
    presets: presets,
    apiUrl: apiUrl
  }); // ? If they choose to edit a abstarct paper we pass the paper code and il get its presets to fill in

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: presets || emptyInitial,
    validationSchema: _FormControl__WEBPACK_IMPORTED_MODULE_10__["AbstractSchema"],
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref) {
    var values = _ref.values,
        isSubmitting = _ref.isSubmitting,
        isValidating = _ref.isValidating,
        handleChange = _ref.handleChange,
        setFieldValue = _ref.setFieldValue;

    var allNo = function allNo(_ref2) {
      var name = _ref2.name;

      if (true) {
        var radios = document.querySelectorAll('input[name*="is_presenting_author"]');
        {
          /* console.log(name) */
        }
        radios.forEach(function (input) {
          input.name !== name && setFieldValue(input.name, input.value) && console.log('gonna change...', input.name, 'cos it aint the same as...', name);
        });
      }
    };

    var onPresenterChange = function onPresenterChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      {
        /* value === 'no' ? setPresenter('') : setPresenter(name); */
      }
      setFieldValue(name, value);
      allNo({
        name: name
      });
      return console.log({
        values: values
      });
    };

    var onSubmit =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values.__csrf_token = csrf;
                console.log('sending', values, url);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onSubmit() {
        return _ref3.apply(this, arguments);
      };
    }(); // ? NEED TO REDIRECT AFTER FORM SUBMISSION
    // ? NEED TO DO VALIDATION
    // ? sECONDARY AUTHORS => IF THERE ARE NONE WE NEED THE OPTION TO ADD IN A NEW ONE


    return __jsx(_Formstyles__WEBPACK_IMPORTED_MODULE_11__["StyledForm"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Primary Author"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Title"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_title,
      style: {
        color: '#134381'
      },
      name: "author_title",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["titles"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_firstname,
      style: {
        color: '#134381'
      },
      name: "author_firstname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_lastname,
      style: {
        color: '#134381'
      },
      name: "author_lastname",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_email,
      style: {
        color: '#134381'
      },
      name: "author_email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Job Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_jobtitle,
      style: {
        color: '#134381'
      },
      name: "author_jobtitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_company,
      style: {
        color: '#134381'
      },
      name: "author_company",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Address:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address1,
      style: {
        color: '#134381'
      },
      name: "author_address1",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address2,
      style: {
        color: '#134381'
      },
      name: "author_address2",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_address3,
      style: {
        color: '#134381'
      },
      name: "author_address3",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "City:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_city,
      style: {
        color: '#134381'
      },
      name: "author_city",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, "State/ County/ Province:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_scp,
      style: {
        color: '#134381'
      },
      name: "author_scp",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Postal/ Zip code:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_postal,
      style: {
        color: '#134381'
      },
      name: "author_postal",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "Country"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_country,
      style: {
        color: '#134381'
      },
      name: "author_country",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["countries"].map(function (option, i) {
      return __jsx("option", {
        key: i,
        style: {
          fontSize: '1.5rem',
          cursor: 'pointer'
        },
        value: option.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, option.label);
    }))), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, "Phone:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.author_phone,
      style: {
        color: '#134381'
      },
      name: "author_phone",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "Is this the presenting author?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-field",
      value: values.is_presenting_author,
      style: {
        color: '#134381',
        alignSelf: 'flexStart',
        margin: '0'
      },
      name: "is_presenting_author",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, __jsx("label", {
      style: {
        margin: ' 0'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, __jsx("input", {
      checked: values.is_presenting_author === 'yes',
      onChange: function onChange(event) {
        onPresenterChange(event);
      },
      type: "radio",
      name: "is_presenting_author",
      value: "yes",
      style: {
        margin: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }), "Yes"), __jsx("label", {
      style: {
        margin: '1rem 0'
      },
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, __jsx("input", {
      onChange: function onChange(event) {
        onPresenterChange(event);
      },
      checked: values.is_presenting_author !== 'yes',
      type: "radio",
      name: "is_presenting_author",
      value: "no",
      style: {
        margin: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }), "No"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, "Your Abstract"), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, "Paper Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values.papertitle,
      style: {
        color: '#134381'
      },
      name: "papertitle",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    })), __jsx("div", {
      className: "form-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "label",
      className: "form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, "Abstract:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      className: "form-input",
      onClick: handleChange,
      value: values["abstract"],
      style: {
        color: '#134381',
        minHeight: '15rem'
      },
      name: "abstract",
      component: "textarea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    })), values["abstract"] && __jsx("label", {
      style: {
        position: 'absolute',
        bottom: '-3rem',
        right: '1rem',
        color: '#ff0000',
        fontSize: '1.5rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, 'Words' + ' ' + values["abstract"].match(/[\w\d\’\'-]+/gi).length), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, "Secondary Author(s)"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["FieldArray"], {
      name: "secondary_authors",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, function (_ref4) {
      var swap = _ref4.swap,
          push = _ref4.push,
          remove = _ref4.remove,
          setSubmitting = _ref4.setSubmitting;
      return values.secondary_authors && values.secondary_authors.length > 0 ? values.secondary_authors.map(function (author, index) {
        var is_presenting_author = author.is_presenting_author;
        {
          /* const second = `values.secondary_authors[${index}].is_presenting_author`; */
        }
        return __jsx("div", {
          key: index,
          className: "form-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          },
          __self: this
        }, __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, "Title:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].title"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].title"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["titles"].map(function (option, i) {
          return __jsx("option", {
            key: i,
            style: {
              fontSize: '1.5rem',
              cursor: 'pointer'
            },
            value: option.value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 394
            },
            __self: this
          }, option.label);
        }))), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        }, "First Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].firstname"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].firstname"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          },
          __self: this
        })), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }, "Last Name:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].lastname"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].lastname"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        })), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          },
          __self: this
        }, "Email:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].email"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].email"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        })), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, "Company:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].company"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].company"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448
          },
          __self: this
        })), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, "Country:"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-input",
          onClick: handleChange,
          value: "secondary_authors[".concat(index, "].country"),
          style: {
            color: '#134381'
          },
          name: "secondary_authors[".concat(index, "].country"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["Select"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 463
          },
          __self: this
        }, _FormSelects__WEBPACK_IMPORTED_MODULE_9__["countries"].map(function (option, i) {
          return __jsx("option", {
            key: i,
            style: {
              fontSize: '1.5rem',
              cursor: 'pointer'
            },
            value: option.value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472
            },
            __self: this
          }, option.label);
        }))), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }, __jsx("label", {
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          },
          __self: this
        }, "Is this the presenting Author?"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          className: "form-field",
          style: {
            color: '#134381',
            alignSelf: 'flexStart',
            margin: '0'
          },
          value: "secondary_authors[".concat(index, "].is_presenting_author"),
          component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["RadioGroup"],
          name: "secondary_authors[".concat(index, "].is_presenting_author"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          },
          __self: this
        }, __jsx("label", {
          style: {
            margin: '0'
          },
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          __self: this
        }, __jsx("input", {
          checked: is_presenting_author === 'yes',
          onChange: function onChange(event) {
            onPresenterChange(event);
          },
          type: "radio",
          value: "yes",
          name: "secondary_authors[".concat(index, "].is_presenting_author"),
          style: {
            margin: '1rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          },
          __self: this
        }), "Yes"), __jsx("label", {
          style: {
            margin: '1rem 0 '
          },
          htmlFor: "label",
          className: "form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 506
          },
          __self: this
        }, __jsx("input", {
          checked: is_presenting_author !== 'yes',
          onChange: function onChange(event) {
            onPresenterChange(event);
          },
          type: "radio",
          value: "no",
          name: "secondary_authors[".concat(index, "].is_presenting_author"),
          style: {
            margin: '1rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 510
          },
          __self: this
        }), "No"))), __jsx("div", {
          className: "form-field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 526
          },
          __self: this
        }, __jsx("div", {
          className: "form-field_action",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 528
          },
          __self: this
        }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          padding: ".5rem",
          bcolor: "transparent",
          abs: "false",
          bs: "false",
          HBColor: "transparent",
          transform: "scale(1.4)",
          type: "add",
          onClick: function onClick() {
            push({
              title: '',
              firstname: '',
              lastname: '',
              email: '',
              company: '',
              country: '',
              is_presenting_author: ''
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 530
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["AddCircle"], {
          style: {
            color: 'green',
            fontSize: '3rem',
            margin: '.5rem 0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          __self: this
        })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          padding: ".5rem",
          bcolor: "transparent",
          abs: "false",
          bs: "false",
          HBColor: "transparent",
          transform: "scale(1.4)",
          type: "remove",
          onClick: function onClick() {
            return values.secondary_authors.length >= 1 && remove(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["RemoveCircle"], {
          style: {
            color: 'red',
            fontSize: '3rem',
            margin: '.5rem 0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 558
          },
          __self: this
        })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          padding: ".5rem",
          bcolor: "transparent",
          abs: "false",
          bs: "false",
          HBColor: "transparent",
          transform: "scale(1.4)",
          type: "upgrade",
          onClick: function onClick() {
            return values.secondary_authors.length > 1 && index !== 0 && swap(index, index - 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 560
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowUpwardRounded"], {
          style: {
            color: 'red',
            fontSize: '3rem',
            margin: '.5rem 0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          },
          __self: this
        })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          padding: ".5rem",
          bcolor: "transparent",
          abs: "false",
          bs: "false",
          HBColor: "transparent",
          transform: "scale(1.4)",
          type: "downgrade",
          onClick: function onClick() {
            return values.secondary_authors.length > 1 && index !== values.secondary_authors.length - 1 && swap(index, index + 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 570
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowDownwardRounded"], {
          style: {
            color: 'red',
            fontSize: '3rem',
            margin: '.5rem 0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          },
          __self: this
        })))));
      }) : __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        abs: "false",
        bs: "false",
        bcolor: "transparent",
        HBColor: "transparent",
        transform: "scale(1.4)",
        type: "add",
        onClick: function onClick() {
          push({
            title: '',
            firstname: '',
            lastname: '',
            email: '',
            company: '',
            country: '',
            is_presenting_author: ''
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["AddCircle"], {
        style: {
          color: 'green',
          fontSize: '3rem',
          margin: '.5rem 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }));
    }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: onSubmit,
      bcolor: "#134381",
      background: "#134381",
      br: "100rem",
      style: {
        margin: ".5rem 0"
      },
      fontSize: "1.7rem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609
      },
      __self: this
    }, "Submit"));
  });
};
var presetEG = {
  "abstract": "lorem ipsum",
  author_address1: "10 Hamilton Road",
  author_address2: null,
  author_address3: null,
  author_city: "Sidcup",
  author_company: "Article Seven Limited",
  author_country: "GB",
  author_email: "andrew@article7.co.uk",
  author_firstname: "Andrew",
  author_jobtitle: "Director",
  author_lastname: "Green",
  author_phone: "+44 20 8305 1224",
  author_postal: "DA15 7HB",
  author_scp: "Kent",
  author_title: "Mr.",
  consider_for_journal: "no",
  is_presenting_author: "yes",
  keywords: "lorem, ipsum",
  papertitle: "Duis aute irure dolor",
  presentationtype_full: "programme",
  previouspapers: null,
  secondary_authors: [{
    company: "Article Seven",
    country: "GB",
    email: "ava@article7.co.uk",
    firstname: "Ava",
    is_presenting_author: "no",
    lastname: "Green",
    ref: "2399A3C8-1823-11EA-BBE7-BDC53B013130",
    title: null
  }],
  submission_type: "full",
  subtheme: ["3DB1BDC0-9414-11E8-81E9-D82DD1471F92"],
  theme: "925B5F3C-7865-11E7-8659-8C8422753A7C",
  __csrf_token: "5d159fb224ed613dce89a64553f36f5eda1fa97c,2caaa318bb55c8c19d660a1e420d1c602dfc59f9,1576603105"
};
var emptyInitial = {
  author_title: '',
  author_firstname: '',
  author_lastname: '',
  author_email: '',
  author_jobtitle: '',
  author_company: '',
  author_address1: '',
  author_address2: '',
  author_address3: '',
  author_city: '',
  author_scp: '',
  author_postal: '',
  author_country: '',
  author_phone: '',
  is_presenting_author: '',
  submission_type: '',
  presentationtype_full: '',
  papertitle: '',
  theme: '',
  subtheme: [],
  "abstract": '',
  keywords: '',
  previouspapers: '',
  consider_for_journal: '',
  secondary_authors: [{
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    country: '',
    is_presenting_author: '' // ref: ''

  }],
  __csrf_token: ''
}; // ! NOT NEEDED ANYMORE !!!! 
//  <h1>Your Abstract</h1>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Submission Type:
//                         </label>
//                             <Field
//                                 className="form-radio"
//                                 onClick={handleChange}
//                                 value={values.submission_type}
//                                 style={{ color: '#134381' }}
//                                 name="submission_type"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
//                                     I will make a full technical paper submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="full"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
//                                     I will make an oral-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="oral"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
//                                     I will make a poster-only submission
//                             <Field
//                                         type="radio"
//                                         name="submission_type"
//                                         value="poster"
//                                     />
//                                 </label>
//                             </Field>
//                         </div>
//                         {values.submission_type === 'full' && <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Presentation Type:
//                         </label>
//                             <Field
//                                 className="form-radio"
//                                 onClick={handleChange}
//                                 value={values.presentationtype_full}
//                                 style={{ color: '#134381' }}
//                                 name="presentationtype_full"
//                                 component={RadioGroup}
//                             >
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
//                                     My full paper submission will be accompanied by an oral presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="programme"
//                                     />
//                                 </label>
//                                 <label
//                                     style={{ margin: '1rem' }}
//                                     htmlFor="label"
//                                     className="form-label">
//                                     My full paper submission will be accompanied by an poster presentation
//                             <Field
//                                         type="radio"
//                                         name="presentationtype_full"
//                                         value="poster"
//                                     />
//                                 </label>
//                             </Field>
//                         </div>}
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Paper Title:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.papertitle}
//                                 style={{ color: '#134381' }}
//                                 name="papertitle"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Which topic does your paper belong to?
//                         </label>
//                             <Field
//                                 className="form-radio"
//                                 onClick={handleChange}
//                                 value={values.theme}
//                                 style={{ color: '#134381' }}
//                                 name="theme"
//                                 component={RadioGroup}
//                             >
//                                 {themes.map(theme =>
//                                     <label
//                                         style={{ margin: '1rem' }}
//                                         htmlFor="label"
//                                         className="form-label">
//                                         {theme.label}
//                                         <Field
//                                             type="radio"
//                                             name="theme"
//                                             value={theme.value}
//                                         />
//                                     </label>)}
//                             </Field>
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Please choose up to three sub-topics for your paper:
//                         </label>
//                             {
//                                 values.theme === 'BC50E220-9412-11E8-85AF-D97B4D95EBB1' ?
//                                     subTheme1.map((sub, i) => (
//                                         <label
//                                             htmlFor="label"
//                                             className="form-label">
//                                             <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                             {sub.label}
//                                         </label>
//                                     )
//                                     )
//                                     :
//                                     values.theme === '48C9561C-7865-11E7-AA75-C89000D85D50' ?
//                                         subTheme2.map((sub, i) => (
//                                             <label
//                                                 htmlFor="label"
//                                                 className="form-label">
//                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                 {sub.label}
//                                             </label>
//                                         )
//                                         )
//                                         :
//                                         values.theme === '5D49D9C2-7865-11E7-9112-887F12D54550' ?
//                                             subTheme3.map((sub, i) => (
//                                                 <label
//                                                     htmlFor="label"
//                                                     className="form-label">
//                                                     <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                     {sub.label}
//                                                 </label>
//                                             )
//                                             )
//                                             :
//                                             values.theme === '7C15061A-7865-11E7-8178-84D2A73AF9BC' ?
//                                                 subTheme4.map((sub, i) => (
//                                                     <label
//                                                         htmlFor="label"
//                                                         className="form-label">
//                                                         <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                         {sub.label}
//                                                     </label>
//                                                 )
//                                                 )
//                                                 :
//                                                 values.theme === '925B5F3C-7865-11E7-8659-8C8422753A7C' ?
//                                                     subTheme5.map((sub, i) => (
//                                                         <label
//                                                             htmlFor="label"
//                                                             className="form-label">
//                                                             <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                             {sub.label}
//                                                         </label>
//                                                     )
//                                                     )
//                                                     :
//                                                     values.theme === 'B6F53F20-7865-11E7-A9B1-FC3D434D4D51' ?
//                                                         subTheme6.map((sub, i) => (
//                                                             <label
//                                                                 htmlFor="label"
//                                                                 className="form-label">
//                                                                 <Field key={i} id={`Box-${i}`} type="checkbox" name="subtheme" value={sub.value} />
//                                                                 {sub.label}
//                                                             </label>
//                                                         )
//                                                         )
//                                                         : null
//                             }
//                             <ErrorMessage component={Typography} name="subtheme" style={{ color: 'red', fontSize: '1.5rem' }} />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Abstract:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.abstract}
//                                 style={{ color: '#134381' }}
//                                 name="abstract"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Keywords:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.keywords}
//                                 style={{ color: '#134381' }}
//                                 name="keywords"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Previous Papers:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.previouspapers}
//                                 style={{ color: '#134381' }}
//                                 name="previouspapers"
//                                 component={TextField}
//                             />
//                         </div>
//                         <div className="form-field">
//                             <label
//                                 htmlFor="label"
//                                 className="form-label">
//                                 Do you wish your paper to be considered for inclusion in a list of the best papers given at EuroBrake to be published in an academic journal?:
//                         </label>
//                             <Field
//                                 className="form-input"
//                                 onClick={handleChange}
//                                 value={values.consider_for_journal}
//                                 style={{ color: '#134381' }}
//                                 name="consider_for_journal"
//                                 component={TextField}
//                             />
//                         </div>
// * DEFINITION 
// form: Array(26)
// 0:
// title: "Primary Author"
// type: "heading"
// __proto__: Object
// 1:
// options: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "author_title"
// label: "Title:"
// type: "select"
// __proto__: Object
// 2:
// required: "Please provide your first name."
// name: "author_firstname"
// label: "First name(s):"
// type: "text"
// __proto__: Object
// 3:
// required: "Please provide your second (family) name."
// name: "author_lastname"
// label: "Second (family) name:"
// type: "text"
// __proto__: Object
// 4:
// required: "Please provide your email address."
// name: "author_email"
// label: "Email address:"
// type: "email"
// divider: 1
// __proto__: Object
// 5:
// required: "Please provide your job title."
// name: "author_jobtitle"
// label: "Job title:"
// type: "text"
// divider: 1
// __proto__: Object
// 6:
// required: "Please provide your company or organisation."
// name: "author_company"
// label: "Company/organisation:"
// type: "text"
// __proto__: Object
// 7:
// required: "Please provide your street address."
// name: "author_address1"
// label: "Address:"
// type: "text"
// __proto__: Object
// 8:
// name: "author_address2"
// type: "text"
// __proto__: Object
// 9:
// name: "author_address3"
// type: "text"
// __proto__: Object
// 10:
// required: "Please provide your city."
// name: "author_city"
// label: "City:"
// type: "text"
// __proto__: Object
// 11:
// name: "author_scp"
// label: "State/county/province:"
// type: "text"
// __proto__: Object
// 12:
// name: "author_postal"
// label: "Postal/zip code:"
// type: "text"
// __proto__: Object
// 13:
// required: "Please provide your country."
// options: (83) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "author_country"
// label: "Country:"
// type: "select"
// __proto__: Object
// 14:
// required: "Please provide your telephone number, including international code."
// notes: "Please include the international code."
// name: "author_phone"
// label: "Telephone:"
// type: "text"
// divider: 1
// __proto__: Object
// 15:
// options: (2) [{…}, {…}]
// name: "is_presenting_author"
// default: "no"
// required: "Please indicate the presenting author."
// type: "radio"
// label: "Is this the presenting author?"
// divider: 1
// __proto__: Object
// 16:
// title: "Your Abstract"
// type: "heading"
// __proto__: Object
// 17:
// name: "papertitle"
// required: "Please provide the title of your proposed submission."
// notes: "Please use Title Case. DO NOT use block capitals."
// type: "textarea"
// label: "Title of your proposed submission:"
// divider: 0
// __proto__: Object
// 18:
// html: "↵					<p class="f_intro"><strong>Please type or paste the text of your abstract below (maximum 750 words).</strong></p> ↵	 				<p class="f_intro">Your abstract should clearly set out the main scientific, technical, economic and / or practical points to be addressed in your paper. In particular your abstract should indicate those aspects of the work which are new, innovative and unique.</p>↵				"
// type: "html"
// divider: 1
// __proto__: Object
// 19:
// required: "Please provide the abstract for your submission."
// name: "abstract"
// label: "Your abstract:"
// type: "textarea"
// __proto__: Object
// 20:
// name: "keywords"
// required: "Please provide some keywords for your abstract."
// notes: "Please separate keywords with commas.  Please do not use block capitals."
// type: "textarea"
// label: "Please enter around 5 keywords that describe the main focus of your abstract:"
// divider: 1
// __proto__: Object
// 21:
// name: "previouspapers"
// label: "Please give details of any previous papers you have published on this subject (if applicable)"
// type: "textarea"
// divider: 1
// __proto__: Object
// 22:
// options: (2) [{…}, {…}]
// name: "consider_for_journal"
// default: "no"
// notes: "Please note that your paper may require additional revisions in order to meet the qualifying criteria."
// type: "radio"
// label: "Do you wish your paper to be considered for inclusion in a list of the best papers given at EuroBrake to be published in an academic journal?"
// divider: 1
// __proto__: Object
// 23:
// title: "Secondary Author(s)"
// type: "heading"
// __proto__: Object
// 24:
// fields: Array(8)
// 0:
// name: "ref"
// type: "hidden"
// __proto__: Object
// 1:
// options: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "title"
// label: "Title:"
// type: "select"
// __proto__: Object
// 2:
// required: "Please provide each secondary author's first name."
// name: "firstname"
// label: "First name(s):"
// type: "text"
// __proto__: Object
// 3:
// required: "Please provide each secondary author's last name."
// name: "lastname"
// label: "Second (family) name:"
// type: "text"
// __proto__: Object
// 4:
// required: "Please provide each secondary author's email address."
// name: "email"
// label: "Email address:"
// type: "email"
// __proto__: Object
// 5:
// required: "Please provide each secondary author's company or organisation."
// name: "company"
// label: "Company/organisation:"
// type: "text"
// __proto__: Object
// 6:
// required: "Please provide each secondary author's country."
// options: (83) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "country"
// label: "Country:"
// type: "select"
// __proto__: Object
// 7:
// options: (2) [{…}, {…}]
// name: "is_presenting_author"
// default: "no"
// required: "Please indicate the presenting author."
// type: "radio"
// label: "Is this the presenting author?"
// divider: 1
// __proto__: Object
// length: 8
// __proto__: Array(0)
// name: "secondary_authors"
// type: "repeater"
// __proto__: Object
// 25:
// label: "Submit changes"
// type: "submit"
// divider: 1
// __proto__: Object
// length: 26
// __proto__: Array(0)
// expects: "json"
// logintoken: "w070P7OsRIoxRr6KfcafJl"
// __proto__: Object

/***/ })

})
//# sourceMappingURL=studentArea.js.30f25703a5d88c4be904.hot-update.js.map