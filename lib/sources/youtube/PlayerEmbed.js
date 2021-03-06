"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactYoutube = _interopRequireDefault(require("@u-wave/react-youtube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTubePlayerEmbed =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(YouTubePlayerEmbed, _React$Component);

  function YouTubePlayerEmbed() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleYTPlay = function () {
      if (_this.props.onPlay) {
        _this.props.onPlay();
      }
    }, _this.handleYTPause = function (event) {
      if (!_this.props.controllable && _this.props.active) {
        event.target.playVideo();
      }
    }, _this.refPlayer = function (player) {
      _this.player = player;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = YouTubePlayerEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        media = _this$props.media,
        seek = _this$props.seek,
        volume = _this$props.volume,
        controllable = _this$props.controllable;
    return _react.default.createElement(_reactYoutube.default, {
      ref: this.refPlayer,
      video: active ? media.sourceID : null,
      width: "100%",
      height: "100%",
      autoplay: true,
      modestBranding: true,
      volume: volume / 100,
      playbackRate: 1,
      controls: controllable,
      showRelatedVideos: false,
      showInfo: false,
      annotations: false,
      startSeconds: (seek || 0) + (media.start || 0),
      endSeconds: media.end || media.duration,
      onPause: this.handleYTPause,
      onPlaying: this.handleYTPlay
    });
  };

  return YouTubePlayerEmbed;
}(_react.default.Component);

exports.default = YouTubePlayerEmbed;
YouTubePlayerEmbed.defaultProps = {
  controllable: false
};
YouTubePlayerEmbed.propTypes = process.env.NODE_ENV !== "production" ? {
  active: _propTypes.default.bool.isRequired,
  media: _propTypes.default.object,
  seek: _propTypes.default.number,
  volume: _propTypes.default.number,
  controllable: _propTypes.default.bool,
  onPlay: _propTypes.default.func
} : {};
//# sourceMappingURL=PlayerEmbed.js.map
