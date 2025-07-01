import React from 'react';

function Pricing() {
  return (
    <div className='container mb-5'>
      <div className='row py-4 px-3 px-md-5'>
        
        <div className='col-12 col-md-5 mb-4 mb-md-0'>
          <h1 className='mb-3 fs-4 fs-md-2'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='' style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        
        <div className='col-12 col-md-7 mt-3 mt-md-0'>
          <div className='row text-center gy-4'>
            <div className='col-12 col-sm-4'>
              <img
                style={{ height: "30%" }}
                src='/assets/pricing-eq.svg'
                alt='Free account opening'
                className='img-fluid mb-2'
              />
              <p>Free account opening</p>
            </div>
            <div className='col-12 col-sm-4'>
              <img
                style={{ height: "30%" }}
                src='/assets/pricing-eq.svg'
                alt='Free equity delivery'
                className='img-fluid mb-2'
              />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className='col-12 col-sm-4'>
              <img
                style={{ height: "30%" }}
                src='/assets/other-trades.svg'
                alt='Intraday and F&O'
                className='img-fluid mb-2'
              />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
