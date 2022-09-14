import React from "react";

const EventsForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <div>
      EventsForm
      <form onSubmit={handleSubmit}>
        <label>
          Add New Event:
          <input type="text" name="title" placeholder="Event Title" />
          <input type="text" name="day" placeholder="Day of the week" />
          <input type="text" name="time" placeholder="Time frame" />
          <input type="text" name="location" placeholder="Location" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EventsForm;
