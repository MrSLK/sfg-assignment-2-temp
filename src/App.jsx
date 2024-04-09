import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import NotFound from './Components/NotFound';
import SignUp from './Components/Auth/SignUp';
import Driver from './Components/Driver/Index';
import DriverProfile from './Components/Driver/DriverProfile';
import Analytics from './Components/Driver/Analytics';
import Dashboard from './Components/Driver/Dashoard';
import Tables from './Components/Driver/Tables';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className="content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={SignUp} />

            {/* Driver routes */}
            <Route exact path="/driver" Component={Driver} >
              <Route exact path="/driver" Component={Dashboard} />
              <Route exact path="/driver/profile" Component={DriverProfile} />
              <Route exact path="/driver/analytics" Component={Analytics} />
              <Route exact path="/driver/table" Component={Tables} />
            </Route>
            {/* <Route path="/blogs/:id" Component={BlogDetails} />  */}
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
