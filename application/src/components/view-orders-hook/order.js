import React, { useState } from "react";
import { Edit } from "../edit/edit";

export const Order = ({
  deleteOrder,
  editOrder,
  getTimeofOrder,
  order,
  removeOrder,
}) => {
  const [isEdit, setIsEdit] = useState(false);
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
        <button className="btn btn-success" onClick={() => setIsEdit(!isEdit)}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteOrder(order._id);
            removeOrder(order._id);
          }}
        >
          Delete
        </button>
      </div>
      {isEdit && (
        <Edit editOrder={editOrder} order={order} setIsEdit={setIsEdit} />
      )}
    </div>
  );
};
