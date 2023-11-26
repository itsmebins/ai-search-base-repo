// types
import { ModalProps } from "./type";

export const Modal: React.FC<ModalProps> = ({
  children,
  open = false,
  className = "",
  onClose,
  title = ""
}) => {

  if (!open) {
    return null
  }
  // Accessbility issues so do not show the items
  return (<dialog className="modal" open={open}>
    <div className={`modal-box ${className ? className : ""}`}>
      <button
        className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
        onClick={onClose}
      >
        ✕
      </button>
      {title && <h3 className="font-bold text-lg">{title}</h3>}
      {children}
    </div>
  </dialog>)
};
// w-11/12 max-w-5xl
