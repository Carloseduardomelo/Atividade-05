import Hearder from "../../components/Hearder";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Programador from "/Group 2.png";

const FrontEnd = () => {
  return (
    <div
      className={
        "h-auto bg-back bg-top bg-no-repeat flex flex-col gap-12 pb-52 bg-black max-w-[1440px] w-full relative"
      }
    >
      <Hearder />
      <Title Title01="Você sabe oque é um programador Front End ?" Title02="Aqui você encontra a suas repostas para o mundo da programação"/>
      <Main Foto={Programador} SubTitle={"Um Programador Front-end é um profissional responsável por projetar a interface visual de um site ou aplicativo por meio de códigos. Enquanto o web design cria a aparência visual, o desenvolvimento front-end implementa esse design utilizando HTML, CSS e JavaScript, seguindo as melhores práticas1"} Title={"Programador Front end"}/>
    </div>
  );
};

export default FrontEnd;
