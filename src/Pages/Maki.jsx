import {MakiFB} from "../images/fbody";
import CharacterPage from "../Components/CharacterPage";

function Maki() {
  const makiData = {
    name: "Maki Zenin",
    image: MakiFB,
    description:
      "Maki Zenin is the older twin sister of Mai Zenin. Maki is a grade 4 sorcerer and a second-year at Tokyo Metropolitan Jujutsu Technical High School. She is from the main branch of the Zenin clan, one of the Prominent Three Families of the Jujutsu world. She left the Zenin family in order to prove herself capable of being a Sorcerer after being deemed incapable since she lacks Cursed Energy.",
    birthday: "Jan 20",
    gender: "Female",
    occupation: "Sorcerer, Student",
    species: "Human",
  };
  return (
    <>
      <CharacterPage {...makiData} />
    </>
  );
}

export default Maki;
