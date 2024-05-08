import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  request.on("data", (chunk: Buffer) => response.write(chunk.toString().toUpperCase()));
  request.on("end", () => response.end());
});

server.listen(8000);