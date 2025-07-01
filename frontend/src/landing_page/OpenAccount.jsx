import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="mt-4 mb-3">Open a Zerodha account</h1>
          <p className="lead text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            className="btn btn-primary btn-lg mt-3"
            style={{ width: "250px" }}
            onClick={() => window.location.href = "/signup"} 
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
