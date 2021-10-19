import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

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
          </ul>
          <div className="log-reg">
            <h2>
              <Link to="/Login" className="h2">
                <MdAccountCircle />
                login
              </Link>
              /
            </h2>

            <h2>
              <Link to="/Register" className="h2">
                Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
