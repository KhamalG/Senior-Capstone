import { Link } from "react-router-dom";
import styles from "../styles/styles";

function Header() {
    return (
      <div style={styles.headerComponent}>
        <img src={require("../styles/images/drive5logo.jpg")} height='50' width='50' alt='Drive-5 logo' />
    
        <Link to='/home' style={styles.link}>
            Home
        </Link>
        <Link to='/inventory' style={styles.link}>
            Inventory
        </Link>
        <Link to='/order' style={styles.link}>
            Orders
        </Link>
        <Link to='/' style={styles.link}>
            Sign Out
        </Link>

      </div>
    );
  }
  
  export default Header;
  