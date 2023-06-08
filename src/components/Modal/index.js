import "./index.css";
import React from "react";
import ReactDom from "react-dom";

export default function Modal({ children, danger = false, setshowModal }) {
  let className = danger ? "border-red" : "border-blue";
  return ReactDom.createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
        {/* <div className="modal" > */}
        <div className={`modal ${className}`}>
          {children}
          <button onClick={() => setshowModal(false)}>close</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
