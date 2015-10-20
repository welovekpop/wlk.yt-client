import cx from 'classnames';
import React from 'react';
import Actions from './Actions';

export default class Row extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    media: React.PropTypes.object,
    selected: React.PropTypes.bool
  };

  static defaultProps = {
    selected: false
  };

  onMouseLeave() {
    if (this.refs.actions) {
      this.refs.actions.onMouseLeave();
    }
  }

  render() {
    const { className, media, selected, ...attrs } = this.props;
    const selectedClass = selected ? 'is-selected' : '';
    return (
      <div
        className={cx('MediaListRow', className, selectedClass)}
        onMouseLeave={::this.onMouseLeave}
        {...attrs}
      >
        <div className="MediaListRow-thumb">
          <img
            className="MediaListRow-image"
            src={media.thumbnail}
            alt=""
          />
        </div>
        <div className="MediaListRow-artist">
          {media.artist}
        </div>
        <div className="MediaListRow-title">
          {media.title}
        </div>
        <Actions
          ref="actions"
          className="MediaListRow-actions"
          media={media}
        />
      </div>
    );
  }
}
