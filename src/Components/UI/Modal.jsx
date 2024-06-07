import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", ...props }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
      console.log("modal opened");
    }

    return () => {
      modal.close();
      console.log("modal closed");
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
