import React from 'react';
import t from 'prop-types';
import classnames from 'classnames';
import '@/assets/scss/common.scss';
import styles from './AboutHeader.module.scss';

const AboutHeader = props => (
  <h3 className={classnames(['title', styles.title])}>
    { props.text || '这是公共头部' }
    <span className={styles.inner}>6666</span>
  </h3>
)
AboutHeader.propTypes = {
  text: t.string
};

export default AboutHeader
