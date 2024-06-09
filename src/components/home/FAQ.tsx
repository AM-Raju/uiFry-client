import React from "react";
import StarVector from "../shared/StarVector";

const FAQ = () => {
  return (
    <div className="mt-24 xl:mt-56 px-3 xl:px-0 ">
      <div className="relative">
        <div className="absolute size-16 top-16 left-1/2">
          <StarVector></StarVector>
        </div>
        <h3 className="text-lg font-medium text-[#ff5555] uppercase tracking-widest">
          FAQ
        </h3>
        <h2 className="text-3xl xl:text-5xl font-bold max-w-[14ch]">
          Frequently Asked Questions
        </h2>
      </div>
      {/* Questions Sections */}
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div className="xl:w-[535px] xl:h-[181px] bg-[#ff5555] rounded-lg p-7 text-white">
          <h3 className="font-semibold text-xl  xl:text-3xl">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="font-medium text-md xl:text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="xl:w-[535px] xl:h-[181px]  rounded-lg p-7 text-black">
          <h3 className="font-semibold text-xl  xl:text-3xl">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="font-medium text-md xl:text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="xl:w-[535px] xl:h-[181px]  rounded-lg p-7 text-black">
          <h3 className="font-semibold text-xl  xl:text-3xl">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="font-medium text-md xl:text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="xl:w-[535px] xl:h-[181px] bg-[#ff5555] rounded-lg p-7 text-white">
          <h3 className="font-semibold text-xl  xl:text-3xl">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="font-medium text-md xl:text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="xl:w-[535px] xl:h-[181px] bg-[#ff5555] rounded-lg p-7 text-white">
          <h3 className="font-semibold text-xl  xl:text-3xl">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="font-medium text-md xl:text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="xl:w-[535px] xl:h-[181px]  rounded-lg p-7 text-black">
          <h3 className="font-semibold text-xl  xl:text-3xl">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="font-medium text-md xl:text-lg">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
