import React from 'react';

function Awards() {
  return (
    <div className='container'>
      <div className='row flex-column flex-md-row'>
        <div className='col-12 col-md-6 p-3 p-md-5 text-center'>
          <img
            src="/assets/largestBroker.svg"
            alt="Hero Section"
            className="img-fluid"
          />
        </div>
        <div className='col-12 col-md-6 p-3 p-md-5 mt-3'>
          <h1>Largest Stock broker in India</h1>
          <p className='mb-4'>
            2+ million Zerodha clients contribute to over 15% of all volume in
            India daily by trading and investing in:
          </p>
          <div className='row'>
            <div className="col-6">
              <ul className="ps-3">
                <li><p>Currency derivativess</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="ps-3">
                <li><p>Currency derivativess</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center text-md-start">
            <img
              style={{ width: "90%" }}
              src="/assets/pressLogos.png"
              alt="pressLogos"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
