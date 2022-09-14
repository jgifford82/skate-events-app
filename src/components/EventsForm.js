import React, { useState } from "react";

const EventsForm = () => {
  const initialValues = {
    title: "",
    day: "",
    time: "",
    location: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  function handleSubmit(event) {
    // prevent page refresh on submit:
    event.preventDefault();
    console.log("submitted");
    // clear input fields on submit by updating values state:
    setValues(initialValues);
  }

  return (
    <div>
      EventsForm
      <form onSubmit={handleSubmit}>
        <label>
          Add New Event:
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
    </div>
  );
};

export default EventsForm;
