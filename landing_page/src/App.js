import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <img
        id="myGif"
        src="https://media.giphy.com/media/e7FOBuKCDtwWI/giphy.gif"
        alt="darth_maul"
      />
      <div className="App">
        <div className="App-container">
          <div className="App-content">
            <div className="App-title">
              <h1>Hello There!</h1>
              <p>Wellcome to the Dark Side</p>
              <p>Visitor #{Math.floor(Math.random() * 100000)}</p>
            </div>
            <div className="App-image">
              <figure>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/helmet-1/154/darth-vader-mask-helmet-darkness-knight-512.png"
                  alt="darth_vader"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
