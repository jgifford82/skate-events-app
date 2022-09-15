import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";
import EventsForm from "./EventsForm";

const EventsContainer = () => {
  // This is the state used for the array events.
  // Decided to call it "meets" rather than "events" to make it less confusing when setting up event listeners.
  const [meets, setMeets] = useState([]);

  // This fetches the data from db.json and sets the state with that data.
  // the empty dependencies array means the side effect runs only the first time the component renders.
  useEffect(() => {
    fetch("http://localhost:3004/skate_events")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setMeets(data));
  }, []);

  //   console.log(meets);

  // This updates state responsible for rendering events when a new event is added.
  // Callback function is passed as a prop to child (EventsForm) so the new event can be sent up to parent (EventsContainer).
  function handleAddMeet(newMeet) {
    // console.log("In EventsContainer:", newMeet);
    setMeets([...meets, newMeet]);
  }

  return (
    <div>
      <EventsForm onAddMeet={handleAddMeet} />
      <br></br>
      <br></br>
      <EventsList meets={meets} />
    </div>
  );
};

export default EventsContainer;
