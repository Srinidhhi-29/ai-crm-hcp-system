import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import InteractionForm from "./components/InteractionForm";
import ChatAssistant from "./components/ChatAssistant";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#5f72be,#9b23ea)",
        padding: 4
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: 4
          }}
        >
          AI CRM – HCP Interaction Platform
        </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} md={6}>
            <InteractionForm />
          </Grid>

          <Grid item xs={12} md={6}>
            <ChatAssistant />
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}

export default App;