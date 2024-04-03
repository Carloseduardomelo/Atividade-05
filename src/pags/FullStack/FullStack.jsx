import Hearder from "../../components/Hearder";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Programador from "/Group 2.png";
import Footer from "../../components/Footer";

const FullStack = () => {
  return (
    <div className={"w-full"}>

    <div
      className={
        "h-auto bg-back bg-top bg-no-repeat flex flex-col gap-12 pb-52 bg-black  w-full relative"
      }
      >
      <Hearder />
      <Title Title01="Você sabe oque é um programador FullStack ?" Title02="Aqui você encontra a suas repostas para o mundo da programação"/>
      <Main Foto={Programador} SubTitle={"Um programador Full Stack é um profissional completo, capaz de desenvolver todo o ciclo de vida de um software, desde a interface do usuário (front-end) até a lógica interna (back-end) e a integração com bancos de dados."} Title={"Programador FullStack"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default FullStack;
