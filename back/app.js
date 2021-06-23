const dotenv = require("dotenv");
const connectDB = require("./config/initMongodb");
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const colors = require("colors");

// Load env vars
dotenv.config({ path: "./config/.env" });

// CORS Configuration
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connect to database
connectDB();

// Route files
const wkaRouter = require("./routes/wkaRoutes");

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(logger);
}
// Set static folder
app.use(express.static(`${__dirname}/public`));

// Body parser
app.use(express.json());

// Routes
app.get("/api/v1", (req, res, next) => {
  res.status(200).json({
    success: "True",
    message: "Welcome to Hossem's API"
  });
});

app.use("/api/v1/wka", wkaRouter);

// 404 page
app.use((req, res) => {
  res.status(404).json({ 
    success: "False",
    message: 'This route is not defined!' 
  });
});

// Running the server
const PORT = process.env.PORT || 8000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));

})