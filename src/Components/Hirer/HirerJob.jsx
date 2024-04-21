import { useState, useEffect } from "react";

const HirerJob = () => {

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
      <h3>Job Information</h3>
      <div className="container">
        <div className="row">
          <strong>Job Name:</strong>
          <p>{jobTitle}</p>
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
        </div>
      </div>
    </div>
  )
}


export default HirerJob;
