import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import chalk from 'chalk';
import { addLogToLoFile } from './addLogToLoFile';
import { getServerStatus } from './getServerStatus';

const port = 3001;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(`${chalk.bgBlue(req.method)} - ${chalk.blue(req.url)}`);

    addLogToLoFile(`${req.method} - ${req.url}`);

    getServerStatus(serverStatus => {
      res.end(JSON.stringify(serverStatus));
    });
  }
);

server.listen(port, () =>
  console.log(chalk.black.bgGreen(`Server listening at port ${port}`))
);
