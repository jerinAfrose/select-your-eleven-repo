import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div>
      <h3>Available players</h3>
    </div>
  );
};

export default AvailablePlayers;
