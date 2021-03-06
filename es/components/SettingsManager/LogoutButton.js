import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Button from "@material-ui/core/es/Button";
import LogoutIcon from "@material-ui/icons/es/PowerSettingsNew";
import ConfirmDialog from '../Dialogs/ConfirmDialog';
import FormGroup from '../Form/Group';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(LogoutIcon, {
  className: "LogoutButton-icon"
});

var LogoutButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(LogoutButton, _React$Component);

  function LogoutButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      showDialog: false
    }, _this.handleOpen = function () {
      _this.setState({
        showDialog: true
      });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleConfirm = function () {
      _this.props.onLogout();

      _this.closeDialog();
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = LogoutButton.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      showDialog: false
    });
  };

  _proto.render = function render() {
    var t = this.props.t;
    return _jsx(React.Fragment, {}, void 0, _jsx(Button, {
      className: "LogoutButton",
      onClick: this.handleOpen
    }, void 0, _ref, t('settings.logout')), this.state.showDialog && _jsx(ConfirmDialog, {
      title: t('dialogs.logout.title'),
      confirmLabel: t('dialogs.logout.action'),
      onConfirm: this.handleConfirm,
      onCancel: this.handleClose
    }, void 0, _jsx(FormGroup, {}, void 0, t('dialogs.logout.confirm'))));
  };

  return LogoutButton;
}(React.Component);

LogoutButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
} : {};
export default enhance(LogoutButton);
//# sourceMappingURL=LogoutButton.js.map
