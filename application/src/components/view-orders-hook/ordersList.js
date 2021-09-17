import React from "react";
import { Order } from "./order";
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
    return time.toLocaleTimeString("en-GB");
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
    updatedOrders.splice(
      updatedOrders.findIndex((order) => order._id === orderID),
      1
    );
    setOrders(updatedOrders);
  };

  const editOrder = async (orderID, quantity, orderItem) => {
    await fetch(`${SERVER_IP}/api/edit-order`, {
      method: "POST",
      body: JSON.stringify({
        id: orderID,
        order_item: orderItem,
        quantity,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  return orders.map((order) => {
    return (
      <Order
        deleteOrder={deleteOrder}
        editOrder={editOrder}
        getTimeofOrder={getTimeofOrder}
        key={order._id}
        order={order}
        removeOrder={removeOrder}
      />
    );
  });
};

export default OrdersList;
