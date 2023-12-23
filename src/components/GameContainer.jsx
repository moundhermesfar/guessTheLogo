import React, { useState } from "react";
import Logo from "./Logo";
import InputField from "./InputField";
import RevealButton from "./RevealButton";
import SkipButton from "./SkipButton";
import SubmitButton from "./SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Logos from "../Data/Logos";
import logo from "../assets/nextech.png";

const GameContainer = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [isAnswerRevealed, setAnswerRevealed] = useState(false);
  const [message, setMessage] = useState("");

  const currentLogo = Logos[currentLogoIndex];

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleSubmit = () => {
    if (userGuess.toLowerCase() === currentLogo.answer.toLowerCase()) {
      setMessage("Correct! Well done!");
    } else {
      setMessage("Wrong! Try again.");
    }
  };

  const handleRevealAnswer = () => {
    setAnswerRevealed(true);
    setMessage(`The correct answer is: ${currentLogo.answer}`);
  };

  const handleSkip = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % Logos.length);
    setUserGuess("");
    setAnswerRevealed(false);
    setMessage("");
  };

  return (
    <>
      <header className="text-center mb-5 mt-5">
        <img
          src={logo}
          alt="Club Logo"
          className="mx-auto mb-2"
          style={{ maxWidth: "150px" }}
        />
        <h1 className="text-4xl font-bold">Let's Have Some Fun!</h1>
        <p className="text-gray-400 mt-2">Try to guess the logo!</p>
      </header>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-5">
          <Logo currentLogo={currentLogo} onLogoReveal={handleRevealAnswer} />
        </div>
        <div className="mb-5">
          <InputField onInputChange={handleInputChange} value={userGuess} />
        </div>
        <div className="flex gap-4 mb-4">
          <SubmitButton onSubmit={handleSubmit} />
          <RevealButton onReveal={handleRevealAnswer} />
          <SkipButton onSkip={handleSkip} />
        </div>
        {message && (
          <p
            className={`mt-4 text-center text-xl font-semibold ${
              message.includes("Correct") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
      <footer className="sm:fixed sm:bottom-0 w-full p-6 bg-gray-800 flex flex-col items-center text-white">
        <p className="text-lg font-semibold mb-4">Be a part of our community</p>
        <div className="flex justify-around w-full">
          <a
            href="https://www.facebook.com/profile.php?id=61553474487971"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
          <a
            href="https://www.instagram.com/nextech.squad/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
          <a
            href="https://discord.gg/pp9KnpcJEv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default GameContainer;
