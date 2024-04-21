import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import ModalDialog from "./ModalDialog";
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneJob } from "../../store/jobs/actions/jobs.actions"

const Job = () => {

  const dispatch = useDispatch();
  const {
    jobTitle,
    jobHirer,
    description,
    startDate,
    endDate,
    pay 
  } = useSelector(state => state.jobs)

  const { jobId } = useParams();
  const [isFixedTerm, setIsFixedTerm] = useState(startDate && endDate ? true : false);
  const [isHirer, setIsHirer] = useState(window.location.pathname.includes("hirer") ? true : false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchOneJob({ jobId }))
  }, [jobId])

  const confirmDeleteJob = () => {

    return (
      <ModalDialog
        title="Are you sure you want to remove this job?"
        content={
          <div>
            <h1>Shiba rocks</h1>
          </div>
        }
        buttons={[
          {
            label: "Close",
            variant: "outlined",
            position: "right",
            handler: () => setModalOpen(false)
          },
          {
            label: "Delete Job",
            variant: "contained",
            position: "right",
            handler: () => console.log("I'm clicked")
          }
        ]}
        closeHandler={() => setModalOpen(false)}
      />
    )
  }

  return (
    <div>
      {modalOpen && confirmDeleteJob()}
      <h3>Job Information</h3>
      <div className="container">
        <div className="row">
          <strong>Job Name:</strong>
          <p>{jobTitle}</p>
          <div className="mt-40" />

          <strong>{isHirer ? "Driver" : "Hirer"}:</strong>
          <i>{jobHirer}</i>
          <div className="mt-60" />

          <div className="mt-40" />
          <strong>Pay:</strong>
          <p>{isFixedTerm ? `${pay} per month` : `${pay} per annum`}</p>
          <div className="mt-40" />

          <strong>Start Date:</strong>
          <p>{moment(startDate).format("YYYY-MMM-DD")}</p>
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
            <div className="col-md-6" />
            <div className="col-md-6 d-flex justify-content-end">
              <div className="col-md-4">
                <button className="btn btn-danger">Decline</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-secondary">Request further info</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-success">Accept</button>
              </div>
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
  )
}

export default Job;
