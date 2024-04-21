import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import NotLoggedIn from "../Common/NotLoggedIn";
import { useSelector, useDispatch } from 'react-redux';


const Driver = () => {

  const { userId } = useSelector((state) => state.user);

  return (
    <div>
      {userId ?
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />
          <div className="example" style={{ height: `calc(100vh - 56px)`, overflow: 'scroll', padding: "20px 40px", width: "100%" }}>

            <Outlet />
          </div>
        </div> : (<NotLoggedIn />)}
    </div>
  );
}

export default Driver;
