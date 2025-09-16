import axios from "axios";
import { useContent } from "../hooks/useContent";
import EventCard from "./EventCard";
import { BACKEND_URL } from "../config";

export default function Middle() {

    const eventsData = useContent()
    console.log(eventsData)
    async function addEvent(eventId: string) {
        console.log(eventId)
        try {
            const token = localStorage.getItem("token");
            console.log(token)

            const res = await axios.post(
                `${BACKEND_URL}/user/register-event/${eventId}`,{},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            alert(res.data.message); // "Event registered successfully"
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                // err is typed as AxiosError here
                console.error("Axios error details:");
                console.error("Message:", err.message);
                console.error("Status:", err.response?.status);
                console.error("Data:", err.response?.data);
                alert(err.response?.data?.message || err.message || "Something went wrong with the request");
            } else if (err instanceof Error) {
                console.error("Error:", err.message);
                alert(err.message || "Something went wrong");
            } else {
                console.error("Unknown error:", err);
                alert("Something went wrong");
            }
        }
    }

    return (
        <div className="bg-[#111111] text-white h-auto">
            <div id="about" className="m-8 font-custom text-5xl flex items-center justify-center ">
                <h1> Upcoming <span className="text-[#8e70d8]">Events</span></h1>
            </div>
            <div className="flex flex-wrap gap-4 w-full justify-center">
                {

                    eventsData.map(({ eventimg, paid, eventTitle,  subTitle, _id }) => {
                        
                    
                        return (
                            <EventCard onClick={addEvent} paid={paid} eventImg={eventimg} eventTitle={eventTitle} subTitle={subTitle} key={_id} id={_id} />

                        )
                    })
                }

            </div>
        </div>
    )
}