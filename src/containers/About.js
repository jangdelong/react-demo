
import React, { useState } from 'react';
import AboutHeader from '@/components/AboutHeader';
import URL from 'url';
import { setTestNameAsync } from '@/actions/';
import { connect } from 'react-redux';
import t from 'prop-types';

const inputStyle = {
  width: '100px',
  height: '40px',
  border: '1px solid #ccc'
};

const About = props => {
  const [ name, setName ] = useState('Jelon');
  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  const query = URL.parse(props.location.search, true).query;
  const id = query.id;
  const doSetTestName = name => {
    return () => {
      props.dispatch(setTestNameAsync(name));
    }
  };

  return (
    <div>
      <AboutHeader text="这是标题哈哈哈" />
      <h1>这是About页面 {id}</h1>
      <h2>{ name }</h2>
      <div>
        <input
          type="text"
          value={ name }
          style={ inputStyle }
          onChange={ setter(setName) }
        />
      </div>

      <div style={ { marginTop: '50px' } }>
        <div>{  props.testName }</div>
        <button onClick={ doSetTestName('我是测试数据') }>我是按钮</button>
      </div>
    </div>
  )
};
About.propTypes = {
  testName: t.string.isRequired,
  dispatch: t.func.isRequired
};

const mapStateToProps = state => {
  const { testName } = state.about;
  return {
    testName
  }
};

export default connect(mapStateToProps)(About);
