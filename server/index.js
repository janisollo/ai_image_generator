// Importing the necessary packages
import express from "express"; // Express is a web framework for Node.js
import * as dotenv from "dotenv"; // Dotenv is a zero-dependency module that loads environment variables from a .env file
import cors from "cors"; // Cors is a Node.js package that enables cross-origin resource sharing (CORS)
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
// Loading environment variables from .env file
dotenv.config();

// Creating a new Express application
const app = express();

// Adding CORS middleware to the Express app to allow cross-origin requests
app.use(cors());

// Adding middleware to parse incoming requests with JSON payloads
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// Creating a new route for the root endpoint
app.get("/", async (req, res) => {
  // Sending a simple message as the response
  res.send("Hello from Dall-E");
});

// Function to start the Express app and listen on port 8080
const startServer = async () => {
  try {
    connectDB(process.env.MONGOBD_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

// Calling the startServer function to start the Express app
startServer();
