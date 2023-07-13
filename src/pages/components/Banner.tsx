import banner from "@/../public/placeholder.png";
import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src={banner}
      alt="banner"
      className="w-[95.8rem] h-[11.8rem] mt-[1.8rem] mb-[3.4rem]"
    />
  );
}
