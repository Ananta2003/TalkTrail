import Background from "../components/Background";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Dashboard(){
    
    return (
        <div className="h-auto bg-[#111111]">
            {/* //Hero Background */}
            <Background>
                <Navbar/>
                <Hero/>
            </Background>
            <Body/>
            <Footer/>
        </div>
    )
}