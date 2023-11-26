// types
import { ButtonProps } from "./type";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  outline = false,
  color = "primary",
  fullWidth = true,
}) => {
  let classN = (fullWidth ? " w-full" : "") + (className || " ");
  classN =
    classN +
    (disabled
      ? " bg-primary/75 btn btn-outline"
      : loading
      ? " btn cursor-wait"
      : clsx(
          " btn",
          outline && ` btn-outline btn-${color}`,
          !outline && ` btn-active btn-${color}`,
        ));

  return (
    <button
      type={type}
      className={classN}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
};
