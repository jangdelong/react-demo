import React from 'react';
import t from 'prop-types';

const AboutHeader = (props) => (
  <h3>{ props.text || '这是公共头部' }</h3>
)
AboutHeader.propTypes = {
  text: t.string
};

export default AboutHeader
