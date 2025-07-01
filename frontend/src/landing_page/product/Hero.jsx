import React from 'react';

function Hero() {
  return (
    <div className='container border-bottom mb-5'>
      <div className="text-center mt-5 px-3 py-4">
        <h1 className='fs-2 fs-md-1'>Zerodha Products</h1>
        <h3 className='text-muted mt-3 fs-5 fs-md-4'>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className='mt-3 mb-5'>
          Check out our{" "}
          <a href='/pricing
' style={{ textDecoration: "none" }}>
            investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
