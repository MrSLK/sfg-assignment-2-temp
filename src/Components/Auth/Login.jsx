import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Field required'),
  password: Yup.string()
    .min(8, 'Password too short! minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.')
    .max(14, 'Password too long! minimum 14 characters password contains a combination of uppercase and lowercase')
    .required('Field required')
});

const Login = (props) => {

  const navigate = useNavigate();
  
  return (
    <div className="grid-cols">
      <div className="bg-base-300">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log("props ->", props)
            const username = values.email
            const password = values.password
            console.log("values", { username, password })
            localStorage.setItem("user", JSON.stringify({ username, password }))
            navigate("/driver");
          }}
        >
          {({ errors, touched }) => (

            <Form style={{ display: "grid", maxWidth: "500px", margin: "auto" }}>
              <div className="text-styl">
                <h2 className="heading-h2">Login to your account</h2>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label mt-3">Email</label>
                <Field name="email" type="email" className="form-control" />
              </div>
              {errors.email && touched.email ? (<small className="text-danger">{errors.email}</small>) : null}

              <div class="col-12">
                <label for="inputAddress" class="form-label mt-3">Password</label>
                <Field name="password" type="password" className="form-control" />
              </div>
              {errors.password && touched.password ? (<small className="text-danger">{errors.password}</small>) : null}


              <button className="btn btn-primary my-4" type="submit">
                Submit
              </button>
              <span className="span-text">Don't have an account? <Link className="link link-primary" to='/signup'>Sign up</Link></span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login;
