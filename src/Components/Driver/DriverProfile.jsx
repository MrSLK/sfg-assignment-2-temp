import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from 'antd';
import { useNavigate } from "react-router-dom";
import { validateIDNumber } from '../../Helpers';

const DriverProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Field required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Field required'),
  email: Yup.string().email('Invalid email').required('Field required'),
  cellNumber: Yup.number().required('Field required').positive().integer(),
  licenseType: Yup.string().required('License type is required'),
  licenseCode: Yup.string().required('License code is required'),
  firstIssued: Yup.date().required("Field required"),
  expiryDate: Yup.date().required("Field required"),
  countryIssued: Yup.string().required('Country issued is required'),
  description: Yup.string().required('Description is required'),
  idNumber: validateIDNumber()
});
const DriverProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="grid-cols">
      <div className="bg-base-300">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            cellNumber: "",
            licenseType: "",
            licenseCode: "",
            firstIssued: "",
            expiryDate: "",
            idNumber: "",
            countryIssued: "",
            description: ""
          }}
          validationSchema={DriverProfileSchema}
          onSubmit={values => {
            console.log("I'm clicked")
            console.log("values ->", values)
          }}
        >
          {({ errors, touched, handleChange, setFieldTouched, setFieldValue }) => (
            <Form style={{ display: "grid", maxWidth: "500px", margin: "auto" }}>
              <div className="text-styl">
                <h2 className="heading-h2">Profile</h2>
              </div>
              {/* {error && <div className='error'>{error}</div>} */}
              <div className="row">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label mt-3">First Name</label>
                  <Field name="firstName" type="text" className="form-control" />
                  {errors.firstName && touched.firstName ? (<small className="text-danger">{errors.firstName}</small>) : null}
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label mt-3">Last Name</label>
                  <Field name="lastName" type="text" className="form-control" />
                  {errors.lastName && touched.lastName ? (<small className="text-danger">{errors.lastName}</small>) : null}
                </div>
              </div>


              <div className="col-12">
                <label for="inputAddress" className="form-label mt-3">Email</label>
                <Field name="email" type="email" className="form-control" />
              </div>
              {errors.email && touched.email ? (<small className="text-danger">{errors.email}</small>) : null}


              <div className="col-12">
                <label for="inputAddress2" className="form-label mt-3">Cell Number</label>
                <Field name="cellNumber" type="number" className="form-control" />
              </div>

              {errors.cellNumber && touched.cellNumber ? (<small className="text-danger">{errors.cellNumber}</small>) : null}


              <div className="col-12">
                <label for="idNumber" className="form-label mt-3">ID Number</label>
                <Field name="idNumber" type="text" className="form-control" />
              </div>

              {errors.idNumber && touched.idNumber ? (<small className="text-danger">{errors.idNumber}</small>) : null}

              <div className="row">
                <div className="col-md-6">
                  <label for="licenseType" className="form-label mt-3">License Type</label>
                  <Field name="licenseType" type="text" className="form-control" />
                  {errors.licenseType && touched.licenseType ? (<small className="text-danger">{errors.licenseType}</small>) : null}
                </div>
                <div className="col-md-6">
                  <label for="licenseCode" className="form-label mt-3">License Code</label>
                  <Field name="licenseCode" type="text" className="form-control" />
                  {errors.licenseCode && touched.licenseCode ? (<small className="text-danger">{errors.licenseCode}</small>) : null}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label for="firstIssued" className="form-label mt-3">First Issue</label>
                  <DatePicker name='firstIssued' className='form-control' onChange={(date, dateString) => {
                    handleChange(dateString)
                    setFieldTouched('firstIssued', true)
                    setFieldValue('firstIssued', dateString)
                  }} needConfirm />
                  {errors.firstIssued && touched.firstIssued ? (<small className="text-danger">{errors.firstIssued}</small>) : null}
                </div>
                <div className="col-md-6">
                  <label for="expiryDate" className="form-label mt-3">Expiry Date</label>
                  <DatePicker className='form-control' onChange={(date, dateString) => {
                    handleChange(dateString)
                    setFieldTouched('expiryDate', true)
                    setFieldValue('expiryDate', dateString)
                  }} needConfirm />
                  {errors.expiryDate && touched.expiryDate ? (<small className="text-danger">{errors.expiryDate}</small>) : null}
                </div>
              </div>

              <div className="col-12">
                <label for="countryIssued" className="form-label mt-3">Country Issued</label>
                <Field name="countryIssued" type="text" className="form-control" />
              </div>

              {errors.countryIssued && touched.countryIssued ? (<small className="text-danger">{errors.countryIssued}</small>) : null}

              <div className="col-md-12">
                <label className="form-label mt-3">Description</label>
                <Field
                  name="description"
                  className="form-control"
                  component="textarea"
                  placeholder="Briefly describe yourself..."
                  rows="2"
                />

                {errors.description && touched.description ? (
                  <small className="text-danger">{errors.description}</small>
                ) : null}
              </div>

              <button className="btn btn-primary my-4" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default DriverProfile;
