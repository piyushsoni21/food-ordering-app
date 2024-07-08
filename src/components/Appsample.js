import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
const parent = React.createElement(" div", { id: "parent" }, [
  React.createElement("h1", {}, "This is React Application"),
]);

const element = <span>React Element</span>

const Title = () => (
  <h1 className="head" tabIndex="5">
    {" "}
    Hello Folks!!!
  </h1>
);

const headig = React.createElement(
  "h1",

  { id: "1", xyz: "customAttrs" },
  "This is First heading"
);
const rootBasic = createRoot(document.getElementById("root"));
rootBasic.render(headig);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {element}
    <h2>This is React Application!!!</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

/* const jsxHeading = <h1>This is React Application!!!</h1>
root.render(jsxHeading); */

root.render(<HeadingComponent />);
