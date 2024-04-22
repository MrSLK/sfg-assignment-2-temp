import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import Home from './Components/Common/Home';
import Login from './Components/Auth/Login';
import NotFound from './Components/Common/NotFound';
import SignUp from './Components/Auth/SignUp';
// Driver components
import Driver from './Components/Driver/Index';
import DriverProfile from './Components/Driver/DriverProfile';
import Dashboard from './Components/Driver/Dashoard';
import PreviousJobs from './Components/Driver/PreviousJobs';
import Job from './Components/Common/Job';
import JobInvites from './Components/Driver/JobInvites';

// Hirer components
import Hirer from './Components/Hirer/Index';
import HirerDashboard from "./Components/Hirer/HirerDashboard";
import AdvertiseJob from "./Components/Hirer/AdvertiseJob";
import AdvertisedJob from "./Components/Hirer/AdvertisedJobs";
import HirerPreviousJobs from "./Components/Hirer/HirerPreviousJobs";
import DriversForHire from "./Components/Hirer/DriversForHire";
import ViewDriver from "./Components/Hirer/ViewDriver";
import ViewJob from "./Components/Hirer/ViewJob";

// Admin routes
import AdminDashboard from "./Components/Admin/index"

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className="content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="*" Component={NotFound} />

            {/* Auth routes */}
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={SignUp} />

            {/* Driver routes */}
            <Route exact path="/driver" Component={Driver} >
              <Route exact path="/driver" Component={Dashboard} />
              <Route exact path="/driver/profile" Component={DriverProfile} />
              <Route exact path="/driver/previous-jobs" Component={PreviousJobs} />
              <Route exact path="/driver/jobs/:jobId" Component={Job} />
              <Route exact path="/driver/job-invites" Component={JobInvites} />
            </Route>

            {/* Hirer routes */}
            <Route exact path="/hirer" Component={Hirer} >
              <Route exact path="/hirer" Component={HirerDashboard} />
              <Route exact path="/hirer/add-job" Component={AdvertiseJob} />
              <Route exact path="/hirer/jobs/:jobId" Component={ViewJob} />
              <Route exact path="/hirer/advertised-jobs" Component={AdvertisedJob} />
              <Route exact path="/hirer/drivers-for-hire" Component={DriversForHire} />
              <Route exact path="/hirer/previous-jobs" Component={HirerPreviousJobs} />
              <Route exact path="/hirer/view-driver/:driverId" Component={ViewDriver} />
            </Route>

            {/* Admin Routes */}
            <Route exact path="/super" Component={AdminDashboard}>
              
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
