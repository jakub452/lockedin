let users = new Map();

export const registerSocketEvents = (io) => {
  io.on("connection", (socket) => {
    socket.data.username = "";

    socket.on("login:username", (username, callback) => {

      users.set(socket.id, username);
      socket.data.username = username;

      callback({ status: "ok", id: socket.id, username });

      io.emit("userlist:update", [...users.values()]);
    });

    socket.on("userlist:request", () => {
      socket.emit("userlist:update", [...users.values()]);
    })

    socket.on("chat:message", (msg) => {
      io.emit("chat:message", msg, socket.data.username);
    });

    socket.on("disconnect", () => {
      users.delete(socket.id);
      io.emit("userlist:update", [...users.values()]);
    });
    
  });
};
