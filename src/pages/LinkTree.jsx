import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ProductLink from "../components/ProductLink";
import Header from "../components/Header-V2";

const ReactSocialCaseStudy = () => {
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
        <Header />
        <Typography variant="h1" sx={{fontSize: "24px", fontWeight: "bold"}}>
          Apartment Woodworking <br></br> Starter Kit
        </Typography>
        <ProductLink url="https://amzn.to/3zbXxx6">Saw</ProductLink>
        <ProductLink url="https://amzn.to/47hBBNE">Plane</ProductLink>
        <ProductLink url="https://amzn.to/3ZnFrCO">Hammer</ProductLink>
        <ProductLink url="https://amzn.to/4cWXaUP">Chisels</ProductLink>
        <ProductLink url="https://amzn.to/4dUe6wK">
          Sharpening Stone
        </ProductLink>
        <ProductLink url="https://amzn.to/47hHieC">
          Combination Square
        </ProductLink>
        <ProductLink url="https://amzn.to/3MFlOPj">Clamps</ProductLink>
        <ProductLink url="https://amzn.to/3XgOHGk">Sandpaper</ProductLink>
        <ProductLink url="https://amzn.to/3XzlE20">Sanding Block</ProductLink>
        <ProductLink url="https://amzn.to/3XwxaLD">
          Shellac (sealer)
        </ProductLink>
      </Box>
    </Container>
  );
};

export default ReactSocialCaseStudy;
