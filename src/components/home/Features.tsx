import Image from "next/image";
import iphoneImg from "@/assets/images/iphone-features.png";
import circleImg from "@/assets/images/threeCircle.png";
import ColorPatch from "../shared/ColorPatch";
import starIcon from "@/assets/icons/star.png";

import StarVector from "../shared/StarVector";

const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col xl:flex-row gap-12 xl:mt-28 px-3 x:px-0 "
    >
      {/* Image block  */}
      <div className="relative xl:w-[540px] ">
        <div className="absolute size-12 rotate-45 -top-12 -left-28">
          <StarVector></StarVector>
        </div>
        <Image
          className="absolute -z-10 -top-5 w-96 xl:w-[550px] "
          src={circleImg}
          width={536}
          height={536}
          alt="Three circle"
        ></Image>
        <div className="absolute -z-20 -top-24 xl:-left-28 w-96  xl:w-[600px] ">
          <ColorPatch></ColorPatch>
        </div>
        <Image
          className="mx-auto xl:ml-28 w-[250px]  drop-shadow-2xl max-sm:w-[220px] "
          src={iphoneImg}
          height={250}
          width={504}
          alt="Iphone Front"
        ></Image>
      </div>
      {/* Text block */}
      <div className=" xl:w-[540px] relative">
        <div className="absolute -z-20 xl:-top-24 xl:-right-60 w-96  xl:w-[400px] rotate-180 transform scale-x-[-1] ">
          <ColorPatch></ColorPatch>
        </div>
        <h3 className="text-lg font-medium text-[#ff5555] uppercase tracking-widest">
          Features
        </h3>
        <h2 className="text-5xl font-bold">Uifry Premium</h2>
        {/* Features block */}
        <div className="mt-8">
          {/* Single feature block */}
          <div>
            <div className="flex justify-center items-center w-fit gap-2 mb-3">
              <Image
                src={starIcon}
                width={24}
                height={24}
                alt="Star icon"
              ></Image>
              <h4 className="text-lg font-semibold">budgeting intervals</h4>
            </div>
            <p className="mb-8 font-medium text-gray-500 tracking-wide">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          {/* Single feature block */}
          <div>
            <div className="flex justify-center items-center w-fit gap-2 mb-3">
              <Image
                src={starIcon}
                width={24}
                height={24}
                alt="Star icon"
              ></Image>
              <h4 className="text-lg font-semibold">budgeting intervals</h4>
            </div>
            <p className="mb-8 font-medium text-gray-500 tracking-wide">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          {/* Single feature block */}
          <div>
            <div className="flex justify-center items-center w-fit gap-2 mb-3">
              <Image
                src={starIcon}
                width={24}
                height={24}
                alt="Star icon"
              ></Image>
              <h4 className="text-lg font-semibold">budgeting intervals</h4>
            </div>
            <p className="mb-8 font-medium text-gray-500 tracking-wide">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
