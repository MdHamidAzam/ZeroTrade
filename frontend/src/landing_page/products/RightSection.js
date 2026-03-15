import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row gx-5">
        <div className="col-6 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ marginLeft: "30px", textDecoration: "none" }}
            >
              Learn more{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
