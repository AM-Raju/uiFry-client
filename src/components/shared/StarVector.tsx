import Image from "next/image";
import starIcon from "@/assets/images/Star.svg";

const StarVector = () => {
  return (
    <div className=" w-fit ">
      <Image src={starIcon} width={64} height={52} alt="Star Icon"></Image>
    </div>
  );
};

export default StarVector;
