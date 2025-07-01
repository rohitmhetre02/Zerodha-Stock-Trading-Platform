import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className="row p-5 mt-5 mb-5">
                <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>

                
                <div className='col-md-4 col-12 mt-3'>
                    <h4><i className="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Getting started</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Online</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Offline</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Charges</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Company, Partnership and HUF</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Non Resident Indian (NRI)</a>
                </div>

                
                <div className='col-md-4 col-12 mt-3'>
                    <h4><i className="fa-regular fa-user"></i> Your Zerodha Account</h4>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Login credentials</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Your Profile</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Account modification and segment addition</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>CMR & DP ID</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Nomination</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Transfer and conversion of shares</a>
                </div>

               
                <div className='col-md-4 col-12 mt-3'>
                    <h4><i className="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Trading FAQs</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Kite</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Margins</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Product and order types</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Corporate actions</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Kite features</a>
                </div>

               
                <div className='col-md-4 col-12 mt-4'>
                    <h4><i className="fa-solid fa-wallet"></i> Funds</h4>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Fund withdrawal</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Adding funds</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Adding bank accounts</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>eMandates</a>
                </div>

                
                <div className='col-md-4 col-12 mt-4'>
                    <h4><i className="fa-brands fa-creative-commons-share"></i> Console</h4>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>IPO</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Portfolio</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Funds statement</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Profile</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Reports</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Referral program</a>
                </div>

                
                <div className='col-md-4 col-12 mt-4'>
                    <h4><i className="fa-solid fa-coins"></i> Coin</h4>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Understanding mutual funds and Coin</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Coin app</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Coin web</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>Transactions and reports</a>
                    <a href="#" className="d-block text-decoration-none" style={{ lineHeight: "2.5" }}>National Pension Scheme (NPS)</a>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
