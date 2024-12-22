import Image from "next/image"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footers"
import grayarrow from "../../../public/grayarrow.svg"
import womanbag from '@/images/womanwithbag.png'
import anothersample from '@/images/anothersample.png'
import blackoutfitwoman from '@/images/blackoutfitwoman.png'
import sampleimage from '@/images/sampleimage.png'
import laughing from '@/images/laughing.png'
import listicon from '../../../public/listicon.svg'
import hooli from '@/images/hoolipng.png'
import lyft from '@/images/lyft.png'
import leaf from '@/images/leaf.png'
import stripe from '@/images/stripe.png'
import aws from '@/images/aws.png'
import shop1 from '@/images/shop1.png'
import shop2 from '@/images/shop2.png'
import shop3 from '@/images/shop3.png'
import shop4 from '@/images/shop4.png'
import shop5 from '@/images/shop5.png'
import shop6 from '@/images/shop6.png'
import shop7 from '@/images/shop7.png'
import shop8 from '@/images/shop8.png'
import shop9 from '@/images/shop9.png'
import shop10 from '@/images/shop10.png'
import shop11 from '@/images/shop11.png'
import shop12 from '@/images/shop12.png'
import Link from "next/link"

const Shop = () => {
  return (
   <div>
        <Navbar/>
      <div className="flex overflow-hidden justify-between items-center py-6 px-20 w-full font-bold text-center whitespace-nowrap bg-neutral-50">
  <div className="flex overflow-hidden flex-wrap gap-8 items-center">
    <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none text-slate-800">
      Shop
    </div>
  </div>

  <nav className="flex overflow-hidden items-end self-stretch my-auto text-sm tracking-wide leading-6" aria-label="Breadcrumb">
    <div className="flex overflow-hidden gap-4 items-center py-2.5">
      <Link className="self-stretch my-auto text-slate-800" href="/" />Home
      <Image src={grayarrow} alt="grayArrow" className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]" />
      <span className="self-stretch my-auto text-stone-300">Shop</span>
    </div>
  </nav>
</div>
<div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
  <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start max-md:max-w-full">
      
      <div className="relative overflow-hidden">
        <Image 
          alt="clothes category" 
          className="object-cover w-full h-full" 
          src={blackoutfitwoman} 
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
          clothes
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <Image
          alt="clothes category" 
          className="object-cover w-full h-full" 
          src={womanbag} 
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
          clothes
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <Image
          alt="clothes category" 
          className="object-cover w-full h-full" 
          src={sampleimage} 
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
          clothes
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <Image
          alt="clothes category" 
          className="object-cover w-full h-full" 
          src={laughing} 
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
          clothes
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <Image
          alt="clothes category" 
          className="object-cover w-full h-full" 
          src={anothersample} 
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
          clothes
        </div>
      </div>
      
    </div>
  </div>
</div>

<div className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
  <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full max-w-[1050px] max-md:max-w-full">
    
    <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center w-full max-w-[1049px] max-md:max-w-full">
      
      <div className="gap-4 self-stretch px-px my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
        Showing all 12 results
      </div>
      
      <div className="flex gap-4 items-center self-stretch px-px my-auto">
        <div className="self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
          Views:
        </div>
        <div className="flex gap-4 items-center self-stretch my-auto">
          <button 
            className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]" 
            aria-label="Grid view">
            {/* <Image 
              loading="lazy" 
              alt="" 
              className="object-contain self-stretch my-auto w-4 aspect-square" 
              src="/icons/apps.svg" 
            /> */}
          </button>
          
          <button 
            className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 border-solid h-[46px] w-[46px]" 
            aria-label="List view">
            <Image
              alt="" 
              className="object-contain self-stretch my-auto w-4 aspect-square" 
              src={listicon} 
            />
          </button>
        </div>
      </div>
      
      <div className="flex gap-4 self-stretch px-px my-auto text-sm tracking-wide whitespace-nowrap min-w-[240px]">
        <div className="flex overflow-hidden flex-col my-auto leading-7 text-neutral-500 w-[141px]">
          <select 
            className="flex overflow-hidden gap-1.5 px-3.5 py-3 rounded-md border border-solid bg-stone-50 border-zinc-300 max-md:pr-5">
            <option>Popularity</option>
          </select>
        </div>
        <button 
          className="overflow-hidden px-5 py-2.5 font-bold leading-6 text-center text-white bg-sky-500 rounded-md w-[94px]">
          Filter
        </button>
      </div>
      
    </div>
  </div>
</div>
<div className="w-full flex lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-between justify-center lg:py-12 lg:px-20 p-32 lg:items-center gap-12 bg-[#FAFAFA]">
  <Image className="object-fit" src={hooli} alt="Hooli logo" />
  <Image className="object-fit" src={lyft} alt="Lyft logo" />
  <Image className="object-fit" src={leaf} alt="Leaf logo" />
  <Image className="object-fit" src={stripe} alt="Stripe logo" />
  <Image className="object-fit" src={aws} alt="AWS logo" />
</div>
<Footer/>

<div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
  <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start max-md:max-w-full">
      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
            <Image  className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop1}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop2}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>
       
      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop3}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop4}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop5}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop6}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop7}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop8}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop9}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop10}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop11}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[238px]">
        <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
          <div className="flex overflow-hidden flex-col w-full">
          <Image className="object-contain w-full aspect-[0.56]" alt="Graphic Design product image" src={shop12}/>
          </div>
          <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
            <div className="text-base font-bold tracking-normal text-center text-slate-800">Graphic Design</div>
            <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">English Department</div>
            <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
              <div className="text-stone-300 w-[52px]">$16.48</div>
              <div className="text-teal-700 w-[45px]">$6.48</div>
            </div>
            <div className="flex gap-1.5 items-center mt-2.5">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
<div className="flex justify-center">
<div className="flex overflow-hidden my-4 flex-col justify-center text-sm font-bold tracking-wide leading-6 text-center text-sky-500 whitespace-nowrap bg-white rounded-md border-solid shadow-sm ">
  <div className="flex items-start">
    <div className="overflow-hidden self-stretch px-3 py-3 border border-solid bg-zinc-100 text-stone-300 border-stone-300">
      First
    </div>
    <div className="overflow-hidden self-stretch px-3 py-3 border border-solid bg-white border-gray-200">
      1
    </div>
    <div className="overflow-hidden self-stretch px-3 py-3 border border-solid text-white bg-sky-500 border-gray-200">
      2
    </div>
    <div className="overflow-hidden self-stretch px-3 py-3 border border-solid bg-white border-gray-200">
      3
    </div>
    <div className="overflow-hidden self-stretch px-3 py-3 border border-solid bg-white border-gray-200">
      Next
    </div>
  </div>
</div>

</div>


   </div>
  )
}

export default Shop
