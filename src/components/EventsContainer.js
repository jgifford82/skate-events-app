import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";
import EventsForm from "./EventsForm";

const EventsContainer = () => {
  const [meets, setMeets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/skate_events")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setMeets(data));
  }, []);

  //   console.log(meets);

  function handleAddMeet(newMeet) {
    // console.log("In EventsContainer:", newMeet);
    setMeets([...meets, newMeet]);
  }

  return (
    <div>
      <EventsForm onAddMeet={handleAddMeet} />
      <EventsList meets={meets} />
    </div>
  );
};

export default EventsContainer;
