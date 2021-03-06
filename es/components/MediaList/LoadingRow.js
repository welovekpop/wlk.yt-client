import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import MediaLoadingIndicator from './MediaLoadingIndicator';

var _ref2 =
/*#__PURE__*/
_jsx(MediaLoadingIndicator, {
  className: "MediaListRow-loader"
});

var _ref3 =
/*#__PURE__*/
_jsx("div", {
  className: "MediaListRow-artist"
}, void 0, " \u2026 ");

var _ref4 =
/*#__PURE__*/
_jsx("div", {
  className: "MediaListRow-title"
}, void 0, " \u2026 ");

var _ref5 =
/*#__PURE__*/
_jsx("div", {
  className: "MediaListRow-duration"
}, void 0, " \u2026 ");

var LoadingRow = function LoadingRow(_ref) {
  var className = _ref.className,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      attrs = _objectWithoutProperties(_ref, ["className", "selected"]);

  return React.createElement("div", _extends({
    className: cx('MediaListRow', 'is-loading', className, selected && 'is-selected')
  }, attrs), _ref2, _ref3, _ref4, _ref5);
};

LoadingRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  selected: PropTypes.bool
} : {};
export default LoadingRow;
//# sourceMappingURL=LoadingRow.js.map
