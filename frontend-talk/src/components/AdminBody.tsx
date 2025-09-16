import { useRef, } from "react";
import ButtonSec from "./ButtonSec";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function AdminBody() {

    const eventRef = useRef<HTMLInputElement | null>(null)
    const descRef = useRef<HTMLInputElement | null>(null)
    const imgRef = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()



    async function eventCreate() {
        const eventTitle = eventRef.current?.value
        const eventimg = imgRef.current?.value
        const subTitle = descRef.current?.value

        if (!eventTitle || !eventimg || !subTitle) {
            alert("Please fill all fields");
            return;
        }

        console.log(eventTitle)

        try {
            const token = localStorage.getItem("token")
            console.log(token)
            const dataref = await axios.post(`${BACKEND_URL}/admin/list`, {
                eventTitle: eventTitle, eventimg: eventimg, subTitle: subTitle

            }, { headers: { Authorization: `Bearer ${token}` } })
            console.log(dataref)
            navigate('/')
            alert("Event Added")


        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.log("Error Message:", err.message);
                console.log("Error Status:", err.response?.status);
                console.log("Error Data:", err.response?.data);
            } else {
                console.log("Unexpected Error:", err);
            }

            alert("Something went wrong! Check console for details.");
        }
    }

        return (
            <div className="relative h-screen w-full text-white font-custom">
                <div className="">
                    <h1 className=" font-custom text-3xl text-white p-12">TalkTrial.</h1>
                </div>
                <div>
                    <div className="w-full h-screen ml-[30%] flex items-center justify-end">
                        <div className="w-full mb-[10%]">
                            <label className="text-3xl">Register an Event </label>
                            <Input reference={eventRef} placeholder="" label="Event Name" style="w-1/2 mt-2" />
                            <Input reference={descRef} placeholder="" label="Description" style="w-1/2" />
                            <Input reference={imgRef} placeholder="Please Provide Img Address" label="Image" style="w-1/2 mb-4" />
                            <ButtonSec onClick={eventCreate} style="bg-[#040404] border-white border-1 " text="REGISTER EVENT" />
                        </div>
                    </div>
                </div>
                <img className="absolute bottom-4" src="\src\assets\mic-removebg-preview.png" alt="" />

            </div>
        )
    }