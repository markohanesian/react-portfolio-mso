import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";
import { makeStyles } from "@mui/styles";

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
          Development
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
              cardDescription="A social media app featuring the ability to post text and images, and comment on user posts. Built with reactjs, firebase, and materialui"
              deployURL="https://social-media-app-mso.web.app/"
              codeURL="https://github.com/markohanesian/ReactSocial"
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
