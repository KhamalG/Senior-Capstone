import Header from "../components/header";
import styles from "../styles/styles";

function Order() {
    return (
      <div className="App">
        <Header/>
        <h1 style={styles.pageTitle}>Order</h1>
        <div style={styles.pageBody}>
        Order creation stuff goes here.
        </div>
      </div>
    );
  }
  
  export default Order;
  