import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";

const EventsContainer = () => {
  const [meets, setMeets] = useState("");

  useEffect(() => {
    fetch("http://localhost:3004/skate_events")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setMeets(data));
  }, []);

  console.log(meets);

  return (
    <div>
      Events!
      <EventsList meets={meets} />
    </div>
  );
};

export default EventsContainer;
