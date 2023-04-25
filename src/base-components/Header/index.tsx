function Main () {
    return(
        <div className="h-[80%] w-full flex flex-col items-center bg-gradient-to-r from-[#00ABA0] to-[#0F54AB]">
            <nav className="w-[90%] text-white flex justify-between py-4">
                <h1>logo</h1>
                <ul className="flex gap-4 text-lg">
                    <li className="hover:bg-[#5460A9] py-1 px-2 rounded-lg ">Inicio</li>
                    <li className="hover:bg-[#5460A9] py-1 px-2 rounded-lg ">Servicios</li>
                    <li className="hover:bg-[#5460A9] py-1 px-2 rounded-lg ">Kit plans</li>
                    <li className="hover:bg-[#5460A9] py-1 px-2 rounded-lg ">¿Quienes Somos?</li>
                    <li className="hover:bg-[#5460A9] py-1 px-2 rounded-lg ">Recompensas</li>
                    <li className="">Iconos</li>
                </ul>
            </nav>
            <div className="flex-1 flex items-end mb-28 pl-10  w-full ">
                <div className="flex flex-col gap-6 ">
                <h1 className="text-5xl font-bold drop text-white">¡Bienvenidos a Bartel <br/> Capital Group!</h1>
                <p className="text-lg w-[350px]">Se parte de nuestra familia y podremos recorrer juntos el camino para crear un estilo de vida con libertad financiera</p>
                <button className="bg-[#5460A9] w-[150px] shadow-lg rounded-md px-4 py-2 text-white font-light flex justify-center items-center">Registrate Ahora</button>
                </div>
            </div>
        </div>
    )
}

export default Main;