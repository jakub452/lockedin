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

app.use((req, res) => {
  res.redirect("/");
})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: distPath });
});

let users = new Map();

io.on('connection', (socket) => {
  socket.data.username = '';




  socket.on("login:username", (username, callback) => {
    users.set(socket.id, username);
    socket.data.username = username;
    callback({ status: "ok", id: socket.id, username })

    io.emit("userlist:update", [...users.values()])
  })

  socket.on('chat:message', (msg) => {
    io.emit('chat:message', msg, socket.data.username);
  })
  
  socket.on('disconnect', () => {
    users.delete(socket.id);
  })
});

server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
