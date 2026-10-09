import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import { createServer } from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'client', 'browserApp', 'dist');

const app = express();
const PORT = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server);


app.use(express.static(distPath));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: distPath });
});


io.on('connection', (socket) => {
  socket.on('chat:message', (msg) => {
    
    console.log(`wiadomosc od (${socket.id}): ${msg}`);

    io.emit('chat:message', msg, socket.id)
  })
});

server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
