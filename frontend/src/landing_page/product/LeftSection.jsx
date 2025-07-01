import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
      
        <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        
        <div className='col-12 col-md-6 px-4 px-md-5 mt-3 mt-md-0'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <a href={tryDemo} className="btn btn-primary mb-3 mb-sm-0 me-sm-3 w-100 w-sm-auto">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-secondary w-100 w-sm-auto">
              Learn More
            </a>
          </div>

          <div className='d-flex flex-column flex-sm-row align-items-center mt-4'>
            <a href={googleplay}>
              <img src='/assets/googlePlayBadge.svg' alt="Google Play" className="img-fluid" style={{ maxWidth: '140px' }} />
            </a>
            <a href={appStore} className="mt-3 mt-sm-0 ms-sm-3">
              <img src='/assets/appstoreBadge.svg' alt="App Store" className="img-fluid" style={{ maxWidth: '140px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
