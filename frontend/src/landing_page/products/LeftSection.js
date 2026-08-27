import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  Coin,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            {Coin ? (
              <a href={Coin} style={{ textDecoration: "none" }}>
                Coin <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            ) : (
              <>
                <a href={tryDemo} style={{ textDecoration: "none" }}>
                  Try Demo <i className="fa-solid fa-arrow-right-long"></i>
                </a>

                <a
                  href={learnMore}
                  style={{ marginLeft: "100px", textDecoration: "none" }}
                >
                  Learn More <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </>
            )}
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
