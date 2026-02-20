import { useNavigate } from "react-router-dom";
import bg from "../assets/bg-img.png";
import handshake from "../assets/handshake.jpg";
import team from "../assets/team.jpg";
import "../App.css";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(
    90deg,
    rgba(147, 51, 234, 0.80),
    rgba(168, 85, 247, 0.75),
    rgba(219, 39, 119, 0.80)
  ), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <h1>Predictable Hiring Infrastructure!</h1>
          <p>
            Software or service, depending on how you want to hire.
            Pay only for successfully onboarded candidates.
          </p>
          <button
            className="btn hero-btn"
            onClick={() => navigate("/contact")}
          >
            Get Started →
          </button>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partners">
        <h4>PARTNERED WITH</h4>
        <div className="partner-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="partner-box">
              Client {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div>
          <h2>500+</h2>
          <p>Successful Placements</p>
        </div>
        <div>
          <h2>95%</h2>
          <p>Client Satisfaction Rate</p>
        </div>
        <div>
          <h2>30+</h2>
          <p>Industry Verticals Served</p>
        </div>
      </section>
      {/* Engagement Section */}
<section className="engagement">
  <h2 className="engagement-title">Take Control of Your Hiring</h2>
  <p className="engagement-subtitle">
    Choose your engagement model based on how hands-on you want to be with
    recruitment and workforce management
  </p>

  <div className="engagement-grid">
    {/* Card 1 */}
    <div className="eng-card1">
      <div className="icon purple">
      <i className="fa-solid fa-bullseye"></i>
      </div>
      <h3>RPO</h3>
      <p className="card-desc">You hire. We support recruitment.</p>

      <ul className="feature-list">
  <li>
    <span className="check-icon">✓</span>
    Pay per successful hire
  </li>
  <li>
    <span className="check-icon">✓</span>
    No upfront fees
  </li>
  <li>
    <span className="check-icon">✓</span>
    Full interview control
  </li>
  <li>
    <span className="check-icon">✓</span>
    90-day replacement guarantee
  </li>
</ul>

      <div className="pricing">
        <span>Pricing</span>
        <h4>2.5%-8% of CTC</h4>
        <small>Pay after joining</small>
      </div>

      <a href="/services" className="learn-link">Learn More →</a>
    </div>

    {/* Card 2 */}
    <div className="eng-card2">
      <div className="icon pink">
      <i className="fa-solid fa-users"></i>
      </div>
      <h3>Managed Hiring + Payroll</h3>
      <p className="card-desc">
        We run hiring and payroll end-to-end.
      </p>

       <ul className="feature-list1">
  <li>
    <span className="check-icon1">✓</span>
    Zero hiring operations
  </li>
  <li>
    <span className="check-icon1">✓</span>
    Complete payroll management
  </li>
  <li>
    <span className="check-icon1">✓</span>
    Statutory compliance (PF, ESI)
  </li>
  <li>
    <span className="check-icon1">✓</span>
    Single accountable partner
  </li>
</ul>


      <div className="pricing">
        <span>Pricing</span>
        <h4>2.5%-8% commission</h4>
        <small>On CTC (monthly)</small>
      </div>

      <a href="/services" className="learn-link2">Learn More →</a>
    </div>
  </div>
</section>
<section className="outcome-section">
      <div className="container1">

        {/* Left Image */}
        <div className="image-handshake">
          <img src={handshake} alt="Handshake" />

          <div className="success-card">
            <div className="icon-circle">🏅</div>
            <div>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="content">
          <h2>Outcome-Based Hiring</h2>
          <p className="desc">
            We don't get paid unless you hire. This keeps us aligned 
            with your goals—quality over quantity, speed without compromise.
          </p>

          <div className="point">
            <span>✔</span>
            <div>
              <h4>Pre-Vetted Talent</h4>
              <p>Every candidate is screened and matched to your requirements</p>
            </div>
          </div>

          <div className="point">
            <span>✔</span>
            <div>
              <h4>Transparent Process</h4>
              <p>Clear pricing, timelines, and regular updates throughout</p>
            </div>
          </div>

          <div className="point">
            <span>✔</span>
            <div>
              <h4>Startup Speed</h4>
              <p>We operate with the same urgency as your growing business</p>
            </div>
          </div>

        </div>
      </div>
    </section>
     <section className="built-section">
      <div className="container1">

        {/* Left Content */}
        <div className="built-content">
          <h2>Built for Scale</h2>
          <p>
            Whether you're hiring your first 5 employees or scaling 
            to 100+, our flexible engagement models grow with you.
          </p>

          <div className="cards">
            <div className="card">
              <div className="icon-arrow">
              <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h3>5-20</h3>
              <p>Ideal for RPO</p>
            </div>

            <div className="card">
              <div className="icon-user">
              <i className="fa-solid fa-users"></i>
              </div>
              <h3>20+</h3>
              <p>Perfect for Managed</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="built-image">
          <img src={team} alt="Team" />

          <div className="days-badge">
            <h3>14 days</h3>
            <p>Avg. Time to Hire</p>
          </div>
        </div>

      </div>
    </section>
      <section className="testimonials">
      <div className="testimonials-container">
        <h2>Hear From Our Customers</h2>
        <p className="subtitle">
          Founders and HR leaders share their experience working with SortedCV
        </p>

        <div className="cards-test">
          {/* Card 1 */}
          <div className="card-test">
            <div className="stars">★★★★★</div>
            <p className="review">
              "SortedCV helped us scale from 10 to 50 employees in 6 months.
              Their managed hiring solution was a game-changer for our growth."
            </p>

            <div className="profile">
              <div className="avatar"></div>
              <div>
                <h4>Founder Name</h4>
                <span>CEO, Tech Startup</span>
              </div>
            </div>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="card-test">
            <div className="stars">★★★★★</div>
            <p className="review">
              "SortedCV helped us scale from 10 to 50 employees in 6 months.
              Their managed hiring solution was a game-changer for our growth."
            </p>

            <div className="profile">
              <div className="avatar"></div>
              <div>
                <h4>Founder Name</h4>
                <span>CEO, Tech Startup</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-test">
            <div className="stars">★★★★★</div>
            <p className="review">
              "SortedCV helped us scale from 10 to 50 employees in 6 months.
              Their managed hiring solution was a game-changer for our growth."
            </p>

            <div className="profile">
              <div className="avatar"></div>
              <div>
                <h4>Founder Name</h4>
                <span>CEO, Tech Startup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<section className="started">
      <div className="hero-content">
        <h1>
          Build a Stronger Team When You
          <br />
          Say "Hello" to
          <br />
          SortedCV Hiring Solutions
        </h1>

        <p>
          One partner. Two engagement models. Zero uncertainty.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </button>

          <button
            className="btn-outline"
            onClick={() => navigate("/services")}
          >
            View Services
          </button>
        </div>
      </div>
    </section>

    </>
  );
}

export default Home;
