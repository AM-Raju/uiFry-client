import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black text-white px-3 py-2 lg:px-10 lg:py-4 rounded w-fit font-medium text-lg hover:bg-[#ff5555]  transition-all duration-300">
      {children}
    </div>
  );
};

export default Button;
