import "./App.scss";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("");
  const handleresult = () => {
    let value = eval(screen);
    document.querySelector(".screen").value = value;
  };
  return (
    <div className="container">
      <div className="calculator">
        <div className="row">
          <h1>Calculator</h1>
        </div>
        <div className="row">
          <input
            value={screen}
            className="screen"
            onChange={() => setScreen("")}
          />
          <div className="column" onClick={() => setScreen("")}>
            C
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 1);
            }}
          >
            1
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 2);
            }}
          >
            2
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 3);
            }}
          >
            3
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "/");
            }}
          >
            /
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 4);
            }}
          >
            4
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 5);
            }}
          >
            5
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 6);
            }}
          >
            6
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "-");
            }}
          >
            -
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 7);
            }}
          >
            7
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 8);
            }}
          >
            8
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 9);
            }}
          >
            9
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "+");
            }}
          >
            +
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => {
              setScreen(screen + ".");
            }}
          >
            .
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 0);
            }}
          >
            0
          </div>
          <div className="column" onClick={handleresult}>
            =
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "*");
            }}
          >
            *
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
