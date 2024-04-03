import Hearder from "../../components/Hearder";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Programador from "/Group 2.png";

const Mobile = () => {
  return (
    <div
      className={
        "h-auto bg-back bg-top bg-no-repeat flex flex-col gap-12 pb-52 bg-black max-w-[1440px] w-full relative"
      }
    >
      <Hearder />
      <Title Title01="Você sabe oque é um programador Mobile ?" Title02="Aqui você encontra a suas repostas para o mundo da programação"/>
      <Main Foto={Programador} SubTitle={"Um programador mobile, também conhecido como desenvolvedor mobile, é o profissional responsável pela criação e manutenção de aplicativos para dispositivos móveis, como celulares e tablets. Eles transformam ideias e projetos em apps funcionais e de qualidade, utilizando linguagens de programação específicas para esse tipo de plataforma."} Title={"Programador Mobile"}/>
    </div>
  );
};

export default Mobile;
