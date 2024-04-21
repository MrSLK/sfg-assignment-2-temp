import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { signUp } from "../../store/users/actions/user.actions"

const phoneRegex = /^((\+)?[1-9]{1,3})?([0-9]{10,12})$/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Field required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Field required'),
  email: Yup.string().email('Invalid email').required('Field required'),
  cellNumber: Yup.string().max(12, "Too long").matches(phoneRegex, "Phone number is not valid").required("Phone number is required."),
  password: Yup.string()
    .min(8, 'Password too short! minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.')
    .max(14, 'Password too long! minimum 14 characters password contains a combination of uppercase and lowercase')
    .required('Field required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Please confirm your password"),
  role: Yup.string().required("Field required")
});

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector((state) => state.user)

  return (
    <>
      <div className="grid-cols">
        <div className="bg-base-300">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              cellNumber: "+27",
              confirmPassword: "",
              role: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              const vals = {
                cellNumber: values.cellNumber.startsWith("0") ? "+27" + values.cellNumber.substring(1) : values.cellNumber,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                role: values.role,
              }
              dispatch(signUp({ payload: vals, navigate }))
            }}
          >
            {({ errors, touched }) => (
              <Form style={{ display: "grid", maxWidth: "500px", margin: "auto" }}>
                <div className="text-styl">
                  <h2 className="heading-h2">Sign Up</h2>
                  <p className="text-sm">
                    Let's get you all set up so you can verify your
                    account and begin setting up your profile
                  </p>
                </div>
                {/* {error && <div className='error'>{error}</div>} */}
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label mt-3">First Name</label>
                    <Field name="firstName" type="text" className="form-control" />
                    {errors.firstName && touched.firstName ? (<small className="text-danger">{errors.firstName}</small>) : null}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label mt-3">Last Name</label>
                    <Field name="lastName" type="text" className="form-control" />
                    {errors.lastName && touched.lastName ? (<small className="text-danger">{errors.lastName}</small>) : null}
                  </div>
                </div>


                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label mt-3">Email</label>
                  <Field name="email" type="email" className="form-control" />
                </div>
                {errors.email && touched.email ? (<small className="text-danger">{errors.email}</small>) : null}


                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label mt-3">Cell Number</label>
                  <Field name="cellNumber" type="string" className="form-control" />
                </div >
                {errors.cellNumber && touched.cellNumber ? (<small className="text-danger">{errors.cellNumber}</small>) : null}

                < div className="form-group" >
                  <label htmlFor="inputAddress" className="form-label mt-3">Role</label>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-check">
                        <Field
                          type="radio"
                          className="form-check-input"
                          name="role"
                          id="driver"
                          value="driver"
                        />
                        <label className="form-check-label" htmlFor="driver">Driver</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check">
                        <Field
                          type="radio"
                          className="form-check-input"
                          name="role"
                          id="hirer"
                          value="hirer"
                        />
                        <label className="form-check-label" htmlFor="hirer">Hirer</label>
                      </div>
                    </div>
                  </div>

                  {
                    errors.role && touched.role ? (
                      <small className="text-danger">{errors.role}</small>
                    ) : null
                  }
                </div >



                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label mt-3">Password</label>
                    <Field name="password" type="password" className="form-control" />
                    {errors.password && touched.password ? (<small className="text-danger">{errors.password}</small>) : null}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label mt-3">Confirm Password</label>
                    <Field name="confirmPassword" type="password" className="form-control" />
                    {errors.confirmPassword && touched.confirmPassword ? (<small className="text-danger">{errors.confirmPassword}</small>) : null}
                  </div >
                </div >

                {error ? (<small className="text-danger" > {error}</small>) : null}
                <button className="btn btn-primary my-4" type="submit">
                  {isLoading ? "Submitting...." : "Create Account"}
                </button>
                <span className="span-text">Already have an account? <Link className="link link-primary" to='/login'>Sign in</Link></span>
              </Form >
            )}
          </Formik >
        </div >
      </div >
    </>
  )
}

export default SignUp;
