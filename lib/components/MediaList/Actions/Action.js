"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = function Action(_ref) {
  var children = _ref.children,
      onAction = _ref.onAction,
      attrs = (0, _objectWithoutProperties2.default)(_ref, ["children", "onAction"]);
  return _react.default.createElement(_IconButton.default, (0, _extends2.default)({
    className: "MediaActions-action",
    onClick: onAction
  }, attrs), children);
};

Action.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.element,
  onAction: _propTypes.default.func
} : {};
var _default = Action;
exports.default = _default;
//# sourceMappingURL=Action.js.map
