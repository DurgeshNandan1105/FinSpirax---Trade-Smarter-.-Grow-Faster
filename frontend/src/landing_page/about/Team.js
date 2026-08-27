import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5 ">People</h1>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/myimage.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Durgesh Nandan</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Durgesh Nandan founded FinSpirax with a vision to simplify the way
            people experience trading and investing through technology. Driven
            by his interest in software development and financial technology, he
            aims to build a platform that makes financial tools more accessible,
            intuitive, and user-friendly.
          </p>

          <p>
            As the creator of FinSpirax, he focuses on combining modern web
            technologies with innovative financial solutions to create a
            seamless experience for traders and investors.
          </p>

          <p>
            Building products, exploring new technologies, and turning ideas
            into real-world solutions are what keep him motivated.
          </p>

          <p>
            Connect on{" "}
            <a href="" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
