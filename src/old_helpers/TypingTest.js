import React, { useState, useEffect } from "react";
import DisplayParagraph from "./DisplayParagraph";
import TextInput from "./TextInput";
import Timer from "./Timer";

const paragraphs = [
  "In the age of information, keyboard proficiency is a valuable asset. Whether you're composing emails, writing reports, or chatting with friends, being able to type efficiently can save you time and effort.",
  "Practice makes perfect when it comes to typing. The more you practice, the better your muscle memory becomes, and you'll find yourself typing with greater speed and accuracy.",
  "Typing isn't just about pressing keys; it's about rhythm and flow. The best typists maintain a smooth, consistent pace, avoiding the stumbles and hesitations that slow them down.",
  "Remember to take breaks during long typing sessions. Stretch your fingers, wrists, and arms to prevent strain and discomfort. Good ergonomics can help you maintain your typing skills over the long term.",
  "Many professions require strong typing skills, from data entry and transcription to coding and content creation. No matter your career path, honing your typing abilities can open doors to new opportunities.",
];
const randomIndex = Math.floor(Math.random() * paragraphs.length);
  const paragraph = paragraphs[randomIndex];
const TypingTest = () => {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    if (userInput.length === 1 && startTime === null) {
      setStartTime(new Date());
    }
    if (userInput === paragraph) {
      setElapsedTime(new Date() - startTime);
    }
  }, [userInput, startTime, paragraph]);

  return (
    <div>
      <DisplayParagraph paragraph={paragraph} userInput={userInput} />
      <TextInput userInput={userInput} setUserInput={setUserInput} />
      <Timer elapsedTime={elapsedTime} />
    </div>
  );
};

export default TypingTest;
