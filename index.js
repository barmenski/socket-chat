const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const io = require('socket.io')(http);

app.use(cors());

io.on('connection', (socket) => {
  socket.on('login', ({ name, room }, callback) => {});
  socket.on('sendMessage', (message) => {});
  socket.on('disconnect', () => {});
});

app.get('/', (req, res) => {
  req.send('Server is up and running');
});
http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
