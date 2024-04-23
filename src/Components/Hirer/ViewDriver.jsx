import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDriverProfile } from "../../store/users/actions/user.actions"
import ModalDialog from "../Common/ModalDialog";
import AdvertiseJob from "./AdvertiseJob";
import { inviteDriver } from "../../store/invites/actions/invites.actions"

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
    userId
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const sendInv = values => {
    const body = {
      driverId: driverId,
      hirerId: userId,
      description: values.description,
      jobTitle: values.jobTitle,
      startDate: values.startDate,
      endDate: values.endDate,
      employmentType: values.employmentType,
      location: values.location,
      inviteStatus: "invited",
      pay: values.pay
    }
    dispatch(inviteDriver({ values: body, navigate }))
  }

  useEffect(() => {
    dispatch(fetchDriverProfile({ driverId }))
  }, [driverId])

  const inviteDriverModal = () => {
    return (
      <ModalDialog closeHandler={() => setModalOpen(false)} title="Invite Driver" content={<div>
        <AdvertiseJob fromViewDriver={true} inviteDriverOnSubmit={(values) => sendInv(values)} />
      </div>} />
    )
  }

  return (
    <div className="container">
      <div className="row">
        <h2>View Driver</h2>
        {modalOpen && inviteDriverModal()}
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
