import React, { useState } from "react";
import "./edit.css";
import { useSelector } from "react-redux";

export const Edit = ({ editOrder, order, setIsEdit }) => {
  const [editedItem, setEditedItem] = useState("");
  const [editedQuantity, setEditedQuantity] = useState("1");
  const email = useSelector((state) => state.login.email);

  return (
    <div className="edit-container">
      <form>
        <label className="form-label">Change Order To...</label>
        <br />
        <select
          value={editedItem}
          onChange={(event) => setEditedItem(event.target.value)}
          className="menu-select"
        >
          <option value="" defaultValue disabled hidden>
            Lunch menu
          </option>
          <option value="Soup of the Day">Soup of the Day</option>
          <option value="Linguini With White Wine Sauce">
            Linguini With White Wine Sauce
          </option>
          <option value="Eggplant and Mushroom Panini">
            Eggplant and Mushroom Panini
          </option>
          <option value="Chili Con Carne">Chili Con Carne</option>
        </select>
        <br />
        <label className="qty-label">Qty:</label>
        <select
          value={editedQuantity}
          onChange={(event) => setEditedQuantity(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button
          type="button"
          className="order-btn"
          onClick={() => {
            editOrder(order._id, editedQuantity, editedItem, email);
            setIsEdit(false);
          }}
        >
          Confirm Change
        </button>
      </form>
    </div>
  );
};
