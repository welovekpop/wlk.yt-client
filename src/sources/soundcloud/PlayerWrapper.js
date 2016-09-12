import * as React from 'react';

import Player from './Player';
import PreviewPlayer from './PreviewPlayer';

const PlayerWrapper = (props) => {
  if (props.mode === 'preview') {
    return <PreviewPlayer {...props} />;
  }
  return <Player {...props} />;
};

PlayerWrapper.propTypes = {
  mode: React.PropTypes.string.isRequired
};

export default PlayerWrapper;
