import Image from "next/image";
import instagram from '@/images/instagram.png'
import facebook from '@/images/facebook.png'
import twitter from '@/images/twitter.png'
export default function Footers() {
    return (
        <><div className="flex overflow-hidden flex-col justify-center items-center px-8 bg-neutral-50 max-md:px-5">
            <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-w-[1050px] max-md:max-w-full">
                <div className="flex justify-between overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">

                    {/* Brand Section */}
                    <div className="flex gl:px-0 md:px-0 sm:px-4 px-4 overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800">
                        <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">Bandage</div>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex overflow-hidden lg:px-0 md:px-0 sm:px-4 px-4 flex-col items-center self-stretch my-auto">
                        <div className="flex overflow-hidden gap-5 justify-center items-center">
                            <Image src={facebook} alt="Social media icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"/>
                            <Image src={instagram} alt="Social media icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"/>
                            <Image src={twitter} alt="Social media icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"/>
                        </div>
                    </div>

                </div>
            </div>
        </div><footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
                <div className="flex flex-wrap gap-8 justify-between px-8 py-12">

                    {/* Company Info Section */}
                    <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                        <div className="text-base tracking-normal text-slate-800">Company Info</div>
                        <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                            <div>About Us</div>
                            <div className="mt-2.5">Carrier</div>
                            <div className="mt-2.5">We are hiring</div>
                            <div className="mt-2.5">Blog</div>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                        <div className="text-base tracking-normal text-slate-800">Legal</div>
                        <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                            <div>About Us</div>
                            <div className="mt-2.5">Carrier</div>
                            <div className="mt-2.5">We are hiring</div>
                            <div className="mt-2.5">Blog</div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                        <div className="text-base tracking-normal text-slate-800">Features</div>
                        <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                            <div>Business Marketing</div>
                            <div className="mt-2.5">User Analytics</div>
                            <div className="mt-2.5">Live chat</div>
                            <div className="mt-2.5">Unlimited Fun</div>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="flex overflow-hidden flex-col font-bold w-[148px]">
                        <div className="text-base tracking-normal text-slate-800">Resources</div>
                        <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
                            <div>Business Marketing</div>
                            <div className="mt-2.5">User Analytics</div>
                            <div className="mt-2.5">Live chat</div>
                            <div className="mt-2.5">Unlimited Fun</div>
                        </div>
                    </div>

                    {/* Get In Touch Section */}
                    <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
                        <div className="text-base font-bold tracking-normal text-slate-800">Get In Touch</div>
                        <form className="flex flex-col mt-5 w-full tracking-wide leading-7">
                            <div className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200">
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="my-auto text-neutral-500 bg-transparent border-none outline-none"
                                    placeholder="Your Email"
                                    aria-label="Your Email" />
                                <button
                                    type="submit"
                                    className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200">
                                    Subscribe
                                </button>
                            </div>
                            <div className="self-start text-xs text-neutral-500">Lore imp sum dolor Amit</div>
                        </form>
                    </div>

                </div>

                {/* Footer Bottom Section */}
                <div className="py-8 px-20 text-[#737373] font-semibold text-sm">
                    Made With Love By Finland All Right Reserved
                </div>
            </footer></>
      
      
    );
  }