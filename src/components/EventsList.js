import { render } from "@testing-library/react";
import React from "react";
import Typography from "@mui/material/Typography";

const EventsList = ({ meets }) => {
  //   console.log(meets);
  const renderEvents = meets.map((meet) => <ul key={meet.id}>{meet.title}</ul>);

  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        Events in Boulder!
      </Typography>
      <br></br>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        No RSVP needed. Just show up if you can attend!
      </Typography>
      <br></br>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        {renderEvents}
      </Typography>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <img
          src="https://images.pexels.com/photos/7335260/pexels-photo-7335260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="group of roller skaters"
        ></img>
      </Typography>
    </div>
  );
};

export default EventsList;
