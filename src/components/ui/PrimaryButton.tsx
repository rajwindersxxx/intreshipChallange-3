import React from "react";

interface props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string
  type: "submit" | "button"
}

function PrimaryButton({children, onClick, disabled, className}: props) {
  return (
    <button onClick={onClick} disabled={disabled} className={`bg-primary transition-colors  disabled:bg-accent px-4 py-2 rounded-md text-white ${className}`}>
      {children}
    </button>
  );
}

export default PrimaryButton;
