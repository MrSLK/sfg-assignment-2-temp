import { Dispatch } from "redux";
import {
  setJobId,
  setJobTitle,
  setEmploymentType,
  setLocation,
  setStartDate,
  setEndDate,
  setDescription,
  setHirerId,
  setAllJobs,
  setPay,
  setHirer,
  setDriver,
  setJobStatus,
  setIsDeleting,
  setInvite,
  setIsLoadingInvite,
  setInviteError,
  setInviteSuccessMessage,
} from "../reduders/invites.reducers"

import {
  setIsLoading,
  setError,
  setSuccessMessage
} from "../../jobs/reducer/jobs.reducer"

import {
  invitedriver,
  updateinvite,
  fetchinvite,
  retratcinvite,
  fetchoneinvite,
  decideonjob
} from "../../../api/fetch";

export const inviteDriver = (payload: any) => async (dispatch: Dispatch) => {

  const { values, navigate } = payload;
  dispatch(setIsLoading(true));
  invitedriver(values).then(response => {
    dispatch(setIsLoading(false));
    dispatch(setSuccessMessage("Successfully invited driver!"));


    setTimeout(() => {
      dispatch(setError(""));
      navigate("/hirer/drivers-for-hire")
    }, 3000);

  }).catch(err => {
    console.log("error", err);
    dispatch(setIsLoading(false));
    // dispatch(setError(err.));
  })
}

export const fetchInvite = (payload: any) => async (dispatch: Dispatch) => {

  dispatch(setIsLoading(true));
  fetchinvite(payload).then(response => {
    const { invites } = response.data;
    dispatch(setIsLoading(false));
    dispatch(setAllJobs(invites));

  }).catch(err => {
    console.log("error", err);
    dispatch(setIsLoading(false));
    // dispatch(setError(err.));
  })
}

export const fetchOneInvite = (payload: any) => async (dispatch: Dispatch) => {
  
  dispatch(setIsLoadingInvite(true));
  fetchoneinvite(payload).then(response => {
    const { invites } = response.data;
    dispatch(setInvite(invites[0]));
    dispatch(setIsLoadingInvite(false));

  }).catch(err => {
    console.log("error", err);
    dispatch(setIsLoadingInvite(false));
    // dispatch(setInviteError(err.));
  })
}

export const decideOnJob = (payload: any) => async (dispatch: Dispatch) => {

  const { body, navigate } = payload;
  decideonjob(body).then((response) => {
    dispatch(setInviteSuccessMessage(response.data.message));

    setTimeout(() => {
      dispatch(setInviteSuccessMessage(""))
      navigate("/driver")
    }, 3000);
  }).catch(err => {})
}
