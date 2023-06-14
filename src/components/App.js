import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

function App(props) {
  return (
    <div className="App">
      <Header store={props.store}/>
      <Body store={props.store}/>
      <Footer />
    </div>
  );
}

export default App;
