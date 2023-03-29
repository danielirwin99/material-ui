import React from "react";
import "../App.css";
import Tourcard from "../components/Tourcard";
import { Container, Grid, Typography } from "@mui/material";
import cities from "../data.json";

const Home = () => {
  // We have pulled the data from data.json (mock API)
  return (
    <div className="App">
      <Container sx={{ marginTop: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <Tourcard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default Home;
