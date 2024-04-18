import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";
import { useState, useEffect } from "react";

function Order() {
  const [order, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async (e) => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(response.data.result);
        console.log('orders', order)
        const orderList = document.getElementById('order-list'); 
      } catch (error) {
          console.error('Error fetching orders:', error);
      }
    }
    getOrders()
  }, []);
  
  
  return (
    <div>
      {
      <div className="App">
        <Header/>
        <h1 style={styles.pageTitle}>Orders</h1>
        <div>
          {/*TABLE HERE - READ IN FROM DATABASE*/}
          <table >
              <thead style={styles.tableHead}>
                  <tr>
                      <th>OrderID</th>
                      <th>Status</th>
                      <th>userID</th>
                      <th>itemID</th>
                  </tr>
              </thead>
              <tbody style={styles.tableBody}>
                {/*Read in from database */}
                  {order.map((order) => (
                      <tr key={order.orderID}>
                          <td>{order.orderID}</td>
                          <td>{order.status}</td>
                          <td>{order.userID}</td>
                          <td>{order.itemID}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>

      </div>
    }
    </div>
  );
};

export default Order;
  