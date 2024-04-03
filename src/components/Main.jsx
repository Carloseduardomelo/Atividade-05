

const Main = ({Foto , Title , SubTitle}) => {
  return (
    <div className="flex gap-12 items-center justify-center px-12 font-fontProjeto">
      <img src={Foto} alt="" />
      <div className="flex items-end justify-end flex-col gap-20">
        <h1 className="text-6xl ">{Title}</h1>
        <h4 className="text-2xl text-right">{SubTitle}</h4>
      </div>
    </div>
  );
};

export default Main;
