const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
app.use(express.json()); // To accept json data
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { path } = require("express/lib/application");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config({ path: require("find-config")(".env") });
connectDB();
app.get("/", (req, res) => {
  res.send("You just hitted the API");
});
app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`My app is running ${PORT}`.yellow.bold));
