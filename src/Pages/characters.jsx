import {useEffect} from "react";
import {Link} from "react-router-dom";
import CharBox from "../Components/CharBox";
import NavBar from "../Components/NavBar";
import {
  itadori,
  sukuna,
  gojo,
  megumi,
  nanami,
  nobara,
  yuta,
  maki,
} from "../images/index.js";

function Characters() {
  useEffect(() => {
    document.title = "JJK || Characters";
  }, []);

  return (
    <>
      <div className="bg-slate-900 min-h-screen pb-5 ">
        <NavBar />
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <Link to="/itadori">
            <CharBox name="Itadori Yuuji" image={itadori} />
          </Link>
          <Link to="/megumi">
            <CharBox name="Fushigoro Megumi" image={megumi} />
          </Link>
          <Link to="/nobara">
            <CharBox name="Nobara" image={nobara} />
          </Link>
          <Link to="/gojo">
            <CharBox name="Satoru Gojo" image={gojo} />
          </Link>
          <Link to="/sukuna">
            <CharBox name="Sukuna Ryoumen" image={sukuna} />
          </Link>
          <Link to="/nanami">
            <CharBox name="Nanami Kento" image={nanami} />
          </Link>
          <Link to="/yuta">
            <CharBox name="Okkotsu Yuta" image={yuta} />
          </Link>
          <Link to="/maki">
            <CharBox name="Maki Zenin" image={maki} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Characters;
