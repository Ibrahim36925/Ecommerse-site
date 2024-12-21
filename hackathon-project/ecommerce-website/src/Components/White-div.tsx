import Image from "next/image";
import couples from "@/images/asian-woman-man-with-winter-clothes 1.png";

export default function Whitediv() {
  return (
    <div className="flex flex-col-reverse md:flex-row overflow-hidden gap-8 items-center p-4 max-w-7xl mx-auto mt-6">
  <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full md:w-[704px]">
    <Image
      src={couples}
      alt="Neural Universe product showcase" 
      className="object-contain w-full aspect-[1.03]" 
    />
  </div>
  <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto font-bold tracking-wide min-w-[240px] w-full md:w-[573px]">
    <div className="text-base tracking-normal text-stone-300">SUMMER 2020</div>
    <h1 className="mt-8 text-4xl leading-[50px] text-slate-800">
      Part of the Neural <span className="block md:inline">Universe</span>
    </h1>
    <p className="mt-8 text-xl leading-8 text-neutral-500">
      We know how large objects will act, 
      <span className="block md:inline">but things on a small scale.</span>
    </p>
    <div className="flex flex-col sm:flex-row gap-2.5 items-start self-start mt-8 text-sm leading-loose text-center">
      <button 
        className="overflow-hidden px-10 py-4 rounded-md max-md:px-5 transition-colors duration-300 hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none text-white bg-green-500"  
        aria-label="BUY NOW button">
        BUY NOW
      </button>
      <button 
        className="overflow-hidden px-10 py-4 rounded-md max-md:px-5 transition-colors duration-300 hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none text-green-500 border border-green-500 border-solid hover:bg-green-50"  
        aria-label="READ MORE button">
        READ MORE
      </button>
    </div>
  </div>
</div>

  );
}