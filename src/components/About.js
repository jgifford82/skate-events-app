import React from "react";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        Connect with local skaters and build community
        <img
          src="https://images.pexels.com/photos/7335292/pexels-photo-7335292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="group of roller skaters"
        ></img>
      </Typography>
    </div>
  );
};

export default About;
