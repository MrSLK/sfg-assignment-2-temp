import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup';

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
  cellNumber: Yup.number().required('Field required').positive().integer(),
  password: Yup.string()
    .min(8, 'Password too short! minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.')
    .max(14, 'Password too long! minimum 14 characters password contains a combination of uppercase and lowercase')
    .required('Field required')
});

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="grid-cols">
        <div className="bg-base-300">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              cellNumber: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              const vals = {
                cellNumber: '0' + values.cellNumber,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                firstName: values.firstName,
              }
              console.log("values ->", { vals })
              localStorage.setItem("user", JSON.stringify(vals))
              navigate("/driver");
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
                  <label for="inputAddress2" className="form-label mt-3">Password</label>
                  <Field name="password" type="password" className="form-control" />
                </div>

                {errors.password && touched.password ? (<small className="text-danger">{errors.password}</small>) : null}
                <button className="btn btn-primary my-4" type="submit">
                  Create Account
                </button>
                <span className="span-text">Already have an account? <Link className="link link-primary" to='/login'>Sign in</Link></span>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default SignUp
