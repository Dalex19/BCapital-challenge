import imgBG from "../../assets/R.jpg"

function Main () {
    return(
        <div className="shadow-lg rounded-lg pb-4 bg-[#111B54] overflow-hidden h-[300px] w-[250px]">
            <div className="h-[55%] w-full" >
                <img src={imgBG} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="h-[45%] flex flex-col justify-between items-center text-white">
                <h1 className="font-bold text-2xl">Publicidad</h1>
                <p className="text-center text-lg font-semibold ">Señal Streaming en toda Latinoamerica</p>
                <button className="px-6 py-1 text-[#111B54] bg-white rounded-xl flex justify-center items-center">Ver Mas</button>
            </div>

        </div>
    )
}

export default Main;