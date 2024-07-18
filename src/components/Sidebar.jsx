import { GoHeart, GoHome, GoTasklist } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function DesktopLayout() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-50 px-4 py-7 flex flex-col gap-7 h-[calc(100vh-66px)]">
      <div
        className="flex items-center gap-3 w-full lg:justify-normal justify-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <GoHome size={25} />
        <span className="lg:block hidden text-lg">Home</span>
      </div>
      <div
        className="flex items-center gap-3 w-full lg:justify-normal justify-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <GoTasklist size={25} />
        <span className="lg:block hidden text-lg">Our Menu</span>
      </div>
      <div
        className="flex items-center gap-3 w-full lg:justify-normal justify-center cursor-pointer"
        onClick={() => navigate("/favorites")}
      >
        <GoHeart size={23} />
        <span className="lg:block hidden text-lg">Favorites</span>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <section>
      <div className="sm:block hidden">
        <DesktopLayout />
      </div>
    </section>
  );
}

export default Sidebar;

export const MobileSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-2 bg-[#735542] z-10 text-white flex items-center justify-between">
      <div
        className="flex items-center flex-col cursor-pointer"
        onClick={() => navigate("/")}
      >
        <GoHome size={23} />
        <span className="text-base">Home</span>
      </div>
      <div
        className="flex items-center flex-col cursor-pointer"
        onClick={() => navigate("/")}
      >
        <GoTasklist size={22} />
        <span className="text-base">Our Menu</span>
      </div>
      <div
        className="flex items-center flex-col cursor-pointer"
        onClick={() => navigate("/favorites")}
      >
        <GoHeart size={20} />
        <span className="text-base">Favorites</span>
      </div>
    </div>
  );
};
