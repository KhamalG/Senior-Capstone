import Header from "../components/header";
import styles from "../styles/styles";

function Home() {
  return (
    <div className="App">
      <Header/>
      <h1 style={styles.pageTitle}>Home</h1>
      <div style={styles.pageBody}>

        We are Drive-5, a drone-based order management system. <br/>
        The Inventory page is where the store's stock can be viewed. 
      </div>
    </div>
  );
}

export default Home;
