import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Characters from "./Pages/characters";
import Arcs from "./Pages/Arcs";
import Author from "./Pages/Author";
import Itadori from "./Pages/Itadori";
import Megumi from "./Pages/Megumi";
import Gojo from "./Pages/Gojo";
import Sukuna from "./Pages/Sukuna";
import Nanami from "./Pages/Nanami";
import Yuta from "./Pages/Yuta";
import Maki from "./Pages/Maki";
import Nobara from "./Pages/Nobara";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="characters" element={<Characters />} />
          <Route path="author" element={<Author />} />
          <Route path="arcs" element={<Arcs />} />

          {/* Characters */}
          <Route path="itadori" element={<Itadori />} />
          <Route path="megumi" element={<Megumi />} />
          <Route path="gojo" element={<Gojo />} />
          <Route path="sukuna" element={<Sukuna />} />
          <Route path="nanami" element={<Nanami />} />
          <Route path="yuta" element={<Yuta />} />
          <Route path="maki" element={<Maki />} />
          <Route path="nobara" element={<Nobara />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
