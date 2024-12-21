import Image from "next/image";
import picture1 from "@/images/product-cover-5.png";
import pic2 from "@/images/product-cover-5 (1).png";
import pic3 from "@/images/product-cover-5 (2).png";
import pic4 from "@/images/product-cover-5 (3).png";
import pic5 from "@/images/product-cover-5 (4).png";
import pic6 from "@/images/product-cover-5 (5).png";
import pic7 from "@/images/product-cover-5 (6).png";
import pic8 from "@/images/product-cover-5 (7).png";

export default function ProductCard() {
  const products = [
    { image: picture1 },
    { image: pic2 },
    { image: pic3 },
    { image: pic4 },
    { image: pic5 },
    { image: pic6 },
    { image: pic7 },
    { image: pic8 },
  ];

  return (
    <div className="flex overflow-hidden justify-center items-end px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 justify-center">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center w-[238px]">
            <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
              <div className="flex overflow-hidden flex-col w-full">
                <Image
                  className="object-contain w-full aspect-[0.56]"
                  alt="Graphic Design product image"
                  src={product.image}
                />
              </div>
              <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Graphic Design
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  English Department
                </div>
                <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                  <div className="text-stone-300 w-[52px]">$16.48</div>
                  <div className="text-teal-700 w-[45px]">$6.48</div>
                </div>
                <div className="flex gap-1.5 items-center mt-2.5">
                  <div className="flex my-auto w-4 h-4 rounded-full bg-sky-500 fill-sky-500"></div>
                  <div className="flex my-auto w-4 h-4 rounded-full bg-teal-700 fill-teal-700"></div>
                  <div className="flex my-auto w-4 h-4 rounded-full bg-orange-400 fill-orange-400"></div>
                  <div className="flex my-auto w-4 h-4 rounded-full bg-slate-800 fill-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
