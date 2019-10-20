import React from 'react';
import { Link } from "react-router-dom";

const CommonHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/zhang">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default CommonHeader;
