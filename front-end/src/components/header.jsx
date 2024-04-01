import { Link } from "react-router-dom";
import styles from "../styles/styles";

function Header() {
    return (
      <div style={styles.headerComponent}>
        <img src={require("../styles/images/drive5logo.jpg")} height='100' width='100' alt='Drive-5 logo' />
    
        <Link to='/home'>
            Home
        </Link>
        <Link to='/inventory'>
            Inventory
        </Link>
        <Link to='/order'>
            Orders
        </Link>
        <Link to='/'>
            Sign Out
        </Link>

      </div>
    );
  }
  
  export default Header;
  