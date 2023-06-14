import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";

function Body(props) {

  const [state, setState] = useState(props.store.getState());
  props.store.subscribe(() => {
    const updatedState = props.store.getState();
    setState(updatedState);
  })

  const all_movie_list = state.collections.list;
  const fav_list = state.collections.fav;
  // const searchRes=state.search;
  let dataToBeDisplay=all_movie_list;
  if(state.isFavouriteDisplay){
    dataToBeDisplay=fav_list;
  }


  function isFavourite(movie) {
    //keep inside subscribe and prototype
    const index = fav_list.indexOf(movie);
    return index !== -1;
  }

  return (
    <div className="Body">
      {dataToBeDisplay.map((movie, index) => (
        <MovieCard
          movie={movie}
          key={index}
          store={props.store}
          isFavourite={isFavourite(movie)}
        />
      ))}
    </div>
  );
}

export default Body;
