import errorImg from "../images/error.jpg";
import {useState} from "react";

function CharBox({image, name}) {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  return (
    <div className="border-sky-500 cursor-pointer text-white hover:text-sky-500 bg-slate-900 mx-5 my-5 border-2 h-24 w-80 rounded-2xl flex overflow-hidden  md:hover:drop-shadow-[05px_5px_10px_rgba(23,123,255,0.75)] transition-all ease-in-out md:hover:-rotate-2">
      <div className="w-1/3 border-r-2 border-sky-500 ">
        <img
          src={error ? errorImg : image}
          onError={handleImageError}
          className="object-contain"
          alt={name}
        />
      </div>
      <div className="w-2/3 flex h-full  self-center text-3xl font-semibold ">
        <span className="w-full text-center self-center  transition-all">
          {name}
        </span>
      </div>
    </div>
  );
}

export default CharBox;
