import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return (await res).json();
};

const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border-1 border-r-0 border-gray-300 rounded-l-2xl ${
              toggle === true ? "bg-lime-400" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border-1 border-l-0 border-gray-300 rounded-r-2xl ${
              toggle === false ? "bg-lime-200" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
