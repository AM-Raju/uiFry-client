import Image from "next/image";
import colorPatchImg from "@/assets/images/color-patch.png";

const ColorPatch = () => {
  return (
    <div className="w-fit">
      <Image
        src={colorPatchImg}
        width={601}
        height={492}
        alt="Color Patch"
      ></Image>
    </div>
  );
};

export default ColorPatch;
