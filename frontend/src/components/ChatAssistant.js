import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

export default function ChatAssistant() {

  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const ask = async () => {

    const res = await axios.post("http://localhost:8000/agent", {
      action: "followup",
      payload: { text }
    });

    setResponse(res.data.suggestion);
  };

  return (
    <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
      <CardContent>

        <Typography variant="h5" gutterBottom>
          AI Assistant
        </Typography>

        <TextField
          label="Describe interaction"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={ask}
        >
          Ask AI
        </Button>

        {response && (
          <Typography sx={{ mt: 3 }} color="primary">
            {response}
          </Typography>
        )}

      </CardContent>
    </Card>
  );
}