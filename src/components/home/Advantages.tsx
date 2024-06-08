import Image from "next/image";
import iphoneImg from "@/assets/images/iphone-advantages-1.png";
import iphoneImg2 from "@/assets/images/iphone-features.png";
import onHoldImg from "@/assets/images/adv1-on-hold.png";
import onHoldImg2 from "@/assets/images/adv2-on-hold.png";
import circleImg from "@/assets/images/threeCircle.png";
import ColorPatch from "../shared/ColorPatch";
import { FaRegBell } from "react-icons/fa";
import { GiStarShuriken } from "react-icons/gi";

const Advantages = () => {
  return (
    <div>
      {/* Advantages one */}
      <div className="flex gap-12 mt-28">
        {/* Text block */}
        <div className="w-[540px] relative  flex items-center">
          <div className="">
            <h3 className="text-lg font-medium text-[#ff5555] uppercase tracking-widest">
              Advantages
            </h3>
            <h2 className="text-5xl font-bold">Why Choose Uifry?</h2>
            {/* Features block */}
            <div className="mt-8">
              {/* Single feature block */}
              <div>
                <div className="flex justify-center items-center w-fit gap-3 mb-3">
                  <FaRegBell className="bg-[#ff5555] rounded-full size-8 p-2 text-white" />

                  <h4 className="text-lg font-semibold">
                    Cleaver Notification
                  </h4>
                </div>
                <p className="mb-8 font-medium text-gray-500 tracking-wide">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image block  */}
        <div className="relative w-[540px]">
          <Image
            className="absolute -z-10 -top-5 size-[550px] "
            src={circleImg}
            width={536}
            height={536}
            alt="Three circle"
          ></Image>
          <div className="absolute -z-20 top-0 -left-24 rotate-180 transform scale-x-[-1] size-[550px]">
            <ColorPatch></ColorPatch>
          </div>
          <div className="relative">
            <Image
              className="mx-auto ml-28 w-[250px] h-[505px]  drop-shadow-2xl"
              src={iphoneImg}
              height={250}
              width={504}
              alt="Iphone Front"
            ></Image>
            <Image
              className="mx-auto ml-28 absolute top-56 left-24 w-[201px] h-[61px] drop-shadow-lg "
              src={onHoldImg}
              height={281}
              width={143}
              alt="Iphone Front"
            ></Image>
          </div>
        </div>
      </div>
      {/* Advantage two */}
      <div className="flex gap-12 mt-28">
        {/* Image block  */}
        <div className="relative w-[540px]">
          <Image
            className="absolute -z-10 -top-5 size-[550px] "
            src={circleImg}
            width={536}
            height={536}
            alt="Three circle"
          ></Image>
          <div className="absolute -z-20 top-10 -left-12 transform scale-x-[-1] rotate-45 size-[610px]">
            <ColorPatch></ColorPatch>
          </div>
          <div className="relative">
            <Image
              className="mx-auto ml-28 w-[250px] h-[505px]  drop-shadow-2xl"
              src={iphoneImg2}
              height={250}
              width={504}
              alt="Iphone Front"
            ></Image>
            <Image
              className="mx-auto ml-28 absolute top-28 left-5 w-[260px] h-[160px] drop-shadow-lg "
              src={onHoldImg2}
              height={262}
              width={161}
              alt="Iphone Front"
            ></Image>
          </div>
        </div>
        {/* Text block */}
        <div className="w-[540px] relative  flex items-center">
          <div className="">
            {/* Features block */}
            <div className="mt-8">
              {/* Single feature block */}
              <div>
                <div className="flex justify-center items-center w-fit gap-3 mb-3">
                  <GiStarShuriken className="bg-[#ff5555] rounded-full size-8 p-1 text-white" />

                  <h4 className="text-lg font-semibold">Fully Customizable</h4>
                </div>
                <p className="mb-8 font-medium text-gray-500 tracking-wide">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
