'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _email = require('material-ui/svg-icons/communication/email');

var _email2 = _interopRequireDefault(_email);

var _lock = require('material-ui/svg-icons/action/lock');

var _lock2 = _interopRequireDefault(_lock);

var _person = require('material-ui/svg-icons/social/person');

var _person2 = _interopRequireDefault(_person);

var _Loader = require('../../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Form = require('../../Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _TextField = require('../../Form/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('../../Form/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ReCaptcha = require('../../ReCaptcha');

var _ReCaptcha2 = _interopRequireDefault(_ReCaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_person2.default, {
  color: '#9f9d9e'
});

var _ref2 = (0, _jsx3.default)(_email2.default, {
  color: '#9f9d9e'
});

var _ref3 = (0, _jsx3.default)(_lock2.default, {
  color: '#9f9d9e'
});

var _ref4 = (0, _jsx3.default)('div', {
  className: 'Button-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
  size: 'tiny'
}));

var RegisterForm = function (_React$Component) {
  (0, _inherits3.default)(RegisterForm, _React$Component);

  function RegisterForm() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RegisterForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      busy: false,
      agreed: false,
      captchaResponse: null
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ busy: true });
      _this.props.onRegister({
        username: _this.username.value,
        email: _this.email.value,
        password: _this.password.value,
        grecaptcha: _this.state.captchaResponse
      });
    }, _this.handleCaptchaResponse = function (response) {
      _this.setState({
        captchaResponse: response
      });
    }, _this.handleTosCheckbox = function (event, checked) {
      _this.setState({
        agreed: checked
      });
    }, _this.refUsername = function (username) {
      _this.username = username;
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _this.refPassword = function (password) {
      _this.password = password;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  RegisterForm.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({ busy: false });
  };

  RegisterForm.prototype.renderCaptcha = function renderCaptcha() {
    if (!this.props.useReCaptcha) {
      return null;
    }
    return (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_ReCaptcha2.default, {
      sitekey: this.props.reCaptchaSiteKey,
      onResponse: this.handleCaptchaResponse,
      theme: 'dark'
    }));
  };

  RegisterForm.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error;
    var _state = this.state,
        agreed = _state.agreed,
        busy = _state.busy;

    return (0, _jsx3.default)(_Form2.default, {
      className: 'RegisterForm',
      onSubmit: this.handleSubmit
    }, void 0, error && (0, _jsx3.default)(_Group2.default, {}, void 0, error.message), (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refUsername,
      className: 'RegisterForm-field',
      placeholder: t('login.username'),
      icon: _ref,
      autoFocus: true
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refEmail,
      className: 'RegisterForm-field',
      type: 'email',
      placeholder: t('login.email'),
      icon: _ref2
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refPassword,
      className: 'RegisterForm-field',
      type: 'password',
      placeholder: t('login.password'),
      icon: _ref3
    })), this.renderCaptcha(), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Checkbox2.default, {
      style: { float: 'left', width: 'auto' },
      checked: agreed,
      onCheck: this.handleTosCheckbox
    }), (0, _jsx3.default)(_reactI18next.Interpolate, {
      i18nKey: 'login.agree',
      privacyPolicy: (0, _jsx3.default)('a', {
        target: '_blank',
        rel: 'noreferrer noopener',
        href: '/privacy.html'
      }, void 0, t('login.privacyPolicy'))
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {
      className: 'RegisterForm-submit',
      disabled: busy || !agreed
    }, void 0, busy ? _ref4 : t('login.register'))));
  };

  return RegisterForm;
}(_react2.default.Component);

RegisterForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  useReCaptcha: _propTypes2.default.bool,
  reCaptchaSiteKey: _propTypes2.default.string,
  error: _propTypes2.default.object,

  onRegister: _propTypes2.default.func
} : {};

exports.default = enhance(RegisterForm);
//# sourceMappingURL=RegisterForm.js.map
//# sourceMappingURL=RegisterForm.js.map