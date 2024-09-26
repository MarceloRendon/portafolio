import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import PrimaryImage from "../assets/Primary.svg"; // Importa la imagen
const NavBar = () => {
  const links = [
    {
      id: 1,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <div className="flex items-center">
        <img
          src={PrimaryImage}
          alt="foto"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      <ul className="flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          Home
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
