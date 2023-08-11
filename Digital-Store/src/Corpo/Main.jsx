import Carrossel from "../components/Carrossel";
import TitulosMain from "../components/section 4/TitulosMain";

import CardThree from "../components/section2/CardsThree";

import AirJordanPage from "../components/section 4/AirJordanPage";
 


export default function Main() {
    return (
        <main className="flex flex-col w-full h-full   p-4  box-border">
            <section className="flex w-full h-611 bg-[#f5f5f5]">
                <TitulosMain />
                <Carrossel />
            </section>
            <section className="w-full h-[1000px]">
                <CardThree />
            </section>
            <section className="w-full h-[700px]">
                <AirJordanPage />
            </section>

        </main>
    )
}