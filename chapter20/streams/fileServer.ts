import { IncomingMessage, ServerResponse, createServer } from 'node:http';
import { resolve, sep } from 'node:path';

const methods: Record<string, () => Promise<ServerResponse>> = Object.create(null);

createServer((request, response) => {
  const handler = methods[request.method] || notAllowed;
  handler(request)
    .catch((error: any) => {
      if (error.status !== null) return error;
      return { status: 500, body: String(error) };
    })
    .then(({ body, status = 200, type = 'text/plain'}) => {
      response.writeHead(status, { 'Content-Type': type });
      if (body && body.pipe) body.pipe(response);
      else response.end(body);
    })
}).listen(8000);

function notAllowed(request: IncomingMessage) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  }
}

function urlPath(url: string) {
  const { pathname } = new URL(url);
  let path = resolve(decodeURIComponent(pathname), sep);
  if (path !== __dirname && !path.startsWith(__dirname + sep)) {
    throw { status: 403, body: 'Forbidden' }
  }
  return path;
}