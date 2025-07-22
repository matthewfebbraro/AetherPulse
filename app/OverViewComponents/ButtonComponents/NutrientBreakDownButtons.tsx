import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";
import { Sprout, Flame,  Atom, } from 'lucide-react';

export default function NutrientBreakDownButtons() {

    const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

    return (

        <>

         

                        <button onClick={() => {
                            setSelectedPage("Macros");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                            <div
                                className="bg-white/30 rounded-3xl  border border-bg-indigo-300 flex flex-col  hover:bg-indigo-300/50 text-center p-2">
                                <div className="flex leading-none text-sm items-center flex-col font-semibold" >
                                    Macros
                                    <Flame size={30} />
                                </div>
                            </div>

                        </button>

                        <button onClick={() => {
                            setSelectedPage("Vitamins");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                            <div
                                className="bg-white/30 rounded-3xl  border border-bg-indigo-300 flex  hover:bg-indigo-300/50 flex-col text-center p-2">
                                <div className="flex leading-none text-sm items-center flex-col font-semibold" >
                                    Vitamin
                                    <Sprout size={30} />
                                </div>
                            </div>

                        </button>

                        <button onClick={() => {
                            setSelectedPage("Minerals");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                            <div
                                className="bg-white/30 rounded-3xl  border border-bg-indigo-300  hover:bg-indigo-300/50 flex flex-col text-center p-2 ">
                                <div className="flex leading-none text-sm items-center flex-col font-semibold" >
                                    Mineral
                                    <Atom size={30} />
                                </div>
                            </div>
                        </button>
                   


        </>

    );
}
