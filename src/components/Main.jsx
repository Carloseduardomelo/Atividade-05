const Main = ({ Foto, Title, SubTitle }) => {
  return (
    <div className="flex items-center justify-center px-12 font-fontProjeto text-white">
      <div className="container flex gap-12">
        <img src={Foto} alt="" className="foto" />
        <div className="content-container flex flex-col justify-center gap-8">
          <h1 className="text-6xl">{Title}</h1>
          <h4 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-left ">{SubTitle}</h4>

        </div>
      </div>
    </div>
  );
};

export default Main;
