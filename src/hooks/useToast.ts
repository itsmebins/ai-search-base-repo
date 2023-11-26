import { useContext } from "react";
import { ToastContext } from "src/contexts/ToastContext";

const useToast = () => {
  const toastContextData = useContext(ToastContext);
  return toastContextData;
};

export default useToast;
