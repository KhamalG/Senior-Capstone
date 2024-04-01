import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import styles from "../styles/styles";

function Order() {
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
        <h1>Order</h1>
        <p>Displaying the order details from the database?</p>
      </div>
    );
  }
  
  export default Order;
  