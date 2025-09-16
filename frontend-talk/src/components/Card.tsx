
interface cardProps {
    firstname?: string,
    lastname?: string,
    topic?: string,
    paid?: boolean,
    isrelated?: string[],
    style?: string,
    img?:string
}

export default function Card(props: cardProps) {
    const data: string[] = props.isrelated || [];

    return (
        <div className={`w-1/3  flex bg-[#181818] border-white border-t-2 rounded-[20px]  p-4 ${props.style}`}>
            <div className="w-1/2">
                <img className="w-full h-auto  rounded-[20px]" src={props.img} alt="hii" />
            </div>
            <div className=" w-1/2 p-4">
                <div className="font-custom text-2xl font-bold ">
                    <h1>{props.firstname}</h1>
                    <h1>{props.lastname}</h1>
                </div>
                <div className=" font-custom text-[#a7a7a7] py-2">
                    <h2>Topic:{props.topic}</h2>
                </div>
                <div className="flex gap-2 text-[#8e70d8]">
                    {data.map((item) => {
                        return (
                            <div key={item} className=" font-custom underline cursor-pointer">
                                <span>{item}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )

}