import CharacterPage from "../Components/CharacterPage.jsx";
import {ItadoriFB} from "../images/fbody.js";

function Itadori() {
  const itadoriData = {
    name: "Yuuji Itadori",
    image: ItadoriFB,
    description:
      "Yuuji is a fair person who cares greatly for not only his comrades but anyone he views as people with their own wills, despite how deep or shallow his connection to them is. He cares greatly for the &quot;value of a life&quot; and to this end, he will ensure that others receive a &quot;proper death.&quot; He is easy to anger in the face of pure cruelty and unfair judgment of other people. He doesn&apos;t have the born talent required to use cursed techniques, but he has incredible athletic abilities and he is considered very strong for his age, as shown by when he easily beat a coach in Steel Ball Throw.",
    birthday: "Mar 20, 2003",
    gender: "Male",
    occupation: "Sorcerer, Student, Vessel",
    species: "Human",
  };
  return (
    <>
      <CharacterPage {...itadoriData} />
    </>
  );
}

export default Itadori;
