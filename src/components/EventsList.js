import { render } from "@testing-library/react";
import React from "react";

const EventsList = ({ meets }) => {
  //   console.log(meets);
  const renderEvents = meets.map((meet) => <li>{meet.title}</li>);

  return <div>EventsList Placeholder {renderEvents}</div>;
};

export default EventsList;
