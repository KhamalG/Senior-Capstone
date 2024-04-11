import Header from "../components/header";
import styles from "../styles/styles";
import InventoryModal from "../components/inventory";
import axios from "axios";
import { useState } from "react";



function Inventory() {
  const [inventory, setInventory] = useState([]);
  const getInventory = async (e) => {
    try {
      const response = await axios.get('http://localhost:8080/api/inventory');
      const result = response.data.inventory;
      setInventory(inventory);
      console.log("inventory is: ", inventory);
      const itemList = document.getElementById('inventory-items');
      
    } catch (error) {
        console.error('Error fetching inventory:', error);
    }
  }
  const [modalOpen, setModalOpen] = useState(true);

    return (
      <div>
        {(modalOpen === false) &&
        <div className="App">
          <Header/>
          <h1 style={styles.pageTitle}>Inventory</h1>
          <div style={styles.pageBody}>
            {/*TABLE HERE - READ IN FROM DATABASE*/} 
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Description</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                  {/*Read in from database*/} 
                    {inventory.map(item => (
                        <tr key={item.name}>
                            <td>{item.price}</td>
                            <td>{item.amount}</td>
                            <td>{item.description}</td>
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
  