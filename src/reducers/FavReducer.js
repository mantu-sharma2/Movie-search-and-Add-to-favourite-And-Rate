export function movieHandle(currentState, action) {
  //current state=collections
  // currentState.search,

  switch (action.type) {
    case "ADD_MOVIE_TO_LIST":
      currentState.list = [...action.data]; //data is a list of movies
      return currentState;
    case "ADD_TO_FAVOURITE":
      currentState.fav.push(action.movie);
      // console.log("Fav List from action: ", currentState.fav);
      return currentState;
    case "REMOVE_FROM_FAVOURITE":
      const index = currentState.fav.indexOf(action.movie);
      currentState.fav.splice(index, 1);
      return currentState;
    case "UP_VOTE":
      const indexx = currentState.list.indexOf(action.movie);
      if (!currentState.list[indexx].Metascore) {
        currentState.list[indexx].Metascore = 1;
      } else {
        currentState.list[indexx].Metascore++;
      }
      // console.log("Increseing: ", currentState.list[indexx].Metascore);
      return currentState;
    case "DN-VOTE":
      const indexxx = currentState.list.indexOf(action.movie);
      if (!currentState.list[indexxx].Metascore) {
        currentState.list[indexxx].Metascore = -1;
      } else {
        currentState.list[indexxx].Metascore--;
      }
      // console.log("Decreasing: ", currentState.list[indexxx].Metascore);
      return currentState;
    default:
      return currentState;
  }
}

export function searchHandle(currentState, action) {
  const all_movie_list = currentState.collections.list;
  switch (action.type) {
    case "SEARCH_RESULTS":
      const key = action.key.toLowerCase();
      let res = [];
      all_movie_list.map((mov) => {
        const movName = mov.Title.substring(0, key.length).toLowerCase();
        if (movName === key) {
          res.push(mov);
        }
        // console.log(res)
        return res;
      });
      //erase past searched list
      while (currentState.search.length > 0) {
        currentState.search.pop();
      }
      currentState.search = [...res];
      console.log("Search Results: ",currentState.search);
      return currentState.search;
    default:
      return currentState.search;
  }
}

export function handleDataToBeDisplay(currentState,action){
  switch(action.type){
    case "IS_FAVOURITE_DISPLAY":
      currentState.isFavouriteDisplay=action.key;
      return currentState.isFavouriteDisplay;
    default:
      return currentState.isFavouriteDisplay;
  }
}

const initialState = {
  collections: { list: [], fav: [] },
  search: [],
  isFavouriteDisplay:false,
};

const rootReducer = (currentState = initialState, action) => {
  //returns updated state
  return {
    collections: movieHandle(currentState.collections, action),
    search: searchHandle(currentState, action), //list
    isFavouriteDisplay:handleDataToBeDisplay(currentState,action),
  };
};

export default rootReducer;
