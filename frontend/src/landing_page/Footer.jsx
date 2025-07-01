import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#FAFAFA" }} className="mt-5 pt-5 border-top">
      <div className="container">
       
        <div className="row mb-4">
          <div className="col-md-3 col-12 mb-4">
            <img src="/assets/logo.svg" alt="Zerodha Logo" style={{ width: "60%" }} />
            <p className="text-muted mt-3">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          
          <div className="col-md-3 col-6 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: "14px" }}>
              {["About", "Products", "Pricing", "Referral programme", "Careers", "Zerodha.tech", "Press & media", "Zerodha cares (CSR)"]
                .map((item, idx) => (
                  <li key={idx}><a href="#" className="text-decoration-none text-dark">{item}</a></li>
              ))}
            </ul>
          </div>

         
          <div className="col-md-3 col-6 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: "14px" }}>
              {["Contact", "Support portal", "Z-Connect blog", "List of charges", "Downloads & resources"]
                .map((item, idx) => (
                  <li key={idx}><a href="#" className="text-decoration-none text-dark">{item}</a></li>
              ))}
            </ul>
          </div>

          
          <div className="col-md-3 col-12 mb-4">
            <h5 className="mb-3">Account</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: "14px" }}>
              {["Open an account", "Fund transfer", "60 day challenge"]
                .map((item, idx) => (
                  <li key={idx}><a href="#" className="text-decoration-none text-dark">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="text-muted" style={{ fontSize: "13px", lineHeight: "1.8" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints, write to complaints@zerodha.com or dp@zerodha.com. Read the SEBI-prescribed{" "}
            <a href="#" className="text-decoration-none text-dark">Risk Disclosure Document</a>.
          </p>

          <p>
            <strong>SEBI SCORES complaint procedure:</strong> Register on the SCORES portal. Mandatory details include: Name, PAN,
            Address, Mobile Number, and E-mail ID. Benefit: Speedy grievance redressal.
          </p>

          <p>
            <strong>Market Risk Disclaimer:</strong> Investments in securities market are subject to market risks; read all related
            documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Update your mobile number/email ID with your broker. Receive transaction details
            directly from the exchange at the end of the day. KYC is one-time for all SEBI-registered intermediaries. Don’t issue a cheque for IPOs—authorize
            your bank via ASBA instead. We don’t offer stock tips or portfolio management services. If anyone does so claiming to be us,
            please <a href="#" className="text-decoration-none text-dark">report here</a>."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
