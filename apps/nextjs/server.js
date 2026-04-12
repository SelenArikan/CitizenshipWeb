const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // Internal endpoint used by PHP to notify Next.js of new messages
      if (pathname === '/api/internal/ws-broadcast' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
             const data = JSON.parse(body);
             // Broadcast to admin panel users
             io.to('admin-room').emit('new-message', data);
             // Broadcast to the user participating in the chat
             if (data.chat_id) {
               io.to(`chat-${data.chat_id}`).emit('new-message', data);
             }
             res.writeHead(200);
             res.end('ok');
          } catch(e) {
             res.writeHead(400); res.end('error');
          }
        });
        return;
      }

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  // Attach socket.io
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    // Admin room for seeing all live chats updates
    socket.on("join-admin", () => {
      socket.join("admin-room");
    });
    // Specific chat room
    socket.on("join-chat", (chatId) => {
      socket.join(`chat-${chatId}`);
    });
  });

  server.once("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port} with WebSockets`);
  });
});
