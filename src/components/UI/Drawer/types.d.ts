export type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  removeWhenClosed?: boolean;
  position?: "left" | "right" | "top" | "bottom";
  drawerId: string;
};
