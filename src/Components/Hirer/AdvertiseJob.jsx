import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { createJob } from "../../store/jobs/actions/jobs.actions";
import Swal from 'sweetalert2'
import { SuccessAlert } from "../Common/SuccessAlert";

const AddJobSchema = Yup.object().shape({
	jobTitle: Yup.string().required("Job title is required"),
	emplyomentType: Yup.string().required("Employment type is required"),
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

const AdvertiseJob = () => {
	const navigate = useNavigate();
  const disatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const { isLoading, error, successMessage } = useSelector((state) => state.jobs);

	return (
		<div className="container">
			<Formik
				initialValues={{
					jobTitle: "",
					emplyomentType: "",
					location: "",
          startDate: "",
          endDate: "",
					description: "",
          pay: ""
				}}
				validationSchema={AddJobSchema}
				onSubmit={(values) => {
          disatch(createJob({ values: {...values, hirerId: userId}, navigate}))
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
						<div className="text-style">
							<h2 className="heading-h2">Advertise a Job</h2>
						</div>
						{/* {error && <div className='error'>{error}</div>} */}
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
										name="emplyomentType"
										value="fixed-contract"
										style={{ marginRight: "8px" }}
									/>
									Fixed Contract
								</div>
								<div>
									<Field
										type="radio"
										name="emplyomentType"
										value="permanent"
										style={{ marginRight: "8px" }}
									/>
									Permanent
								</div>

								{errors.emplyomentType && touched.emplyomentType ? (
									<small className="text-danger">{errors.emplyomentType}</small>
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
                  onChange={(date, dateString) => {
                    handleChange(dateString);
                    setFieldTouched("startDate", true);
                    setFieldValue("startDate", new Date(dateString));
                  }}
                  needConfirm
                />
                {errors.startDate && touched.startDate ? (
                  <small className="text-danger">{errors.startDate}</small>
                ) : null}
              </div>

              {values.emplyomentType !== "permanent" && <div className="col-md-6">
                <label className="form-label mt-3">End Date</label>
                <DatePicker
                  className="form-control"
                  onChange={(date, dateString) => {
                    handleChange(dateString);
                    setFieldTouched("endDate", true);
                    setFieldValue("endDate", new Date(dateString));
                  }}
                  needConfirm
                />
                {errors.endDate && touched.endDate ? (
                  <small className="text-danger">{errors.endDate}</small>
                ) : null}
              </div>}

              <div className="col-md-12">
                <label className="form-label mt-3">Salary</label>
                <Field name="pay" type="number" className="form-control" />
                {errors.pay && touched.pay ? (
                  <small pay="text-danger">{errors.pay}</small>
                ) : null}
              </div>

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

            <div className="mb-40" />

            {error ? (
              <ErrorAlert>{error}</ErrorAlert>
            ) : null}

            {successMessage ?
              <SuccessAlert>{successMessage}</SuccessAlert> : null}

						<button className="btn btn-primary my-4" type="submit">
							{isLoading ? "Creating Job..." : "Submit"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AdvertiseJob;
