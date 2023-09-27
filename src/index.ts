import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import chalk from 'chalk';
import { addLogToLoFile } from './addLogToLoFile';
import { handleStatus } from './routes/status';

const port = 3001;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(`${chalk.bgBlue(req.method)} - ${chalk.blue(req.url)}`);

    addLogToLoFile(`${req.method} - ${req.url}`);

    if (req.url?.startsWith('/status')) {
      return handleStatus(req, res);
    }

    res.statusCode = 404;
    res.end('Not found');
  }
);

server.listen(port, () =>
  console.log(chalk.black.bgGreen(`Server listening at port ${port}`))
);
