import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchActiveJobs } from "../../store/jobs/actions/jobs.actions"

const HirerDashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeJobs } = useSelector(state => state.jobs);
  const { userId } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchActiveJobs({
      jobStatus: "hired",
      hirerId: userId
    }))
  }, [])


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
          {activeJobs.map((source, index) => (
            <tr key={index}>
              <td><a style={{ cursor: "pointer" }} onClick={() => {
                navigate(`/hirer/jobs/${source._id}`)
              }}>{`${source.driver.profile.firstName} ${source.driver.profile.lastName}`}</a></td>
              <td>{source.jobTitle}</td>
              <td>{moment(source.dateHired).format("YYYY MMM DD")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HirerDashboard;
