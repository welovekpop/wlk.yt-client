import React from 'react';
import Button from './Button';

/* TODO think of a reasonable name */
const PanelSwitcher = ({ selected, selectPanel, waitlistPosition, waitlistSize }) => {
  const highlightOffset = { chat: 0, room: '33%', waitlist: '67%' }[selected];
  let waitlistText = 'Waitlist';
  if (waitlistSize > 0) {
    const posText = waitlistPosition !== -1
      ? `${waitlistPosition + 1} / ${waitlistSize}`
      : waitlistSize;

    waitlistText = [
      waitlistText,
      <span style={{ fontSize: '125%' }}>{posText}</span>
    ];
  }
  return (
    <div className="PanelSwitcher">
      <Button
        active={selected === 'chat'}
        onClick={() => selectPanel('chat')}
      >
        Chat
      </Button>
      <Button
        active={selected === 'room'}
        onClick={() => selectPanel('room')}
      >
        Room
      </Button>
      <Button
        active={selected === 'waitlist'}
        onClick={() => selectPanel('waitlist')}
      >
        {waitlistText}
      </Button>

      <div
        className="PanelSwitcher-highlight"
        style={{ left: highlightOffset }}
      />
    </div>
  );
};

export default PanelSwitcher;
