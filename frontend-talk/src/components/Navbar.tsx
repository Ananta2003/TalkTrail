import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {

    const navigate = useNavigate()

    function onClick (){
        return navigate('/userlogin')
    }

    
    return (
        <div className="w-full text-white flex justify-around items-center my-12 ">
            <div >
                <h1 className=" font-custom text-3xl">TalkTrial.</h1>
            </div>
            <div className="flex gap-4 font-custom">
                <a href="">PROGRAM</a>
                <a href="">PRICE</a>
                <a href="">SPEAKER</a>
                <a href="">SPONSER</a>
            </div>
            <div >{
                
                }
                <Button onClick={onClick} text="LOGIN" />
            </div> 
        </div>
    )
}