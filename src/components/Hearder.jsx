import { Link } from "react-router-dom";
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
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/FrontEnd"}>Front-End</Link></li>
            <li><Link to={"/BackEnd"}>Back-End</Link></li>
            <li><Link to={"/Mobile"}>Mobile</Link></li>
            <li><Link to={"/FullStack"}>FullStack</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Hearder;
