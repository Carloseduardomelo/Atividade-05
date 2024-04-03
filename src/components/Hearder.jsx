import Logo from "/Group 1.svg";


const Hearder = () => {
  return (
    <div className="p-12 flex justify-between items-center">
      <div className="w-52">
        <img src={Logo} alt="Logo do site ok" />
      </div>
      <div>
        <nav >
          <ul className="flex gap-12 items-center justify-center font-fontProjeto font-semibold">
            <li>Home</li>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Fukk-Stack</li>
            <li>Mobile</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Hearder;
