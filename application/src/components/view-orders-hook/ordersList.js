import React from "react";
import { SERVER_IP } from "../../private";

const OrdersList = ({ orders, setOrders }) => {


  if (!orders || !orders.length)
    return (
      <div className="empty-orders">
        <h2>There are no orders to display</h2>
      </div>
    );

  const getTimeofOrder = (orderTime) => {
    const time = new Date(orderTime);
    return time.toLocaleTimeString('en-GB');
  };

  const deleteOrder = async (orderID) => {
    await fetch(`${SERVER_IP}/api/delete-order`, {
      method: "POST",
      body: JSON.stringify({
        id: orderID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    
  };

  const removeOrder = (orderID) => {
    let updatedOrders = [...orders];
    updatedOrders.splice(updatedOrders.findIndex(order => order._id === orderID), 1);
    setOrders(updatedOrders);
  }


  return orders.map((order) => {
    const createdDate = new Date(order.createdAt);
    return (
      <div className="row view-order-container" key={order._id}>
        <div className="col-md-4 view-order-left-col p-3">
          <h2>{order.order_item}</h2>
          <p>Ordered by: {order.ordered_by || ""}</p>
        </div>
        <div className="col-md-4 d-flex view-order-middle-col">
          <p>Order placed at {getTimeofOrder(createdDate)}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
        <div className="col-md-4 view-order-right-col">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger"
            onClick={()=> {
              deleteOrder(order._id);
              removeOrder(order._id);
            }}
          >Delete</button>
        </div>
      </div>
    );
  });
};

export default OrdersList;
