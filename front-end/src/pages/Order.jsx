import Header from "../components/header";
import styles from "../styles/styles";
import axios from "axios";

async function getOrders() {
  try {
    const response = await axios.get('http://localhost:8080/api/orders');
    const orders = response.data.result;
    const orderList = document.getElementById('order-list');

    // Clear any existing list orders
    orderList.innerHTML = '';

    // Append each item to the list
    orders.forEach(orders => {
        const showOrderList = document.createElement('li');
        showOrderList.textContent = `${orders.status}: ${orders.userID}: ${orders.itemID}`;
        orderList.appendChild(showOrderList);
    });
  } catch (error) {
      console.error('Error fetching orders:', error);
  }
}

function Order() {
    getOrders();
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
  