import Image from "next/image";
import Button from "../shared/Button";
import achievementImg from "@/assets/images/achievement.png";
import mobileFront from "@/assets/images/iPhone-13-Pro-Front.png";
import mobileMiddle from "@/assets/images/iPhone-13-Pro-middle.png";
import circleImg from "@/assets/images/threeCircle.svg";
import starIcon from "@/assets/images/Star.svg";
import ColorPatch from "../shared/ColorPatch";

const Banner = () => {
  return (
    <div className="flex items-center justify-between relative">
      <Image
        className="absolute -top-12 -right-28"
        src={starIcon}
        width={64}
        height={52}
        alt="Star Icon"
      ></Image>
      <Image
        className="absolute top-5 -left-24 size-12 -rotate-45"
        src={starIcon}
        width={64}
        height={52}
        alt="Star Icon"
      ></Image>
      {/* Color Patch */}
      <div className="absolute -z-20 -top-24 left-28 size-[450px] rotate-180">
        <ColorPatch></ColorPatch>
      </div>
      {/* Text Block */}
      <div className="mt-[115px]">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold">
            Make The Best <br /> Financial Decisions
          </h1>
          <p className="max-w-[45ch]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex items-center gap-10">
            <Button>
              Get Started
              {/* Arrow svg */}
              <svg
                className="inline-block ml-2"
                width="25"
                height="8"
                viewBox="0 0 25 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </Button>
            <button className="flex items-center justify-center gap-4 font-semibold text-lg">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                <path
                  d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
        <div className="mt-4 relative">
          <Image
            className="absolute top-14  left-36 size-12 -rotate-45"
            src={starIcon}
            width={64}
            height={52}
            alt="Star Icon"
          ></Image>
          <Image
            src={achievementImg}
            width={569}
            height={358}
            alt="Achievement"
          ></Image>
        </div>
      </div>
      {/* Mobile Block */}
      <div>
        {/* Circle BG */}
        <Image
          className="absolute top-0 -right-20 size-[610px]"
          src={circleImg}
          width={656}
          height={726}
          alt="Three circle"
        ></Image>
        <div className="relative w-[500px] h-[590px]">
          <Image
            className="absolute bottom-28 left-24 size-12 "
            src={starIcon}
            width={64}
            height={52}
            alt="Star Icon"
          ></Image>
          <Image
            className="absolute -top-2 left-36"
            src={mobileFront}
            width={572}
            height={752}
            alt="Mobile Front"
          ></Image>
          <Image
            className="absolute -top-16 left-10"
            src={mobileMiddle}
            width={572}
            height={752}
            alt="Mobile Front"
          ></Image>
          <Image
            className="absolute -top-32 -left-16"
            src={mobileFront}
            width={572}
            height={752}
            alt="Mobile Front"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
