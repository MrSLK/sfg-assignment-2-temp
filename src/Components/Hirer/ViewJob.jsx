import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DatePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneJob } from "../../store/jobs/actions/jobs.actions";
import { SuccessAlert } from "../Common/SuccessAlert";
import { ErrorAlert } from "../Common/ErrorAlert";
import ModalDialog from "../Common/ModalDialog";

const jobStatusArray = [
  { key: "active", value: "Active" },
  { key: "ended", value: "Cancelled" },
  { key: "yet-to-be-active", value: "Yet To Be Active" },
]

const AddJobSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job title is required"),
  employmentType: Yup.string().required("Employment type is required"),
  location: Yup.string().required("Location is required"),
  startDate: Yup.date().required("Start date is required").min(new Date(moment().endOf()), "Start date must be a future date"),
  endDate: Yup.date()
    .when("employmentType", {
      is: "fixed-contract",
      then: Yup.date().required("End date is required").min(Yup.ref("startDate"), "End Date must be greater than the start date"),
    }),
  description: Yup.string().required("Job Description is required"),
  pay: Yup.number().required("Job salary is required"),
});

const ViewJob = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { userId } = useSelector((state) => state.user);
  const {
    isLoading,
    error,
    jobTitle,
    employmentType,
    location,
    startDate,
    endDate,
    description,
    hirerId,
    jobStatus,
    successMessage,
    hirer,
    pay,
    isDeleting
  } = useSelector(state => state.jobs);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchOneJob({ jobId }))
  }, [])

  const confirmDeleteJob = () => {

    return (
      <ModalDialog
        title="Remove Job"
        content={
          <div>
            <p>Are you sure you want to remove this job?</p>
            {successMessage ? <div className="mt-3"><SuccessAlert>{successMessage}</SuccessAlert> </div> : null}
            {error ? <div className="mt-3"><ErrorAlert>{error}</ErrorAlert> </div> : null}
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
            label: isDeleting ? "Deleting job..." : "Delete Job",
            variant: "contained",
            position: "right",
            handler: () => dispatch(deleteJob({ jobId, userId, navigate }))
          }
        ]}
        closeHandler={() => setModalOpen(false)}
      />
    )
  }

  return (
    <div className="container">
      <Formik
        initialValues={{
          jobTitle,
          employmentType,
          location,
          startDate,
          endDate,
          description,
          jobStatus,
          successMessage,
          pay
        }}
        validationSchema={AddJobSchema}
        onSubmit={(values) => {
          values = {
            ...values,
            employmentType,
            location,
            startDate,
            endDate,
            description,
            hirerId,
            pay
          }
          console.log("update job values =>", values)
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          setFieldTouched,
          setFieldValue,
          values,
        }) => (
          <Form style={{ display: "grid", maxWidth: "500px" }}>
            {modalOpen && confirmDeleteJob()}
            <div className="text-style">
              <h2 className="heading-h2">Advertise a Job</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="form-label mt-3">Job Title</label>
                <Field name="jobTitle" type="text" className="form-control" />
                {errors.jobTitle && touched.jobTitle ? (
                  <small className="text-danger">{errors.jobTitle}</small>
                ) : null}
              </div>
            </div>
            <div className="mb-40" />
            <div className="row" style={{ marginTop: "20px" }}>
              <div role="group" aria-labelledby="my-radio-group">
                <label>Employment Type</label>
                <div>
                  <Field
                    type="radio"
                    name="employmentType"
                    value="fixed-contract"
                    style={{ marginRight: "8px" }}
                  />
                  Fixed Contract
                </div>
                <div>
                  <Field
                    type="radio"
                    name="employmentType"
                    value="permanent"
                    style={{ marginRight: "8px" }}
                  />
                  Permanent
                </div>

                {errors.employmentType && touched.employmentType ? (
                  <small className="text-danger">{errors.employmentType}</small>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label className="form-label mt-3">Location</label>
                <Field name="location" type="text" className="form-control" />
                {errors.location && touched.location ? (
                  <small className="text-danger">{errors.location}</small>
                ) : null}
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Start Date</label>
                <DatePicker
                  className="form-control"
                  // defaultPickerValue={moment(values.startDate).format('YYYY-MM-DD')}
                  onChange={(date, dateString) => {
                    handleChange(dateString);
                    setFieldTouched("startDate", true);
                    setFieldValue("startDate", new Date(dateString));
                  }}

                />
                {errors.startDate && touched.startDate ? (
                  <small className="text-danger">{errors.startDate}</small>
                ) : null}
              </div>

              {values.employmentType !== "permanent" && <div className="col-md-6">
                <label className="form-label mt-3">End Date</label>
                <DatePicker
                  className="form-control"
                  onChange={(date, dateString) => {
                    handleChange(dateString);
                    setFieldTouched("endDate", true);
                    setFieldValue("endDate", new Date(dateString));
                  }}

                />
                {errors.endDate && touched.endDate ? (
                  <small className="text-danger">{errors.endDate}</small>
                ) : null}
              </div>}

              <div className="col-md-12">
                <label className="form-label mt-3">Salary</label>
                <Field name="pay" type="number" className="form-control" />
                {errors.pay && touched.pay ? (
                  <small className="text-danger">{errors.pay}</small>
                ) : null}
              </div>

              {/* {jobStatusArray ? <div className="col-md-12">
                <label className="form-label mt-3">Job Status</label>
                <Field name="jobsStatus" type="select" className="form-control">
                  {jobStatusArray.map((status, index) => {
                     <option value={status.key}>{status.value}</option>
                  })}
                </Field>
                {errors.jobsStatus && touched.jobsStatus ? (
                  <small className="text-danger">{errors.jobsStatus}</small>
                ) : null}
              </div> : null} */}

              <div className="col-md-12">
                <label className="form-label mt-3">Description</label>
                <Field
                  name="description"
                  className="form-control"
                  component="textarea"
                  rows="2"
                />

                {errors.description && touched.description ? (
                  <small className="text-danger">{errors.description}</small>
                ) : null}
              </div>
            </div>

            <div className="mt-3">
              {error ? (<ErrorAlert>{error}</ErrorAlert>) : null}
            </div>

            {successMessage ?
              <SuccessAlert>{successMessage}</SuccessAlert> : null}

            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6 d-flex justify-content-end">
                <div className="col-md-6">
                  <button className="btn btn-primary" type="submit">Update Job</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-danger" onClick={() => setModalOpen(true)}>Terminate Job</button>
                </div>

              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ViewJob;
