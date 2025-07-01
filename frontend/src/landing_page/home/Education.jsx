import React from 'react';

function Education() {
  return (
    <div className='container'>
      <div className='row align-items-center py-4 px-3 px-md-0'>
      
        <div className='col-12 col-md-6 text-center text-md-start mb-4 mb-md-0'>
          <img
            style={{ width: "70%" }}
            src='/assets/education.svg'
            alt='Education'
            className='img-fluid'
          />
        </div>

       
        <div className='col-12 col-md-6'>
          <h1 className='mb-3 fs-4 fs-md-2'>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href='' style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className='mt-4 mt-md-5'>
            TradingQ&A, a platform for traders to ask questions and get answers
            from experts.
          </p>
          <a href='' style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
