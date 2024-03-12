import CharacterPage from "../Components/CharacterPage";
import {GojoFB} from "../images/fbody";

function Gojo() {
  const gojoData = {
    name: "Satoru Gojo",
    image: GojoFB,
    description:
      "Satoru Gojo is one of the main protagonists of the Jujutsu Kaisen series. He is a special-grade jujutsu sorcerer and is widely recognized as the strongest in the world. Satoru is the pride of the Gojo Family, the first person to inherit both the Limitless and the Six Eyes in four hundred years. He works as a teacher at the Tokyo Jujutsu High and uses his influence to protect and train strong young allies.",
    birthday: "Dec 7, 1989",
    gender: "Male",
    occupation: "Jujutsu Sorcerer, Teacher",
    species: "Human",
  };
  return (
    <>
      <CharacterPage {...gojoData} />
    </>
  );
}

export default Gojo;
