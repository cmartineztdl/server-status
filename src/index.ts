import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import chalk from 'chalk';

const helloWorld = 'Hello World!';
const port = 3001;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(`${chalk.bgBlue(req.method)} - ${chalk.blue(req.url)}`);

    res.end(JSON.stringify({ data: helloWorld }));
  }
);

server.listen(port, () =>
  console.log(chalk.black.bgGreen(`Server listening at port ${port}`))
);
