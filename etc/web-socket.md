# WebSocket

실시간 상호작용하는 웹서비스를 만드는 표준 기술이다.  
간단한 핑퐁 서버를 구현해보자.

## ws

---

쉽게 웹소켓 서버를 만들어주는 노드 패키지이다.

```js
// Server
const WebSocket = require("ws");

module.exports = server => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    const ip = req.connection.remoteAddress;
    console.log("client connection", ip);

    ws.on("message", message => {
      console.log(message);
    });

    ws.on("error", err => {
      console.error(err);
    });

    ws.on("close", () => {
      console.log("client close", ip);
      clearInterval(ws.intervalId);
    });

    ws.intervalId = setInterval(() => {
      ws.send("PING!");
    }, 3000);
  });
};

// Client
const ws = new WebSocket("ws://localhost:3000");
ws.addEventListener("open", () => {
  console.log("Connection Success!");
});

ws.addEventListener("message", e => {
  console.log(e.data);
  ws.send("PONG!");
});
```

## socket.io

---

웹소켓을 쉽게 사용할 수 있게 만든 기술이다.  
웹소켓이 지원안되는 브라우저를 위한 fallback을 제공한다.

```js
// Server
const SocketIO = require("socket.io");

module.exports = server => {
  const io = SocketIO(server, { path: "/socket.io" });

  io.on("connection", socket => {
    const req = socket.request;
    const ip = req.connection.remoteAddress;
    console.log("new client", ip, socket.id);

    socket.on("disconnect", () => {
      console.log("close client", ip, socket.id);
      clearInterval(socket.intervalId);
    });

    socket.on("error", err => {
      console.error(err);
    });

    socket.on("bye", data => {
      console.log(data); // Bye, Server!
    });

    socket.intervalId = setInterval(() => {
      socket.emit("hello", "Hello, Client!");
    }, 3000);
  });
};
```

```html
<!-- Client -->
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io.connect("/", {
    path: "/socket.io"
  });

  socket.on("hello", data => {
    console.log(data); // Hello, Client!
    socket.emit("bye", "Bye, Server!");
  });
</script>
```
