'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buildScript = require('./utilities/buildScript');

var _buildScript2 = _interopRequireDefault(_buildScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger: 0 */
var Typekit = function Typekit(_ref) {
  var id = _ref.id;

  var script = (0, _buildScript2.default)(id);
  return id ? _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: script } }) : false;
};

Typekit.propTypes = {
  id: _react.PropTypes.string
};

exports.default = Typekit;