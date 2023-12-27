import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" m-auto justify-center items-center flex bg-slate-400">
      <div className="flex flex-row container w-full p-1 justify-between">
        <Link to="/">
          <h1 className="text-xl font-black">Ghifary</h1>
        </Link>
        <ul className="flex flex-row w-2/5 sm:w-1/5 justify-center items-center  justify-between">
          <Link to="/">
            <li className="hover:text-amber-200 duration-300">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-amber-200 duration-300">Tabel Data</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
