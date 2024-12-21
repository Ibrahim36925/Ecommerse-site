import Image from "next/image"
import Navbar from "@/Components/Navbar"
import Footers from "@/Components/Footers"
import grayarrow from '../../../public/grayarrow.svg'
import redjacket from '@/images/redbgwoman.png'
import blackhoodiewoman from '@/images/blackhoodiewoman.png'
import blackoutfitwoman from '@/images/blackoutfitwoman.png'
import bluejacketwoman from '@/images/bluejacketwoman.png'
import blackbagwoman from '@/images/blackbagwoman.png'
import jacketwoman from '@/images/jacketwoman.png'
import facebook from '@/images/facebook.png'
import instagram from '@/images/instagram.png'
import twitter from '@/images/twitter.png'
import team1 from '@/images/team1.jpg'
import team2 from '@/images/team2.jpg'
import team3 from '@/images/team3.jpg'
import team4 from '@/images/team4.jpg'
import team5 from '@/images/team5.jpg'
import team6 from '@/images/team6.jpg'
import team7 from '@/images/team7.jpg'
const Team =()=>{

  return (
    <div>
      <Navbar/>
      <div className="flex overflow-hidden flex-col pb-8 w-full font-bold bg-white max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center px-20 pt-5 w-full bg-white bg-opacity-50 max-md:px-5">
        <div className="flex z-10 flex-col -mb-8 w-full max-w-[1043px] max-md:mb-2.5">
          <div className="flex overflow-hidden flex-col justify-center items-center self-center py-12 mt-8 max-w-full tracking-wide text-center w-[870px]">
            <div className="flex overflow-hidden items-center w-full">
              <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] w-full">
                <div className="text-base tracking-normal text-neutral-500">WHAT WE DO</div>
                <h1 className="mt-4 text-6xl leading-none text-slate-800 max-md:text-4xl">
                  Innovation tailored for you
                </h1>
                <nav className="flex overflow-hidden gap-4 items-center py-2.5 mt-4 text-sm leading-6 whitespace-nowrap" aria-label="Breadcrumb">
                  <a className="self-stretch my-auto text-slate-800" href="/">Home</a>
                  <Image
                    alt="Arrow icon"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
                    src={grayarrow}
                    width={9}
                    height={9}
                  />
                  <span className="self-stretch my-auto text-neutral-500">Team</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden justify-center w-full bg-white">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-6/12">
          <Image
            alt="Red Background Woman"
            className="object-contain w-full aspect-[1.32]"
            src={redjacket}
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
        <div className="w-full md:w-6/12 grid grid-cols-2 gap-5">
          <Image
            alt="Black Bag Woman"
            className="object-contain w-full aspect-[1.39]"
            src={blackbagwoman}
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
          <Image
            alt="Jacket Woman"
            className="object-contain w-full aspect-[1.39]"
            src={jacketwoman}
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
          <Image
            alt="Black Hoodie Woman"
            className="object-contain w-full aspect-[1.39]"
            src={blackhoodiewoman}
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
          <Image
            alt="Blue Jacket Woman"
            className="object-contain w-full aspect-[1.39]"
            src={bluejacketwoman}
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center px-5 md:px-20 w-full bg-white">
    <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24">
        <div className="flex flex-col items-center max-w-full text-4xl font-bold tracking-wide leading-none text-slate-800 w-full md:w-[607px]">
            <h2 className="text-center">Meet Our Team</h2>
        </div>
        
        <div className="flex flex-wrap gap-8 items-center justify-center mt-28 w-full max-md:mt-10">
            {/* <!-- Team Member 1 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team1}/>
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook} />
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram} />
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter} />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team2} />
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook} />
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram} />
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter} />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team3}/>
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center mt-28 w-full max-md:mt-10">
            {/* <!-- Team Member 4 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team4}/>
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Team Member 5 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team5}/>
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center justify-center mt-28 w-full max-md:mt-10">
            {/* <!-- Team Member 6 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team6}/>
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter}/>
                        </div>
                    </div>
                </div>
            </div>
{/* 
            <!-- Team Member 7 --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
                <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
                    <div className="flex flex-col w-full">
                        <Image alt="Username - Profession" className="object-contain w-full aspect-[1.37]" src={team7}/>
                    </div>
                    <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                        <div className="text-base font-bold text-center text-slate-800">Username</div>
                        <div className="mt-2.5 text-sm font-bold text-center text-neutral-500">Profession</div>
                        <div className="flex gap-5 justify-center items-center mt-2.5">
                            <Image alt="" className="object-contain w-6 aspect-square" src={facebook}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={instagram}/>
                            <Image alt="" className="object-contain w-6 aspect-square" src={twitter}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      <Footers/>
    </div>
  )
}

export default Team
