import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Driver = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div className="example" style={{ height: `calc(100vh - 56px)`, overflow: 'scroll', padding: "20px 40px", width: "100%"}}>

        <Outlet />
      </div>
    </div>
  );
}

export default Driver;
