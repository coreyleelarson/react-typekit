'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _split = require('lodash/split');

var _split2 = _interopRequireDefault(_split);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buildScript = require('./utilities/buildScript');

var _buildScript2 = _interopRequireDefault(_buildScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Typekit = function (_Component) {
  _inherits(Typekit, _Component);

  function Typekit() {
    _classCallCheck(this, Typekit);

    return _possibleConstructorReturn(this, (Typekit.__proto__ || Object.getPrototypeOf(Typekit)).apply(this, arguments));
  }

  _createClass(Typekit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // If typekit has not yet been executed, force it.
      var htmlClasses = (0, _split2.default)(document.querySelector('html').className, ' ');
      var typekitClasses = ['wf-loading', 'wf-active', 'wf-inactive'];
      var isLoaded = (0, _intersection2.default)(htmlClasses, typekitClasses).length > 0;
      if (this.script && !isLoaded) {
        var kitId = this.props.kitId;

        var script = document.createElement('script');
        script.innerHTML = (0, _buildScript2.default)(kitId);
        this.script.parentNode.replaceChild(script, this.script);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var kitId = this.props.kitId;

      return this.props.kitId ? _react2.default.createElement('script', {
        dangerouslySetInnerHTML: { __html: (0, _buildScript2.default)(kitId) },
        ref: function ref(_ref) {
          return _this2.script = _ref;
        }
      }) : false;
    }
  }]);

  return Typekit;
}(_react.Component);

Typekit.propTypes = {
  kitId: _propTypes2.default.string
};

exports.default = Typekit;