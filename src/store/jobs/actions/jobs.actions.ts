import { Dispatch } from "redux";
import {
  setIsLoading,
  setJobId,
  setJobTitle,
  setEmplyomentType,
  setLocation,
  setStartDate,
  setEndDate,
  setDescription,
  setHirerId,
  setAllJobs,
  setError,
  setSuccessMessage,
  setPay
} from "../reducer/jobs.reducer"
import {
  addjob,
  editjob,
  deletejob,
  fetchonejob,
  fetchalljob
} from "../../../api/fetch";


export const createJob = (payload: any) => async (dispatch: Dispatch) => {
  const { values, navigate } = payload;
  dispatch(setIsLoading(true));
  addjob(values).then(response => {
    dispatch(setIsLoading(false));
    dispatch(setSuccessMessage("Successfully listed a job"));
    setTimeout(() => {
      dispatch(setSuccessMessage(""));
      dispatch(setError(""));
      navigate("/hirer/advertised-jobs")
    }, 3000)
  }).catch(err => {

    dispatch(setIsLoading(false));
    dispatch(setError(err.message));

    setTimeout(() => {
      dispatch(setSuccessMessage(""));
      dispatch(setError(""));
    }, 3000)
  })
}
export const editJob = (payload: any) => async (dispatch: Dispatch) => { }
export const deleteJob = (payload: any) => async (dispatch: Dispatch) => { }
export const fetchOneJob = (payload: any) => async (dispatch: Dispatch) => { 
  fetchonejob({jobId: payload.jobId}).then(response => {
    console.log("response ->", response);

    const {} = response.data;
  }).catch(error => {
    dispatch(setError(error.message));
  });
}
export const fetchAllJob = (payload: any) => async (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  fetchalljob().then(response => {
    console.log("response ->", response); 
    const { jobs } = response.data;
    dispatch(setAllJobs(jobs))
    dispatch(setIsLoading(false));
  }).catch(err => {
    dispatch(setError(err.message));
    dispatch(setIsLoading(false));
    
  })
}
