/* eslint-disable react/button-has-type */
import { useRef } from "react";

const Song = ({ src }) => {
  const song = useRef();
  const playSong = (song) => {
    song.current.play();
  };
  const pauseSong = (song) => {
    song.current.pause();
  };
  return (
    <div className="play-pause">
      <div className="buttons-play-pause flex items-center justify-center mx auto">
        <a href={src} download="ChansonDuJour.mp3">
          <h3>Ecouter la chanson du jour (cliquer pour télécharger) : </h3>
        </a>
        <button
          className="play"
          onClick={() => {
            playSong(song);
          }}
        >
          <i className="fas fa-play" />
        </button>
        <button
          className="play"
          onClick={() => {
            pauseSong(song);
          }}
        >
          <i className="fas fa-pause" />
        </button>

        <audio preload="auto" ref={song}>
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};
export default Song;
