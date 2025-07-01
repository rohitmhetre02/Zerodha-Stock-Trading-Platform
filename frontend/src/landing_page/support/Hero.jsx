import React from 'react';

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h2 className="mb-3">Support Portal</h2>
            <a
              href="#"
              className="btn btn-outline-primary"
              aria-label="Track your existing tickets"
            >
              Track Tickets
            </a>
          </div>
        </div>
      </div>

    
      <div className="container">
        <div className="row px-2 py-5">
         
          <div className="col-md-6 col-12 mb-5 mb-md-0 px-4">
            <h3 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h3>

            <input
              type="text"
              className="form-control p-3 mb-4"
              placeholder="E.g., how do I activate F&O? Why is my order getting rejected?"
              aria-label="Search help articles"
            />

            <div className="d-flex flex-column">
              {[
                'Track account opening',
                'Track segment activation',
                'Intraday margins',
                'Kite user manual',
              ].map((text, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-decoration-none fs-5 mb-2"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          
          <div className="col-md-6 col-12 px-4">
            <h3 className="mb-4">Featured</h3>
            <ol className="ps-3 fs-6">
              <li className="mb-3">
                <a href="#" className="text-decoration-none">
                  Rights Entitlements listing in January 2025
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Surveillance measure on scrips – January 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
