import Image from "next/image"
import Navbar from "@/Components/Navbar"
import Footers from "@/Components/Footers"
import yellowgirl from "@/images/yellowgirl.png"
import player from '@/images/player.png'
import instagram from '@/images/instagram.png'
import facebook from '@/images/facebook.png'
import twitter from '@/images/twitter.png'
import team1 from '@/images/team1.jpg'
import team2 from '@/images/team2.jpg'
import team3 from '@/images/team3.jpg'
import team4 from '@/images/team4.jpg'
import team5 from '@/images/team5.jpg'
import team6 from '@/images/team6.jpg'
import team7 from '@/images/team7.jpg'
import team8 from '@/images/team8.jpg'
import team9 from '@/images/team9.jpg'
import team10 from '@/images/team10.jpg'
import hooli from '@/images/hoolipng.png'
import lyft from '@/images/lyft.png'
import leaf from '@/images/leaf.png'
import stripe from '@/images/stripe.png'
import aws from '@/images/aws.png'
import woman from '@/images/woman.png'


// import shop8 from '@/images/shop8.png'
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden px-20 pt-14 w-full max-md:px-3">
        <div className="flex gap-5 items-center max-md:flex-col">
          {/* Left Section */}
          <div className="flex flex-col max-md:ml-0 lg:mx-0 md:mx-0 sm:mx-auto mx-auto max-md:mx-auto">
            <div className="flex overflow-hidden z-10 flex-col justify-center self-stretch my-auto -mr-40 w-full max-md:w-full font-bold tracking-wide text-slate-800 max-md:mt-10">
              <div className="flex overflow-hidden flex-wrap gap-8 items-center">
                <div className="lg:mx-0 md:mx-0 sm:mx-auto w-full h-full mx-auto flex overflow-hidden flex-col self-stretch my-auto lg:text-start md:text-start sm:text-center text-center">
                  <div className="text-base tracking-normal">ABOUT COMPANY</div>
                  <div className="mt-9 text-6xl leading-none lg:text-start md:text-start sm:text-center text-center">
                    ABOUT US
                  </div>
                  <div className="mt-9 text-sm lg:text-xl md:text-xl sm:text-sm text-neutral-500">
                    We know how large objects will act, <br />
                    but things on a small scale
                  </div>
                  <button className="flex gap-2.5 items-start self-start mt-9 text-sm leading-loose text-center text-white overflow-hidden px-10 py-4 bg-sky-500 rounded-md max-md:px-5 lg:mx-0 md:mx-0 sm:mx-auto mx-auto max-md:mx-auto">
                    Get Quote Now
                  </button>
                </div>
                <div className="flex shrink-0 self-stretch my-auto min-w-[240px] w-[415px]"></div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full max-md:mx-auto">
            <Image
              className="object-contain grow w-full aspect-[0.95] max-md:mt-10"
              src={yellowgirl}
              alt="About Us Illustration"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center py-6 w-full">
        <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1018px]">
          {/* Left Section */}
          <div className="flex flex-col grow shrink justify-center self-stretch py-6 my-auto min-w-[240px] w-[315px]">
            <div className="sm:px-8 lg:px-0 md:px-0 px-8 flex flex-col max-w-full w-[394px]">
              <div className="text-sm tracking-wide leading-none text-red-500">
                Problems trying
              </div>
              <div className="mt-6 text-2xl font-bold tracking-normal leading-8 text-slate-800">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="sm:px-8 lg:px-0 md:px-0 px-8 overflow-hidden grow shrink self-stretch my-auto text-sm tracking-wide leading-5 min-w-[240px] text-neutral-500 w-[450px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col justify-center items-center w-full font-bold text-center max-md:px-5">
        <div className="flex flex-col justify-center items-center py-20 w-full max-w-[1050px]">
          <div className="flex flex-wrap gap-8 items-start lg:mx-0 md:mx-0 sm:mx-auto mx-auto">
            {/* Happy Customers */}
            <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
              <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
                15K
              </div>
              <div className="text-base tracking-normal text-neutral-500">
                Happy Customers
              </div>
            </div>

            {/* Monthly Visitors */}
            <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
              <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
                150K
              </div>
              <div className="text-base tracking-normal text-neutral-500">
                Monthly Visitors
              </div>
            </div>

            {/* Countries Worldwide */}
            <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
              <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
                15
              </div>
              <div className="text-base tracking-normal text-neutral-500">
                Countries Worldwide
              </div>
            </div>

            {/* Top Partners */}
            <div className="flex flex-col items-center lg:w-50 md:w-52 sm:w-full w-full">
              <div className="text-8xl w-full tracking-wide leading-none text-slate-800 max-md:text-4xl">
                100+
              </div>
              <div className="text-base tracking-normal text-neutral-500">
                Top Partners
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24">
        <Image
          alt="Company Overview"
          className="object-contain mb-0 w-full aspect-[1.83] max-w-[989px] max-md:mb-2.5"
          src={player}
        />
      </div>

      <div className="flex flex-col items-center px-20 pb-2 w-full bg-white max-md:px-5">
        <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24">
          <div className="flex flex-col items-center w-[607px] tracking-wide max-w-full">
            <div className="flex flex-col items-center w-full">
              <div className="text-4xl font-bold leading-none text-slate-800">Meet Our Team</div>
              <div className="mt-2.5 text-sm leading-5 text-center text-neutral-500">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 items-center mt-28 max-md:mt-10">
            {/* <!-- Team Member Cards --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team1}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Duplicate and customize the above structure for additional team members --> */}
            {/* <!-- Example for another member --> */}
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team2}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team3}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team4}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team5}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team6}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team7}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team8}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team10}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[316px]">
              <div className="flex flex-col max-w-full bg-white w-[316px]">
                <div className="flex flex-col w-full">
                  <Image
                    alt="Username - Profession"
                    className="object-contain w-full aspect-[1.37]"
                    src={team9}
                  />
                </div>
                <div className="flex flex-col items-center p-8 w-full max-w-[316px] max-md:px-5">
                  <div className="text-base font-bold tracking-normal text-center text-slate-800">Username</div>
                  <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                    Profession
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-2.5">
                    <Image
                      alt="Facebook Icon"
                      className="object-contain w-6 aspect-square"
                      src={facebook}
                    />
                    <Image
                      alt="Instagram Icon"
                      className="object-contain w-6 aspect-square"
                      src={instagram}
                    />
                    <Image
                      alt="Twitter Icon"
                      className="object-contain w-6 aspect-square"
                      src={twitter}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Repeat structure for other team members --> */}
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5">
        <div className="flex overflow-hidden flex-col items-center py-20 w-full">
          <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[864px]">
            <div className="flex overflow-hidden flex-col items-center w-full">
              <div className="text-4xl font-bold leading-none text-slate-800">Big Companies Are Here</div>
              <div className="mt-8 text-sm leading-5 text-center text-neutral-500 w-[547px]">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-wrap gap-8 items-center py-12 mt-6 -mr-1">
            <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 sm:w-full w-full gap-4">
              <Image
                alt="Stripe logo"
                className="object-contain max-w-full aspect-[3.03]"
                src={stripe}
                style={{ width: '103px' }}
              />
            </div>
            <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 sm:w-full w-full gap-4">
              <Image
                alt="Hooli logo"
                className="object-contain max-w-full aspect-[1.41]"
                src={hooli}
                style={{ width: '83px' }}
              />
            </div>
            <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 sm:w-full w-full gap-4">
              <Image
                alt="AWS logo"
                className="object-contain max-w-full aspect-[1.36]"
                src={aws}
                style={{ width: '102px' }}
              />
            </div>
            <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 sm:w-full w-full gap-4">
              <Image
                alt="Leaf logo"
                className="object-contain max-w-full aspect-[2.45]"
                src={leaf}
                style={{ width: '103px' }}
              />
            </div>
            <div className="flex overflow-hidden lg:flex-row md:flex-row sm:flex-col flex-col items-center self-stretch my-auto lg:w-40 sm:w-full w-full gap-4">
              <Image
                alt="Lyft logo"
                className="object-contain max-w-full aspect-[1.68]"
                src={lyft}
                style={{ width: '104px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden lg:pl-20 md:pl-20 sm:pl-0 pl-0 w-full lg:py-0 md:py-0 sm:py-8 py-8 bg-sky-600 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col justify-center lg:text-start md:text-start sm:text-center text-center lg:w-[64%] md:w-[64%] sm:w-full w-full max-md:ml-0">
            <div className="flex overflow-hidden z-10 flex-col justify-center mr-0 w-full text-sm font-bold tracking-wide text-white">
              <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center max-w-full">
                <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[438px]">
                  <div className="text-base tracking-normal">WORK WITH US</div>
                  <div className="mt-6 text-4xl leading-none">Now Lets grow Yours</div>
                  <div className="mt-6 leading-5">
                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                  </div>
                  <button className="lg:mx-0 md:mx-0 sm:mx-auto mx-auto overflow-hidden self-start px-10 py-4 mt-6 leading-loose text-center whitespace-nowrap rounded-md border border-solid border-neutral-50 text-neutral-50 max-md:px-5">
                    Button
                  </button>
                </div>
                <div className="flex shrink-0 self-stretch my-auto min-w-[240px] w-[548px]"></div>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col ml-5 w-[36%] max-md:ml-0 md:flex sm:hidden hidden">
            <Image
              className="object-contain grow w-full aspect-[0.93]"
              src={woman}
              alt="Woman"
            />
          </div>
        </div>
      </div>


      <Footers />
    </div>
  )
}

export default About
