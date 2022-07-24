"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//React up and running
var HeaderComponent = function HeaderComponent(props) {
  return /*#__PURE__*/React.createElement("header", {
    id: "header",
    "class": "row g-0 justify-content-center"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "title",
    "class": "col-4 p-3 text-center "
  }, "Markdown Previewer"));
}; //editor child component 


var EditorComponent = function EditorComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    "class": "col"
  }, /*#__PURE__*/React.createElement("h2", {
    "class": ""
  }, "Editor"), /*#__PURE__*/React.createElement("textarea", {
    id: "editor",
    "class": "w-100 h-50",
    onChange: props.update
  }, props.content));
}; //content is passed as props to PreviewComponent from the app which gets it from the redux state after connection is made


var PreviewComponent = function PreviewComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: ""
  }, "Preview"), /*#__PURE__*/React.createElement("div", {
    id: "preview",
    className: "p-3",
    dangerouslySetInnerHTML: {
      __html: marked(props.content)
    }
  }));
};

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    _classCallCheck(this, App);

    return _super.call(this, props);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "drum-machine",
        className: "row m-3"
      }, /*#__PURE__*/React.createElement(HeaderComponent, null), /*#__PURE__*/React.createElement(EditorComponent, {
        content: this.props.value,
        update: this.updateEditor
      }), /*#__PURE__*/React.createElement(PreviewComponent, {
        content: this.props.value
      }));
    }
  }]);

  return App;
}(React.Component); //react-redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state //value is a prop of app in react now, while state is a string state from redux

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    update: function (_update) {
      function update(_x) {
        return _update.apply(this, arguments);
      }

      update.toString = function () {
        return _update.toString();
      };

      return update;
    }(function (newtext) {
      dispatch(update(newtext)); //update is a prop of app in react, dispatch is from redux, newtext is the 
    })
  };
};

var Provider = ReactRedux.Provider; //connects react to store

var connect = ReactRedux.connect; //connects state and dispatch of store to react app props

var ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App); //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

var AppWrapper = /*#__PURE__*/function (_React$Component2) {
  _inherits(AppWrapper, _React$Component2);

  var _super2 = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super2.apply(this, arguments);
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(ConnectedComponent, null));
    }
  }]);

  return AppWrapper;
}(React.Component);

;
ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.querySelector('#root'));
