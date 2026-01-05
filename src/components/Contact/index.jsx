import Header from "../Header";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="contact-wrapper">

        <section className="contact-hero">
          <h1>Get in <span>Touch</span></h1>
          <p>We’d love to hear from you! Reach out anytime.</p>
        </section>

        <div className="contact-container">

          {/* INFO CARD */}
          <div className="contact-info">
            <h2>📞 Contact Details</h2>
            <p><strong>Email:</strong> support@hirehub.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Nagpur, Maharashtra, India</p>
          </div>

          {/* FORM CARD */}
          <div className="contact-form">
            <h2>📩 Send Us a Message</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
