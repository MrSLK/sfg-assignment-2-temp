import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const DriverJob = () => {

  const { jobId } = useParams();
  const [jobName, setJobName] = useState("");
  const [jobHirer, setJobHirer] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setEndDate] = useState("");
  const [isFixedTerm, setIsFixedTerm] = useState(null);
  const [pay, setPay] = useState(0);

  useEffect(() => {
    const job = {
      isFixedTerm: true,
      jobName: "Bus Driver",
      jobHirer: "TUT",
      jobDescription: "TUT Inc is looking for a driver for the next 6 months to drive students from the Arcadia campus to the Soshanguve South & North campuses, between 6:30am and 7pm",
      jobStartDate: new Date(),
      jobEndDate: new Date("2025-07-13"),
      pay: 14500
    }

    setIsFixedTerm(job.isFixedTerm);
    setJobName(job.jobName);
    setJobHirer(job.jobHirer);
    setJobDescription(job.jobDescription);
    setJobStartDate(job.jobStartDate);
    setEndDate(job.jobEndDate);
    setPay(job.pay);

  }, [])

  return (
    <div>
      <h3>Job Information</h3>
      <div className="container">
        <div className="row">
          <strong>Job Name:</strong>
          <p>{jobName}</p>
          <div className="mt-40" />

          <strong>Job Hirer:</strong>
          <i>{jobHirer}</i>
          <div className="mt-60" />

          <div className="mt-40" />
          <strong>Pay:</strong>
          <p>{isFixedTerm ? `${pay} per month` : `${pay} per annum`}</p>
          <div className="mt-40" />

          <strong>Job Start Date:</strong>
          <p>{moment(jobStartDate).format("YYYY-MMM-DD")}</p>
          <div className="mt-40" />

          <strong>Job End Date:</strong>
          <p>{moment(jobEndDate).format("YYYY-MMM-DD")}</p>
          <div className="mt-40" />

          <strong>Job Description:</strong>
          <p>{jobDescription}</p>
          <div className="mt-40" />
        </div>
      </div>
    </div>
  )
}

export default DriverJob;
