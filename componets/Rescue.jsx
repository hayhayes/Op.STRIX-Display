// App.js
import React, { useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


import './interactive.css';

function Map({ mapStatus, handleDeploy, selectedTeam }) {
    const [{ canDrop, isOver }, drop] = useDrop({
      accept: "TEAM",
      drop: (item) => handleDeploy(item.team, item.location),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });
  
    return (
      <div className="town" ref={drop}>
        <h2>Mission Area</h2>
        <div className="map-grid">
          {mapStatus.map((building) => (
            <div
              key={building.id}
              className={`building ${building.status}`}
              onClick={() => handleDeploy(selectedTeam, building.location)}
            >
              <h3>{building.location}</h3>
              <p>Status: {building.status}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

function TeamPanel({ teams, setSelectedTeam, selectedTeam }) {
    return (
      <div className="team-panel">
        <h2>Choose Your Team</h2>
        {teams.map((team) => (
          <div key={team.id}>
            <Team
              team={team}
              setSelectedTeam={setSelectedTeam}
              selectedTeam={selectedTeam}
            />
          </div>
        ))}
      </div>
    );
}
  
function Team({ team, setSelectedTeam, selectedTeam }) {
    const [{ isDragging }, drag] = useDrag({
      type: "TEAM",
      item: { team, location: null },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={drag}
        className={`team ${isDragging ? "dragging" : ""}`}
        onClick={() => setSelectedTeam(team)}
      >
        <h3>{team.name}</h3>
      </div>
    );
}
 
function MissionStatus({ missionStatus }) {
    return (
      <div className="mission-status">
        <h2>Mission Status: {missionStatus}</h2>
      </div>
    );
}

function Game() {
  const [missionStatus, setMissionStatus] = useState("Select a Disaster");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teams, setTeams] = useState([
    { id: "firetruck", name: "Fire Truck", deployed: false },
    { id: "ambulance", name: "Ambulance", deployed: false },
    { id: "helicopter", name: "Helicopter", deployed: false },
  ]);

  const [mapStatus, setMapStatus] = useState([
    { id: "building1", location: "Downtown", status: "Empty" },
    { id: "building2", location: "Uptown", status: "Empty" },
  ]);

  useEffect(() => {
    if (missionStatus === "Fire in Downtown") {
      setTeams((prevTeams) => prevTeams.map((team) => ({ ...team, deployed: false })));
      setMapStatus([
        { id: "building1", location: "Downtown", status: "On Fire" },
        { id: "building2", location: "Uptown", status: "Safe" },
      ]);
    }
  }, [missionStatus]);

  const handleDeploy = (team, location) => {
    if (team && location) {
      const newMapStatus = mapStatus.map((building) =>
        building.location === location
          ? { ...building, status: `${team.name} Deployed` }
          : building
      );
      setMapStatus(newMapStatus);
      setTeams(
        teams.map((t) =>
          t.id === team.id ? { ...t, deployed: true } : t
        )
      );
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <h1>Mission: Rescue!</h1>
      <MissionStatus missionStatus={missionStatus} />
      <div className="game-container">
        <Map
          mapStatus={mapStatus}
          handleDeploy={handleDeploy}
          selectedTeam={selectedTeam}
        />
        <TeamPanel
          teams={teams}
          setSelectedTeam={setSelectedTeam}
          selectedTeam={selectedTeam}
        />
      </div>
      <div className="disaster-options">
        <button onClick={() => setMissionStatus("Fire in Downtown")}>Fire in Downtown</button>
      </div>
    </div>
    </DndProvider>
  );
}

export default Game;
