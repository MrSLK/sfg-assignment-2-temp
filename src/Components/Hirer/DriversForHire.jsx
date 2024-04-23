import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDrivers } from "../../store/users/actions/user.actions";


const DriversForHire = () => {

  const { allDrivers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDrivers())
  }, [])

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <h2>Drivers For Hire</h2>
      <div className="row">
        {allDrivers.length > 0 ? allDrivers.map((driver, index) => (
          <div className="card" key={index} style={{ width: "18rem", margin: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">{`${driver.driver.profile.firstName} ${driver.driver.profile.lastName}`}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><i>Based in {driver.basedIn}</i></h6>
              <p className="card-text">License Code: {driver.licenseCode}</p>
              <p className="card-text">First Issue: {moment(driver.firstIssued).format("YYYY-MMM-DD")}</p>
              <p className="card-text">Experience: {moment().diff(driver.firstIssued, "years")}</p>

              <div>
                <button className="btn btn-primary" onClick={() => navigate(`/hirer/view-driver/${driver._id}`)}>View Driver</button>
              </div>
            </div>
          </div>
        )) : <h4>No drivers found!</h4>}
      </div>
    </div>
  )

}

export default DriversForHire;
