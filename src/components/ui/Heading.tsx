import React from "react";

interface props {
  type?: string;
  children: React.ReactNode;
}
function Heading({ type = "primary", children }: props) {
  if (type === "primary")
    return <h1 className="text-3xl font-semibold">{children}</h1>;
  if (type === "secondary") return <h2 className="opacity-60">{children}</h2>;
}

export default Heading;
