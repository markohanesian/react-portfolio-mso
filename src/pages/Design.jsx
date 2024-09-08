import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";
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
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Design
        </Typography>
        <Grid
          container
          spacing={2}
          className={classes.gridContainer}
          sx={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <PortfolioItem
              cardImage="item-images/react-social-preview.png"
              cardTitle="ReactSocial"
              caseStudyURL={handleCaseStudyClick} // Pass the function here
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <PortfolioItem
              cardImage="item-images/former-mso.png"
              cardTitle="Former"
              cardDescription="Form creator website with export to pdf"
              deployURL="https://former-mso.netlify.app/"
              codeURL="https://github.com/markohanesian/former-mso"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.gridItem}>
            <PortfolioItem
              cardImage="item-images/git-good.png"
              cardTitle="Git Good"
              cardDescription="Git language cheatsheet with copy to clipboard. Built with ReactJS and features a custom logo design"
              deployURL="https://git-cheatsheet-mso.netlify.app/"
              codeURL="https://github.com/markohanesian/git-cheatsheet-mso"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReactSocialCaseStudy;
