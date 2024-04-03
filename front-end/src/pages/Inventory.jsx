import Header from "../components/header";
import styles from "../styles/styles";
import InventoryModal from "../components/inventory";
import { useState } from "react";

function Inventory() {
  const [modalOpen, setModalOpen] = useState(true);

  //const [data, setData] = useState([]);

  // useEffect(() => {
  //     fetchData();
  // }, []);

  // const fetchData = async () => {
  //     try {
  //         const response = await fetch('/api/inventory');
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  //};


    return (
      <div>
        {(modalOpen === false) &&
        <div className="App">
          <Header/>
          <h1 style={styles.pageTitle}>Inventory</h1>
          <button onClick={() => setModalOpen(true)} style={styles.pageButton}>Add to cart</button>
          {/*Begin Copied table code*/}                    
          <div style={styles.pageBody}>
              <table>
                  <thead>
                      <tr>
                          <th>Item</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Stock</th>
                          {/* Add more headers as needed */}
                      </tr>
                  </thead>
                  <tbody>
                      <td> Sandwich </td>
                      <td> Ham and swiss cheese </td>
                      <td> $3.00 </td>
                      <td> 5 </td>
                    <tr>Granola bar</tr>
                    <tr></tr>
                      {/*data.map(item => (
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>

                              {/*Use loop to fill???}

                          </tr>
                      )*/}
                  </tbody>
              </table>
          </div>
        </div>
      }
      {(modalOpen === true) && <InventoryModal closeModal={setModalOpen}/>}
      </div>
    );
};

export default Inventory;
  