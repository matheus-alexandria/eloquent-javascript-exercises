import mime from "mime";
import { createReadStream, Stats } from "node:fs";
import { stat, readdir } from "node:fs/promises";
import { IncomingMessage } from "node:http";
import { resolve, sep } from "node:path";

type Handler = (request: IncomingMessage) => Promise<any>;

export let methods: Record<string, Handler> = Object.create(null);
const baseDirectory = process.cwd();

methods['GET'] = async function(request: IncomingMessage): Promise<any> {
  const path = urlPath(`http://localhost:8000${request.url!}`);
  let stats: Stats;
  try {
    stats = await stat(path);
  } catch (err: any) {
    if (err.code !== 'ENOENT') throw err;
    return { status: 404, body: 'File not found' }
  }

  if (stats.isDirectory()) {
    return { status: 200, body: (await readdir(path)).join('/n')}
  }

  return { body: createReadStream(path), type: mime.getType(path) }
}


function urlPath(url: string) {
  try {
    const { pathname } = new URL(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path !== baseDirectory && !path.startsWith(baseDirectory + sep)) {
      throw { status: 403, body: 'Forbidden' }
    }
    return path;
  } catch (err) {
    throw err;
  }
}

