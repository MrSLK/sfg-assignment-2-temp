import CustomNavbar from './Components/Navbar/CustomNavbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import NotFound from './Components/NotFound';
import SignUp from './Components/Auth/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <div className="content" style={{padding: "15px"}}>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={SignUp} />
            {/* <Route path="/blogs/:id" Component={BlogDetails} />  */}
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;