import React from 'react';
import t from 'prop-types';

const AboutHeader = (props) => (
  <h3>{ props.text }</h3>
)
AboutHeader.propTypes = {
  text: t.string
};

export default AboutHeader
