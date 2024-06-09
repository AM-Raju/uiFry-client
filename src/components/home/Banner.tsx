"use client";
import { animate, delay, motion } from "framer-motion";

import Image from "next/image";
import Button from "../shared/Button";
import achievementImg from "@/assets/images/achievement.png";
import mobileFront from "@/assets/images/iPhone-13-Pro-Front.png";
import mobileMiddle from "@/assets/images/iPhone-13-Pro-middle.png";
import circleImg from "@/assets/images/threeCircle.svg";
import ColorPatch from "../shared/ColorPatch";
import StarVector from "../shared/StarVector";
import { FaRegCirclePlay } from "react-icons/fa6";

const Banner = () => {
  const movingLeftRight = {
    initial: {
      x: 10,
    },
    animate: {
      x: -10,
      transition: {
        x: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  const circleOpacity = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const fromRight = {
    initial: {
      x: 800,
    },
    animate: {
      x: 0,
      transition: {
        x: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };
  const fromTop = {
    initial: {
      y: -800,
    },
    animate: {
      y: 0,
      transition: {
        x: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };
  const fromLeft = {
    initial: {
      x: -1400,
    },
    animate: {
      x: 0,
      transition: {
        x: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center justify-between relative mt-36 lg:mt-0">
      <div className="absolute -top-12 right-0 lg:-right-28 ">
        <StarVector></StarVector>
      </div>
      <div className="absolute top-5 -left-24 size-12 -rotate-45">
        <StarVector></StarVector>
      </div>
      {/* Color Patch */}
      <div className="absolute -z-20 -top-24 lg:left-28 lg:size-[450px] rotate-180 ">
        <ColorPatch></ColorPatch>
      </div>
      {/* Text Block */}
      <div className="relative -top-44 md:max-xl:top-0 xl:top-0  xl:mt-[115px] px-3 lg:px-0 ">
        <div className="space-y-6">
          <h1 className="text-3xl xl:text-6xl font-bold">
            Make The Best <br /> Financial Decisions
          </h1>
          <p className="max-w-[50ch] font-medium tracking-wide text-gray-500">
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
            <button className="flex items-center justify-center gap-4  font-medium text-lg hover:text-[#ff5555] transition-all duration-300">
              <FaRegCirclePlay className="text-3xl" />
              Watch Video
            </button>
          </div>
        </div>
        <div className="mt-4 relative">
          <div className="absolute lg:top-14  left-36 size-12 -rotate-45">
            <StarVector></StarVector>
          </div>
          <motion.div
            variants={movingLeftRight}
            initial="initial"
            animate="animate"
          >
            <Image
              src={achievementImg}
              width={569}
              height={358}
              alt="Achievement"
            ></Image>
          </motion.div>
        </div>
      </div>
      {/* Mobile Block */}
      <div className="">
        {/* Circle BG */}
        <motion.div
          variants={circleOpacity}
          initial="initial"
          animate="animate"
        >
          <Image
            className="absolute -top-32 lg:top-0 right-0 md:max-xl:right-10  xl:-right-20  w-[610px] "
            src={circleImg}
            width={656}
            height={726}
            alt="Three circle"
          ></Image>
        </motion.div>
        <div className="relative max-lg:w-[300px] w-[500px] h-[590px]">
          <div className="absolute lg:bottom-10 left-14 size-12 ">
            <StarVector></StarVector>
          </div>
          <div className="relative lg:top-10">
            <motion.div
              variants={fromRight}
              initial="initial"
              animate="animate"
            >
              <Image
                className="absolute -top-2 left-[110px] lg:left-36 max-sm:w-[220px] w-[380px] drop-shadow-2xl"
                src={mobileFront}
                width={572}
                height={752}
                alt="Mobile Front"
              ></Image>
            </motion.div>
            <motion.div variants={fromTop} initial="initial" animate="animate">
              <Image
                className="absolute -top-16 left-10 lg:left-14 max-sm:w-[220px] w-[380px]"
                src={mobileMiddle}
                width={572}
                height={752}
                alt="Mobile Front"
              ></Image>
            </motion.div>
            <motion.div variants={fromLeft} initial="initial" animate="animate">
              <Image
                className="absolute -top-32 -left-8 max-sm:w-[220px] w-[380px]"
                src={mobileFront}
                width={572}
                height={752}
                alt="Mobile Front"
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
