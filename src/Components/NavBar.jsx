// import {NavLink} from "react-router-dom";
// import React from "react";

// !WORK ON THE MENU FOR PHONES!!!!!!!!!!!!!
import {useState} from "react";
import Logo from "../images/jjk-logo.png";
import {NavLink} from "react-router-dom";

import close from "../images/menu-close.png";
import open from "../images/menu-open.png";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-zinc w-full flex pt-2 mb-5 border-b-2 border-blue-600">
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo"
            className="h-16 cursor-pointe px-5 hover:drop-shadow-[05px_5px_10px_rgba(23,123,255,0.75)] transition-all ease-in-out"
          />
        </NavLink>

        <ul className="hidden md:flex list-none flex-1 justify-end items-center ">
          <NavLink to="/characters">
            <li className="mr-12 font-semibold text-white text-xl hover:underline underline-offset-3">
              Characters
            </li>
          </NavLink>
          <NavLink to="/arcs">
            <li className="mr-12 font-semibold text-white text-xl hover:underline underline-offset-3">
              Story Arcs
            </li>
          </NavLink>
          <NavLink to="/author">
            <li className="mr-12 font-semibold text-white text-xl hover:underline underline-offset-3">
              Author
            </li>
          </NavLink>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center pr-5 cursor-pointer">
          <img
            src={toggle ? close : open}
            alt="menu"
            className="object-contain h-10 w-10"
            onClick={() => setToggle((t) => !t)}
          />

          <div
            className={`${
              toggle ? "flex animate-fade-in" : "hidden"
            } p-6 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 border-2 border-white mx-4 my-2 min-w-[140px] absolute top-20 right-0 rounded-xl `}
          >
            <ul className="flex list-none flex-col gap-5 flex-1 justify-end items-center ">
              <NavLink to="/characters">
                <li className="font-semibold text-white text-xl hover:underline underline-offset-3">
                  Characters
                </li>
              </NavLink>
              <NavLink to="/arcs">
                <li className="font-semibold text-white text-xl hover:underline underline-offset-3">
                  Story Arcs
                </li>
              </NavLink>
              <NavLink to="/author">
                <li className="font-semibold text-white text-xl hover:underline underline-offset-3">
                  Author
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
