import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ProductLink from "../components/ProductLink";
import Header from "../components/Header-V2";

const ReactSocialCaseStudy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, textAlign: "flex-start"}}>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <Typography variant="h4" component="h2" gutterBottom>
          Apartment Woodworking Starter Kit
        </Typography>
        <ProductLink url="https://amzn.to/3zbXxx6">Hand Saw</ProductLink>
      </Box>
    </Container>
  );
};

export default ReactSocialCaseStudy;
