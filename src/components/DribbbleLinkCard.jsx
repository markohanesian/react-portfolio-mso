import React, { useState } from "react";
import { Card, CardMedia, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    maxWidth: "300px",
    margin: "1rem",
  },
  media: {
    height: "200px",
    width: "200px",
    transition: "opacity 0.3s ease-in-out",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.3s ease-in-out",
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cardHovered: {
    opacity: 0.3,
  },
  overlayVisible: {
    opacity: 1,
  },
}));

export default function DribbbleLinkCard({ cardImage, url }) {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      className={classes.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        className={`${classes.media} ${hovered ? classes.cardHovered : ""}`}
        image={cardImage}
        title="Dribbble Portfolio Item"
      />
      <Box
        className={`${classes.overlay} ${
          hovered ? classes.overlayVisible : ""
        }`}
      >
        <Button
          color="warning"
          className={classes.button}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          View on Dribbble
        </Button>
      </Box>
    </Card>
  );
}
