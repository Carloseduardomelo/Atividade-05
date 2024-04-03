import Hearder from "../../components/Hearder";
import Title from "../../components/Title";
import Main from "./_Components/Main";


const Home = () => {
  return (
    <div
      className={
        "h-auto bg-back bg-top bg-no-repeat flex flex-col gap-12 pb-52 bg-black max-w-[1440px] w-full relative"
      }
    >
      <Hearder />
      <Title />
      <Main />
    </div>
  );
};

export default Home;
