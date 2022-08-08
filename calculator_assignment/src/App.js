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
              document.querySelector(".screen").value = screen;
            }}
          >
            1
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 2);
              document.querySelector(".screen").value = screen;
            }}
          >
            2
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 3);
              document.querySelector(".screen").value = screen;
            }}
          >
            3
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "/");
              document.querySelector(".screen").value = screen;
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
              document.querySelector(".screen").value = screen;
            }}
          >
            4
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 5);
              document.querySelector(".screen").value = screen;
            }}
          >
            5
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 6);
              document.querySelector(".screen").value = screen;
            }}
          >
            6
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "-");
              document.querySelector(".screen").value = screen;
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
              document.querySelector(".screen").value = screen;
            }}
          >
            7
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 8);
              document.querySelector(".screen").value = screen;
            }}
          >
            8
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 9);
              document.querySelector(".screen").value = screen;
            }}
          >
            9
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + "+");
              document.querySelector(".screen").value = screen;
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
              document.querySelector(".screen").value = screen;
            }}
          >
            .
          </div>
          <div
            className="column"
            onClick={() => {
              setScreen(screen + 0);
              document.querySelector(".screen").value = screen;
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
              document.querySelector(".screen").value = screen;
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
