import axios from "axios";
const BASE_URL = " http://localhost:4000/";

const signin = values => {
  return axios.post(`${BASE_URL}login`, values)
}

const signup = values => {
  return axios.post(`${BASE_URL}signup`, values)
}

const addjob = values => {
  return axios.post(`${BASE_URL}add-job`, values)
}

const editjob = values => {
  return axios.post(`${BASE_URL}edit-job`, values)
}

const deletejob = values => {
  return axios.post(`${BASE_URL}remove-job`, values)
}

const fetchonejob = values => {
  return axios.post(`${BASE_URL}fetch-one-job`, values)
}

const fetchalljob = values => {
  return axios.get(`${BASE_URL}fetch-all-jobs`, values)
}

const fetchalldrivers = values => {
  return axios.get(`${BASE_URL}fetch-all-drivers`, values);
}

const fetchallhirers = values => {
  return axios.get(`${BASE_URL}fetch-all-hirers`, values);
}

const driverprofile = values => {
  return axios.post(`${BASE_URL}create-driver-profile`, values)
}

const updateuserprofile = values => {
  return axios.post(`${BASE_URL}update-profile`, values)
}

const fetchdriverprofile = values => {
  return axios.post(`${BASE_URL}fetch-driver-profile`, values)
}

const invitedriver = values => {
  return axios.post(`${BASE_URL}invite-driver`, values)
}

const updateinvite = values => {
  return axios.post(`${BASE_URL}edit-invite`, values)
}

const fetchinvite = values => {
  return axios.post(`${BASE_URL}fetch-invite`, values)
}
const fetchoneinvite = values => {
  return axios.post(`${BASE_URL}fetch-one-invite`, values)
}

const retratcinvite = values => {
  return axios.post(`${BASE_URL}remove-invite`, values)
}

const decideonjob = values => {
  return axios.post(`${BASE_URL}decide-on-job`, values)
}

const fetchactivehirerjobs = values => {
  console
  return axios.post(`${BASE_URL}fetch-jobs-on-condition`, values)
}

export {
  signin,
  signup,
  addjob,
  editjob,
  deletejob,
  fetchonejob,
  fetchalljob,
  fetchalldrivers,
  fetchallhirers,
  driverprofile,
  updateuserprofile,
  fetchdriverprofile,
  invitedriver,
  updateinvite,
  fetchinvite,
  retratcinvite,
  fetchoneinvite,
  decideonjob,
  fetchactivehirerjobs,
}
