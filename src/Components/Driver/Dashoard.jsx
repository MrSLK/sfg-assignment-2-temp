import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const onClick = () => {
    navigate("/driver/jobs/1")
  }

  useEffect(() => {
    const pJobs = [
      {
        jobName: "Private Hire",
        jobHirer: "Easy Lifestyle",
        jobDescription: "Easy Lifestyle is looking for a driver for the next 6 months to private billionaires, at their descretion",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Group Chauffer",
        jobHirer: "Indeed",
        jobDescription: "Indeed is looking for a driver for the next 12 months to drive their staff from the bus terminals to the office on a daily basis",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Personal Chauffer",
        jobHirer: "TUT",
        jobDescription: "Mayor of Johannesburg is looking for a personal chauffer to drive everywhere he goes",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
      {
        jobName: "Bus Driver",
        jobHirer: "TUT",
        jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
        jobStartDate: new Date(),
        jobEndDate: new Date("2025-07-13"),
      },
    ];
    setJobs(pJobs);
  }, [])
  return (
    <div className="container-fluid">
      <h2>Pontential Jobs</h2>
      <div className="row">
        {jobs.length > 0 ? jobs.map((job, index) => (

          <div className="card" key={index} style={{ width: "18rem", margin: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">{job.jobName}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><i>{job.jobHirer}</i></h6>
              <p className="card-text">{job.jobDescription}</p>

              <div className="col-md-4">
                <button className="btn btn-primary" onClick={onClick}>View Job</button>
              </div>
            </div>
          </div>
        )) : <h4>No jobs found!</h4>}
      </div>
    </div>
  )
}

export default Dashboard;

