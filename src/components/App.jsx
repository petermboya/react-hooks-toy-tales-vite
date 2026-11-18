import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys"; // use the port your server prints

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Side effect: load all toys from the backend once, when the app starts.
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.error("Could not load toys:", err));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add: runs after the form has saved a new toy to the backend.
  function handleAddToy(newToy) {
    setToys((current) => [...current, newToy]);
  }

  // Donate: DELETE on the backend, then remove the toy from the page.
  function handleDonateToy(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
      setToys((current) => current.filter((toy) => toy.id !== id));
    });
  }

  // Like: PATCH the likes on the backend, then update that toy in state.
  // map() keeps the toys in the same order on the page.
  function handleLikeToy(toy) {
    fetch(`${API_URL}/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys((current) =>
          current.map((t) => (t.id === updatedToy.id ? updatedToy : t))
        );
      });
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} apiUrl={API_URL} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDonate={handleDonateToy}
        onLike={handleLikeToy}
      />
    </>
  );
}

export default App;