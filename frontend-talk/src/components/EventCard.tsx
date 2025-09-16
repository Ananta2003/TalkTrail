import ButtonSec from "./ButtonSec";

interface EventProp{
    speakerImg?:string,
    speaker?:string,
    eventImg:string,
    paid:boolean,
    eventTitle:string,
    subTitle:string,
    onClick: (eventId: string) => void;
    id:string
}

export default function EventCard(props:EventProp) {
    return (
        <div className="w-64  bg-[#ffff] rounded-lg text-black font-custom">
            {/* <div className="flex justify-start gap-2 items-center">
                <div className=" w-[40px] h-[40px] rounded-[50%] bg-blue-200 m-2">
                    <img className="w-full h-full rounded-[50%]" src={props.speakerImg} alt="" />
                </div>
                <h1>{props.speaker}</h1>
            </div> */}
            <div className="w-full h-auto">
                <img className="border-y-2 border-white" src={props.eventImg} alt="" />
            </div>
            <div className="p-4">
                <h1 className="flex justify-center px-4">{props.eventTitle}</h1>
                <h2 className="flex font-login justify-center pt-2 pb-4">{props.subTitle}</h2>
                <div className="flex items-center justify-center">
                        <ButtonSec  onClick={() => props.onClick(props.id)} style="bg-[#040404] border-white border-1" text="REGISTER"/>
                    </div> 
            </div>
        </div>
    )
}