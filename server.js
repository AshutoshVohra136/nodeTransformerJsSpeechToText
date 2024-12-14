const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(express.static("public")); // To serve static HTML files (like index.html)

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to handle saving data sent from the client

app.post("/processSpeech", (req, res) => {
  const speechInput = req.body.speech; // Assuming speech input is sent as 'speech' field

  console.log("Received Speech:", speechInput);

  // You can integrate Transformers or other models here
  // Example: call model predictions

  res.json({ message: "Speech processed successfully", data: speechInput });
});

app.post("/saveData", (req, res) => {
  const { name, address, note } = req.body;

  console.log("Received data on backend:");
  console.log("Name:", name);
  console.log("Address:", address);
  console.log("Note:", note);

  // Send a response back to the frontend
  res.json({
    message: "Data saved successfully!",
    data: { name, address, note },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
