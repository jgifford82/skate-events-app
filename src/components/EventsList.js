import { render } from "@testing-library/react";
import React from "react";

const EventsList = ({ meets }) => {
  //   console.log(meets);
  const renderEvents = meets.map((meet) => <li key={meet.id}>{meet.title}</li>);

  return <div>{renderEvents}</div>;
};

export default EventsList;
