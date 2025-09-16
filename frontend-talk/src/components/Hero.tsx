import { useNavigate } from "react-router-dom";
import ButtonSec from "./ButtonSec";
import { scrollToElement } from "../config";

export default function Hero() {

    const navigate = useNavigate()

    function onClick(){
        return navigate('/login')
    }
    function onScroll(){
        return scrollToElement("about")
    }

    return (
        <div className="w-full text-white flex items-center justify-center">
            <div className="mt-12">
                <h1 className="text-[#8e70d8] font-custom text-8xl font-bold p-2 flex items-center justify-center">TalkTrail</h1>
                <h1 className="text-white font-custom text-7xl font-bold p-2 flex items-center justify-center">Where Ideas Find Their Path</h1>
                <h2 className="text-center px-12 font-custom leading-snug text-[#a7a7a7] my-6">
                    Talk Trail brings speakers, sessions, and attendees together in one seamless platform.<br/>
                    Discover upcoming events, engage with communities, and keep track of every idea worth following.
                </h2>
                <div className="flex items-center justify-center gap-2 my-4 mx-2">
                    <ButtonSec onClick={onScroll} style="bg-[#040404] border-white border-1" text="EVENTS" />
                    <ButtonSec onClick={onClick} style="bg-[#ffff]  text-black border-white border-1" text="BE A SPEAKER" />

                </div>
            </div>
        </div>
    )
}