import React from "react";

interface props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function DangerButton({ children, onClick, disabled, className }: props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-important  disabled:bg-accent px-4 py-2 rounded-md text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default DangerButton;
