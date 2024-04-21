import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import ModalDialog from "./ModalDialog";

const Job = () => {

  const { jobId } = useParams();
  const [jobTitle, setJobName] = useState("");
  const [jobHirer, setJobHirer] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setEndDate] = useState("");
  const [isFixedTerm, setIsFixedTerm] = useState(null);
  const [pay, setPay] = useState(0);
  const [isHirer, setIsHirer] = useState(window.location.pathname.includes("hirer") ? true : false);
  const [modalOpen, setModalOpen] = useState(false);

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

  useEffect(() => {
    const job = {
      isFixedTerm: true,
      jobTitle: "Bus Driver",
      jobHirer: "TUT",
      jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
      jobStartDate: new Date(),
      jobEndDate: new Date("2025-07-13"),
      pay: 14500
    }

    setIsFixedTerm(job.isFixedTerm);
    setJobName(job.jobTitle);
    setJobHirer(job.jobHirer);
    setJobDescription(job.jobDescription);
    setJobStartDate(job.jobStartDate);
    setEndDate(job.jobEndDate);
    setPay(job.pay);

  }, [])

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
          <p>{moment(jobStartDate).format("YYYY-MMM-DD")}</p>
          <div className="mt-40" />

          <strong>End Date:</strong>
          <p>{moment(jobEndDate).format("YYYY-MMM-DD")}</p>
          <div className="mt-40" />

          <strong>Description:</strong>
          <p>{jobDescription}</p>
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
