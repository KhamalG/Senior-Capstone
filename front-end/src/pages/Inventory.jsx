import Header from "../components/header";
import styles, { tableStyles } from "../styles/styles";
import { InventoryModal } from "../components/Modal";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconBxsBookAdd, IconBxsEdit, IconBxsTrash } from "../styles/Icons";
import {v4 as uuidv4} from 'uuid'

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowEdit] = useState(null);
  const [edit, isEdit] = useState({});

  async function getInventory() {
    try {
      const result = await axios.get('http://localhost:8080/api/inventory');
      setInventory(result.data.result);
      console.log('inventory: ', inventory);
      
    } catch (error) {
        console.error('Error fetching inventory:', error);
    }
  }

  const handleDeleteRow = async (targetIndex) => {
    try {
      const result = await axios.delete('http://localhost:8080/api/deleteItem', {
        params: {id: targetIndex}
    });
    console.log('return: ', result);
    return
    } catch (error) {
      console.log('Error deleting row: ', error);
    }
  };

  const handleOpenModal = () => {
    isEdit({});
    setModalOpen(true);
  }

  const handleEditRow = (idx, idr, name, price, description) => {
    setRowEdit(idx);
    isEdit({id: idx, restaurant_id: idr, name: name, price: price, description: description });
    setModalOpen(true);
  }

  useEffect(() => {
    getInventory()
  }, [modalOpen]);

  function Table () {
    return (
      <div>
          <div style={tableStyles.bodyHeader}>
              <div style={tableStyles.bodyheaderTitle}>
                <h1>Campus Food Options</h1>
              </div>
              <div style={tableStyles.bodyheaderButton}>
                <button onClick={(() => handleOpenModal())}>New Item</button>
              </div>
            </div>
            {/*TABLE HERE - READ IN FROM DATABASE*/}
            <div style={tableStyles.tableBody}>
              <table style={tableStyles.table}>
                  <thead style={tableStyles.tableHeader}>
                      <tr style={tableStyles.tr}>
                          <th style={tableStyles.th}>Item Name</th>
                          <th style={tableStyles.th}>Price</th>
                          <th style={tableStyles.th}>Description</th>
                          <th style={tableStyles.th}>Actions</th>
                          {/* Add more headers as needed */}
                      </tr>
                  </thead>
                  <tbody >
                    {/*Read in from database */}
                      {inventory.map((item) => (
                          <tr style={tableStyles.tr} key={item.id}>
                              <td style={tableStyles.td}>{item.name}</td>
                              <td style={tableStyles.td}>{item.price}</td>
                              <td style={tableStyles.td}>{item.description}</td>
                              <td style={tableStyles.td}>
                                  <span style={tableStyles.actions}>
                                      <IconBxsTrash onClick={() => handleDeleteRow(item.id)}/>
                                      {/* <IconBxsEdit onClick={() => handleEditRow(item.id, item.restaurant_id, item.name, item.price, item.description)}/> */}
                                  </span>
                              </td>
                              {/* Add more cells as needed */}
                          </tr>
                      ))}
                  </tbody>
              </table>
            </div>
      </div>
    )
  }


  return (
    <div>
      <div style={tableStyles.header}>
        <Header/>
      </div>
      <div style={tableStyles.body}>
        <Table />
      </div>
      {modalOpen && (
        <InventoryModal closeModal={() => {
          setModalOpen(false);
        }} isEdit = {edit}/>
      )}
    </div>
  );
};

export default Inventory;
  