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

// !!! IMPORTANT README:
// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/
// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
// Once you have read the above messages, you can delete all comments. 
//Jquery up and running
$(document).ready(function () {}); //React up and running

var drumPadArr = [{
  id: "Q",
  keyCode: 81,
  name: "Heater-1",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
  id: "W",
  keyCode: 87,
  name: "Heater-2",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
  id: "E",
  keyCode: 69,
  name: "Heater-3",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
  id: "A",
  keyCode: 65,
  name: "Heater-4",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
  id: "S",
  keyCode: 83,
  name: "Clap",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
  id: "D",
  keyCode: 68,
  name: "Open-HH",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
  id: "Z",
  keyCode: 90,
  name: "Kick-n'-Hat",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
  id: "X",
  keyCode: 88,
  name: "Kick",
  source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
  id: "C",
  keyCode: 67,
  name: "Closed-HH",
  source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]; //display component

var DisplayComponent = function DisplayComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "display",
    "class": "col"
  }, /*#__PURE__*/React.createElement("h2", {
    "class": ""
  }, props.audioClipName));
}; //DrumPad Component


var DrumPadComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(DrumPadComponent, _React$Component);

  var _super = _createSuper(DrumPadComponent);

  function DrumPadComponent(props) {
    var _this;

    _classCallCheck(this, DrumPadComponent);

    _this = _super.call(this, props);
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.playAudio = _this.playAudio.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DrumPadComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.playAudio();
      }
    }
  }, {
    key: "playAudio",
    value: function playAudio() {
      var sound = document.getElementById(this.props.id); //grabs onto the audio element and stores it in sound

      sound.play();
      this.props.updateDisplay(this.props.name.replace(/-/g, ' '));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        id: this.props.name,
        className: "drum-pad",
        onClick: this.playAudio
      }, /*#__PURE__*/React.createElement("p", null, this.props.id), /*#__PURE__*/React.createElement("audio", {
        id: this.props.id,
        src: this.props.source,
        className: "clip"
      }));
    }
  }]);

  return DrumPadComponent;
}(React.Component); //drumPad container component


var DrumPadContainerComponent = function DrumPadContainerComponent(props) {
  var drumPadList = props.item.map(function (item) {
    return /*#__PURE__*/React.createElement(DrumPadComponent, {
      id: item.id,
      name: item.name,
      source: item.source,
      keyCode: item.keyCode,
      updateDisplay: props.updateDisplay
    }) //for every element in array, create a drumPad and store passing props id, name and source to the component.
    ;
  });
  return /*#__PURE__*/React.createElement("div", null, drumPadList) //div is necessary because ele tranforms to multiple elements and multiple elements must be wrapped in one to be returned in JSX
  ;
}; //story 4


var App = /*#__PURE__*/function (_React$Component2) {
  _inherits(App, _React$Component2);

  var _super2 = _createSuper(App);

  function App(props) {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _super2.call(this, props);
    _this2.state = {
      display: 'click a button'
    };
    _this2.updateDisplay = _this2.updateDisplay.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(App, [{
    key: "updateDisplay",
    value: function updateDisplay(name) {
      this.setState({
        display: name
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "drum-machine"
      }, /*#__PURE__*/React.createElement(DisplayComponent, {
        audioClipName: this.state.display
      }), /*#__PURE__*/React.createElement(DrumPadContainerComponent, {
        item: drumPadArr,
        updateDisplay: this.updateDisplay
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

var AppWrapper = /*#__PURE__*/function (_React$Component3) {
  _inherits(AppWrapper, _React$Component3);

  var _super3 = _createSuper(AppWrapper);

  function AppWrapper() {
    _classCallCheck(this, AppWrapper);

    return _super3.apply(this, arguments);
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
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));
