import { Link, useLocation } from "react-router-dom";
import Logo from "/Group 1.svg";

const Header = () => {
  // Obtém o local atual da página
  const location = useLocation();

  return (
    <div className="p-12 flex justify-between items-center text-white ">
      <nav className="flex justify-between w-full items-center">
        <div className="w-52">
          <Link to={"/"}> {/*link na logo */}
            <img className="logo" src={Logo} alt="Dev.info" />
          </Link>
        </div>
        <ul className="flex items-center justify-end gap-12 font-fontProjeto font-semibold text-white">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to={"/"} >
              Home
            </Link>
          </li>
          <li className={location.pathname === '/FrontEnd' ? 'active' : ''}>
            <Link to={"/FrontEnd"} >
              Front-End
            </Link>
          </li>
          <li className={location.pathname === '/BackEnd' ? 'active' : ''}>
            <Link to={"/BackEnd"} >
              Back-End
            </Link>
          </li>
          <li className={location.pathname === '/Mobile' ? 'active' : ''}>
            <Link to={"/Mobile"} >
              Mobile
            </Link>
          </li>
          <li className={location.pathname === '/FullStack' ? 'active' : ''}>
            <Link to={"/FullStack"} >
              FullStack
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
