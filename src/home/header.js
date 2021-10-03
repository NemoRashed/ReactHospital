import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="parent">
        <div className="logo">
          <h2>
            Somali<span className="font">Hospitals</span>
          </h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Hospitals">Hospitals</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <div className="login-nav">
              <button className="btn">
                <Link to="/Login">login</Link>
              </button>
              {/* <button className="btn">
              <Link to="/Register">Register</Link>
            </button> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
