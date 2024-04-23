import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { fetchOneInvite, decideOnJob } from "../../store/invites/actions/invites.actions";
import {SuccessAlert} from "./SuccessAlert";

const jobTypes = {
  "fixed-contract": "Fixed Contract",
  permanent: "Permanent"
}

const ViewInvite = (props) => {

  const { inviteId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAccepting, setIsAccepting] = useState(false)
  const [isDeclining, setIsDecling] = useState(false)
  const { invite, isLoading, successMessage } = useSelector(state => state.invites);

  useEffect(() => {
    dispatch(fetchOneInvite({ inviteId }))
  }, [])

  const jobDecision = (decision) => {
    if (decision) {
      setIsAccepting(true)
    } else {
      setIsDecling(true)
    }
    dispatch(decideOnJob({ navigate, body: { inviteId, decision } })) 
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {isLoading ? <h4>Fetching invite...</h4> : invite.hasOwnProperty("_id") ? (
          <div>
            <div className="row">
              <strong>Hirer Name:</strong>
              <p>{`${invite.hirer.profile.firstName} ${invite.hirer.profile.lastName}`}</p>
              <div className="mt-40" />

              <strong>contact Address:</strong>
              <p>{invite.hirer.profile.email}</p>
              <div className="mt-40" />

              <strong>Cell Number:</strong>
              <p>{invite.hirer.profile.cellNumber}</p>
              <div className="mt-40" />

              <strong>Job Title:</strong>
              <p>{invite.jobTitle}</p>
              <div className="mt-40" />

              <strong>Job Type:</strong>
              <p>{jobTypes[invite.employmentType]}</p>
              <div className="mt-40" />

              <strong>Job Location:</strong>
              <p>{jobTypes[invite.location]}</p>
              <div className="mt-40" />

              <strong>Salary:</strong>
              <p>R{invite.pay}</p>
              <div className="mt-40" />

              <strong>Start Date:</strong>
              <p>{moment(invite.startDate).format("YYYY MMM DD")}</p>
              <div className="mt-40" />

              {invite.endDate && (
                <div>
                  <strong>End Date:</strong>
                  <p>{moment(invite.endDate).format("YYYY MMM DD")}</p>
                  <div className="mt-40" />
                </div>
              )}

              <strong>Description:</strong>
              <p>{invite.description}</p>
              <div className="mt-40" />

              <SuccessAlert>{successMessage}</SuccessAlert>


              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={() => jobDecision(false)} className="btn btn-danger">{isDeclining ? "Declining..." : "Decline"}</button>
                <button onClick={() => jobDecision(true)} className="btn btn-success">{isAccepting ? "Accepting..." : "Accept"}</button>
              </div>
            </div>
          </div>
        ) : <h4>Invalied invite ID</h4>}
      </div>
    </div >
  );
}

export default ViewInvite;
