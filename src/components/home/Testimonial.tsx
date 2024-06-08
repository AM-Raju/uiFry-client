import Image from "next/image";
import iphoneImg2 from "@/assets/images/iphone-features.png";
import onHoldImg2 from "@/assets/images/adv2-on-hold.png";
import circleImg from "@/assets/images/threeCircle.png";
import ColorPatch from "../shared/ColorPatch";

import { GiStarShuriken } from "react-icons/gi";

const Testimonial = () => {
  return (
    <div className="mt-28">
      <div className="text-center">
        <h3 className="text-lg font-medium  uppercase tracking-widest">
          Testimonial
        </h3>
        <h2 className="text-5xl font-bold max-w-[12ch] mx-auto">
          What Our Users Says About Us?
        </h2>
      </div>
      <div className="flex justify-between gap-12 mt-28">
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
        <div className="w-[450px] relative  flex items-center">
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

export default Testimonial;
