import Hearder from "../../components/Hearder";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Programador from "/Group 2.png";

const Home = () => {
  return (
    <div
      className={
        "h-auto bg-back bg-top bg-no-repeat flex flex-col gap-12 pb-52 bg-black max-w-[1440px] w-full relative"
      }
    >
      <Hearder />
      <Title Title01="Você sabe oque é um programador ?" Title02="Aqui você encontra a suas repostas para o mundo da programação"/>
      <Main Foto={Programador} SubTitle={"Um programador é um profissional que cria e desenvolve software, utilizando linguagens de programação para dar vida a websites, aplicativos, jogos e outros sistemas digitais."} Title={"Programador"}/>
    </div>
  );
};

export default Home;
