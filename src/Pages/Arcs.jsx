// import React from "react";
import {useEffect} from "react";
import NavBar from "../Components/NavBar";
import StoryArc from "../Components/StoryArc";
import {
  jjk1,
  jjk2,
  jjk3,
  jjk4,
  jjk5,
  jjk6,
  jjk7,
  jjk8,
  jjk9,
  jjk10,
  jjk11,
  jjk12,
} from "../images/index.js";
function Arcs() {
  const arcImages = [
    jjk1,
    jjk2,
    jjk3,
    jjk4,
    jjk5,
    jjk6,
    jjk7,
    jjk8,
    jjk9,
    jjk10,
    jjk11,
    jjk12,
  ];
  useEffect(() => {
    document.title = "JJK || Story Arcs";
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white ">
      <NavBar />
      <div className="md:grid grid-cols-2">
        <div className="ml-5">
          <div className="text-3xl font-semibold">Story Arcs:</div>
          <ul className="list-disc ml-10 mt-5 text-2xl">
            <div>
              <StoryArc
                title="Cursed Child Arc"
                items={[
                  "Manga: Jujutsu Kaisen 0 - Chapter 1 to 4",
                  "Anime: Jujutsu Kaisen 0 The Movie",
                ]}
              />
            </div>
            <br />
            <p className="text-3xl font-semibold mb-2 underline underline-offset-2">
              Season 1
            </p>
            <div className="pb-5">
              <StoryArc
                title="Fearsome Womb Arc"
                items={[
                  "Manga: Jujutsu Kaisen Chapter 1 to 18",
                  "Anime: Episode 1 to 8",
                ]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Vs. Mahito Arc"
                items={[
                  "Manga: Jujutsu Kaisen Chapter 19 to 31",
                  "Anime: Episode 9 to 13",
                ]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Kyoto Goodwill Event Arc"
                items={["Manga: Chapter 32 to 54", "Anime: Episode 14 to 21"]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Death Painting Arc"
                items={["Manga: Chapter 55 to 64", "Anime: Episode 22 to 24"]}
              />
            </div>
            <p className="text-3xl font-semibold mb-2 underline underline-offset-2">
              Season 2
            </p>
            <div className="pb-5">
              <StoryArc
                title="Gojo’s Past Arc/Hidden Inventory Arc"
                items={["Manga: Chapter 65 to 79", "Anime: Episode 25 to 29"]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Shibuya Incident Arc"
                items={[
                  "Manga: Chapter 79 to 136",
                  "Anime: Episode 30 onwards",
                ]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Itadori’s Extermination Arc"
                items={["Manga: Chapter 137 to 143", "Anime: TBD"]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Itadori’s Extermination Arc"
                items={["Manga: Chapter 144 to 158", "Anime: TBD"]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Culling Game Arc"
                items={["Manga: Chapter 159 to 222", "Anime: TBD"]}
              />
            </div>
            <div className="pb-5">
              <StoryArc
                title="Shinjuku Showdown Arc"
                items={["Manga: Chapter 223 and ongoing", "Anime: TBD"]}
              />
            </div>
          </ul>
        </div>

        {/* /////////////////////////////// */}
        {/* GRIDS IDEA? */}
        {/* /////////////////////////////// */}
        <div className="px-5 py-5 md:px-0 md:py-0 grid grid-cols-3 md:w-[500px] md:h-[500px] gap-5">
          {arcImages.map((image, index) => (
            <div
              key={index}
              className="block overflow-hidden w-40 h-60 hover:drop-shadow-[05px_5px_10px_rgba(23,123,255,0.75)]"
            >
              <img
                key={index}
                src={image}
                alt="cover image"
                className=" h-60 w-40 object-cover hover:scale-110 bg-green-500 transition-all ease-in "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Arcs;
