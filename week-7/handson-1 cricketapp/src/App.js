import React, { useState } from "react";
import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  // Use simple if-else in the flag variable
  let displayComponent;
  if (flag === true) {
    displayComponent = <ListofPlayers />;
  } else {
    displayComponent = <IndianPlayers />;
  }

  return (
    <div className="App">
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        Show {flag ? "IndianPlayers" : "ListofPlayers"}
      </button>
      <hr />
      {displayComponent}
    </div>
  );
}

export default App;
