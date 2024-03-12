import React from "react";
import CharacterPage from "../Components/CharacterPage";
import {MegumiFB} from "../images/fbody";

function Megumi() {
  const megumiData = {
    name: "Megumi Fushiguro",
    image: MegumiFB,
    description:
      "Megumi is the deuteragonist of the Jujutsu Kaisen series. He is a first-year student at Jujutsu High and also a descendant of the Zenin Family. While outwardly stoic and calculating, Megumi wishes to help protect people he sees as good or kind. He believes that the world is unfair and that a Sorcerer is a tool to ensure kind people are given more chances to live. Claiming it to be his selfish and irrational desire, he does not see himself as a hero for doing this.",
    birthday: "Dec 22, 2002",
    gender: "Male",
    occupation: "Sorcerer, Student",
    species: "Human",
  };
  return (
    <>
      <CharacterPage {...megumiData} />
    </>
  );
}

export default Megumi;
