"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var root = document.getElementById('root');
var app = {
  title: 'Todo Application',
  description: 'Ex mollit labore nulla sit dolor.'
};

var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this;

    _classCallCheck(this, TodoApp);

    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem('items');
      var items = JSON.parse(json);
      items && this.setState({
        items: items
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length !== this.state.items.length) {
        var items = JSON.stringify(this.state.items);
        localStorage.setItem('items', items);
      }
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this.state.items.indexOf(item) > -1) {
        alert('You can not enter an item twice');
        return false;
      }

      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        return {
          items: prevState.items.filter(function (i) {
            return item !== i;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        description: app.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.items,
        deleteItem: this.deleteItem,
        clearItems: this.clearItems
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(React.Component);

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.description));
}; // function Header(props) {
//   return (
//       <div>
//         <h1>{props.title}</h1>
//         <p>
//           {props.description}
//         </p>
//       </div>
//     )
// }
// class Header extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>
//           {this.props.description}
//         </p>
//       </div>
//     )
//   }
// }


var TodoList = function TodoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      key: index,
      item: item,
      deleteItem: props.deleteItem
    });
  })), /*#__PURE__*/React.createElement("p", null, props.items.length !== 0 && /*#__PURE__*/React.createElement("button", {
    onClick: props.clearItems
  }, "Clear Items")));
}; // class TodoList extends React.Component{
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.items.map((item, index) => <TodoItem key={index} item={item} deleteItem={this.props.deleteItem} />)}
//       </ul>
//       <p>
//           {this.props.items.length !== 0 && <button onClick={this.props.clearItems}>Clear Items</button>}
//       </p>
//       </div>
//     )
//   }
// }


var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", null, props.item, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      props.deleteItem(props.item);
    }
  }, "x"));
}; // class TodoItem extends React.Component {
//   constructor(props) {
//     super(props)
//     this.deleteItem = this.deleteItem.bind(this)
//   }
//   deleteItem() {
//     this.props.deleteItem(this.props.item)
//   }
//   render() {
//     return (
//       <li>
//         {this.props.item} 
//         <button onClick={this.deleteItem}>x</button>
//       </li>
//       )
//   }
// }


var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      var item = event.target.elements.txtItem.value.trim();
      item && props.addItem(item);
      event.target.elements.txtItem.value = "";
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Item")));
}; // class Action extends React.Component{
//   constructor(props) {
//     super(props)
//     this.onFormSubmit = this.onFormSubmit.bind(this)
//   }
//   onFormSubmit(event) {
//     event.preventDefault();
//     const item = event.target.elements.txtItem.value.trim();
//     item && this.props.addItem(item)
//     event.target.elements.txtItem.value=""
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <input type="text" name="txtItem" />
//           <button type="submit">Add Item</button>
//         </form>
//       </div>
//     )
//   }
// }


ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), root);
