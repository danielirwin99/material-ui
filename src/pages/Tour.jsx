import { BottomNavigation, Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Accordian from "../components/Accordian";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 1000 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
          alt="main photo"
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h4" component="h6" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          debitis illum voluptatum expedita ducimus ab beatae excepturi corporis
          commodi, labore veritatis nam magnam quasi cum porro vel omnis facilis
          quam repellat velit eaque. Itaque doloribus earum dolore voluptas.
          Laudantium, fuga.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h4" component="h6" marginBottom={2} marginTop={2}>
          Frequently Asked Questions
        </Typography>
        <Accordian />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
