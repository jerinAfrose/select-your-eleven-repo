import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  //   console.log(player);

  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 border-gray-200 p-3 flex justify-between items-center rounded-xl mt-5">
      <div className="flex items-center">
        <img
          className="h-[50px] w-[50px] rounded-xl"
          src={player.player_image}
          alt=""
        />
        <div className="ml-2">
          <h1>{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src="https://i.ibb.co.com/PsHRjN0H/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
