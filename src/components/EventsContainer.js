import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";

const EventsContainer = () => {
  const [events, setEvents] = useState("");

  useEffect(() => {
    fetch("http://localhost:3004/skate_events")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setEvents(data));
  }, []);

  console.log(events);

  return (
    <div>
      Events!
      <EventsList />
    </div>
  );
};

export default EventsContainer;
