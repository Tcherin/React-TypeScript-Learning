import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button type="button" onClick={onClose} className="btn-close"></button>
    </div>
  );
};

export default Alert;
