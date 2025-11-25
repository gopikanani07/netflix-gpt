import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch =useDispatch();

  const searchMovieTMDB =async (movie)=>{
    const data =await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    return json.results
  }


  const handleGptSearchClick = async () => {
    if (!searchText.current?.value) return;

    const query = searchText.current.value;

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      query +
      ". Only give exactly 5 movie names separated by commas.";

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: gptQuery }],
      });

      console.log("GPT Response:", response.choices[0].message.content);
      const gptMovies = response.choices[0].message.content.split(",");
      const promiseArray= gptMovies.map(movie=>searchMovieTMDB(movie));
      const tmdbResults= await Promise.all(promiseArray);

      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))
      
      

    } catch (error) {
      console.error("GPT ERROR:", error);
    }
  };

  return (
    <div className="pt-[50%] md:pt-[10%]  flex justify-center ">
      <form
        className=" w-full mx-8 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 pt- m-4 col-span-9 rounded-lg"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-600 col-span-3 m-4 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
