import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
   <div className='container py-5 mb-5'>
  <div className='row justify-content-center text-center'>
    <div className="col-12 col-md-10 col-lg-9"> 
      <img
        className="img-fluid landing-image d-block mx-auto my-4"
        src="/assets/homeHero.png"
        alt="Online stock brokerage platform for trading and investing in stocks, futures, options, commodities, currency, ETFs, mutual funds, and bonds."
      />


          <h1 className='mt-4'>Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <button onClick={handleSignupClick} className='btn btn-primary fs-5 px-4 py-2'>
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
