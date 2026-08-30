import React from "react";

function Second() {
  return (
    <div className="container mb-5" style={{ marginTop: "120px" }}>
      <div className="row my-5 align-items-center pt-4">
        <h2 className="text-center fs-3 mb-5 text-secondary fw-normal">
          Steps to open a demat account with Finspirax
        </h2>

        <div className="col-6 text-center p-4">
          <img
            src="media/images/steps.svg"
            alt="Steps to open demat account"
            style={{ width: "85%" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "media/images/steps-acop.svg";
            }}
          />
        </div>

        <div className="col-6 p-4">
          <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
            <span
              className="border rounded-circle text-muted d-flex align-items-center justify-content-center me-3"
              style={{ width: "42px", height: "42px", flexShrink: 0 }}
            >
              01
            </span>
            <span className="fs-5 text-secondary fw-normal">
              Enter the requested details
            </span>
          </div>

          <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
            <span
              className="border rounded-circle text-muted d-flex align-items-center justify-content-center me-3"
              style={{ width: "42px", height: "42px", flexShrink: 0 }}
            >
              02
            </span>
            <span className="fs-5 text-secondary fw-normal">
              Complete e-sign & verification
            </span>
          </div>

          <div className="d-flex align-items-center mb-4">
            <span
              className="border rounded-circle text-muted d-flex align-items-center justify-content-center me-3"
              style={{ width: "42px", height: "42px", flexShrink: 0 }}
            >
              03
            </span>
            <span className="fs-5 text-secondary fw-normal">
              Start investing!
            </span>
          </div>
        </div>
      </div>

      <div className="row my-5 align-items-center">
        <div className="col-6 text-center p-4">
          <img
            src="media/images/acop-benefits.svg"
            alt="Benefits illustration"
            style={{ width: "80%" }}
            className="mb-4"
          />
          <h3 className="fs-4 text-secondary text-center fw-normal">
            Benefits of opening a Finspirax demat account
          </h3>
        </div>

        <div className="col-6 p-4">
          <div className="mb-4">
            <h4 className="fs-5 text-dark fw-medium mb-2">
              Unbeatable pricing
            </h4>
            <p className="text-muted lh-base">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-5 text-dark fw-medium mb-2">
              Best investing experience
            </h4>
            <p className="text-muted lh-base">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-5 text-dark fw-medium mb-2">
              No spam or gimmicks
            </h4>
            <p className="text-muted lh-base">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-5 text-dark fw-medium mb-2">
              The Finspirax universe
            </h4>
            <p className="text-muted lh-base">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <h2 className="text-center fs-3 mb-5 text-secondary fw-normal">
          Explore different account types
        </h2>

        <div className="col-4 mb-4">
          <div className="border rounded p-4 h-100 shadow-sm bg-white">
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center me-2"
                style={{ width: "32px", height: "32px" }}
              >
                👤
              </span>
              <h5 className="mb-0 text-dark fw-medium fs-5">
                Individual Account
              </h5>
            </div>
            <p className="text-muted mb-0">
              Invest in equity, mutual funds and derivatives
            </p>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="border rounded p-4 h-100 shadow-sm bg-white">
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center me-2"
                style={{ width: "32px", height: "32px" }}
              >
                👥
              </span>
              <h5 className="mb-0 text-dark fw-medium fs-5">HUF Account</h5>
            </div>
            <p className="text-muted mb-0">
              Make tax-efficient investments for your family
            </p>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="border rounded p-4 h-100 shadow-sm bg-white">
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center me-2"
                style={{ width: "32px", height: "32px" }}
              >
                🌐
              </span>
              <h5 className="mb-0 text-dark fw-medium fs-5">NRI Account</h5>
            </div>
            <p className="text-muted mb-0">
              Invest in equity, mutual funds, debentures, and more
            </p>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="border rounded p-4 h-100 shadow-sm bg-white">
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center me-2"
                style={{ width: "32px", height: "32px" }}
              >
                👶
              </span>
              <h5 className="mb-0 text-dark fw-medium fs-5">Minor Account</h5>
            </div>
            <p className="text-muted mb-0">
              Teach your little ones about money & invest for their future with
              them
            </p>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="border rounded p-4 h-100 shadow-sm bg-white">
            <div className="d-flex align-items-center mb-3">
              <span
                className="rounded-circle bg-light text-primary d-flex align-items-center justify-content-center me-2"
                style={{ width: "32px", height: "32px" }}
              >
                🏢
              </span>
              <h5 className="mb-0 text-dark fw-medium fs-5">
                Corporate / LLP/ Partnership
              </h5>
            </div>
            <p className="text-muted mb-0">
              Manage your business surplus and investments easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
