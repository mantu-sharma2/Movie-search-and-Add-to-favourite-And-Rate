import React from "react";

function upVoteClickHandle(props) {
  props.store.dispatch({ type: "UP_VOTE", movie: props.movie });
}
function dnVoteClickHandle(props) {
  props.store.dispatch({ type: "DN-VOTE", movie: props.movie });
}

function MovieCard(props) {
  return (
    <div className="movie-card">
      <div className="left">
        <img alt="Movie Poster" className="poster" src={props.movie.Poster} />
      </div>
      <div className="right">
        <div className="title">
          {" "}
          <span className="xx">Movie-Name: </span>
          {props.movie.Title}
        </div>
        <div className="plot">
          <span className="xx">Plot: </span> {props.movie.Plot}
        </div>
        <div className="plot">
          <span className="xx">Rating: </span> {props.movie.imdbRating}/10.0
        </div>
        <div className="vote-fav">
          <div className="vote">
            <button className="btn" onClick={() => upVoteClickHandle(props)}>
              Up
            </button>
            <p>voting: {props.movie.Metascore}</p>
            <button className="btn" onClick={() => dnVoteClickHandle(props)}>
              Dn
            </button>
          </div>
          <div className="f-btn">
            {/* {console.log(props.isFavourite)} */}
            {props.isFavourite ? ( //if already favourite show unfavourite button
              <button
                className="btn"
                id="unfav"
                onClick={() => {
                  props.store.dispatch({
                    //dispaching an action to reducer to add to favourites
                    type: "REMOVE_FROM_FAVOURITE",
                    movie: props.movie,
                  });
                  // console.log('need to unfavourite');
                }}
              >
                UnFavourites
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  props.store.dispatch({
                    //dispaching an action to reducer to add to favourites
                    type: "ADD_TO_FAVOURITE",
                    movie: props.movie,
                  });
                  // console.log("STATE AFTER FAVOUURITE CLICK: ",props.store.getState());
                }}
              >
                Favourites
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
