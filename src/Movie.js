import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";
import "./movie.css";

const Movie = ({ base_url, movie, isLargeRow }) => {
  const [trailer, setTrailer] = useState("");
  const [showDialogBox, setShowDialogBox] = useState(false);
  useEffect(() => {
    const seturl = (key) => {
      return `https://www.youtube.com/embed/${key}`;
    };
    const fetchData = async () => {
      const result = await axios.get(
        `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${requests.API_KEY}`
      );
      setTrailer(seturl("JYbPYqd7Hfo"));
      setTrailer(seturl(result.data.results[0].key));
    };
    fetchData();
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setShowDialogBox(false);
    });
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") setShowDialogBox(false);
      });
    };
  }, [showDialogBox]);
  return (
    <>
      <img
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
        onClick={() => setShowDialogBox(true)}
      />
      {showDialogBox && (
        <div className="movie-popup">
          <iframe
            width="560"
            height="315"
            src={trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="movie-btn" onClick={() => setShowDialogBox(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="transparent" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Movie;
