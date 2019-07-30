import React, { useState } from 'react';
const inputStyle = {
  width: '100px',
  height: '40px',
  border: '1px solid #ccc'
};

const About = () => {
  const [ name, setName ] = useState('Jelon');
  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  return (
    <div>
      <h1>这是About页面</h1>
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
