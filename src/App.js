import "tailwindcss/tailwind.css";
import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ArchivesPage from "./components/ArchivesPage";
import PopMenu from "./components/PopMenu";
import Song from "./components/Song";
import PopVoter from "./components/PopVoter";
import CarouselControls from "./components/CarouselControls";
import Footer from "./components/Footer";

function App() {
  const [popMenuVisible, setPopMenuVisible] = useState(false);
  const showPopMenu = () => {
    setPopMenuVisible(true);
  };
  const [popVoterVisible, setPopVoterVisible] = useState(false);
  const showPopVoter = () => {
    setPopVoterVisible(true);
  };

  return (
    <div className="App">
      <Header />
      <Song src="/songs/song1.mp3" />
      <HomePage toggleVisibility={setPopMenuVisible} />
      <PopMenu
        toggleVisibility={setPopMenuVisible}
        title="Menu du jour"
        bgColor="bg-popmenu"
        visibility={popMenuVisible}
      />

      <ArchivesPage toggleVisibility={setPopVoterVisible} />
      <PopVoter
        toggleVisibility={setPopVoterVisible}
        title="Voter pour ses menus préférés"
        bgColor="bg-popvoter"
        visibility={popVoterVisible}
      />
      <Footer />
    </div>
  );
}

export default App;
