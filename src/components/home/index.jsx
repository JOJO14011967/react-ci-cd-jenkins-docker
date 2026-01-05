import "./index.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="home-container">
        {/* HERO SECTION */}
        <section className="hero-section text-center text-white">
          <div className="overlay">
            <div className="hero-content container">
              <h1 className="hero-title">
                Your <span className="highlight">Dream Job</span> Awaits
              </h1>
              <p className="hero-subtitle">
                Explore thousands of job opportunities and connect with top companies.
              </p>
              <div className="hero-buttons">
                <button className="cta-btn" onClick={() => navigate("/jobs")}>
                  🔍 Explore Jobs
                </button>
                <button className="secondary-btn">👔 Post a Job</button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED CATEGORIES */}
        <section className="categories-section container text-center">
          <h2 className="section-title">Explore Job Categories</h2>
          <div className="categories-grid">
            {[
              { icon: "💻", title: "IT & Software" },
              { icon: "📈", title: "Marketing" },
              { icon: "🧮", title: "Finance" },
              { icon: "🎨", title: "Design" },
              { icon: "🧑‍🏫", title: "Education" },
              { icon: "🏥", title: "Healthcare" },
            ].map((cat, i) => (
              <div key={i} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE HIREHUB */}
        <section className="why-section text-center">
          <h2 className="section-title">Why Choose HireHub?</h2>
          <div className="why-grid container">
            {[
              {
                title: "Verified Employers",
                desc: "All jobs come from trusted and verified companies.",
              },
              {
                title: "Smart Filtering",
                desc: "Find jobs easily by category, location, or type.",
              },
              {
                title: "Instant Apply",
                desc: "Apply directly with your profile in just one click.",
              },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="cta-section text-center text-white">
          <h2>Ready to Find Your Next Job?</h2>
          <p>Sign up today and connect with recruiters instantly!</p>
          <button className="cta-btn" onClick={() => navigate("/login")}>
            Get Started 🚀
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;

