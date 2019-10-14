import React from 'react'
import PropTypes from 'prop-types'

import BlockTextArea from './blocktextarea';
import BlockImage from './blockimage';
import BlockMultipleImage from './blockmultipleimage';

const MODULE_MAP = {
  ContentfulBlockTextArea: BlockTextArea,
  ContentfulBlockImage: BlockImage,
  ContentfulBlockMultipleImage: BlockMultipleImage
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
