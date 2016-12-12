'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { isToggleOn: true, token: '-' };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  Button.prototype.handleChange = function handleChange() {
    if (this.state.token == '-') {
      if (this.props.player == 1) {
        this.setState({ token: 'X' });
      } else {
        this.setState({ token: 'O' });
      }
    }
  };

  Button.prototype.render = function render() {
    return React.createElement(
      'button',
      { onClick: this.handleChange },
      this.state.token
    );
  };

  return Button;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.state = { currentPlayer: 1 };
    _this2.handlePlayerChange = _this2.handlePlayerChange.bind(_this2);
    return _this2;
  }

  App.prototype.handlePlayerChange = function handlePlayerChange() {
    if (this.state.currentPlayer == 1) {
      this.setState({ currentPlayer: 0 });
    } else {
      this.setState({ currentPlayer: 1 });
    }
  };

  App.prototype.render = function render() {
    var player = ["Bob", "Joe"];
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handlePlayerChange },
        'Current Player'
      ),
      React.createElement(
        'p',
        null,
        player[this.state.currentPlayer]
      ),
      React.createElement('p', null),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement('p', null),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement('p', null),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement('p', null),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement(Button, { player: this.state.currentPlayer }),
      React.createElement('p', null),
      React.createElement(
        'button',
        { onClick: this.handleReset },
        'Reset Game'
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));