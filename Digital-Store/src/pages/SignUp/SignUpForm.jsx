import Footer from "../../Corpo/Footer";
import Logo from "../../components/Logo";
import FormSignUp from "./FormSign";

export default function SignUpForm(){
    return(
        <div className="">
            <div className="ml-[7%] mt-[2%] mb-[2%] flex bg-white">
                <a href="http://localhost:5173/"><Logo /></a>
            </div>
            <div className="bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF]">
                <FormSignUp />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}