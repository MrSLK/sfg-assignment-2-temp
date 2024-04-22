import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";

const DriversForHire = () => {

  const { drivers } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dataSource = [
    {
      driverName: "Isaac Malebana",
      licenseCode: "C1",
      firstIssue: moment("2003-01-01").format("DD MMM YYYY"),
      areaBased: "Gauteng",
    },
    {
      driverName: "Pontsho Chuene",
      licenseCode: "C1",
      firstIssue: moment("2010-07-21").format("DD MMM YYYY"),
      areaBased: "Gauteng",
    },
    {
      driverName: "Sizwe Balele",
      licenseCode: "C1",
      firstIssue: moment("2015-12-07").format("DD MMM YYYY"),
      areaBased: "kwaZulu-Natal",
    }
  ];

  return (
    <div className="container-fluid">
      <h2>Drivers For Hire</h2>
      <div className="row">
        {dataSource.length > 0 ? dataSource.map((driver, index) => (
          <div className="card" key={index} style={{ width: "18rem", margin: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">{driver.driverName}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><i>Based in {driver.areaBased}</i></h6>
              <p className="card-text">License Code: {driver.licenseCode}</p>
              <p className="card-text">First Issue: {driver.firstIssue}</p>
              <p className="card-text">Experience: {moment().diff(driver.firstIssue, "years")}</p>

              <div className="col-md-4">
                <button className="btn btn-primary" onClick={() => navigate("/hirer/view-driver/1")}>View Driver</button>
              </div>
            </div>
          </div>
        )) : <h4>No drivers found!</h4>}
      </div>
    </div>
  )

}

export default DriversForHire;
