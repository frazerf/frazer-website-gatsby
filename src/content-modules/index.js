import React from 'react'
import PropTypes from 'prop-types'

import BlockTextArea from './blocktextarea';
import BlockOverview from './blockoverview';
import BlockImage from './blockimage';
import BlockMultipleImage from './blockmultipleimage';
import BlockVideo from './blockvideo';
import BlockContentAndImage from './blockcontentandimage';
import BlockCarousel from './blockcarousel';

const MODULE_MAP = {
  ContentfulBlockTextArea: BlockTextArea,
  ContentfulBlockOverview: BlockOverview,
  ContentfulBlockImage: BlockImage,
  ContentfulBlockMultipleImage: BlockMultipleImage,
  ContentfulBlockVideo: BlockVideo,
  ContentfulBlockContentAndImage: BlockContentAndImage,
  ContentfulBlockCarousel: BlockCarousel
};

const propTypes = {
  blocks: PropTypes.any
};

export default function ContentModules({blocks}) {
  // console.log('---', blocks);
  return (
    <>
      {blocks.map(({"__typename": type, ...props}, i) => {
        const Component = MODULE_MAP[type];
        return <Component key={i} {...props} />;
      })}
    </>
  );
}

ContentModules.propTypes = propTypes;
