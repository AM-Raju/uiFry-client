import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black text-white px-10 py-4 rounded w-fit font-medium text-lg">
      {children}
    </div>
  );
};

export default Button;
