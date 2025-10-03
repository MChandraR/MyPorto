import React from "react";

export default function Button( { children, variant = "primary" } :  
    Readonly<{
    children: React.ReactNode;
    variant?: "primary" | "outline";
}>
) {
  const base = "px-6 py-3 rounded-lg font-medium transition";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
