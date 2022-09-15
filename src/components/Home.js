import React from "react";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        Happy Skating!
      </Typography>
      <br></br>
      <Typography
        variant="h3"
        component="div"
        sx={{ flexGrow: 1 }}
        align="center"
      >
        <img
          src="https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="roller skates"
        ></img>
      </Typography>
    </div>
  );
};

export default Home;
