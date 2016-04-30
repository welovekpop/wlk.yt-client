import * as React from 'react';

import Bold from './Bold';
import Code from './Code';
import Italic from './Italic';
import StrikeThrough from './StrikeThrough';
import Mention from './Mention';
import Link from './Link';
import Emoji from './Emoji';

export default function compile(tree, opts = {}) {
  const {
    availableEmoji = [],
    emojiImages = {}
  } = opts;

  return tree.map((node, i) => {
    if (typeof node === 'string') {
      return node;
    }

    switch (node.type) {
    case 'mention':
      return <Mention key={i} user={node.user} />;
    case 'link':
      return <Link key={i} text={node.text} href={node.href} />;
    case 'emoji':
      if (availableEmoji.indexOf(node.name) !== -1 && node.name in emojiImages) {
        return (
          <Emoji
            key={i}
            name={node.name}
            image={emojiImages[node.name]}
          />
        );
      }
      return `:${node.name}:`;
    case 'italic':
      return <Italic key={i}>{compile(node.content, opts)}</Italic>;
    case 'bold':
      return <Bold key={i}>{compile(node.content, opts)}</Bold>;
    case 'code':
      return <Code key={i}>{compile(node.content, opts)}</Code>;
    case 'strike':
      return <StrikeThrough key={i}>{compile(node.content, opts)}</StrikeThrough>;
    default:
      return compile(node.content, opts);
    }
  });
}
