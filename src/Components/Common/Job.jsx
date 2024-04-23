import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneJob, deleteJob } from "../../store/jobs/actions/jobs.actions";
import { ErrorAlert } from "./ErrorAlert";
import { SuccessAlert } from "./SuccessAlert";

const jobType = {
  "fixed-contract": "Fixed Contract",
  "permanent": "Permanent"
}

const Job = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading,
    error,
    jobTitle,
    employmentType,
    location,
    startDate,
    endDate,
    description,
    hirerId,
    jobsStatus,
    successMessage,
    hirer,
    pay,
    isDeleting
  } = useSelector(state => state.jobs);
  const { userId } = useSelector(state => state.user);

  const { jobId } = useParams();
  const [isFixedTerm, setIsFixedTerm] = useState(startDate && endDate ? true : false);
  const [isHirer, setIsHirer] = useState(window.location.pathname.includes("hirer") ? true : false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchOneJob({ jobId }))
  }, [])

  return (
    <div>
      {isLoading ? <h3>Fetching Job Details...</h3> : (
        <div>
          <div>
            {modalOpen && confirmDeleteJob()}
            <h3>Job Information</h3>
            <div className="container">
              <div className="row">
                <strong>Job Name:</strong>
                <p>{jobTitle}</p>
                <div className="mt-40" />

                <strong>{isHirer ? "Driver" : "Hirer"}:</strong>
                <i>{hirer}</i>
                <div className="mt-60" />

                <div className="mt-40" />
                <strong>Pay:</strong>
                <p>{isFixedTerm ? `${pay} per month` : `${pay} per annum`}</p>
                <div className="mt-40" />

                <strong>Job Type:</strong>
                <p>{jobType[`${employmentType}`]}</p>
                <div className="mt-40" />

                <strong>Location:</strong>
                <p>{location}</p>
                <div className="mt-40" />

                <strong>Start Date:</strong>
                <p>{moment(startDate).format("YYYY-MMM-DD")}</p>
                <div className="mt-40" />

                <strong>Job Status:</strong>
                <p>{jobsStatus}</p>
                <div className="mt-40" />

                <strong>End Date:</strong>
                <p>{moment(endDate).format("YYYY-MMM-DD")}</p>
                <div className="mt-40" />

                <strong>Description:</strong>
                <p>{description}</p>
                <div className="mt-40" />
              </div>
              {!isHirer ? (
                <div className="row">
                  
                  <div className="col-12 d-flex justify-content-end gap-2">
                      <button className="btn btn-danger">Decline</button>
                      <button className="btn btn-secondary">Request further info</button>
                      <button className="btn btn-success">Accept</button>
                  </div>
                </div>) : (
                <div className="row">
                  <div className="col-md-6" />
                  <div className="col-md-6 d-flex justify-content-end">
                    <div className="col-md-4">
                      <button onClick={() => setModalOpen(true)} className="btn btn-danger">Terminate Job</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Job;
