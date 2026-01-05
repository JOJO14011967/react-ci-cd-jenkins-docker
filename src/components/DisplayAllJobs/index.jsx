import "./index.css";

const DisplayAllJobs = ({ job }) => {
  if (!job) return null; // safeguard if no data passed

  const {
    company_logo_url,
    title,
    rating,
    location,
    employment_type,
    package_per_annum,
    job_description,
  } = job;

  return (
    <div className="job-card bg-white p-3 mb-3 rounded shadow-sm">
      <div className="d-flex align-items-center mb-2">
        <img
          src={company_logo_url}
          alt={title}
          className="company-logo me-3"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <h5 className="mb-1">{title}</h5>
          <p className="text-muted mb-0">⭐ {rating}</p>
        </div>
      </div>

      <div className="d-flex justify-content-between text-secondary small mb-2">
        <p className="mb-0">
          <i className="bi bi-geo-alt"></i> {location}
        </p>
        <p className="mb-0">{employment_type}</p>
        <p className="fw-bold mb-0 text-dark">{package_per_annum}</p>
      </div>

      <hr />

      <h6 className="fw-semibold">Description</h6>
      <p className="text-secondary">{job_description}</p>
    </div>
  );
};

export default DisplayAllJobs;


