import Hearder from "../../components/Hearder";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Programador from "/Group 2.png";
import Footer from "../../components/Footer";

const BackEnd = () => {
  return (
    <div className={"w-full"}>

    <div
      className={
        "h-auto bg-back bg-top bg-no-repeat flex flex-col gap-12 pb-52 bg-black  w-full relative"
      }
    >
      <Hearder />
      <Title Title01="Você sabe oque é um programador Back End ?" Title02="Aqui você encontra a suas repostas para o mundo da programação"/>
      <Main Foto={Programador} SubTitle={"Um Programador Back-end é um profissional especializado no desenvolvimento da parte lógica e funcional de um aplicativo ou site. Ele é responsável por criar e manter a infraestrutura que lida com os dados, a lógica de negócios e a comunicação com o servidor e o banco de dados."} Title={"Programador Back End"}/>
    </div>
      <Footer/>
    </div>
  );
};

export default BackEnd;
