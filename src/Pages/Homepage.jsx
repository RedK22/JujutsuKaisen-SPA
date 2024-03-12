// import React from "react";
import Cover from "../images/cover.png";
import NavBar from "../Components/NavBar";
import {useEffect} from "react";

function Homepage() {
  useEffect(() => {
    document.title = "JJK || Home";
  }, []);

  return (
    <>
      <div className="bg-slate-900 min-h-screen relative">
        <NavBar />
        <div className="md:flex">
          <div className="text-white mx-5 sm:flex-1">
            <span className="sm:text-3xl font-semibold ">Jujutsu Kaisen</span>{" "}
            is a Japanese manga series written and illustrated by Gege Akutami.
            It was serialized in &quot;Weekly Shonen Jump&quot; magazine
            starting in March 2018 and has gained significant popularity for its
            engaging plot, well-developed characters, and intense action scenes.
            <br />
            <br />
            <div>
              <strong className="sm:text-3xl">Plot:</strong>
              <div className="mb-5">
                The story revolves around Yuji Itadori, a high school student
                with impressive physical abilities but a reluctance to join any
                extracurricular activities. His life takes a drastic turn when
                he encounters a cursed object containing a malevolent Curse, a
                supernatural being fueled by negative emotions. Yuji&apos;s
                friends accidentally unseal the object, releasing Curses into
                the world.
                <br />
                <br />
                Upon discovering the danger, Yuji&apos;s school introduces him
                to the world of Jujutsu Sorcerers, individuals trained to combat
                Curses. Satoru Gojo, a powerful Jujutsu Sorcerer, informs Yuji
                about the existence of powerful Cursed objects and Curses. To
                protect his friends, Yuji decides to become a Jujutsu Sorcerer
                and enroll in Tokyo Metropolitan Jujutsu Technical High School.
                <br />
                <br />
                As Yuji delves deeper into the world of curses, he learns about
                Sukuna, a legendary Cursed Spirit with immense power. In an
                attempt to save his friends, Yuji swallows a fragment of
                Sukuna&apos;s cursed finger, gaining a portion of his powers.
                Now, Yuji, along with his classmates Megumi Fushiguro and Nobara
                Kugisaki, embarks on a journey to collect all of Sukuna&apos;s
                fingers to eliminate the threat posed by this malevolent Cursed
                Spirit.
              </div>
              <strong className="sm:text-3xl">Themes:</strong>
              <div>
                &quot;Jujutsu Kaisen&quot; explores themes of life and death,
                the consequences of negative emotions, and the struggle against
                malevolent supernatural forces. It combines elements of horror,
                action, and comedy, making it a well-rounded and appealing
                series to a wide audience.
              </div>
            </div>
          </div>
          <div>
            <img
              src={Cover}
              alt="cover-panel"
              className="mt-5 ml-5 md:mt-0 md:ml-0 w-[350px] mr-5 md:hover:drop-shadow-[0_0px_20px_rgba(23,123,255,0.5)] md:hover:rotate-[5deg] transition-all ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
