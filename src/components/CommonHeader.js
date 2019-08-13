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
          <Link to="/about?id=123456">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default CommonHeader;
