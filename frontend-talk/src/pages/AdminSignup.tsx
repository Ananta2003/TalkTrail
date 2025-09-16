import { useRef } from "react";
import ButtonSec from "../components/ButtonSec";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export default function AdminSignup(){
    
    const nameRef = useRef<HTMLInputElement | null>(null)
    const EmailRef = useRef<HTMLInputElement | null>(null)
    const PasswordRef = useRef<HTMLInputElement | null>(null)
    const PictureRef = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()


    async function signup() {

        const name= nameRef.current?.value
        const email= EmailRef.current?.value
        const password= PasswordRef.current?.value
        const picture = PictureRef.current?.value

        const data = await axios.post(`${BACKEND_URL}/admin/signup`,{
            name:name,email:email,password:password,picture:picture
        })
        console.log(data)
        navigate("/dashboard")
    }
    return (
        <div className="bg-gray-200 flex items-center justify-center w-full h-screen">
            <div className="bg-white w-[30%] h-[70%] p-4 rounded-lg ">
                <div>
                    <h1 className="font-custom text-3xl">
                        Create Admin Account
                    </h1>
                    <Input reference={nameRef} label="Name" placeholder="Name" />
                    <Input reference={EmailRef} label="Email" placeholder="Email" />
                    <Input reference={PasswordRef} label="Picture" placeholder="Picture Address" />
                    <Input reference={PasswordRef} label="Password" placeholder="Password" />
                    <ButtonSec text="SignUp" onClick={signup} />
                    <span>Already Have an Account <a href="/userlogin">SignIN</a></span>
                </div>
            </div>
        </div>
    )
}