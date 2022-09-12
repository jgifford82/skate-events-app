import React, { useEffect } from "react";

const EventsList = () => {
  useEffect(() => {
    fetch("http://localhost:3004/skate_events")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>EventsList Placeholder</div>;
};

export default EventsList;
