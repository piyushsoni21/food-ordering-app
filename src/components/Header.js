import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="header-items">
          <ul>
          <li>
            Online Status : {onlineStatus ? "✅" :"🛑"}
          </li>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About Us </Link></li>
            <li><Link to="/contact">Contact Us </Link></li>
            <li><Link to="/groccery">Groccery</Link></li>
            <li><Link to="/pagination">Pagination</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;