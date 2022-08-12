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
  priName: "Heater-1",
  secName: "Chord-1",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
}, {
  id: "W",
  keyCode: 87,
  priName: "Heater-2",
  secName: "Chord-2",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
}, {
  id: "E",
  keyCode: 69,
  priName: "Heater-3",
  secName: "Chord-3",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
}, {
  id: "A",
  keyCode: 65,
  priName: "Heater-4",
  secName: "Shaker",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
}, {
  id: "S",
  keyCode: 83,
  priName: "Clap",
  secName: "Open-HH",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
}, {
  id: "D",
  keyCode: 68,
  priName: "Open-HH",
  secName: "Closed-HH",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
}, {
  id: "Z",
  keyCode: 90,
  priName: "Kick-n'-Hat",
  secName: "Punchy-Kick",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
}, {
  id: "X",
  keyCode: 88,
  priName: "Kick",
  secName: "Side-Stick",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
}, {
  id: "C",
  keyCode: 67,
  priName: "Closed-HH",
  secName: "Snare",
  priSource: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  secSource: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
}]; //power indicator component
// const powerIndicatorComponent = (props) =>{
//   return (
//     <div id="power-indicator">
//       <h3>Power</h3>
//       <input type="radio" id="power-LED" name="power-led" value="power">
//       <label for="power-LED">{props.power}</label><br>
//     </div>
//   )
// };
//power indicator component

var PowerIndicatorComponent = function PowerIndicatorComponent(props) {
  var powerOn = {
    width: '7px',
    height: '7px',
    border: '2px #444 solid',
    borderRadius: '50%',
    background: 'lime'
  };
  var powerOff = {
    width: '7px',
    height: '7px',
    border: '2px #444 solid',
    borderRadius: '50%',
    background: '#f40'
  };
  var powerDefault = {
    width: '7px',
    height: '7px',
    border: '2px #444 solid',
    borderRadius: '50%',
    background: '#222'
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "power-indicator"
  }, /*#__PURE__*/React.createElement("h5", {
    "class": ""
  }, "Power"), /*#__PURE__*/React.createElement("div", {
    id: "group-power-LED"
  }, /*#__PURE__*/React.createElement("div", {
    id: "power-on-LED",
    className: "power-LED",
    style: props.power ? powerOn : powerDefault
  }), /*#__PURE__*/React.createElement("label", {
    "for": "power-LED"
  }, "on"), /*#__PURE__*/React.createElement("div", {
    id: "power-off-LED",
    className: "power-LED",
    style: props.power ? powerDefault : powerOff
  }), /*#__PURE__*/React.createElement("label", {
    "for": "power-LED"
  }, "off"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("button", {
    className: "button-class",
    id: "toggle-power-button",
    onClick: props.togglePower
  }, "Power"));
}; //Bank Component


var BankComponent = function BankComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "bank-component"
  }, /*#__PURE__*/React.createElement("div", {
    id: "bank-display"
  }, /*#__PURE__*/React.createElement("h5", null, props.bank)), /*#__PURE__*/React.createElement("button", {
    className: "button-class",
    id: "toggle-bank-button",
    onClick: props.toggleBank
  }, "Bank"));
}; //display component


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
      switch (e.keyCode) {
        case 32:
          this.props.toggleBank();
          break;

        case 13:
          this.props.togglePower();
          break;

        default:
          if (e.keyCode === this.props.keyCode) {
            this.playAudio();
          }

          break;
      }
    }
  }, {
    key: "playAudio",
    value: function playAudio() {
      if (this.props.power) {
        var sound = document.getElementById(this.props.id); //grabs onto the audio element and stores it in sound

        sound.currentTime = 0;
        sound.play();

        if (this.props.bank === "Piano-kit") {
          this.props.updateDisplay(this.props.secName.replace(/-/g, ' '));
        } else {
          this.props.updateDisplay(this.props.priName.replace(/-/g, ' '));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "drum-pad-gradient"
      }, /*#__PURE__*/React.createElement("button", {
        id: this.props.bank === "Piano-kit" ? this.props.secName : this.props.priName,
        className: "drum-pad button-class",
        onClick: this.playAudio
      }, /*#__PURE__*/React.createElement("p", null, this.props.id), this.props.bank === "Piano-kit" ? /*#__PURE__*/React.createElement("audio", {
        id: this.props.id,
        src: this.props.secSource,
        className: "clip"
      }) : /*#__PURE__*/React.createElement("audio", {
        id: this.props.id,
        src: this.props.priSource,
        className: "clip"
      })));
    }
  }]);

  return DrumPadComponent;
}(React.Component); //drumPad container component


var DrumPadContainerComponent = function DrumPadContainerComponent(props) {
  var drumPadList = props.item.map(function (item) {
    return /*#__PURE__*/React.createElement(DrumPadComponent, {
      id: item.id,
      secId: item.id + props.bank,
      priName: item.priName,
      secName: item.secName,
      priSource: item.priSource,
      secSource: item.secSource,
      keyCode: item.keyCode,
      updateDisplay: props.updateDisplay,
      bank: props.bank,
      power: props.power,
      toggleBank: props.toggleBank,
      togglePower: props.togglePower
    }) //for every element in array, create a drumPad and store passing props id, name and priSource to the component.
    ;
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "drum-pad-container"
  }, drumPadList) //div is necessary because ele tranforms to multiple elements and multiple elements must be wrapped in one to be returned in JSX
  ;
};

var App = /*#__PURE__*/function (_React$Component2) {
  _inherits(App, _React$Component2);

  var _super2 = _createSuper(App);

  function App(props) {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _super2.call(this, props);
    _this2.state = {
      power: false,
      bank: "Heater-kit",
      display: "Click a button"
    };
    _this2.togglePower = _this2.togglePower.bind(_assertThisInitialized(_this2));
    _this2.toggleBank = _this2.toggleBank.bind(_assertThisInitialized(_this2));
    _this2.updateDisplay = _this2.updateDisplay.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(App, [{
    key: "togglePower",
    value: function togglePower() {
      this.setState(function (state) {
        return {
          power: !state.power
        };
      });
    }
  }, {
    key: "toggleBank",
    value: function toggleBank() {
      this.setState(function (state) {
        if (state.power) {
          if (state.bank === "Heater-kit") {
            return {
              bank: "Piano-kit",
              display: "Piano-kit"
            };
          } else {
            return {
              bank: "Heater-kit",
              display: "Heater-kit"
            };
          }
        }
      });
    }
  }, {
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
      }, /*#__PURE__*/React.createElement("h3", null, "MP1513-EO"), /*#__PURE__*/React.createElement(DisplayComponent, {
        audioClipName: this.state.display
      }), /*#__PURE__*/React.createElement(DrumPadContainerComponent, {
        item: drumPadArr,
        togglePower: this.togglePower,
        toggleBank: this.toggleBank,
        updateDisplay: this.updateDisplay,
        bank: this.state.bank,
        power: this.state.power
      }), /*#__PURE__*/React.createElement(PowerIndicatorComponent, {
        power: this.state.power,
        togglePower: this.togglePower
      }), /*#__PURE__*/React.createElement(BankComponent, {
        power: this.state.power,
        toggleBank: this.toggleBank,
        bank: this.state.bank
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
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root')); //implement power key and bank keys
//implement redux and react redux, make it do a little more like fast response?
