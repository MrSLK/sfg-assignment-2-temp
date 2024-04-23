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
  setDriver,
  setJobStatus,
  setIsDeleting
} from "../reduders/invites.reducers"

import {
  invitedriver,
  updateinvite,
  fetchinvite,
  retratcinvite,
} from "../../../api/fetch";

export const inviteDriver = (payload: any) => async (dispatch: Dispatch) => {

  const { body, navitgate } = payload;
  dispatch(setIsLoading(true));
  invitedriver({ inviteId: payload.inviteId }).then(response => {
    dispatch(setIsLoading(false));
    dispatch(setSuccessMessage(response.data.message));
    
  }).then(err => {
    console.log("error", err);
    dispatch(setIsLoading(false));
    // dispatch(setError(err.));
  })
}

export const fetchInvite = (payload: any) => (dispatch: Dispatch) => {

  dispatch(setIsLoading(true));
  fetchinvite(payload).then(response => {
    dispatch(setIsLoading(false));
    dispatch(setSuccessMessage(response.data.message));

  }).then(err => {
    console.log("error", err);
    dispatch(setIsLoading(false));
    // dispatch(setError(err.));
  })
}
