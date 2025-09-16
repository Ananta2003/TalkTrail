import Card from "./Card";
import Middle from "./Middle";



export default function Body() {
    return (
        <div className="w-full bg-[#111111]">
            <div className=" text-white flex gap-2 items-center justify-center ">
                <Card firstname="Work Life Balance " topic="Corporate" isrelated={["Job", "IT"]} paid={false} img="https://media.istockphoto.com/id/639673188/photo/i-never-leave-anything-undone.jpg?s=612x612&w=0&k=20&c=NDFB_-r_odhHI26g_BNSrgV8X4LcdRnaDUGYWGXQI4Q=" />

                <Card lastname="AI Horizons"  topic="AI" isrelated={["AI", "Robotics"]} paid={false} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3W_jUaLdlcwO7ekGhtWmUQVKO9s3AnDqOA&s" />

                <Card lastname="Investor Insight"  topic="Business" isrelated={["Business", "Startup"]} paid={false} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkKhdQgcgqiyqKI5rQfrvHBZbjw2HQ-AOGg&s"  />

            </div>
            <Middle/>

        </div>
    )
}