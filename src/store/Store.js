import { createStore } from "redux";
import { data } from "../data";
import rootReducer from "../reducers/FavReducer";

const Add_movie_to_list = (data) => {
  return {
    type: "ADD_MOVIE_TO_LIST",
    data: data,
  };
};

const store = createStore(rootReducer);
// detect any change in store from any component
// invoked each time just after an action is dispatched
//insert each movie into store one by one
store.dispatch(Add_movie_to_list(data));  
//we can sent data with iterating as 
// store.dispatch({type:'ADD_MOVIE',data:data})
// now just modify reducer to update state with a list directly instead of single movie each time

export default store;
