import moment from "moment";

const HirerPreviousJobs = () => {

  const dataSource = [
    {
      hirer: "Isaac Malebana",
      jobTitle: "Chauffer",
      dateHired: moment("2024-01").format("DD MMM YYYY"),
      dateJobEnded: ""
    },
    {
      hirer: "Pontsho Chuene",
      jobTitle: "Chauffer",
      dateHired: moment("2022-12-01").format("DD MMM YYYY"),
      dateJobEnded: moment("2024-02-29").format("DD MMM YYYY"),
    }
  ];
  return (
    <div >
      <h2>Previous Jobs</h2>
      <table className="table table-striped">
        <thead>
          <tr className="table-secondary">
            <th scope="col">Hirer</th>
            <th scope="col">Job Type</th>
            <th scope="col">Date Hired</th>
            <th scope="col">Date Job Ended</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((source, index) => (
            <tr key={index}>
              <td>{source.hirer}</td>
              <td>{source.jobTitle}</td>
              <td>{source.dateHired}</td>
              <td>{source.dateJobEnded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HirerPreviousJobs;
