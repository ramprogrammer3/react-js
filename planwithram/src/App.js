import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2> No Tour Left </h2>
        <button onClick={() => setTours(data)}> Refresh </button>
      </div>
    )
  }

  return (
    <div>

      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
};

export default App;
