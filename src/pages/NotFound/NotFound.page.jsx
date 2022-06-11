import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Page not found</p>
      <Link to="/" >
        <button>Back to home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
