import React from "react";
import "./footer.css";
import footerlogo from "../../assets/mainlogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-body">
      <div className="footermain">
        <div className="footercolumn-1">
          <img src={footerlogo} alt=""></img>
          <p>Start your journey with us today!</p>
        </div>
        <div className="footercolumn-2">
          <h1>Address</h1>
          <p>
            10th Floor, Tower-B, Unitech Cyber Park, Sector-39, Gurugram,
            Haryana - 122011
          </p>
          <p>+91-9818908714</p>
          <p>info@loanmukt.co.in</p>
        </div>
        <div className="footercolumn-3">
          <ul className="footer-list-ul">
            <h1>Company</h1>
            <Link to="/" className="footer-links">
              <li>Home</li>
            </Link>
            <Link to="/" className="footer-links">
              <li>Home</li>
            </Link>
            <Link to="/" className="footer-links">
              <li>Home</li>
            </Link>
          </ul>
        </div>
        <div className="footercolumn-4">
          <ul className="footer-list-ul">
            <h1>Information</h1>
            <Link to="/" className="footer-links">
              <li>Home</li>
            </Link>
            <Link to="/" className="footer-links">
              <li>Home</li>
            </Link>
            <Link to="/" className="footer-links">
              <li>Home</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="underline-footer"></div>
      <div className="last-text-footer">
        <p>
          Disclaimer: Loan settlement is the discretion of the lenders and only
          they can issue settlement letters. We provide legal support and do not
          have any authority to issue such letters. Not all debts are eligible
          for loan settlement. You should consider loan settlement only if you
          are in financial distress and unable to pay your loan EMIs. LoanMukt
          is committed to following the highest standards of governance in
          managing client information and providing professional support to our
          clients.
        </p>
        <div className="footer-copyright">
          <p>© 2024 All Rights Reserved | Copyright xxxxx</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
