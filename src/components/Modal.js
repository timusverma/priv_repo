import React from "react";

export const Modal = ({ handleClose, show, disable = false, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button disable={disable} onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  );
};
