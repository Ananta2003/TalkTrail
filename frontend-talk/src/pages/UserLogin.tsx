import Input from "../components/Input";
import ButtonSec from "../components/ButtonSec";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export default function Login() {

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    async function usersignin() {
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        const res = await axios.post(`${BACKEND_URL}/user/signin`, {
            email,
            password
        })
        localStorage.setItem("token", res.data.token);
        console.log(res)
        navigate('/dashboard')
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black ">
            <div className="w-[80%] h-[90%] bg-white rounded-[30px] p-8 flex gap-2">

                <div className="w-[60%] h-full bg-gradient-to-b from-slate-50 to-slate-800 rounded-[30px] p-4">

                    <div className="py-4">
                        <span className=" font-custom text-xl border-1 border-black px-6 py-2 rounded-[40px] ">TalkTrial.</span>
                    </div>
                    <div>
                        <div >
                            <h1 className="font-login text-4xl flex items-center justify-center">BE A SPEAKER..</h1>
                            <h1 className="font-login text-[#8e70d8] text-4xl flex items-center justify-center mt-[5%]">Sign In</h1>
                            <div className="flex items-center justify-center">
                                <div>
                                    <Input reference={emailRef} placeholder="Email " label="Email" style="w-full" />
                                    <Input reference={passwordRef} placeholder="Password" label="Password" style="w-full" />
                                    <div className="flex items-center justify-center">
                                        <ButtonSec onClick={usersignin} text="Sign In" />
                                    </div>
                                </div>
                            </div>

                            <div className=" ">
                                <h1 className="font-login  flex items-center justify-center text-xl mt-4">Create Account <a className="text-white mx-2" href="/signupuser">Sign Up</a></h1>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="w-[40%] h-full bg-red-200 rounded-[30px] ">
                    <img src="\src\assets\mic1.jpg" className="w-full h-full rounded-[30px]" alt="" />

                </div>
            </div>
        </div>
    )
}