import { Dispatch } from "redux";
import {
  setUserId,
  setFirstName,
  setLastName,
  setEmail,
  setCellNumber,
  setIsLoading,
  setError,
  setToken,
  setRole
} from "../reducer/user.reducer"
import { signup, signin } from "../../../api/fetch";


export const signUp = (payload: any) => async (dispatch: Dispatch) => {

  dispatch(setIsLoading(true));

  signup(payload.payload).then((response) => {
    const { _id, profile, token } = response.data;
    dispatch(setUserId(_id))
    dispatch(setFirstName(profile.firstName))
    dispatch(setLastName(profile.lastName))
    dispatch(setEmail(profile.email))
    dispatch(setCellNumber(profile.cellNumber))
    dispatch(setToken(token))
    dispatch(setRole(profile.role))
    dispatch(setIsLoading(false));
    payload.navigate(`/${profile.role}`)
  }).catch((err) => {
    dispatch(setIsLoading(false));
    dispatch(setError(err.message));
  })
}

export const signIn = (payload: any) => async (dispatch: Dispatch) => {

  dispatch(setIsLoading(true));

  signin(payload.payload).then((response) => {
    const { _id, profile, token } = response.data;
    dispatch(setUserId(_id))
    dispatch(setFirstName(profile.firstName))
    dispatch(setLastName(profile.lastName))
    dispatch(setEmail(profile.email))
    dispatch(setCellNumber(profile.cellNumber))
    dispatch(setToken(token))
    dispatch(setRole(profile.role))
    dispatch(setIsLoading(false));
    payload.navigate(`/${profile.role}`)
  }).catch((err) => {
    dispatch(setIsLoading(false));
    dispatch(setError(err.message));
    console.log(err);
  })
}
