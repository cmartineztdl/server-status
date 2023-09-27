import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import { totalmem, freemem, cpuCount, cpuUsage } from 'os-utils';
import chalk from 'chalk';

const port = 3001;

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(`${chalk.bgBlue(req.method)} - ${chalk.blue(req.url)}`);

    cpuUsage(cpusUsagePercenge => {
      res.end(
        JSON.stringify({
          totalmem: totalmem(),
          freemem: freemem(),
          cpuCount: cpuCount(),
          cpusUsagePercenge,
        })
      );
    });
  }
);

server.listen(port, () =>
  console.log(chalk.black.bgGreen(`Server listening at port ${port}`))
);
