import React, { useState } from "react";

function CreateTicket() {
  const [openSection, setOpenSection] = useState("account");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <div className="border mb-4 bg-white">
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("account")}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eef5fc",
                  }}
                >
                  <span style={{ color: "#387ed1", fontSize: "18px" }}>⊕</span>
                </div>
                <h5 className="m-0 text-dark">Account Opening</h5>
              </div>
              <span style={{ color: "#387ed1" }}>
                {openSection === "account" ? "▲" : "▼"}
              </span>
            </div>
            {openSection === "account" && (
              <div className="border-top p-3 ps-5">
                <ul
                  className="mb-0"
                  style={{ lineHeight: "2.2", color: "#387ed1" }}
                >
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Resident individual
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Minor
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Non Resident Indian (NRI)
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Company, Partnership, HUF and LLP
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Glossary
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="border mb-4 bg-white">
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("zerodha")}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eef5fc",
                  }}
                >
                  <span style={{ color: "#387ed1", fontSize: "16px" }}>👤</span>
                </div>
                <h5 className="m-0 text-dark">Your Finspirax Account</h5>
              </div>
              <span style={{ color: "#387ed1" }}>
                {openSection === "zerodha" ? "▲" : "▼"}
              </span>
            </div>
            {openSection === "zerodha" && (
              <div className="border-top p-3 ps-5">
                <ul
                  className="mb-0"
                  style={{ lineHeight: "2.2", color: "#387ed1" }}
                >
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Your Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Account modification
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Client Master Report (CMR) and Depository Participant (DP)
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Nomination
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Transfer and conversion of securities
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="border mb-4 bg-white">
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("kite")}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eef5fc",
                  }}
                >
                  <span style={{ color: "#387ed1", fontSize: "16px" }}>@</span>
                </div>
                <h5 className="m-0 text-dark">Kite</h5>
              </div>
              <span style={{ color: "#387ed1" }}>
                {openSection === "kite" ? "▲" : "▼"}
              </span>
            </div>
            {openSection === "kite" && (
              <div className="border-top p-3 ps-5">
                <ul
                  className="mb-0"
                  style={{ lineHeight: "2.2", color: "#387ed1" }}
                >
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      IPO
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Trading FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Margin Trading Facility (MTF) and Margins
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Charts and orders
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Alerts and Nudges
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      General
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="border mb-4 bg-white">
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("funds")}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eef5fc",
                  }}
                >
                  <span
                    style={{
                      color: "#387ed1",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹
                  </span>
                </div>
                <h5 className="m-0 text-dark">Funds</h5>
              </div>
              <span style={{ color: "#387ed1" }}>
                {openSection === "funds" ? "▲" : "▼"}
              </span>
            </div>
            {openSection === "funds" && (
              <div className="border-top p-3 ps-5">
                <ul
                  className="mb-0"
                  style={{ lineHeight: "2.2", color: "#387ed1" }}
                >
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Add money
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Withdraw money
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Add bank accounts
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      eMandates
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="border mb-4 bg-white">
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("console")}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eef5fc",
                  }}
                >
                  <span style={{ color: "#387ed1", fontSize: "16px" }}>@</span>
                </div>
                <h5 className="m-0 text-dark">Console</h5>
              </div>
              <span style={{ color: "#387ed1" }}>
                {openSection === "console" ? "▲" : "▼"}
              </span>
            </div>
            {openSection === "console" && (
              <div className="border-top p-3 ps-5">
                <ul
                  className="mb-0"
                  style={{ lineHeight: "2.2", color: "#387ed1" }}
                >
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Corporate actions
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Funds statement
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Reports
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Segments
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="border mb-4 bg-white">
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleSection("coin")}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eef5fc",
                  }}
                >
                  <span style={{ color: "#387ed1", fontSize: "16px" }}>◔</span>
                </div>
                <h5 className="m-0 text-dark">Coin</h5>
              </div>
              <span style={{ color: "#387ed1" }}>
                {openSection === "coin" ? "▲" : "▼"}
              </span>
            </div>
            {openSection === "coin" && (
              <div className="border-top p-3 ps-5">
                <ul
                  className="mb-0"
                  style={{ lineHeight: "2.2", color: "#387ed1" }}
                >
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Mutual funds
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      National Pension Scheme (NPS)
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Fixed Deposit (FD)
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Features on Coin
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      Payments and Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ color: "#387ed1", textDecoration: "none" }}
                    >
                      General
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="col-4">
          <div
            className="p-3 mb-4"
            style={{
              backgroundColor: "#fff4e5",
              borderLeft: "4px solid #f26522",
            }}
          >
            <ul
              className="m-0 ps-3"
              style={{ lineHeight: "1.8", color: "#387ed1" }}
            >
              <li className="mb-2">
                <a href="" style={{ color: "#387ed1" }}>
                  Additional exposure margin on securities under MWPL
                </a>
              </li>
              <li>
                <a href="" style={{ color: "#387ed1" }}>
                  Offer for sale (OFS) – August 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="border bg-white">
            <div className="bg-light p-3 border-bottom">
              <strong className="text-dark">Quick links</strong>
            </div>
            <div className="d-flex flex-column">
              <div className="p-3 border-bottom">
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#387ed1" }}
                >
                  1. Track account opening
                </a>
              </div>
              <div className="p-3 border-bottom">
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#387ed1" }}
                >
                  2. Track segment activation
                </a>
              </div>
              <div className="p-3 border-bottom">
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#387ed1" }}
                >
                  3. Intraday margins
                </a>
              </div>
              <div className="p-3 border-bottom">
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#387ed1" }}
                >
                  4. Kite user manual
                </a>
              </div>
              <div className="p-3">
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#387ed1" }}
                >
                  5. Learn how to create a ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
