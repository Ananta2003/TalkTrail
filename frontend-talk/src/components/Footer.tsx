import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="mt-22 w-full h-80 bg-white rounded-t-[20px]">
            <div className="flex items-center justify-center pb-8">
                <div className="h-80 w-[80%] bg-white border-1 border-gray-200 shadow-lg mt-8 rounded-[20px]  ">
                    <div className="flex items-center p-6 gap-8">
                        <div className="w-[60%]">
                            <h1 className=" font-custom text-3xl">TalkTrial.</h1>

                            <h2 className=" font-custom leading-snug text-[#a7a7a7] my-6 fle">
                                Talk Trail brings speakers, sessions, and attendees together in one seamless platform.Discover upcoming events, engage with communities, and keep track of every idea worth following.
                            </h2>

                            <div className="flex gap-2">
                                <FaXTwitter size={25} />
                                <FaInstagram size={25} />
                                <FaLinkedin size={25} />
                                <FaGithub size={25} />
                            </div>
                        </div>
                        <div className="w-[40%] flex justify-around gap-12 ">
                            <div>
                                <h1 className="font-custom text-black">Products</h1>
                                <div className="font-custom text-[#a7a7a7] text-sm ">
                                    <a href="" className="block my-2 hover:text-black">Program</a>
                                    <a href="" className="block my-2 hover:text-black">Price</a>
                                    <a href="" className="block my-2 hover:text-black">Speaker</a>
                                    <a href="" className="block my-2 hover:text-black">Sponser</a>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-custom text-black">Company</h1>
                                <div className="font-custom text-[#a7a7a7] text-sm ">
                                    <a href="" className="block my-2 hover:text-black">About</a>
                                    <a href="" className="block my-2 hover:text-black">Career</a>
                                    <a href="" className="block my-2 hover:text-black">Contact</a>
                                    <a href="" className="block my-2 hover:text-black">Partner</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <hr className="my-4 border-t-2 border-black w-[90%] " />
                    </div>

                    <div className="flex justify-between px-6">
                        <div>
                            <h1>@ 2025 Ananta.All rights reserved</h1>
                        </div>
                        <div className="flex gap-2 underline font-sans">
                            <h1>Privacy Policy</h1>
                            <h1>Terms of Service</h1>
                            <h1>Cookies Settings</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}