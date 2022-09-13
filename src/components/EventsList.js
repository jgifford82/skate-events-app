import { render } from "@testing-library/react";
import React from "react";
import Typography from "@mui/material/Typography";

const EventsList = ({ meets }) => {
  //   console.log(meets);
  const renderEvents = meets.map((meet) => <li key={meet.id}>{meet.title}</li>);

  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="left"
      >
        Events!
      </Typography>
      <br></br>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1 }}
        align="left"
      >
        {renderEvents}
      </Typography>
    </div>
  );
};

export default EventsList;
