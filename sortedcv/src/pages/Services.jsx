import { Link,Outlet } from "react-router-dom";
import "./Services.css";
 function Services() {
   return (
    <>
    
   
    <div className="page">

      {/* HERO */}
      <section className="hero1">
        <div className="hero1-content">
          <h1>
           
Powerful Hiring Solutions Designed for
Modern, High-Performing Teams
          </h1>
          <p>
            Two outcome-driven engagement models. No subscriptions. No noise. Just results.
          </p>
        </div>
      </section>

      {/* WHITE WRAPPER */}
      <section className="plans-wrapper">
        <section className="plans">

          {/* PLAN 1 */}
          <div className="plan large">
            <span className="badge purple">PLAN 1</span>

            <div className="title">
              <div className="icon purple">◎</div>
              <div>
                <h2>RPO</h2>
                <small>Recruitment Process Outsourcing</small>
              </div>
            </div>

            <h3 className="highlight purple-text">
              Hire Faster. Pay Only When You Hire.
            </h3>

            <div className="section">
              <h4>What This Is</h4>
              <p>
                Partnership where we handle your end-to-end recruitment process
                while you maintain full control over final hiring decisions and payroll.
                Expert recruiters, streamlined processes, and pre-vetted talent without hiring an internal team.
              </p>
            </div>

            <div className="section">
              <h4>What We Handle</h4>
              <ul className="grid">
                <li>Candidate sourcing & screening</li>
                <li>Initial assessments</li>
                <li>Shortlisting candidates</li>
                <li>Interview coordination</li>
                <li>Offer negotiation support</li>
                <li>Onboarding assistance</li>
              </ul>
            </div>

            <div className="stats1">
              <div className="stat1">
                <strong>2.5%–8%</strong>
                <span>of CTC per hire</span>
              </div>
              <div className="stat1">
                <strong>90 Days</strong>
                <span>Replacement</span>
              </div>
              <div className="stat1">
                <strong>5-20</strong>
                <span>Hires</span>
              </div>
            </div>
            
             <Link  to={"/contact"}>
               
            <button className="cta purple-btn">

              Get Started with Pro  →
            </button>
                 </Link>
          
          </div>

          {/* PLAN 2 */}
          <div className="plan large pink-border">
            <span className="badge pink">PLAN 2</span>

            <div className="title">
              <div className="icon pink">👥</div>
              <div>
                <h2>Managed Hiring</h2>
                <small>+ Payroll</small>
              </div>
            </div>

            <h3 className="highlight pink-text">
              We Handle Everything.
            </h3>

            <div className="section">
              <h4>Hiring (End-to-End)</h4>
              <ul className="grid">
                <li>Complete talent sourcing</li>
                <li>Full interview management</li>
                <li>Background verification</li>
                <li>Offer negotiation</li>
              </ul>
            </div>

            <div className="section">
              <h4>Payroll & Compliance</h4>
              <ul className="grid">
                <li>Monthly salary processing</li>
                <li>PF & ESIC management</li>
                <li>Tax compliance (TDS)</li>
                <li>Leave & attendance</li>
                <li>Payroll reconciliation and reporting</li>
                <li>Monthly TDS calculation on salaries</li>
              </ul>
            </div>

            <div className="stats1">
              <div className="stat1">
                <strong>2.5%–8%</strong>
                <span>commission on CTC</span>
              </div>
              <div className="stat1">
                <strong>100%</strong>
                <span>Managed</span>
              </div>
              <div className="stat1">
                <strong>20+</strong>
                <span>Hires</span>
              </div>
            </div>

                <Link to={"/contact"}>
               
            <button  className="Mangedbutton">

              Get Started with Managed  →
            </button>
                 </Link>


          </div>

        </section>
      </section>

      {/* COMPARISON TABLE */}
      <section className="compare">

        <h2>Smart Hiring Made Simple</h2>
        <p className="subtitle">
          Streamline your recruitment with powerful tools, smart automation,
          and data-driven insights to hire top talent effortlessly.
        </p>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>RPO</th>
                <th>Managed Hiring + Payroll</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Interview Control</td>
                <td>Full control with your team</td>
                <td className="pink-text">We manage, you approve</td>
              </tr>

              <tr>
                <td>Payroll Management</td>
                <td>Client handles</td>
                <td className="pink-text">Fully managed by us</td>
              </tr>

              <tr>
                <td>Compliance (PF, ESIC, etc.)</td>
                <td>Client responsibility</td>
                <td className="pink-text">Fully managed by us</td>
              </tr>

              <tr>
                <td>Internal HR Needed</td>
                <td>Yes (for final decisions)</td>
                <td className="pink-text">No (fully outsourced)</td>
              </tr>

              <tr>
                <td>Best for Scaling</td>
                <td>Moderate (5-20 hires)</td>
                <td className="pink-text">Rapid, high volume (20+ hires)</td>
              </tr>

              <tr>
                <td>Pricing Model</td>
                <td>2.5%–8% of CTC per hire</td>
                <td>2.5%–8% commission on CTC</td>
              </tr>

              <tr>
                <td>When You Pay</td>
                <td>After candidate joins</td>
                <td>Monthly (payroll + commission)</td>
              </tr>

            </tbody>
          </table>
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>One Partner. Two Engagement Models.</h2>
        <p>
          Hiring without uncertainty. Choose the model that fits your needs today.
        </p>
        <Link to={"/contact"}>
       
        <button>Talk to Our Hiring Team</button>
        </Link>
      </section>
          
        
    </div>
   <Outlet/>
     </>
  );
}
export default Services;
