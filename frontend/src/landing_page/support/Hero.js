import React from "react";

function Hero() {
  return (
    <div className="bg-light w-100">
      <div className="container pt-5 pb-5">
        <div className="row align-items-center">
          <div className="col-6">
            <h1>Support Portal</h1>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn btn-primary fs-5 px-4 py-2">
              My tickets
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="position-relative">
              <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-4"></i>

              <input
                type="search"
                className="form-control fs-5 py-4 ps-5"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
