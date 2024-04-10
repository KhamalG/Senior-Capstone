import Header from "../components/header";
import styles from "../styles/styles";
import InventoryModal from "../components/inventory";
import axios from "axios";
import { useState } from "react";

async function getInventory() {
  try {
    const response = await axios.get('http://localhost:8080/api/inventory');
    const inventory = response.data.result;
    const itemList = document.getElementById('inventory-items');

    // Clear any existing list items
    itemList.innerHTML = '';

    // Append each item to the list
    inventory.forEach(items => {
        const inventoryItems = document.createElement('li');
        inventoryItems.textContent = `${items.name}: ${items.price}: ${items.quantity}`;
        itemList.appendChild(inventoryItems);
    });
  } catch (error) {
      console.error('Error fetching inventory:', error);
  }
}

function Inventory() {
  getInventory();
  const [modalOpen, setModalOpen] = useState(true);

    return (
      <div>
        {(modalOpen === false) &&
        <div className="App">
          <Header/>
          <h1 style={styles.pageTitle}>Inventory</h1>
          <div style={styles.pageBody}>
            {/*TABLE HERE*/} 
          </div>

          <button onClick={() => setModalOpen(true)} style={styles.pageButton}>Add to cart</button>
        </div>
      }
      <InventoryModal closeModal={setModalOpen} />
      </div>
    );
};

export default Inventory;
  