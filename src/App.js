import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNayoks(data));
    return () => {};
  }, []);

  return (
    <div className="App">
      {nayoks.map((nk) => (
        <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>
      ))}
    </div>
  );
}
function Nayok(props) {
  const nayokStyles = {
    border: "2px solid purple",
    margin: "20 px",
  };

  return (
    <div style={nayokStyles}>
      <h2> I am Nayok:{props.name} </h2>
      <h3>I have done 20 movies in {props.age || 30} years</h3>
    </div>
  );
}

export default App;
