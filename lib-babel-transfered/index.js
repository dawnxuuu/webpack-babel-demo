'use strict';

var component = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var element1, res, element3, element2;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            element1 = document.createElement('div');

            element1.innerHTML = 'Fetching';
            document.body.appendChild(element1);

            _context.next = 5;
            return _axios2.default.get('https://api.github.com/repos/vuejs/vue');

          case 5:
            res = _context.sent;

            console.log(JSON.stringify(res));

            if (res.status === 200) {
              console.log(res.data.stargazers_count);
            } else {
              element3 = document.createElement('div');

              element3.innerHTML = 'Fetching error';
              document.body.appendChild(element3);
            }

            element2 = document.createElement('div');

            element2.innerHTML = 'Vue.js in Github Star Count: ' + ('' + res.data.stargazers_count);
            document.body.appendChild(element2);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function component() {
    return _ref.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

component();