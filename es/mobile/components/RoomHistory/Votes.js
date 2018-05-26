import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import DownvoteIcon from "@material-ui/icons/es/ThumbDown";
import UpvoteIcon from "@material-ui/icons/es/ThumbUp";
import FavoritedIcon from "@material-ui/icons/es/Favorite";
import FavoriteIcon from "@material-ui/icons/es/FavoriteBorder";

var Votes = function Votes(_ref) {
  var upvotes = _ref.upvotes,
      downvotes = _ref.downvotes,
      favorites = _ref.favorites,
      isUpvote = _ref.isUpvote,
      isDownvote = _ref.isDownvote,
      isFavorite = _ref.isFavorite;
  var CurrentFavoriteIcon = isFavorite ? FavoritedIcon : FavoriteIcon;
  return _jsx("div", {
    className: "MobileHistoryVotes"
  }, void 0, _jsx("div", {
    className: "MobileHistoryVotes-vote"
  }, void 0, _jsx(UpvoteIcon, {
    className: cx('MobileHistoryVotes-icon', isUpvote && 'ResponseButton-icon--upvoted')
  }), _jsx("span", {}, void 0, upvotes.length)), _jsx("div", {
    className: "MobileHistoryVotes-vote"
  }, void 0, _jsx(CurrentFavoriteIcon, {
    className: "MobileHistoryVotes-icon ResponseButton-icon--favorite"
  }), _jsx("span", {}, void 0, favorites.length)), _jsx("div", {
    className: "MobileHistoryVotes-vote"
  }, void 0, _jsx(DownvoteIcon, {
    className: cx('MobileHistoryVotes-icon', isDownvote && 'ResponseButton-icon--downvoted')
  }), _jsx("span", {}, void 0, downvotes.length)));
};

Votes.propTypes = process.env.NODE_ENV !== "production" ? {
  upvotes: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  downvotes: PropTypes.array.isRequired,
  isUpvote: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isDownvote: PropTypes.bool.isRequired
} : {};
export default Votes;
//# sourceMappingURL=Votes.js.map
