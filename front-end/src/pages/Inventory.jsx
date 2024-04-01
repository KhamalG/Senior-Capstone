import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import styles from "../styles/styles";


function Inventory() {

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
      <div className="App">
      <nav style = {styles.navBar}>
      <img src={require("../styles/images/drive5logo.jpg")} height='50' width='50' alt='Drive-5 logo' align ="left"/>
          <table align="right">
            <td><a href="../Home" style = {styles.link}> Home </a></td>
            <td><a href="../Inventory" style = {styles.link}> Inventory </a></td>
            <td><a href="../Order" style = {styles.link}> Order </a></td>
          </table>
        </nav>
        
        <h1>Inventory</h1>

        {/*Begin Copied table code*/}                    
        <div className = "inventoryTable">
            <table>
                <thead className = "tableHead">
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Add to cart</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody className = "tableBody">
                    <td> Sandwich </td>
                    <td> Ham and swiss cheese </td>
                    <td> $3.00 </td>
                    <td> 5 </td>
                    <td> button goes here </td>
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
    );
};

export default Inventory;
  