import React from "react";

const IndianPlayers = () => {
  const oddTeam = ["Rohit", "Dhoni", "Hardik", "Ashwin", "Jadeja", "Ishan"];
  const evenTeam = ["Virat", "Pant", "KL Rahul", "Shami", "Bumrah"];

  const T20players = ["Rohit", "Virat", "Pant"];
  const RanjiPlayers = ["Rahane", "Pujara"];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  const [o1, o2, ...restOdd] = oddTeam;
  const [e1, e2, ...restEven] = evenTeam;

  return (
    <div>
      <h2>Odd Team</h2>
      <ul>
        <li>{o1}</li>
        <li>{o2}</li>
        {restOdd.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team</h2>
      <ul>
        <li>{e1}</li>
        <li>{e2}</li>
        {restEven.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
