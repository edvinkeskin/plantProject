import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Grid, ThemeProvider, createTheme } from '@mui/material';
import NewHeader from "../components/NewHeader";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
console.log('API key:', apiKey);
  
const IngredientProcessor = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleProcessClick = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `Process the following ingredients: ${inputText}`,
          max_tokens: 10,
        }),
      });

      const result = await response.json();
      setOutputText(result.choices[0].text);
    } catch (error) {
      console.error('Error processing request:', error.message);
    }
  };

  return (
    <ThemeProvider theme={createTheme({/* Your theme customization here */})}>
        <NewHeader />
      <Grid container justifyContent="center" alignItems="center" height="100vh">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Ingredient Processor
            </Typography>
            <TextField
              label="Enter Ingredients"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={inputText}
              onChange={handleInputChange}
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleProcessClick}>
              Process
            </Button>
            <Typography variant="body1" marginTop={2}>
              Output:
            </Typography>
            <Typography variant="body2" color="textSecondary" marginBottom={2}>
              {outputText}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default IngredientProcessor;
