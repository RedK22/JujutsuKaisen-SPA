import CharacterPage from "../Components/CharacterPage";
import {NobaraFB} from "../images/fbody";

function Nobara() {
  const nobaraData = {
    name: "Nobara Kugisaki",
    image: NobaraFB,
    description:
      "She is a first-year student and grade 3 jujutsu sorcerer at Tokyo Jujutsu High studying under Satoru Gojo alongside Yuji and Megumi. Nobara is a confident and brash young woman with an unshakable character. More than anything, Nobara is determined to stay true to herself no matter what. She takes great pride in being both a pretty girl and a strong fighter, refusing to let anyone influence her. Initially, Nobara can appear to be a very obnoxious and arrogant person. She first introduced herself to Yuji and Megumi by expressing how inferior they were. She also argued with Yuji for the greater part of their first mission together. Despite her abrasive attitude, Nobara is actually an incredibly caring and dutiful person, but would never let most people see that side of her. After fighting alongside each other in several missions, Yuji and Megumi grow to become Nobara&apos;s closest allies.",
    birthday: "Aug 7, 2002",
    gender: "Female",
    occupation: "Sorcerer, Student",
  };
  return (
    <>
      <CharacterPage {...nobaraData} />
    </>
  );
}

export default Nobara;
