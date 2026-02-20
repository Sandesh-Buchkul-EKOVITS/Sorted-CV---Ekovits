import { useState } from "react";
import "./Contact.css";
import contactBg from "../assets/bg-img.png";  // path check kara


function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Server connection error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
  className="contact-container"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(147, 51, 234, 0.80),
        rgba(168, 85, 247, 0.75),
        rgba(219, 39, 119, 0.80)
      ),
      url(${contactBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {!submitted ? (
        <div className="form-box">
          <h2>
            Connect with <span>SORTEDCV</span> Hiring
          </h2>
          <p>Experts</p>

          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name*" required />
            <input name="email" type="email" placeholder="Email*" required />
            <input name="company" type="text" placeholder="Company Name" />
            <input name="phone" type="text" placeholder="Phone Number*" required />
            <textarea name="message" placeholder="Message*" required></textarea>

            <button type="submit" className="gradient-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit →"}
            </button>
          </form>
        </div>
      ) : (
        <div className="thankyou-box">
          <div className="success-icon">
            <div className="inner-circle">
              <svg viewBox="0 0 24 24" className="check-icon">
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h1>Thank You!</h1>
          <p>
            We've received your message and will get back to you
            within 24 hours.
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
