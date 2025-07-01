import React from 'react';

function Stats() {
  return (
    <div className='container px-3 py-4'>
      <div className='row px-2 px-md-5 py-4'>
       
        <div className='col-12 col-md-6 px-3 px-md-5 mb-4 mb-md-0'>
          <h1 className='fs-4 fs-md-2 mb-4'>Trust with confidence</h1>

          <h2 className='fs-5 fs-md-4'>Customer-first always</h2>
          <p className='text-muted'>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity
            investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className='fs-5 fs-md-4'>No spam or gimmicks</h2>
          <p className='text-muted'>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className='fs-5 fs-md-4'>The Zerodha universe</h2>
          <p className='text-muted'>
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups
            offer you tailored services specific to your needs.
          </p>

          <h2 className='fs-5 fs-md-4'>Do better with money</h2>
          <p className='text-muted'>
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        
        <div className='col-12 col-md-6 px-3 px-md-5 text-center text-md-start'>
          <img
            style={{ width: "90%" }}
            src='/assets/ecosystem.png'
            alt='Ecosystem'
            className='img-fluid mb-3'
          />
          <div className='d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3 mt-3'>
            <a href='' className='' style={{ textDecoration: "none" }}>
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href='' style={{ textDecoration: "none" }}>
              Try kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
