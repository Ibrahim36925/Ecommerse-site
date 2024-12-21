import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv(){
    return(
        <div className="flex lg:-mb-[2.65rem] overflow-hidden flex-col items-center px-20 w-full bg-teal-700 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pt-28 w-full max-w-[1036px] min-h-[711px] max-md:pt-24 max-md:max-w-full">
          <div className="mr-px">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden flex-wrap gap-8 items-start h-[599px] max-md:max-w-full">
                  <div className="flex overflow-hidden flex-col pt-16 text-white min-w-[240px] w-[509px] max-md:max-w-full">
                    <div className="text-xl tracking-wide">SUMMER 2020</div>
                    <div className="mt-8 text-6xl font-bold tracking-wide leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                      Vita Classic Product
                    </div>
                    <div className="mt-8 text-sm tracking-wide leading-5">
                      We know how large objects will act, We know how are objects will act, We know
                    </div>
                    <div className="flex gap-9 items-center self-start mt-8 font-bold text-center">
                      <div className="self-stretch my-auto text-2xl tracking-normal leading-none">
                        $16.48
                      </div>
                      <button 
                        className="overflow-hidden self-stretch px-10 py-4 my-auto text-sm tracking-wide leading-loose bg-green-500 rounded-md max-md:px-5" 
                        aria-label="Add product to cart">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-col items-center min-w-[240px] w-[510px] max-md:max-w-full"></div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  src={greenman}
                  alt="Vita Classic Product showcase" 
                  className="object-contain max-w-full aspect-[0.74] w-[449px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}