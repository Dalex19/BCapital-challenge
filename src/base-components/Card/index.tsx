interface MainProps {
    name: string;
    precie: string;
}

function Main ({name, precie}: MainProps) {
    return (
      <div className="w-[18%] text-[#111B54] bg-white min-w-[300px] flex flex-col justify-between p-4 h-[360px] rounded-lg shadow-lg ">
        <div className="relative flex flex-col gap-1 after:content-[''] after:w-full after:h-[2px] after:bg-black">
          <h2 className="text-lg">{name}</h2>
          <p className="text-xl font-bold">${precie}/Año</p>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            streaming con mas de 30 mil peliculas, mas de 4 mil series y TV
            abierta por 1 mes.
          </li>
          <li>Netflix por 1 mes en 4 dispositivos.</li>
          <li>Embudo de venta.</li>
          <li>Academia de marketing basico.</li>
        </ul>
        <button className="bg-[#5460A9] w-[150px] mx-auto px-8 py-1 rounded-sm text-white">Obtener Kit</button>
        
      </div>
    );
}

export default Main;