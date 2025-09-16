import { useNavigate } from "react-router-dom";
import ButtonSec from "../components/ButtonSec";
import Input from "../components/Input";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function UserSignup() {

    const nameRef = useRef<HTMLInputElement | null>(null)
    const EmailRef = useRef<HTMLInputElement | null>(null)
    const PasswordRef = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()


    async function signup() {

        const name = nameRef.current?.value
        const email = EmailRef.current?.value
        const password = PasswordRef.current?.value

        const data = await axios.post(`${BACKEND_URL}/user/signup`, {
            name: name, email: email, password: password
        })
        console.log(data)
        navigate("/dashboard")
    }

    return (
        <div className="bg-gray-200 flex items-center justify-center w-full h-screen">
            <div className="bg-white w-[30%] h-[70%] p-4 rounded-lg ">
                <div>
                    <h1 className="font-custom text-3xl">
                        Create User Account
                    </h1>
                    <div className="my-8">
                        <Input reference={nameRef} label="Name" placeholder="Name" />
                        <Input reference={EmailRef} label="Email" placeholder="Email" />
                        <Input reference={PasswordRef} label="Password" placeholder="Password" />
                    </div>
                    <ButtonSec text="SignUp" onClick={signup} />
                    <span className="">Already Have an Account <a href="/userlogin" className="font-bold">SignIN</a></span>

                </div>
            </div>
        </div>
    )
}