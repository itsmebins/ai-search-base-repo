import { useEffect, useState } from "react";
import { DrawerProps } from "./types";
import clsx from "clsx";
import useMountTransition from "src/hooks/useMountTransition";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-drawer-component-with-react-portals
 * Check this one too
 * https://github.com/react-component/drawer/blob/master/src/Drawer.tsx
 */
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  children,
  className,
  onClose,
  position = "right",
  removeWhenClosed = true,
  drawerId = "drawer_id"
}) => {
  // const bodyRef: any = useRef(null);
  // const portalRootRef: any = useRef(null);
  const [mounted, setMounted] = useState(false)
  const isTransitioning = useMountTransition(isOpen, 300);

  useEffect(() => {
    // check if running on client side
    if (typeof window !== "undefined") {
      setMounted(true)
    }
  }, []); 


  // Prevent page scrolling when the drawer is open
  useEffect(() => {
    const updateAction = () => {
      if (isOpen && typeof window !== "undefined") {
        const document11: any = document.getElementById(drawerId)
        if(document11) {
          document11.showModal()
        }
      } else {

      }
    };
    updateAction();
  }, [isOpen]);

  // Allow Escape key to dismiss the drawer
  useEffect(() => {
    const onKeyPress = (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keyup", onKeyPress);
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!mounted || (!isTransitioning && removeWhenClosed)) {
    // return null;
  }

  return (
    <dialog
      aria-hidden={isOpen ? "false" : "true"}
      className={clsx("dr-container", {
        open: isOpen,
        in: isTransitioning,
        className,
      })}
      id={drawerId}
    >
      {
        isOpen && ( <>
        <div className={clsx("dr", position)}>
        <div className={`${className ? className : ""} mb-3`}>
          <button
            className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
      <div className="backdrop" onClick={onClose} /></>)
      }
     
    </dialog>)

  /* return createPortal(
    <FocusTrap active={isOpen}>
      <div
        aria-hidden={isOpen ? "false" : "true"}
        className={clsx("drawer-container", {
          open: isOpen,
          in: isTransitioning,
          className,
        })}
      >
        <div className={clsx("drawer", position)} role="dialog">
          {children}
        </div>
        <div className="backdrop" onClick={onClose} />
      </div>
    </FocusTrap>,
    portalRootRef.current,
  ); */
};
