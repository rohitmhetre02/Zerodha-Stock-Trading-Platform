import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="text-center p-5 shadow rounded bg-light w-100" style={{ maxWidth: "600px" }}>
        <h1 className="display-4 mb-3">404 - Page Not Found</h1>
        <p className="lead text-muted">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <p>
          Go back to the{' '}
          <Link to="/" style={{ textDecoration: 'none', color: '#0d6efd' }}>
            Zerodha homepage
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default NotFound;
