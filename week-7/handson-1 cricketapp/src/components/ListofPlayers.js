import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Rohit", score: 80 },
    { name: "Virat", score: 75 },
    { name: "Dhoni", score: 90 },
    { name: "Pant", score: 60 },
    { name: "Hardik", score: 85 },
    { name: "KL Rahul", score: 55 },
    { name: "Ashwin", score: 40 },
    { name: "Shami", score: 88 },
    { name: "Jadeja", score: 72 },
    { name: "Bumrah", score: 35 },
    { name: "Ishan", score: 50 },
  ];

  const allPlayers = players.map((p, index) => (
    <li key={index}>
      {p.name} - {p.score}
    </li>
  ));

  const below70 = players
    .filter((p) => p.score < 70)
    .map((p, index) => (
      <li key={index}>
        {p.name} - {p.score}
      </li>
    ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>
      <h2>Players with score below 70</h2>
      <ul>{below70}</ul>
    </div>
  );
};

export default ListofPlayers;
