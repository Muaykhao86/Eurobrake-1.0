webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: login, auth, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_forms_FormActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/forms/FormActions */ "./components/forms/FormActions.js");





var _jsxFileName = "/mnt/c/Users/D.Hardiman/desktop/eurobrake/utils/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var login = function login(_ref) {
  var logintoken = _ref.logintoken;
  js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.set('logintoken', logintoken, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/authors/dashboard');
}; // CHECK TOKEN, IF WE HAVE ONE RETURN TOKEN, IF WE DONT REDIRECT TO LOGIN PAGE

var auth = function auth(ctx) {
  var _cookies = next_cookies__WEBPACK_IMPORTED_MODULE_7___default()(ctx),
      logintoken = _cookies.logintoken;

  console.log('auth', logintoken); // If there's no token, it means the user is not logged in.

  if (!logintoken) {
    if (ctx.req) {
      // If `ctx.req` is available it means we are on the server.
      ctx.res.writeHead(302, {
        Location: '/authors'
      });
      ctx.res.end();
    } else {
      // This should only happen on client.
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/authors');
    }
  }

  return logintoken;
}; // LOGOUT FUNCTION

var logout =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(ctx) {
    var url;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://prelude.eurobrake.net/authors/logout'; // ? need to set up fetch req???

            _context.next = 3;
            return Object(_components_forms_FormActions__WEBPACK_IMPORTED_MODULE_9__["GetForm"])(url);

          case 3:
            _context.next = 5;
            return js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.remove('logintoken');

          case 5:
            _context.next = 7;
            return window.localStorage.setItem("logout", _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default()());

          case 7:
            _context.next = 9;
            return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/authors");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function logout(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // IF LOGGED IN/ HAS TOKEN RETURN THE COMPONENT 

var withAuthSync = function withAuthSync(WrappedComponent) {
  var Wrapper = function Wrapper(props) {
    var syncLogout = function syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/authors');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      window.addEventListener('storage', syncLogout);
      return function () {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, [null]);
    return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }));
  };

  Wrapper.getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(ctx) {
      var logintoken, componentProps;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              logintoken = auth(ctx); // ! AUTH

              _context2.t0 = WrappedComponent.getInitialProps;

              if (!_context2.t0) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return WrappedComponent.getInitialProps(ctx);

            case 5:
              _context2.t0 = _context2.sent;

            case 6:
              componentProps = _context2.t0;
              return _context2.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, componentProps, {
                logintoken: logintoken
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return Wrapper;
};

/***/ })

})
//# sourceMappingURL=_app.js.fc16035646ea07a7d7b9.hot-update.js.map