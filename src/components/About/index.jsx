
import Header from "../Header";
import "./about.css";

const About = () => {
  return (
    <>
      <Header />

      <div className="about-wrapper">

        {/* HERO SECTION */}
        <section className="about-hero">
          <h1>
            About <span>HireHub</span>
          </h1>
          <p>Your trusted platform to find the right job at the right time.</p>
        </section>

        {/* FEATURE CARDS */}
        <section className="about-features">
          <div className="feature-card">
            <h2>🌟 Our Mission</h2>
            <p>To empower every job seeker with opportunities that match their skills and dreams.</p>
          </div>

          <div className="feature-card">
            <h2>🚀 Our Vision</h2>
            <p>Create an ecosystem where hiring becomes simpler, faster & smarter.</p>
          </div>

          <div className="feature-card">
            <h2>🤝 Our Values</h2>
            <p>Transparency, Trust, Growth & Commitment to user success.</p>
          </div>
        </section>

        {/* EXTRA SECTION */}
        <section className="about-extra">
          <h2>Why HireHub?</h2>
          <ul>
            <li>✔ 100% Verified Job Listings</li>
            <li>✔ Smart Search & Filters</li>
            <li>✔ Real-Time Job Alerts</li>
            <li>✔ Secure User Profiles</li>
            <li>✔ Fast Application Process</li>
          </ul>
        </section>

      </div>
    </>
  );
};

export default About;
