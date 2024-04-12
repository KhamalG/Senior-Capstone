import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";
import { useState, useEffect } from "react";

function Order() {
  const [orders, setOrders] = useState([]);
  const getOrders = async (e) => {
    try {
      const response = await axios.get('http://localhost:8080/api/orders');
      const orders = response.data.result;
      setOrders(orders);
      const orderList = document.getElementById('order-list'); 
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
  }
  
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
  