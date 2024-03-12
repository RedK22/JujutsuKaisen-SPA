import React from "react";
import NavBar from "../Components/NavBar";
import {ItadoriFB} from "../images/fbody.js";

const CharacterPage = ({
  name,
  image,
  description,
  birthday,
  gender,
  occupation,
  species,
}) => {
  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <NavBar />
        <div className="md:flex flex-1 justify-between px-10">
          <div className="md:w-1/3 flex items-center justify-center">
            <img
              src={image}
              className="h-[550px] md:hover:-rotate-[5deg] transition-all rounded-xl border-2 border-sky-500 md:hover:drop-shadow-[05px_5px_10px_rgba(23,123,255,0.75)] "
              alt={name}
            />
          </div>
          <div className="md:w-2/3 px-5 py-5">
            <p className="text-4xl text-white font-semibold underline underline-offset-2">
              {name}
            </p>
            <br />
            <p className="text-white text-lg">{description}</p>
            <br />
            <ul className="text-white text-lg">
              <li>
                <span className="font-semibold">Birthday:</span> {birthday}
              </li>
              <li>
                <span className="font-semibold">Gender:</span> {gender}
              </li>
              <li>
                <span className="font-semibold">Occupation:</span> {occupation}
              </li>
              <li>
                <span className="font-semibold">Species:</span> {species}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
