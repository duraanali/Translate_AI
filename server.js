import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import translationRoute from "./routes/translationRoute.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", translationRoute);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Somali–English translation API",
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
