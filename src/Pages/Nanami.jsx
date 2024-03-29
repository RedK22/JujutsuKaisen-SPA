import CharacterPage from "../Components/CharacterPage";
import {NanamiFB} from "../images/fbody";

function Nanami() {
  const nanamiData = {
    name: "Kento Nanami",
    image: NanamiFB,
    description:
      "Nanami is a very intelligent and reserved man who at first appears to be someone who is just very serious about his work. He knows how to separate sentimentalism from service and claims he's only a Jujutsu Sorcerer because it's slightly less idiotic than regular careers. As one of Yuji's mentors, Nanami is a complete contrast to Gojo, who is far more outspoken and easy-going.",
    birthday: "Jul 3",
    gender: "Male",
    occupation: "Sorcerer",
    species: "Human",
  };
  return (
    <>
      <CharacterPage {...nanamiData} />
    </>
  );
}

export default Nanami;
