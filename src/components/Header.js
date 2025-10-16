import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {


  let name = {
    firstname: "piyush",
    lastname: "soni"
  };

  let printName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + ",  " + state);
  };

  let printMyName = printName.bind(name, "Indore");
  //printMyName("MP");


  Function.prototype.mybind = function(... args){
    let obj = this
    params = args.slice(1);
    return function(...args2){
      obj.apply(args[0], [...params,...args2]);
    }
  }

  let printMyName2 = printName.mybind(name,"Indore");
  printMyName("MP...");

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