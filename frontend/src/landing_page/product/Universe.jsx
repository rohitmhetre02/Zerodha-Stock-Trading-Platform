import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {

   const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); 
  };

  return (
    <div className='container mt-5'>
      <div className='text-center mb-4'>
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      
      <div className='row justify-content-center text-center'>
        {[
          {
            src: '/assets/zerodhafundhouse.png',
            alt: 'Zerodha Fund House',
            desc: 'Our asset management venture focused on creating simple and transparent index funds to assist you in achieving your financial goals.'
          },
          {
            src: '/assets/sensibullLogo.svg',
            alt: 'Sensibull',
            desc: 'A comprehensive options trading platform that enables you to develop strategies, analyze positions, and review critical data points such as open interest and FII/DII.'
          },
          {
            src: '/assets/tijori.svg',
            alt: 'Tijori',
            desc: 'An investment research platform providing in-depth insights into stocks, sectors, supply chains, and more.'
          },
          {
            src: '/assets/streak-logo.png',
            alt: 'Streak',
            desc: 'A systematic trading platform that allows you to design and backtest trading strategies without any coding required.'
          },
          {
            src: '/assets/smallcaseLogo.png',
            alt: 'Smallcase',
            desc: 'A thematic investing platform that facilitates investment in diversified baskets of stocks and ETFs.'
          },
          {
            src: '/assets/dittoLogo.png',
            alt: 'Ditto',
            desc: 'Get personalized advice on life and health insurance without spam or mis-selling.'
          }
        ].map((platform, index) => (
          <div key={index} className='col-12 col-md-4 p-3 mt-4'>
            <img
              src={platform.src}
              alt={platform.alt}
              style={{ width: '60%', height: 'auto' }}
              className='img-fluid'
            />
            <div className='mt-3'>
              <p className='text-muted' style={{ fontSize: '14px' }}>{platform.desc}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="d-flex justify-content-center mt-3">
            <button onClick={handleSignupClick} className='btn btn-primary fs-5 px-4 py-2'>
              Sign up for free
            </button>
          </div>
      </div>
    
  );
}

export default Universe;
