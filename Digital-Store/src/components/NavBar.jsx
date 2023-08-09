import Buttons from "./Buttons";
import Carrinho from "./Carrinho";
import Logo from "./Logo";
import PageButtons from "./PageButtons";
import SearchBar from "./SearchBar";

export default function NavBar(){
    return (
        <>
            <div className="bg-white justify-center">
                <div className="ml-[4%] mr-[4%] mt-[3%] flex space-x-[11%] justify-center">
                    <Logo />
                    <SearchBar />
                    <Buttons value='Cadastre-se' value2='Entrar'/>
                    <Carrinho />
                </div>
            </div>
            <div className="ml-[7%] mt-[4%] flex space-x-20 justify-start pb-6">
                <PageButtons />
            </div>
        </>
    )
}