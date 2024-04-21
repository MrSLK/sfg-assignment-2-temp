import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const ViewDriver = () => {

  const { driverId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [licenseCode, setLicenseCode] = useState("");
  const [firstIssued, setFirstIssued] = useState("");
  const [expiryDate, setEexpiryDate] = useState("");
  const [countryIssued, setCountryIssued] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const driver = {
      firstName: "Chri",
      lastName: "Tubaka",
      email: "christubaka@gmail.com",
      cellNumber: "0821672232",
      licenseType: "C1",
      licenseCode: "Code 8",
      firstIssued: new Date("2003-07-24"),
      expiryDate: new Date("2027-01-15"),
      countryIssued: "Sout Africa",
      description: "Meet John, a seasoned driver who obtained his first driver's license back in 2003. With over two decades of driving experience under his belt, John prides himself on his impeccable driving record. Throughout his years behind the wheel, he has never been involved in a single driving accident nor has he received any traffic tickets. John's commitment to safe driving practices and adherence to traffic regulations is exemplary. His consistent record of responsible driving reflects his dedication to ensuring road safety for himself and others. With his wealth of experience and spotless driving history, John is not just a driver but a role model for safe and responsible driving behavior."
    }

    setFirstName(driver.firstName);
    setLastName(driver.lastName);
    setEmail(driver.email);
    setCellNumber(driver.cellNumber);
    setLicenseType(driver.licenseType);
    setLicenseCode(driver.licenseCode);
    setFirstIssued(driver.firstIssued);
    setEexpiryDate(driver.expiryDate);
    setCountryIssued(driver.countryIssued);
    setDescription(driver.description);

  }, [])

  return (
    <div className="container">
      <div className="row">
        <h2>View Driver</h2>
      </div>
      <div className="row">
        <strong>Driver Name:</strong>
        <p>{`${firstName} ${lastName}`}</p>
        <div className="mt-40" />

        <strong>Email Address:</strong>
        <p>{email}</p>
        <div className="mt-40" />

        <strong>Cell Number:</strong>
        <p>{cellNumber}</p>
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
      </div>
    </div>
  )
};

export default ViewDriver;
