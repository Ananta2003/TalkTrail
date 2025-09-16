import { useRef } from "react";
import Background from "../components/Background";
import ButtonSec from "../components/ButtonSec";
import Input from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    async function signin(){

        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        console.log(email)
        console.log(password)


        const res =await axios.post(`${BACKEND_URL}/admin/signin`,{
            email:email,
            password:password
        })
        localStorage.setItem("token", res.data.token);
        console.log(res)
        navigate('/admin')
    }

    return (
        <Background>
            <div className="w-full h-screen flex items-center justify-center  ">
                <div className="w-[80%] h-[90%] bg-gray-100 rounded-[30px] p-8 flex gap-2">
                    <div className="w-[60%] h-full bg-red-200 rounded-[30px] ">
                        <img src="\src\assets\event.jpg" alt="Img" className="w-full h-full rounded-[30px] " />

                    </div>
                    <div className="w-[40%] h-full bg-black text-white from-slate-50 to-slate-800 rounded-[30px] p-4">

                        <div className="py-4 ">
                            <span className=" font-custom text-xl border-1 border-black px-6 py-2 rounded-[40px] ">TalkTrial.</span>
                        </div>
                        <div className="p-4 flex -items-center justify-center m-4">
                            <div >
                                <h1 className="font-login text-4xl flex items-center justify-center">BE A SPEAKER..</h1>
                                <h1 className="font-login text-[#8e70d8] text-4xl flex items-center justify-center mt-[10%]">Sign In</h1>
                                <Input reference={emailRef} placeholder="Email" label="Email"/>
                                <Input reference={passwordRef} placeholder="Password" label="Password"/>
                                <ButtonSec onClick={signin} text="Sign In"/>

                                <div className=" ">
                                    <h1 className="font-login  flex items-center justify-center text-2xl mt-4">Create Account <br /><a href="/signupadmin">Sign Up</a></h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Background>

    )
}