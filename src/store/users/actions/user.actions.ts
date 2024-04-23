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
  setRole,
  setAllHirers,
  setAllDrivers,
  setSuccessMessage,
  setLicenseType,
  setLicenseCode,
  setFirstIssued,
  setExpiryDate,
  setCountryIssued,
  setDescription,
  setIdNumber,
  setUpdateDriverProfileIsLoading,
  setDriverFirstName,
  setDriverLastName,
  setDriverEmail,
  setDriverCellNumber,
  setDriverIdNumber
} from "../reducer/user.reducer"
import {
  signin,
  signup,
  fetchalldrivers,
  fetchallhirers,
  driverprofile,
  updateuserprofile,
  fetchdriverprofile
} from "../../../api/fetch";


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
    if (profile.IdNumber) dispatch(setIdNumber(profile.idNumber));
    dispatch(setIsLoading(false));
    payload.navigate(`/${profile.role}`)
  }).catch((err) => {
    dispatch(setIsLoading(false));
    dispatch(setError(err.response.data.message));
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
    if (profile.IdNumber) dispatch(setIdNumber(profile.idNumber));
    dispatch(setToken(token))
    dispatch(setRole(profile.role))
    dispatch(setIsLoading(false));
    payload.navigate(`/${profile.role}`)
  }).catch((err) => {
    console.log(err);
    dispatch(setIsLoading(false));
    dispatch(setError(err.response.data.message || err.message));
    setTimeout(() => dispatch(setError("")), 3000);
  })
}

export const fetchAllDrivers = () => async (dispatch: Dispatch) => {

  dispatch(setIsLoading(true));
  fetchalldrivers().then(response => {
    const { drivers } = response.data;
    dispatch(setAllDrivers(drivers));
    dispatch(setIsLoading(false));
  }).catch(err => {
    console.log(err)
    const message = err.message;
    dispatch(setError(message));
    dispatch(setIsLoading(false));
  })

  setTimeout(() => {
    dispatch(setError(""));
  }, 3000)
}

export const fetchAllHirers = (payload: any) => async (dispatch: Dispatch) => {

  dispatch(setIsLoading(true));
  fetchallhirers().then(response => {
    const { hirers } = response.data;
    dispatch(setAllHirers(hirers));
    dispatch(setIsLoading(false));
  }).catch(err => {
    const message = err.response.data.message;
    console.log(err)
    dispatch(setError(message));
    dispatch(setIsLoading(false));
  })

  setTimeout(() => {
    dispatch(setError(""));
  }, 3000)
}

export const driverProfile = (payload: any) => async (dispatch: Dispatch) => {

  const {
    firstName,
    lastName,
    email,
    cellNumber,
    licenseType,
    licenseCode,
    firstIssued,
    expiryDate,
    countryIssued,
    description,
    idNumber,
    role,
    userId,
    navigate
  } = payload;

  const userProfile = {
    firstName,
    lastName,
    email,
    cellNumber,
    idNumber,
    userId,
    role,
  }

  const driverProfile = {
    licenseType,
    licenseCode,
    firstIssued,
    expiryDate,
    countryIssued,
    description,
    driverId: userId
  }

  dispatch(setUpdateDriverProfileIsLoading(true));
  updateuserprofile(userProfile).then(response => {
    const { profile, userId: _id } = response.data;
    dispatch(setUserId(_id))
    dispatch(setFirstName(profile.firstName))
    dispatch(setLastName(profile.lastName))
    dispatch(setEmail(profile.email))
    dispatch(setCellNumber(profile.cellNumber))
    dispatch(setRole(profile.role))
    driverprofile(driverProfile).then(res => {
      dispatch(setUpdateDriverProfileIsLoading(false));
      const { message } = res.data;
      if (message) {
        dispatch(setSuccessMessage(message));
      }
      setTimeout(() => {
        dispatch(setSuccessMessage(""));
        navigate("/driver")
      }, 3000)

    }).catch(err => {
      dispatch(setUpdateDriverProfileIsLoading(false));
      console.log(err);
      dispatch(setError(err.response.data.message));
    });
  }).catch(err => {
    console.log(err);
    dispatch(setUpdateDriverProfileIsLoading(false));
    dispatch(setError(err.response.data.message));
    setTimeout(() => dispatch(setError("")), 3000);
  });
}

export const fetchDriverProfile = (payload: any) => async (dispatch: Dispatch) => {


  dispatch(setUpdateDriverProfileIsLoading(false));
  dispatch(setIsLoading(true));
  fetchdriverprofile(payload).then(res => {
    const {
      countryIssued,
      description,
      driver,
      expiryDate,
      firstIssued,
      licenseCode,
      licenseType,
    } = res.data.profile;
    if (res.data) {
      dispatch(setDriverFirstName(driver.profile.firstName))
      dispatch(setDriverLastName(driver.profile.lastName))
      dispatch(setDriverEmail(driver.profile.email))
      dispatch(setDriverCellNumber(driver.profile.cellNumber))
      dispatch(setDriverIdNumber(driver.profile.idNumber))
      dispatch(setLicenseType(licenseType))
      dispatch(setLicenseCode(licenseCode))
      dispatch(setFirstIssued(firstIssued))
      dispatch(setExpiryDate(expiryDate))
      dispatch(setCountryIssued(countryIssued))
      dispatch(setDescription(description))
    }
    dispatch(setIsLoading(false));
  }).catch(err => {
    if (err.response) dispatch(setError(err.response.data.message));
    dispatch(setIsLoading(false));
  });
}
