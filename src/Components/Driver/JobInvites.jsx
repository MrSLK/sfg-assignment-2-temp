import react, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { fetchInvite } from "../../store/invites/actions/invites.actions"
import { trimText } from "../../Helpers"

const JobInvites = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allJobs, isLoading } = useSelector(state => state.invites)
  const { userId } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchInvite({ userId }));
  }, [])


  return (
    <div className="container-fluid">
      <h2>Job Invites</h2>
      {isLoading ? <div>Fetching invites...</div> : (<div className="row">
        {allJobs.length > 0 ? allJobs.map((job, index) => (

          <div className="card" key={index} style={{ width: "18rem", margin: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">{job.jobTitle}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><i>{`${job.hirer.profile.firstName} ${job.hirer.profile.lastName}`}</i></h6>
              <p className="card-text">{trimText(job.description)}</p>

              <div>
                <button className="btn btn-primary" onClick={() => navigate(`/driver/view-invite/${job._id}`)}>View Invite</button>
              </div>
            </div>
          </div>
        )) : <h4>No jobs found!</h4>}
      </div>)}
    </div>
  )
}

export default JobInvites;
