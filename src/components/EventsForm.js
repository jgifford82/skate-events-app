import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const EventsForm = ({ onAddMeet }) => {
  const initialValues = {
    title: "",
    day: "",
    time: "",
    location: "",
  };

  // This state sets the default form input values as an object with empty strings.
  const [values, setValues] = useState(initialValues);

  // This function handles all form inputs with a single onChange handler.
  // Controlled inputs by destructuring name & value attributes from inputs, then updating state by copying values and updating each value based on the event target.
  // onChange prop added to each input to call handleInputChange
  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };

  function handleSubmit(event) {
    // prevent page refresh on submit:
    event.preventDefault();
    // console.log("submitted");
    // console.log(values);

    fetch("http://localhost:3004/skate_events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      // .then((data) => console.log(data));
      .then((newMeet) => onAddMeet(newMeet));

    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <form onSubmit={handleSubmit}>
          <label>
            <span style={{ fontWeight: "bold" }}>Add New Event:</span>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={values.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="day"
              placeholder="Day of the week"
              value={values.day}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Time frame"
              value={values.time}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={values.location}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    </div>
  );
};

export default EventsForm;
