import { Link } from "react-router-dom"

const NotLoggedIn = () => {
  return (
    <div className="container">
      <h2>Sorry</h2>
      <p>You can't access this page as you are not logged</p>
      <p>To login, please, <Link to="/login">click here</Link></p>
    </div>
  );
}

export default NotLoggedIn;
