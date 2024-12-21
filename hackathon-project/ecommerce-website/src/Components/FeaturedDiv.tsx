import Image from 'next/image'
import post1 from '@/images/post1.png'
import post2 from '@/images/post2.png'
import post3 from '@/images/post3.png'
import leftarrow from "../../public/leftarrow.svg"
import graphicon from "../../public/graphicon.svg"
import clock from "../../public/clock.svg"

const FeaturedDiv = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
    <div className="w-full text-center py-20 flex flex-col gap-5">
      <p className="text-[#23A6F0] font-semibold">Practice advice</p>
      <h1 className="text-5xl font-bold tracking-tighter">Featured Products</h1>
      <p className="max-w-[28rem] mx-auto">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
    </div>
  
    <div className="flex flex-wrap gap-8 justify-center">
      
      <div className="flex flex-col items-center min-w-[240px] w-[328px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
          <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
            <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
              <Image src={post1} className="object-cover absolute inset-0 size-full" alt="Loudest à la Madison #1 (L'integral)" />
              <div className="max-w-12 py-3 tex-xs flex items-center justify-center overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
                NEW
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
            <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
              <div className="self-stretch my-auto text-blue-300">Google</div>
              <div className="self-stretch my-auto">Trending</div>
              <div className="self-stretch my-auto">New</div>
            </div>
            <div className="mt-2.5 text-xl leading-8 text-slate-800">Loudest à la Madison #1 (L'integral)</div>
            <div className="mt-2.5 text-sm leading-5">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                <Image src={clock} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
                <div className="self-stretch my-auto">22 April 2021</div>
              </div>
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Image src={graphicon} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
                <div className="self-stretch my-auto">10 comments</div>
              </div>
            </div>
            <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
              <span className="self-stretch my-auto">Learn More</span>
              <Image src={leftarrow} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
            </button>
          </div>
        </div>
      </div>
  
      <div className="flex flex-col items-center min-w-[240px] w-[328px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
          <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
            <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
              <Image src={post2} className="object-cover absolute inset-0 size-full" alt="Loudest à la Madison #1 (L'integral)" />
              <div className="max-w-12 py-3 tex-xs flex items-center justify-center overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
                NEW
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
            <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
              <div className="self-stretch my-auto text-blue-300">Google</div>
              <div className="self-stretch my-auto">Trending</div>
              <div className="self-stretch my-auto">New</div>
            </div>
            <div className="mt-2.5 text-xl leading-8 text-slate-800">Loudest à la Madison #1 (L'integral)</div>
            <div className="mt-2.5 text-sm leading-5">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                <Image src={clock} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
                <div className="self-stretch my-auto">22 April 2021</div>
              </div>
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Image src={graphicon} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
                <div className="self-stretch my-auto">10 comments</div>
              </div>
            </div>
            <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
              <span className="self-stretch my-auto">Learn More</span>
              <Image src={leftarrow} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center min-w-[240px] w-[328px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
          <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
            <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
              <Image src={post3} className="object-cover absolute inset-0 size-full" alt="Loudest à la Madison #1 (L'integral)" />
              <div className="max-w-12 py-3 tex-xs flex items-center justify-center overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
                NEW
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
            <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
              <div className="self-stretch my-auto text-blue-300">Google</div>
              <div className="self-stretch my-auto">Trending</div>
              <div className="self-stretch my-auto">New</div>
            </div>
            <div className="mt-2.5 text-xl leading-8 text-slate-800">Loudest à la Madison #1 (L'integral)</div>
            <div className="mt-2.5 text-sm leading-5">
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Image src={clock} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
                <div className="self-stretch my-auto">22 April 2021</div>
              </div>
              <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Image src={graphicon} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
                <div className="self-stretch my-auto">10 comments</div>
              </div>
            </div>
            <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
              <span className="self-stretch my-auto">Learn More</span>
              <Image src={leftarrow} className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="Calendar icon" />
            </button>
          </div>
        </div>
      </div>
  
  
    </div>
  </div>
  
  )
}

export default FeaturedDiv
