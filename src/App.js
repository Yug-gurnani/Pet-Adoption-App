/* global React ReactDOM */

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havenese" }),
    React.createElement(Pet, { name: "Lakshit", animal: "Dog", breed: "Havenese" }),
    React.createElement(Pet, { name: "Kaydee", animal: "Dog", breed: "Havenese" })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
