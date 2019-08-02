import React, { useState } from 'react';
import AboutHeader from '@/components/AboutHeader';
import URL from 'url';

const inputStyle = {
  width: '100px',
  height: '40px',
  border: '1px solid #ccc'
};

const About = (props) => {
  const [ name, setName ] = useState('Jelon');
  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  const query = URL.parse(props.location.search, true).query;
  const id = query.id;

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
    </div>
  )
};

export default About;
