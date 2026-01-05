
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../Header";
import FilterSection from "../FilterSection";
import DisplayAllJobs from "../DisplayAllJobs";
import ProfileCard from "../ProfileCard";
import "./index.css";

const Jobs = () => {
  const [allValues, setValues] = useState({
    jobsArr: [],
    searchType: "", // filter (internship, full time)
  });

  useEffect(() => {
    const getJobs = async () => {
      const api = "https://apis.ccbp.in/jobs";
      const token = Cookies.get("myToken");

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
          setValues((prev) => ({ ...prev, jobsArr: data.jobs }));
        } else {
          console.log("API Error:", data.error_msg);
        }
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    getJobs();
  }, []);

  // ✅ Filter logic for job type (internship / fulltime)
  const filteredJobs = allValues.jobsArr.filter((job) => {
    if (!allValues.searchType) return true;
    return job.employment_type
      .toLowerCase()
      .includes(allValues.searchType.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className="jobs-container">
        <div className="left-section">
          <ProfileCard />

          <FilterSection />

          <div className="filter-search">
            <label htmlFor="type">Filter by Type:</label>
            <select
              id="type"
              value={allValues.searchType}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, searchType: e.target.value }))
              }
            >
              <option value="">All</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="right-section">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((each) => (
              <DisplayAllJobs key={each.id} job={each} />
            ))
          ) : (
            <p className="loading-text">No jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
