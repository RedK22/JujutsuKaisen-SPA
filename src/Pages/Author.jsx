// import React from "react";
import {useEffect} from "react";
import NavBar from "../Components/NavBar";

function Author() {
  useEffect(() => {
    document.title = "JJK || Author";
  }, []);

  return (
    <div className="bg-slate-900 h-screen ">
      <NavBar />
      <div className="text-white ml-5 ">
        <span className="text-3xl font-semibold">Gege Akutami</span> is a
        japanese manga artist, he has gained immense popularity through his
        work, Jujutsu Kaisen. &quot;Gege Akutami&quot; is a pen name while his
        real name is unknown.
        <br />
        He started working as assistant to{" "}
        <span className="underline underline-offset-2">Yasuhiro Kanō </span>
        in <span className="font-semibold">Kiss x Death in 2014.</span>
        <br />
        <br />
        <span className="font-semibold">Birth: </span>
        Feb 26,1992
        <br />
        <span className="font-semibold">Years Active:</span> 2014-present
        <br />
        <span className="font-semibold">Hometown:</span> Iwate, Japan.
        <div>
          <div className="mt-5 mr-5">
            <div className="font-semibold text-3xl mb-2">Awards</div>
            <div>
              In 2016, Akutami&apos;s one-shot{" "}
              <span className="font-semibold">Nikai Bongai Barabarujura</span>{" "}
              was nominated for Weekly Shōnen Jump&apos;s 11th Gold Future Cup
              contest. In 2019, his manga{" "}
              <span className="font-semibold">Jujutsu Kaisen</span> was
              nominated for the{" "}
              <span className="font-semibold">65th Shogakukan Manga Award</span>{" "}
              in the shōnen category. Akutami is the{" "}
              <span className="font-semibold">2020</span> grand prize{" "}
              <span className="font-semibold">winner</span> for{" "}
              <span className="font-semibold">Jujutsu Kaisen </span>
              on Mando Kobayashi, Kendo Kobayashi&apos;s monthly manga variety
              show where winners are selected on his personal taste.In 2021,
              Akutami&apos;s Jujutsu Kaisen was listed as a nominee for the 25th
              Annual Tezuka Osamu Cultural Prize.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
