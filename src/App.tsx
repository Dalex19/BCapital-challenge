import Header from "./base-components/Header";
import Card from "./base-components/Card"
import CardService from "./base-components/CardService"

function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-[#F0F0F0;]">
      <Header />
      <div className="m-auto px-[20px] py-[40px] flex flex-col items-center gap-8">
        <h1 className="text-2xl  text-[#111B54] font-bold">KIT PLANS</h1>
        <div className=" flex justify-around w-full flex-wrap gap-4">
          <Card name="Basic" precie="20" />
          <Card name="Basic" precie="50" />
          <Card name="Basic" precie="100" />
        </div>
        <h2 className="underline mx-auto text-[#111B54] text-lg">
          Ver Todos los kit plans{" "}
        </h2>
      </div>
      <div className="m-auto px-[20px] py-[40px] flex flex-col items-center gap-8">
        <h1 className="text-2xl  text-[#111B54] font-bold">SERVICIOS</h1>
        <div className="m-auto w-full px-[20px] py-[40px] flex flex-col items-center gap-8">
          <div className="flex flex-row justify-around w-full flex-wrap gap-4">
          <CardService />
            <CardService />
            <CardService />
          </div>
          <h2 className="underline mx-auto text-[#111B54] text-lg">
            Ver Todos los Servicios{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App
