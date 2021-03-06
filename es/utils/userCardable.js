import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import UserCard from '../components/UserCard';
export default function userCardable() {
  return function (Component) {
    var CardableComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(CardableComponent, _React$Component);

      function CardableComponent() {
        var _temp, _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
          open: false,
          user: null,
          position: null
        }, _this.handleOpen = function (user) {
          var pos = _this.container.getBoundingClientRect();

          _this.setState({
            open: true,
            user: user,
            position: {
              x: pos.left,
              y: pos.top
            }
          });
        }, _this.handleClose = function () {
          _this.setState({
            open: false
          });
        }, _this.refContainer = function (container) {
          _this.container = container;
        }, _temp) || _assertThisInitialized(_this);
      }

      var _proto = CardableComponent.prototype;

      _proto.render = function render() {
        var _this$state = this.state,
            open = _this$state.open,
            position = _this$state.position,
            user = _this$state.user;
        return React.createElement("div", {
          ref: this.refContainer
        }, open && _jsx(UserCard, {
          user: user,
          position: position,
          onClose: this.handleClose
        }), React.createElement(Component, _extends({}, this.props, {
          openUserCard: this.handleOpen,
          closeUserCard: this.handleClose
        })));
      };

      return CardableComponent;
    }(React.Component);

    return CardableComponent;
  };
}
//# sourceMappingURL=userCardable.js.map
