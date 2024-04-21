import { useNavigate } from "react-router-dom";
import moment from "moment";

const HirerDashboard = () => {

  const navigate = useNavigate();

  const dataSource = [
    {
      hirer: "Isaac Malebana",
      jobTitle: "Chauffer",
      dateHired: moment("2024-01").format("DD MMM YYYY"),
    },
    {
      hirer: "Pontsho Chuene",
      jobTitle: "Chauffer",
      dateHired: moment("2022-12-01").format("DD MMM YYYY"),
    }
  ];

  return (
    <div >
      <h2>Active Jobs</h2>
      <table className="table table-striped">
        <thead>
          <tr className="table-secondary">
            <th scope="col">Driver</th>
            <th scope="col">Job Type</th>
            <th scope="col">Date Hired</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((source, index) => (
            <tr key={index}>
              <td><a style={{ cursor: "pointer" }} onClick={() => {
                navigate("/hirer/jobs/1")
              }}>{source.hirer}</a></td>
              <td>{source.jobTitle}</td>
              <td>{source.dateHired}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HirerDashboard;
