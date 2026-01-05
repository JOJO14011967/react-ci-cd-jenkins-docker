import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const JobDetails = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobDetails = async () => {
      const token = Cookies.get("myToken");
      const api = `https://apis.ccbp.in/jobs/${id}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(api, options);
        const data = await response.json();

        if (response.ok) {
          setJobData(data);
        } else {
          console.log("API Error:", data.error_msg);
        }
      } catch (error) {
        console.log("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getJobDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5 text-primary">Loading job details...</p>;
  }

  if (!jobData) {
    return <p className="text-center text-danger mt-5">Job details not found.</p>;
  }

  const { job_details, skills, life_at_company, similar_jobs } = jobData;

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="card p-4 shadow-lg">
          <div className="d-flex align-items-center mb-3">
            <img
              src={job_details.company_logo_url}
              alt={job_details.company_name}
              width="60"
              className="me-3"
            />
            <div>
              <h4>{job_details.title}</h4>
              <p>{job_details.location}</p>
            </div>
          </div>
          <p><strong>Employment Type:</strong> {job_details.employment_type}</p>
          <p><strong>Package:</strong> {job_details.package_per_annum}</p>
          <p><strong>Rating:</strong> ⭐ {job_details.rating}</p>
          <p><strong>Description:</strong> {job_details.job_description}</p>

          <h5 className="mt-4">Skills Required</h5>
          <div className="d-flex flex-wrap">
            {skills.map((skill) => (
              <div key={skill.name} className="d-flex align-items-center me-4 mt-3">
                <img src={skill.image_url} alt={skill.name} width="35" className="me-2" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>

          <h5 className="mt-4">Life at Company</h5>
          <div className="d-flex align-items-start mt-2">
            <p className="flex-grow-1">{life_at_company.description}</p>
            <img
              src={life_at_company.image_url}
              alt="life"
              width="200"
              className="ms-3 rounded"
            />
          </div>
        </div>

        <h4 className="mt-5">Similar Jobs</h4>
        <div className="row">
          {similar_jobs.map((job) => (
            <div key={job.id} className="col-md-4 col-12 mt-3">
              <div className="card p-3 h-100">
                <div className="d-flex align-items-center mb-2">
                  <img src={job.company_logo_url} alt={job.title} width="50" className="me-3" />
                  <div>
                    <h5>{job.title}</h5>
                    <p>⭐ {job.rating}</p>
                  </div>
                </div>
                <p>{job.job_description}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.employment_type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
