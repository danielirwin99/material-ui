import React from "react";
import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});

const Tourcard = ({tour}) => {
  return (
    <>
      <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3}>
            <img
              src={tour.image}
              alt=""
              className="img"
            />
            <Box paddingX={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ width: 12.5, marginRight: "5px" }} />
                <Typography variant="body2" component="p">
                  {tour.duration} Hours
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                marginTop="20px"
              >
                <Rating
                  name="read-only"
                  value={tour.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <Typography variant="body2" component="p" marginLeft={1}>
                  {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews} Reviews) 
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                  From AUD ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default Tourcard;
