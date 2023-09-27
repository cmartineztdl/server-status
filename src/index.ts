import { createServer, Server, IncomingMessage, ServerResponse } from 'http';

const helloWorld = 'Hello World!';
const port = 3001;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.end(JSON.stringify({ data: helloWorld }));
  }
);

server.listen(port, () => console.log(`Server listening at port ${port}`));
