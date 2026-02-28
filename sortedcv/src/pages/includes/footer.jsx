import "./Footer.css";
import footerLogo from "../../assets/footer-logo.png"; 
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-col">
        <div className="footer-logo">
  <      img src={footerLogo} alt="SortedCV Logo" className="footer-logo-img" />
         </div>

          <p className="footer-desc">
            Hiring without uncertainty. One partner for your complete
            workforce needs.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>RPO</li>
            <li>Managed Hiring + Payroll</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Get Started */}
        <div className="footer-col">
          <h4>Get Started</h4>
          <p className="footer-small">
            Talk to our hiring team today.
          </p>
          <Link to="/contact">
          <button className="footer-btn">Schedule a Call</button>
          </Link>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SortedCV. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
