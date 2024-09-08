import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";
import DribbbleLinkCard from "../components/DribbbleLinkCard";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const ReactSocialCaseStudy = () => {
  const useStyles = makeStyles({
    gridContainer: {
      flexGrow: 1,
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    gridItem: {
      padding: "1rem",
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();

  // Pass a function that navigates to the case study URL when called
  const handleCaseStudyClick = () => {
    navigate("/react-social-case-study");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, textAlign: "flex-start" }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Design
        </Typography>
        <Typography
          sx={{ alignSelf: "right", marginTop: "1rem" }}
          variant="h4"
          component="h1"
          gutterBottom
        >
          Case Studies
        </Typography>
        <Grid
          container
          spacing={2}
          className={classes.gridContainer}
          sx={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <PortfolioItem
              cardImage="case-study-images/home.png"
              cardTitle="ReactSocial"
              caseStudyURL={handleCaseStudyClick} // Pass the function here
            />
          </Grid>
        </Grid>
        <Typography
          sx={{ alignSelf: "right", marginTop: "1rem" }}
          variant="h4"
          component="h1"
          gutterBottom
        >
          Prototypes
        </Typography>
        <Grid
          container
          spacing={2}
          className={classes.gridContainer}
          sx={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <DribbbleLinkCard
              cardImage="item-images/tulips-concept.png"
              url="https://dribbble.com/shots/14062665-Tulips-homepage-concept?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Tulips%20-%20homepage%20concept&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Tulips%20-%20homepage%20concept&utm_medium=Social_Share"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <DribbbleLinkCard
              cardImage="item-images/werkspace.png"
              url="https://dribbble.com/shots/17461500-Werkspace-Coworking-Business-Landing-Page-Design-Concept?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Werkspace%20-%20Coworking%20Business%20Landing%20Page%20Design%20Concept&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Werkspace%20-%20Coworking%20Business%20Landing%20Page%20Design%20Concept&utm_medium=Social_Share"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <DribbbleLinkCard
              cardImage="item-images/styledPP.png"
              url="https://dribbble.com/shots/13611728-Landing-page-styld-app-concept?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Landing%20page%20-%20styld%20-%20app%20concept&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Landing%20page%20-%20styld%20-%20app%20concept&utm_medium=Social_Share"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <DribbbleLinkCard
              cardImage="item-images/signup-pgp.png"
              url="https://dribbble.com/shots/13495221-Signup-Form-Concept-Project-Golden-Phoenix?utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Signup%20Form%20Concept%20-%20Project%20Golden%20Phoenix&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=markohanesian&utm_content=Signup%20Form%20Concept%20-%20Project%20Golden%20Phoenix&utm_medium=Social_Share"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReactSocialCaseStudy;
