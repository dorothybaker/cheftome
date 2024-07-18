import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#735542] text-white p-4 h-[70px] sticky top-0 z-10 flex items-center">
      <h1 className="text-4xl">
        <Link to={"/"}>Chef Tome</Link>
      </h1>
    </header>
  );
}

export default Header;
