import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [toys, setToys] = useState([]);

// Side effect: load all toys once when the app starts.
useEffect(() => {
  fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then((data) => setToys(data))
    .catch((err) => console.error("Could not load toys:", err));
}, []);

// <ToyContainer toys={toys} ... />

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
    </>
  );
}

export default App;
