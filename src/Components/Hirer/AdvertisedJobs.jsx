import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllJob } from "../../store/jobs/actions/jobs.actions";
import { trimText } from "../../Helpers/index" 


const AdvertisedJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, allJobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchAllJob())
  }, [])
  return (
    <div className="container-fluid">
      <h2>Advertised jobs</h2>
      {isLoading ? <div>Fetching jobs...</div> : (<div className="row">
        {allJobs.length > 0 ? allJobs.map((job, index) => (

          <div className="card" key={index} style={{ width: "18rem", margin: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">{job.jobTitle}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><i>{`${job.hirer.profile.firstName} ${job.hirer.profile.lastName}`}</i></h6>
              <p className="card-text">{trimText(job.description)}</p>

              <div className="col-md-4">
                <button className="btn btn-primary" onClick={() => navigate(`/hirer/jobs/${job._id}`)}>View Job</button>
              </div>
            </div>
          </div>
        )) : <h4>No jobs found!</h4>}
      </div>)}
    </div>
  )
};

export default AdvertisedJob;
