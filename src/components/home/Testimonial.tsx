import Image from "next/image";
import iphoneImg2 from "@/assets/images/iphone-features.png";
import onHoldImg2 from "@/assets/images/adv2-on-hold.png";
import circleImg from "@/assets/images/threeCircle.png";
import ColorPatch from "../shared/ColorPatch";

import { GiStarShuriken } from "react-icons/gi";
import { BiSolidQuoteLeft } from "react-icons/bi";

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
          <div className="">
            {/* Focused Image */}
            <div className="absolute top-1/2 left-40">
              <div className="size-52 relative rounded-full overflow-hidden  border-4 border-gray-500 ">
                <Image
                  className=""
                  src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                  width={300}
                  height={349}
                  alt="Person"
                ></Image>
              </div>
              <div className=" bg-[#ff5555] size-16 flex items-center justify-center rounded-full absolute top-16 -right-8 text-4xl text-white">
                <BiSolidQuoteLeft />
              </div>
            </div>
            {/* Other Images */}
            <div className="size-28 absolute top-16 right-7 rounded-full overflow-hidden  border-4 border-gray-500 ">
              <Image
                className=""
                src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                width={300}
                height={349}
                alt="Person"
              ></Image>
            </div>
            <div className="size-24 absolute top-4 left-10 rounded-full overflow-hidden  border-4 border-gray-500 ">
              <Image
                className=""
                src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                width={300}
                height={349}
                alt="Person"
              ></Image>
            </div>
            <div className="size-20 absolute top-96 left-20 rounded-full overflow-hidden  border-4 border-gray-500 ">
              <Image
                className=""
                src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                width={300}
                height={349}
                alt="Person"
              ></Image>
            </div>
            <div className="size-16  absolute -bottom-44 right-16 rounded-full overflow-hidden  border-4 border-gray-500 ">
              <Image
                className=""
                src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                width={300}
                height={349}
                alt="Person"
              ></Image>
            </div>
          </div>
        </div>
        {/* Text block */}
        <div className="w-[450px] relative mt-10 flex items-center">
          <div className="">
            {/* Features block */}
            <div className="mt-8">
              {/* Single feature block */}
              <div>
                <div className="flex justify-center items-center w-fit gap-3 mb-3">
                  <h4 className="text-3xl font-semibold">
                    The Best Financial Accounting App Ever!
                  </h4>
                </div>
                <p className="mb-8 font-medium text-gray-500 tracking-wide">
                  &quot;Arcu at dictum sapien, mollis. Vulputate sit id
                  accumsan, ultricies. In ultrices malesuada elit mauris etiam
                  odio. Duis tristique lacus, et blandit viverra nisl velit. Sed
                  mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus
                  eget eget ac dolor neque lorem sapien, suspendisse
                  aliquam&quot;.
                </p>
              </div>
              {/* User profile thumbs */}
              <div className="flex gap-2">
                <div className="size-8  rounded-full overflow-hidden  border-2 border-gray-500 ">
                  <Image
                    className=""
                    src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                    width={300}
                    height={349}
                    alt="Person"
                  ></Image>
                </div>
                <div className="size-8  rounded-full overflow-hidden  border-2 border-gray-500 ">
                  <Image
                    className=""
                    src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                    width={300}
                    height={349}
                    alt="Person"
                  ></Image>
                </div>
                <div className="size-8  rounded-full overflow-hidden  border-2 border-gray-500 ">
                  <Image
                    className=""
                    src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                    width={300}
                    height={349}
                    alt="Person"
                  ></Image>
                </div>
                <div className="size-8  rounded-full overflow-hidden  border-2 border-gray-500 ">
                  <Image
                    className=""
                    src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                    width={300}
                    height={349}
                    alt="Person"
                  ></Image>
                </div>
                <div className="size-8  rounded-full overflow-hidden  border-2 border-gray-500 ">
                  <Image
                    className=""
                    src={"https://i.ibb.co/6nBTkTn/9.jpg"}
                    width={300}
                    height={349}
                    alt="Person"
                  ></Image>
                </div>
              </div>
              <h4 className="font-semibold text-lg mt-6">Nick Jonas</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
