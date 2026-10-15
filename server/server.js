import { Server } from "socket.io";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { registerSocketEvents } from "./socket.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "client", "browserApp", "dist");

const app = express();
const PORT = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server);

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use(express.static(distPath));

const routes = ["/", "/game", "/chat"];
routes.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile("index.html", { root: distPath });
  });
});
app.use((req, res) => {
  res.status(404).send("nie znaleziono strony... :(")
})

registerSocketEvents(io);

server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
