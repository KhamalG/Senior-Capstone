import Header from "../components/header";
import styles from "../styles/styles";

function Home() {
  return (
    <div className="App">
      <Header/>
      <h1 style={styles.pageTitle}>Home</h1>
      <div style={styles.pageBody}>

        We are Drive-5, a drone-based delivery system. Our goal is to provide an unmanned delivery system that
        can move your materials for you. <br/><br/>
        The Inventory page is where the store's stock can be viewed. <br/><br/>
        The Orders page is where you can view a placed orders' status or create a new one. <br/><br/>
      </div>
    </div>
  );
}

export default Home;
