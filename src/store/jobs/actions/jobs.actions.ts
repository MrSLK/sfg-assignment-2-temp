import { Dispatch } from "redux";
import {
  setIsLoading,
  setJobId,
  setJobTitle,
  setEmploymentType,
  setLocation,
  setStartDate,
  setEndDate,
  setDescription,
  setHirerId,
  setAllJobs,
  setError,
  setSuccessMessage,
  setPay,
  setHirer,
  setJobStatus,
  setIsDeleting,
  setActiveJobs
} from "../reducer/jobs.reducer"
import {
  addjob,
  editjob,
  deletejob,
  fetchonejob,
  fetchalljob,
  fetchactivehirerjobs
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
    dispatch(setError(err.response.data.message));

    setTimeout(() => {
      dispatch(setSuccessMessage(""));
      dispatch(setError(""));
    }, 3000)
  })
}
export const editJob = (payload: any) => async (dispatch: Dispatch) => { }
export const deleteJob = (payload: any) => async (dispatch: Dispatch) => {
  const {jobId, userId, navigate} = payload;

  dispatch(setIsDeleting(true));
  
  deletejob({ jobId, userId}).then(response => {
    dispatch(setSuccessMessage(response.data.message));
    setTimeout(() => {
      dispatch(setSuccessMessage(""));
      dispatch(setIsDeleting(false));
      navigate("/hirer/advertised-jobs");
    }, 3000)
  }).catch(err => {
    dispatch(setError(err.response.data.message));
    dispatch(setIsDeleting(false));
  })

  setTimeout(() => dispatch(setError("")), 3000);
}
export const fetchOneJob = (payload: any) => async (dispatch: Dispatch) => { 
  const { jobId } = payload;
  dispatch(setIsLoading(true));
  fetchonejob({ jobId }).then(response => {
    const { job } = response.data;
    

    dispatch(setJobTitle(job.jobTitle));
    dispatch(setEmploymentType(job.employmentType));
    dispatch(setLocation(job.location));
    dispatch(setStartDate(job.startDate));
    dispatch(setEndDate(job.endDate));
    dispatch(setDescription(job.description));
    dispatch(setHirerId(job.hirerId));
    dispatch(setPay(job.pay));
    dispatch(setHirer(`${job.hirer.profile.firstName} ${job.hirer.profile.lastName}`))
    dispatch(setJobId(job._id));
    dispatch(setJobStatus(job.jobStatus))
    dispatch(setIsLoading(false));
  }).catch(err => {
    dispatch(setError(err.response.data.message));
    dispatch(setIsLoading(false));
  });
}
export const fetchAllJob = (payload: any) => async (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  fetchalljob().then(response => {
    const { jobs } = response.data;
    dispatch(setAllJobs(jobs))
    dispatch(setIsLoading(false));
  }).catch(err => {
    dispatch(setError(err.response.data.message));
    dispatch(setIsLoading(false));
    
  })
}

export const fetchActiveJobs = (payload: any) => async (dispatch: Dispatch) => { 
  
  ("payload ->", payload)
  fetchactivehirerjobs(payload).then(res => {
    const { hiredJobs } = res.data;
    dispatch(setActiveJobs(hiredJobs))
  }).catch(err => {
    console.log(err)
  })
}
