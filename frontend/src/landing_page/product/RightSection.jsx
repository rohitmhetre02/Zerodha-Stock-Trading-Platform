import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
       
        <div className='col-12 col-md-6 p-4 p-md-5 order-2 order-md-1'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        
        <div className='col-12 col-md-6 text-center order-1 order-md-2'>
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
