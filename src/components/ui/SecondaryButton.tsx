import React from "react";

interface props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
  onSubmit?: () => void;
}

function SecondaryButton({
  children,
  onClick,
  onSubmit,
  disabled ,
  type = "button",
  ...props
}: props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-secondary transition-colors  disabled:bg-accent  px-4 py-2 rounded-md hover:opacity-90 disabled:cursor-not-allowed
"
      type={type}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
