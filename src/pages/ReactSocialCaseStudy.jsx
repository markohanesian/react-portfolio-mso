import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import CTALink from "../components/CTALink";
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
        <Typography variant="h3" component="h1" gutterBottom>
          Case Study: ReactSocial
        </Typography>
        <Typography
          sx={{ maxWidth: "50vw" }}
          variant="subtitle1"
          color="text.secondary"
        >
          A custom-built social media application for sharing text posts,
          images, and comments.
        </Typography>
        <Box
          component="img"
          sx={{
            margin: "1rem",
            height: "500px",
            width: "auto",
            maxHeight: { xs: 233, md: 466 },
            maxWidth: { xs: 350, md: 700 },
          }}
          alt="ReactSocial homepage screenshot"
          src="case-study-images/home.png"
        />
        <br></br>
        <CTALink href="https://social-media-app-mso.web.app/" target="_blank">
          Site
        </CTALink>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Role:</strong> End-to-end design and development of
          ReactSocial, including UI/UX design, frontend development, backend
          integration, and continuous improvements based on user feedback.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Tech Stack:</strong> React, Firebase (Authentication,
          Firestore, Hosting), React-Router, Material-UI
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Problem Statement
        </Typography>
        <Typography variant="body1" paragraph>
          The goal was to create a social media platform that allows users to
          effortlessly share text and images in a virtual social group. The
          challenge was to ensure the platform was user-friendly and robust,
          allowing for seamless interaction while maintaining a modern and
          accessible design.
        </Typography>
        <Typography variant="body1" paragraph>
          Insights from popular social media platforms and user feedback shaped
          the user flow and feature set, ensuring the app met the needs of its
          users.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Design Process
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Ideation:</strong> Focused on creating an easy-to-use and
          visually appealing platform reminiscent of older DOS computers that
          had black screen with green terminal text. The interface prioritized
          having a clear call to action to get new users to sign in with a simple Google authentication flow and post to the social feed.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Wireframes:</strong> Early wireframes outlined key features
          like the post creation form, image upload functionality, and the user
          feed. The design emphasized a straightforward path from content
          creation to sharing.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Prototyping:</strong> High-fidelity prototypes were developed
          using Figma, focusing on interactions like posting content, commenting
          on posts, and navigating the feed.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Development
        </Typography>
        <Typography variant="body1" paragraph>
          The frontend was developed using React with Material-UI for a
          responsive and accessible design. Firebase was integrated for secure
          authentication, real-time database management, and hosting.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong> Users can create posts with text and
          images, comment on posts, delete their own posts, and enjoy a
          responsive design across devices.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Testing & Validation
        </Typography>
        <Typography variant="body1" paragraph>
          Usability testing was conducted with a small group of friends and
          family. Feedback was used to make improvements like refining the image
          upload feature, enhancing mobile responsiveness, and ensuring that the
          post creation button is disabled when no user input is detected.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Results
        </Typography>
        <Typography variant="body1" paragraph>
          ReactSocial received positive feedback for its stability and user
          experience. The project enhanced my full-stack development skills,
          UI/UX design proficiency, and ability to integrate complex user
          authentication flows.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Conclusion
        </Typography>
        <Typography variant="body1" paragraph>
          Future enhancements could include expanding media types, improving the
          commenting system with nested replies, and adding features like post
          scheduling or content categorization.
        </Typography>
        <Typography variant="body1" paragraph>
          ReactSocial was an opportunity to blend my passion for design with
          technical skills, reinforcing the importance of accessibility in UI/UX
          design and continuous improvement based on real-world usage.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />
    </Container>
  );
};

export default ReactSocialCaseStudy;
