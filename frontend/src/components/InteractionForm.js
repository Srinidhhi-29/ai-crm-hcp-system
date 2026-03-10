import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

export default function InteractionForm() {

  const [hcp, setHcp] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");

  const submit = async () => {

    await axios.post("http://localhost:8000/agent", {
      action: "log",
      payload: {
        hcp_name: hcp,
        interaction_type: type,
        notes: notes
      }
    });

    alert("Interaction logged successfully");
  };

  return (
    <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
      <CardContent>

        <Typography variant="h5" gutterBottom>
          Log HCP Interaction
        </Typography>

        <TextField
          label="HCP Name"
          fullWidth
          margin="normal"
          value={hcp}
          onChange={(e) => setHcp(e.target.value)}
        />

        <TextField
          label="Interaction Type"
          fullWidth
          margin="normal"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <TextField
          label="Notes"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={submit}
        >
          Submit Interaction
        </Button>

      </CardContent>
    </Card>
  );
}