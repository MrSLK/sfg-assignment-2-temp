import axios from "axios";
const BASE_URL = " http://localhost:4000/";

const signin = values => {
  return axios.post(`${BASE_URL}login`, values)
}

const signup = values => {
  return axios.post(`${BASE_URL}signup`, values)
}

const addjob = values => {
  console.log("values ->", values)
  return axios.post(`${BASE_URL}add-job`, values)
}

const editjob = values => {
  return axios.post(`${BASE_URL}edit-job`, values)
}

const deletejob = values => {
  return axios.post(`${BASE_URL}remove-job`, values)
}

const fetchonejob = values => {
  return axios.get(`${BASE_URL}fetch-one-job`, values)
}

const fetchalljob = values => {
  return axios.get(`${BASE_URL}fetch-all-jobs`, values)
}

export {
  signin,
  signup,
  addjob, editjob,
  deletejob,
  fetchonejob,
  fetchalljob
}
