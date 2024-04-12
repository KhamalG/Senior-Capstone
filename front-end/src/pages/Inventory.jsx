import Header from "../components/header";
import styles from "../styles/styles";
import InventoryModal from "../components/inventory";
import axios from "axios";
import { useState, useEffect } from "react";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    async function getInventory() {
      try {
        const result = await axios.get('http://localhost:8080/api/inventory');
        setInventory(result.data.result);
        
        const itemList = document.getElementById('inventory-items');
        
      } catch (error) {
          console.error('Error fetching inventory:', error);
      }
    }
    getInventory();
    console.log("inventory is: ", inventory);
  }, []);
  const [modalOpen, setModalOpen] = useState(true);

    return (
      <div>
        {(modalOpen === false) &&
        <div className="App">
          <Header/>
          <h1 style={styles.pageTitle}>Inventory</h1>
          <div>
            {/*TABLE HERE - READ IN FROM DATABASE*/}
            <table >
                <thead style={styles.tableHead}>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody style={styles.tableBody}>
                  {/*Read in from database */}
                    {inventory.map((item) => (
                        <tr key={item.itemID}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{item.Description}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>

          <button onClick={() => setModalOpen(true)} style={styles.pageButton}>Add to cart</button>
        </div>
      }
      <InventoryModal closeModal={setModalOpen} />
      </div>
    );
};

export default Inventory;
  