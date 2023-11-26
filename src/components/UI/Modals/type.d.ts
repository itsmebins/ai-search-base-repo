export type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  className?: string;
  onClose?: () => void;
  loading?: boolean;
  title?: string;
  removeWhenClosed?: boolean;
};
