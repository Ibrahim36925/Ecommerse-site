import Navbar from "@/Components/Navbar"
import Footers from "@/Components/Footers"
import Image from "next/image"
import pin from '../../../public/pin.svg'
import phone from '../../../public/phone.svg'
import email from '../../../public/email.svg'
import arrow from '../../../public/arrow.svg'
import darkfacebook from '../../../public/darkfacebook.png' 
import darkinstagram from '../../../public/darkinstagram.png' 
import darktwitter from '../../../public/darktwitter.png' 
import darklinkedin from '../../../public/darklinkedin.png'
import family from '@/images/family.png' 
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className="overflow-hidden px-4 sm:px-20 pt-8 sm:pt-16 w-full bg-white">
      <div className="flex gap-5 flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[62%]">
          <div className="flex overflow-hidden z-10 flex-col justify-center py-12 sm:py-20 w-full text-center lg:text-left">
            <div className="flex overflow-hidden flex-wrap gap-8 items-center">
              <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-full lg:w-[599px]">
                <div className="text-base font-bold tracking-normal text-slate-800">CONTACT US</div>
                <h1 className="mt-6 sm:mt-9 text-4xl sm:text-6xl font-bold tracking-wide leading-tight sm:leading-[80px] text-slate-800">
                  Get in touch today!
                </h1>
                <div className="mt-6 sm:mt-9 text-lg sm:text-xl tracking-wide leading-8 text-neutral-500">
                  We know how large objects will act, but things on a small scale
                </div>
                <div className="flex flex-col mt-6 sm:mt-9 max-w-full text-xl sm:text-2xl font-bold tracking-normal leading-none text-slate-800 mx-auto lg:mx-0">
                  <div>Phone: +451 215 215</div>
                  <div className="mt-4">Fax: +451 215 215</div>
                </div>
                <div className="flex justify-center lg:justify-start gap-6 sm:gap-9 items-center p-2.5 mt-6 sm:mt-9">
                  <Image
                    alt="Facebook"
                    className="object-contain shrink-0 aspect-square w-[30px] hover:opacity-80 transition-opacity"
                    src={darkfacebook}
                    width={30}
                    height={30}
                  />
                  <Image
                    alt="Twitter"
                    className="object-contain shrink-0 aspect-square w-[30px] hover:opacity-80 transition-opacity"
                    src={darktwitter}
                    width={30}
                    height={30}
                  />
                  <Image
                    alt="Instagram"
                    className="object-contain shrink-0 aspect-square w-[30px] hover:opacity-80 transition-opacity"
                    src={darkinstagram}
                    width={30}
                    height={30}
                  />
                  <Image
                    alt="LinkedIn"
                    className="object-contain shrink-0 aspect-square w-[30px] hover:opacity-80 transition-opacity"
                    src={darklinkedin}
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section (Image) */}
        <div className="flex flex-col w-full lg:w-[38%]">
          <Image
            alt="Contact illustration"
            className="object-contain w-full aspect-[0.77]"
            src={family}
            width={600}
            height={460}
          />
        </div>
      </div>
    </div>

    <div className="flex overflow-hidden flex-col justify-center items-center px-4 sm:px-20 w-full font-bold tracking-wide text-center bg-white text-slate-800">
      <div className="flex overflow-hidden flex-col items-center py-16 sm:py-28 w-full max-w-[1050px]">
        <div className="flex overflow-hidden flex-col items-center max-w-full w-[633px]">
          <div className="flex overflow-hidden flex-col items-center w-full">
            <h2 className="text-sm leading-6">VISIT OUR OFFICE</h2>
            <div className="mt-2.5 text-3xl sm:text-4xl leading-tight sm:leading-[50px]">
              We help small businesses with big ideas
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-20 w-full">
          {/* Contact Support Section */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[327px]">
            <div className="flex overflow-hidden flex-col items-center px-6 sm:px-10 py-8 sm:py-12 max-w-full bg-white w-full sm:w-[328px]">
              <Image
                alt="Contact support icon"
                className="object-contain aspect-square w-[60px] sm:w-[72px]"
                src={email}
                width={72}
                height={72}
              />
              <div className="flex overflow-hidden flex-col mt-4 max-w-full leading-6 text-center w-full sm:w-[216px]">
                <div>georgia.young@example.com</div>
                <div>georgia.young@ple.com</div>
              </div>
              <div className="mt-4 text-base tracking-normal">Get Support</div>
              <button
                className="overflow-hidden px-6 sm:px-9 py-3 sm:py-4 mt-4 leading-6 text-sky-500 border border-sky-500 border-solid rounded-[37px] hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label="Submit support request"
              >
                Submit Request
              </button>
            </div>
          </div>

          {/* Pin Contact Section */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[327px]">
            <div className="flex overflow-hidden flex-col items-center px-6 sm:px-10 py-8 sm:py-12 max-w-full bg-white w-full sm:w-[328px]">
              <Image
                alt="Contact support icon"
                className="object-contain aspect-square w-[60px] sm:w-[72px]"
                src={pin}
                width={72}
                height={72}
              />
              <div className="flex overflow-hidden flex-col mt-4 max-w-full leading-6 text-center w-full sm:w-[216px]">
                <div>georgia.young@example.com</div>
                <div>georgia.young@ple.com</div>
              </div>
              <div className="mt-4 text-base tracking-normal">Get Support</div>
              <button
                className="overflow-hidden px-6 sm:px-9 py-3 sm:py-4 mt-4 leading-6 text-sky-500 border border-sky-500 border-solid rounded-[37px] hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label="Submit support request"
              >
                Submit Request
              </button>
            </div>
          </div>

          {/* Phone Contact Section */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[327px]">
            <div className="flex overflow-hidden flex-col items-center px-6 sm:px-10 py-8 sm:py-12 max-w-full bg-white w-full sm:w-[328px]">
              <Image
                alt="Contact support icon"
                className="object-contain aspect-square w-[60px] sm:w-[72px]"
                src={phone}
                width={72}
                height={72}
              />
              <div className="flex overflow-hidden flex-col mt-4 max-w-full leading-6 text-center w-full sm:w-[216px]">
                <div>georgia.young@example.com</div>
                <div>georgia.young@ple.com</div>
              </div>
              <div className="mt-4 text-base tracking-normal">Get Support</div>
              <button
                className="overflow-hidden px-6 sm:px-9 py-3 sm:py-4 mt-4 leading-6 text-sky-500 border border-sky-500 border-solid rounded-[37px] hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label="Submit support request"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex overflow-hidden flex-col items-center px-4 sm:px-20 w-full font-bold tracking-wide text-center bg-white text-slate-800">
      <div className="flex flex-col py-px w-full max-w-[1050px]">
        <Image
          alt="Decorative element"
          className="object-contain z-10 self-center aspect-[1.02] stroke-[4px] stroke-sky-500 w-[50px] sm:w-[62px]"
          src={arrow}
          width={62}
          height={62}
        />
        <div className="flex overflow-hidden flex-col justify-center items-center py-12 sm:py-20">
          <div className="flex flex-col items-center max-w-full w-[607px]">
            <div className="flex overflow-hidden flex-col items-center">
              <div className="text-base tracking-normal">WE Cant WAIT TO MEET YOU</div>
              <h2 className="mt-4 text-4xl sm:text-6xl leading-none">Lets Talk</h2>
              <div className="flex gap-2.5 items-start mt-4 text-sm leading-loose text-white">
                <button
                  className="overflow-hidden px-8 sm:px-10 py-3 sm:py-4 bg-sky-500 rounded-md hover:bg-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  aria-label="Try it free now"
                >
                  Try it free now
                </button>
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

export default Contact
