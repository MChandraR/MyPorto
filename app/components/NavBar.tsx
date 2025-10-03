"use client";
import {menu} from "../data/menu";

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center py-6 px-12 shadow-md bg-white fixed top-0 w-full z-50">
      <h1 className="text-6xl font-bold">
        M.<span className="text-blue-600">Chandra.R</span>
      </h1>

      <ul className="flex space-x-8">
        {menu.map((item, i) => (
          <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold text-2xl">
            {item}
          </li>
        ))}
      </ul>

      <button className="bg-white text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
        Hire Me
      </button>
    </nav>
  );
}
