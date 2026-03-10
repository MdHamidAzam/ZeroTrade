import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 border-bottom text-center">
        <h1 className="fs-2">Charges</h1>
        <h3 className="text-muted mt-3 fs-5">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5 text-center g-5">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" className="me-4" style={{ width: "83%" }} />
          <h1 className="fs-2 text-nowrap">Free equity delivery</h1>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" className="me-4" style={{ width: "83%" }}/>
          <h1 className="fs-2 text-nowrap text-start">Intraday and F&O trades</h1>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" className="ms-5" style={{ width: "83%" }} />
          <h1 className="fs-2 text-nowrap text-end">Free direct MF</h1>
          <p className="text-muted mt-4 ms-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
