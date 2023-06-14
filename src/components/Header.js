import React from "react";
import "./NavBar.css";

function Header(props) {
  function handleFavouriteT() {
    props.store.dispatch({ type: "IS_FAVOURITE_DISPLAY", key: true });
  }

  function handleFavouriteF() {
    props.store.dispatch({ type: "IS_FAVOURITE_DISPLAY", key: false });
  }

  function onClickHandle(e) {
    //typeing in search bar'
    var inputField = document.getElementById("inputField");
    var inputValue = inputField.value;
    // console.log("Input Value:", inputValue);
    props.store.dispatch({ type: "SEARCH_RESULTS", key: inputValue });
  }
  return (
    <div className="Header">
      <h1 className="Title">Movie-App</h1>
      <div className="topnav">
        <button onClick={handleFavouriteF}>Home</button>
        <button onClick={handleFavouriteT}>Favourites</button>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        
        <div>
        <input className="search" id="inputField" placeholder="Search.."/>
        <button id="submitButton" onClick={onClickHandle}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
