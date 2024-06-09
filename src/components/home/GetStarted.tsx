import Image from "next/image";
import bg from "../../assets/images/getStarted-bg.png";
import mobile1 from "../../assets/images/iphone-getStarted-1.png";
import mobile2 from "../../assets/images/iphone-getStarted-2.png";
import mobile3 from "../../assets/images/iphone-getStarted-3.png";
import StarVector from "../shared/StarVector";
import ColorPatch from "../shared/ColorPatch";
import { FaApple } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div id="getStarted" className="relative">
      <div className="absolute -top-52 -left-72 rotate-180 transform scale-x-[-1] -z-10">
        <ColorPatch></ColorPatch>
      </div>
      <div className="absolute size-16 -top-24 -right-28">
        <StarVector></StarVector>
      </div>
      <div className="absolute size-12 rotate-45 top-12 -left-28">
        <StarVector></StarVector>
      </div>

      <div className=" mt-20 xl:mt-40 relative w-full h-[509px] overflow-hidden">
        <div className="absolute">
          <Image
            src={bg}
            width={1090}
            height={509}
            alt="Background Image"
          ></Image>
        </div>
        <div className="flex justify-between">
          <div className="text-white absolute z-10 space-y-2 xl:space-y-4 xl:top-40 xl:left-20 px-3 xl:px-0 py-5">
            <h2 className="text-3xl xl:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg font-medium">
              Risus habitant leo egestas mauris diam eget morbi tempus
              vulputate.
            </p>
            <button className="bg-white text-black px-3 py-2 xl:px-5 xl:py-3 rounded-md font-medium text-lg flex items-center justify-center gap-3 hover:bg-[#ff5555] hover:text-white transition-all duration-300">
              Download App <FaApple className="text-3xl" />
            </button>
          </div>
          <div className="absolute right-0 hidden xl:block ">
            <div className="relative z-50 ">
              <Image
                className="relative -left-32 -bottom-36 z-50 w-[298px] h-[337px]"
                src={mobile1}
                height={298}
                width={337}
                alt="IPhone"
              ></Image>
              <Image
                className="absolute -bottom-32 right-10 z-40 w-[220px] h-[358px]"
                src={mobile2}
                height={236}
                width={394}
                alt="IPhone"
              ></Image>
              <Image
                className="absolute top-8 -right-24 w-[216px] h-[388px]"
                src={mobile3}
                height={226}
                width={406}
                alt="IPhone"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
