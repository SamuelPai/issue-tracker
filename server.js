const express = require("express");
const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// Configure body parsing for AJAX requests, middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions)) 

// API routes
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
