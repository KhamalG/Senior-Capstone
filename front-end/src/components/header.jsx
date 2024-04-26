import { Link } from "react-router-dom";
import {headerStyles} from "../styles/styles";

function Header() {
    return (
      <nav style={headerStyles.items}>
            <Link to='/home'><img src={require("../styles/images/drive5logo.png")} alt="Logo" height={75}/></Link>
            <ul style={headerStyles.menu}>
                <li>
                    <Link style={headerStyles.navlinks} to='/inventory'> Inventory
                        <div style={headerStyles.icon}>
                            {/* <IconBxHomeAlt/> */}
                        </div> 
                    </Link>
                </li>
                <li>
                    <Link  style={headerStyles.navlinks} to='/order'> Orders
                        <div style={headerStyles.icon}>
                            {/* <IconBxsUserDetail/> */}
                        </div> 
                     </Link>
                </li>
                <li>
                    <Link  style={headerStyles.navlinks} to='/'> Logout
                        <div style={headerStyles.icon}>
                            {/* <IconBxsLock/> */}
                        </div> 
                     </Link>
                </li>
            </ul>
        </nav>
    );
  }
  
  export default Header;
  