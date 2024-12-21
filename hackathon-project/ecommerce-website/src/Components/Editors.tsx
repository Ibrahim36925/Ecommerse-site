import Image from "next/image";
import Men from "@/images/filter.png";
import women from "@/images/filter (1).png";
import div1 from "@/images/filter (2).png";
import div2 from "@/images/filter (3).png";

export default function Editors() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
      <div className="text-center " style={{marginTop:"80px"}}>
        <h1 className="font-bold text-3xl ">Editors pick</h1>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex overflow-hidden items-center py-20 max-md:flex-wrap gap-4 lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="flex flex-1 gap-4 lg:flex-row md:flex-row sm:flex-col flex-col">
          <div className="relative overflow-hidden">
            <Image
              src={Men}
              alt="MEN category"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              MEN
            </div>
          </div>
          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              src={women}
              alt="WOMEN category"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              WOMEN
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              src={div1}
              alt="ACCESSORIES category"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              ACCESSORIES
            </div>
          </div>
          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              src={div2}
              alt="KIDS category"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
