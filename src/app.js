import express from "express";
import indexRoutes from "./routes/index.routes.js";
import drawsRoutes from "./routes/draws.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", drawsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoing not found" });
});

export default app;
