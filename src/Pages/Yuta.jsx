import CharacterPage from "../Components/CharacterPage";
import {YutaFB} from "../images/fbody";

function Yuta() {
  const yutaData = {
    name: "Yuta Okkotsu",
    image: YutaFB,
    description:
      "The main protagonist of Jujutsu Kaisen prequel series Tokyo Metropolitan Curse Technical School. He was initially a Special Grade Cursed Victim haunted by his late childhood friend, Rika Orimoto. Satoru Gojou mentored Yuuta and enrolled him at Tokyo Jujutsu High.",
    birthday: "Mar 7, 2001",
    gender: "Male",
    occupation: "Sorcerer, Student",
    species: "Human",
  };
  return (
    <>
      <CharacterPage {...yutaData} />
    </>
  );
}

export default Yuta;
