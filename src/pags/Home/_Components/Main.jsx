import Programador from "/Group 2.png";

const Main = () => {
  return (
    <div className="flex gap-12 items-center justify-center px-12 font-fontProjeto">
      <img src={Programador} alt="" />
      <div className="flex items-end justify-end flex-col gap-10">
        <h1 className="text-6xl ">Programador</h1>
        <h4 className="text-2xl text-right">Um programador é um profissional que cria e desenvolve software, utilizando linguagens de programação para dar vida a websites, aplicativos, jogos e outros sistemas digitais.</h4>
      </div>
    </div>
  );
};

export default Main;
