import "./About.css";
import { FaUsers, FaShieldAlt, FaBolt, FaBullseye ,FaRocket } from "react-icons/fa";
import { Link,Outlet } from "react-router-dom";

function About() {
  return (
  <>
   <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero2">
        <div className="about-content">
          <h1>About SortedCV</h1>
          <p>
            Your recruitment and workforce management partner built for startups
            and SMEs that value outcomes over noise.
          </p>
         
        </div>
      </section>

      {/* ================= WHO WE WORK ================= */}
      <section className="who-section">
        <div className="who-container">

          <div className="who-left">
            <h2>Who We Work With</h2>
            <p>
              We partner with <span>startups, scale-ups, and SMEs</span> that are building fast
              and need hiring partners who understand urgency.
            </p>
            <p>
              Our clients are <span>founders, CXOs, and HR leaders</span> who don’t
              have time for resume dumping.
            </p>
            <p>
              Whether you're a 10-person team or scaling rapidly, we provide
              structure, talent, and operational support.
            </p>
          </div>

          <div className="stats-who--wrapper">
            <div className="stats-who--grid">
              <div className="who-stat">
                <div className="icon-box">
                  <FaUsers />
                </div>
                <h3>500+</h3>
                <p>Companies Served</p>
              </div>

              <div className="who-stat">
                <div className="icon-box">
                  <FaShieldAlt />
                </div>
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>

              <div className="who-stat">
                <div className="icon-box">
                  <FaBullseye />
                </div>
                <h3>30+</h3>
                <p>Industries</p>
              </div>

              <div className="who-stat">
                <div className="icon-box">
                  <FaBolt />
                </div>
                <h3>14</h3>
                <p>Days to Hire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="approach-section">
        <h2>Our Approach</h2>
        <p className="subtitle">
          Built on principles that drive real results for growing companies
        </p>

        <div className="approach-grid">
          <div className="approach-card">
            <div className="icon-box1">
           <FaBullseye />
            </div>
            <h3>Outcome-Driven</h3>
           <h5>
              We don't get paid unless you hire. This keeps us focused on quality, speed, and fit—not just filling pipelines with irrelevant candidates. Our success is directly tied to your
             </h5>
          </div>


          <div className="approach-card">

              <div className="icon-box2">
                  <FaShieldAlt />
                </div>
            <h3>Accountability Over Volume</h3>

            <h5>

           
             We reject the "spray and pray" approach. Every candidate we present is vetted, relevant, and matched to your specific requirements. No resume dumping. No wasted time.
             </h5>
          </div>

          <div className="approach-card">
             <div className="icon-box1">
            <FaRocket/>
            </div>
            <h3>Built for Speed</h3>
            <h5>

            
             Startups can't wait weeks for hiring decisions. We operate with the same urgency you do—moving fast without compromising on quality or cultural fi
            </h5>
          </div>

          <div className="approach-card">
             <div className="icon-box2">
                  <FaUsers />
                  </div>
            <h3>Single Point of Contact</h3>
            <h5>
              No coordinating across multiple vendors. We're your single accountable partner for recruitment, and if needed, payroll and compliance too. One partner, clear ownership.
           </h5>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DON'T DO ================= */}


      <section className="dont-section">
        <h2>What We Don't Do</h2>
        <p className="subtitle">
          Setting clear expectations from the start
        </p>

        <div className="dont-list">

          <div className="dont-item1">
            <h4>We don’t dump resumes.</h4>
            <p>
              Every candidate we send has been screened, assessed, and matched to your requirements.
            </p>
          </div>

          <div className="dont-item">
            <h4>We don’t charge retainers.</h4>
            <p>
              You pay only when you hire. Our model aligns with your outcomes, not our time.
            </p>
          </div>

          <div className="dont-item1">
            <h4>We don’t create unnecessary process.</h4>
            <p>
              No lengthy onboarding, no excessive documentation. We get started quickly and deliver results.
            </p>
          </div>

          <div className="dont-item">
            <h4>We don’t sell you features you don’t need.</h4>
            <p>
              Choose RPO if you want hiring support. Choose Managed Hiring + Payroll if you want full outsourcing.
            </p>
          </div>

          <div className="dont-item1">
            <h4>We don’t operate on corporate timelines.</h4>
            <p>
              We understand startup speed. Our processes are designed for agility, not bureaucracy.
            </p>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE ================= */}
   <section className="why-section1">
  <div className="why-card">
    <h2>
      Why Choose <span>SortedCV</span>
    </h2>

    <p className="subtitle">
      Because hiring is too important to leave to chance,
      and too expensive to gimport { Outlet } from 'react-router-dom';
et wrong.
    </p>

    <p className="description">
      We built SortedCV for companies that want hiring partners who understand
      urgency, value quality over volume, and measure success by outcomes—not
      activity. Whether you need recruitment support or full workforce
      management, we deliver clarity, speed, and accountability at every step.
    </p>
     <Link to={"/contact"}>
   
    <button >Work With Us</button>
      </Link>
    
  </div>
</section>






                <section className="why-section">
        <div className="why-card1">
          <h1>Work With a Partner Who Gets It</h1>
          <p>
           No fluff. No timelines. Just hiring that works.
          </p>
          <Link to={"/Contact"}>
        
          <button>Let's Talk Hiring</button>
            </Link>
        </div>
      </section>
          






    </div>

    <Outlet/>
 </>
  )
}

export default About;
