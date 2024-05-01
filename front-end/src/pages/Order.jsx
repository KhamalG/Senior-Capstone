import { OrderModal } from "../components/Modal";
import Header from "../components/header";
import { IconBxsEdit } from "../styles/Icons";
import styles, { tableStyles } from "../styles/styles";
import axios from "axios";
import { useState, useEffect } from "react";

function Order() {
  const [order, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getOrders = async (e) => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        // setOrders(response.data.result);
        console.log('orders', response.data.result)
        if (!response.data.result.length) {
          setOrders([{
            orderID: 1,
            customerName: 'John Doe',
            orderTotal: 32.00,
            deliveryZone: 3,
            status: 'Preparing',
            style: tableStyles.labelPreparing
          },
          {
            orderID: 2,
            customerName: 'Andrew Schock',
            orderTotal: 21.00,
            deliveryZone: 1,
            status: 'Arrived',
            style: tableStyles.labelArrived
          },
          {
            orderID: 3,
            customerName: 'Justin Stephens',
            orderTotal: 14.00,
            deliveryZone: 7,
            status: 'En Route',
            style: tableStyles.labelEnRoute
          },
          {
            orderID: 4,
            customerName: 'Merith Heytura',
            orderTotal: 26.00,
            deliveryZone: 8,
            status: 'Delivered',
            style: tableStyles.labelDelivered
          },
          {
            orderID: 5,
            customerName: 'Saleh Addossary',
            orderTotal: 45.00,
            deliveryZone: 2,
            status: 'En Route to Hub',
            style: tableStyles.labelEnRouteHub
          }
        ])
        }
        const orderList = document.getElementById('order-list'); 
      } catch (error) {
          console.error('Error fetching orders:', error);
      }
    }
    getOrders()
  }, [modalOpen]);
  
  
  return (
    <div>
      <div style={tableStyles.header}>
        <Header/>
      </div>
      <div style={tableStyles.body}>
        <div style={tableStyles.bodyheaderTitle}>
          <h1>Orders</h1>
        </div>
        <div style={tableStyles.tableBody}>
          {/*TABLE HERE - READ IN FROM DATABASE*/}
          <table style={tableStyles.table}>
              <thead style={tableStyles.tableHeader}>
                  <tr style={tableStyles.tr}>
                      <th style={tableStyles.th}>OrderID</th>
                      <th style={tableStyles.expand}>Customer</th>
                      <th style={tableStyles.th}>Order Total</th>
                      <th style={tableStyles.th}>Delivery Zone</th>
                      <th style={tableStyles.th}>Status</th>
                      <th style={tableStyles.th}>Action</th>
                  </tr>
              </thead>
              <tbody style={styles.tableBody}>
                {/*Read in from database */}
                  {order.map((order) => (
                      <tr style={tableStyles.tr} key={order.orderID}>
                          <td style={tableStyles.td}>{order.orderID}</td>
                          <td style={tableStyles.td}>{order.customerName}</td>
                          <td style={tableStyles.td}>{order.orderTotal}</td>
                          <td style={tableStyles.td}>{order.deliveryZone}</td>
                          <td style={order.style}>{order.status}</td>
                          <td style={tableStyles.td}>
                                <span  style={tableStyles.actions}>
                                    <IconBxsEdit onClick={() => setModalOpen(true)} />
                                </span>
                            </td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>
        {modalOpen && (
        <OrderModal closeModal={() => {
          setModalOpen(false);
        }}/>
      )}
      </div>
    </div>
  );
};

export default Order;
  