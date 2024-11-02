
const SocketIO = require("socket.io");

module.exports = (server) => {
    
    const io = SocketIO(server, {
		// cors 설정
        cors: {
            credentials: true,
        },
        allowEIO3: true,
        pingTimeout: 1000,
    });

    io.on("connection", (socket) => {
        socket.on("create_room", (roomName) => {
            socket.join(roomName)
            socket.room = roomName
        })
        socket.on("push_chat",(msg)=>{
            io.to(socket.room).emit("get_chat",msg)
        })
    });
};
