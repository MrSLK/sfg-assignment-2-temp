import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDriverProfile } from "../../store/users/actions/user.actions"
import ModalDialog from "../Common/ModalDialog";
import AdvertiseJob from "./AdvertiseJob"

const ViewDriver = () => {

  const { driverId } = useParams();
  const {
    driverFirstName,
    driverLastName,
    driverEmail,
    driverCellNumber,
    driverIdNumber,
    countryIssued,
    description,
    expiryDate,
    firstIssued,
    licenseCode,
    licenseType,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchDriverProfile({ driverId }))
    // description: "Meet John, a seasoned driver who obtained his first driver's license back in 2003. With over two decades of driving experience under his belt, John prides himself on his impeccable driving record. Throughout his years behind the wheel, he has never been involved in a single driving accident nor has he received any traffic tickets. John's commitment to safe driving practices and adherence to traffic regulations is exemplary. His consistent record of responsible driving reflects his dedication to ensuring road safety for himself and others. With his wealth of experience and spotless driving history, John is not just a driver but a role model for safe and responsible driving behavior."
  }, [driverId])

  const inviteDriver = () => {
    return (
      <ModalDialog closeHandler={() => setModalOpen(false)} title="Invite Driver" content={<div>
        <AdvertiseJob fromViewDriver={true}  inviteDriverOnSubmit={(values) => { console.log("values of inviting job", values)}} />
      </div>} />
    )
  }

  return (
    <div className="container">
      <div className="row">
        <h2>View Driver</h2>
        {modalOpen && inviteDriver()}
        <strong>Driver Name:</strong>
        <p>{`${driverFirstName} ${driverLastName}`}</p>
        <div className="mt-40" />

        <strong>Email Address:</strong>
        <p>{driverEmail}</p>
        <div className="mt-40" />

        <strong>Cell Number:</strong>
        <p>{driverCellNumber}</p>
        <div className="mt-40" />

        <strong>ID Number:</strong>
        <p>{driverIdNumber}</p>
        <div className="mt-40" />

        <strong>Licence Type:</strong>
        <p>{licenseType}</p>
        <div className="mt-40" />

        <strong>Licence Code:</strong>
        <p>{licenseCode}</p>
        <div className="mt-40" />

        <strong>First Issued:</strong>
        <p>{moment(firstIssued).format("YYYY MMM DD")}</p>
        <div className="mt-40" />

        <strong>Country Issued:</strong>
        <p>{countryIssued}</p>
        <div className="mt-40" />

        <strong>Expiry Date:</strong>
        <p>{moment(expiryDate).format("YYYY MMM DD")}</p>
        <div className="mt-40" />

        <strong>Driver Description:</strong>
        <p>{description}</p>
        <div className="mt-40" />


        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => setModalOpen(true)} className="btn btn-primary">Invite Driver For A Job</button>
        </div>
      </div>
    </div>
  )
};

export default ViewDriver;
