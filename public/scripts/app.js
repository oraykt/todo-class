"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var root = document.getElementById('root');

var Person = /*#__PURE__*/function () {
  function Person(_ref) {
    var firstName = _ref.firstName,
        lastName = _ref.lastName;

    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(Person, [{
    key: "fullName",
    get: function get() {
      return this.firstName.concat(' ', this.lastName);
    }
  }, {
    key: "greeting",
    value: function greeting() {
      console.log('Hey there 👋');
    }
  }]);

  return Person;
}();

var Student = /*#__PURE__*/function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(_ref2) {
    var _this;

    var firstName = _ref2.firstName,
        lastName = _ref2.lastName,
        subject = _ref2.subject;

    _classCallCheck(this, Student);

    _this = _super.call(this, {
      firstName: firstName,
      lastName: lastName
    });
    _this.subject = subject;
    return _this;
  }

  _createClass(Student, [{
    key: "study",
    value: function study() {
      console.log("I am studying ".concat(this.subject));
    }
  }]);

  return Student;
}(Person);

var Teacher = /*#__PURE__*/function (_Person2) {
  _inherits(Teacher, _Person2);

  var _super2 = _createSuper(Teacher);

  function Teacher(_ref3) {
    var _this2;

    var firstName = _ref3.firstName,
        lastName = _ref3.lastName,
        seniority = _ref3.seniority;

    _classCallCheck(this, Teacher);

    _this2 = _super2.call(this, {
      firstName: firstName,
      lastName: lastName
    });
    _this2.seniority = seniority;
    return _this2;
  }

  _createClass(Teacher, [{
    key: "teach",
    value: function teach() {
      console.log("I am teaching ".concat(this.seniority));
    }
  }]);

  return Teacher;
}(Person);

var p1 = new Student({
  firstName: "Oray",
  lastName: "Kurt",
  subject: 'Math'
});
p1.study();
var p2 = new Teacher({
  firstName: "tfName",
  lastName: 'tlName',
  seniority: 'Math'
});
p2.teach(); // const template = <h1>Hello World</h1>
// // ReactDOM
// ReactDOM.render(template, root);
