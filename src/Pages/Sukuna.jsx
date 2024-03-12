import CharacterPage from "../Components/CharacterPage";
import {SukunaFB} from "../images/fbody";

function Sukuna() {
  const sukunaData = {
    name: "Ryoumen Sukuna ",
    image: SukunaFB,
    description:
      "According to the legend, Sukuna was a demon with four arms and two faces who lived in the golden era of sorcery 1000 years ago. Sorcerers of the era gave their all to defeat him, but to no avail. Without ever being defeated, his body was split into 20 separate indestructible cursed objects, which allowed him to live on and traverse the ages to come. In 2018, Yuuji Itadori consumed one of the aforementioned cursed objects, and Sukuna was reincarnated. Sukuna has a sadistic personality and likes to see others suffer. He is selfish, and always wants to stay in control of the situation without caring about the consequences.",
    birthday: "N/A (Age:1000+)",
    gender: "Male",
    occupation: "N/A",
    species: "Human, Reincarnated Sorcerer",
  };
  return (
    <>
      <CharacterPage {...sukunaData} />
    </>
  );
}

export default Sukuna;
