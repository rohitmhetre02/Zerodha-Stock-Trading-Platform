import React from 'react';

function Hero() {
  return (
    <div className='container mb-5'>
      <div className="text-center mt-5 p-3">
        <h1 className='fs-2 fs-md-1 mb-3'>Charges</h1>
        <h3 className='text-muted mt-3 fs-5 fs-md-4'>
          Sleek, modern, and intuitive trading platforms
        </h3>
      </div>

      <div className='row text-center pt-5 mt-4 gy-5'>
        <div className='col-12 col-md-4'>
          <img
            style={{ height: "70%", width: "60%" }}
            src='/assets/pricing-eq.svg'
            alt="Free equity delivery"
            className="img-fluid mb-3"
          />
          <h3>Free Equity Delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className='col-12 col-md-4'>
          <img
            style={{ height: "70%", width: "60%" }}
            src='/assets/other-trades.svg'
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
          />
          <h3>Intraday and F&O Trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across
            equity, currency, and commodity trades. Flat ₹ 20 on all option trades.
          </p>
        </div>

        <div className='col-12 col-md-4'>
          <img
            style={{ height: "70%", width: "60%" }}
            src='/assets/pricing-eq.svg'
            alt="Free direct MF"
            className="img-fluid mb-3"
          />
          <h3>Free Direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
