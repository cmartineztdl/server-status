import { appendFile } from 'fs';
import chalk from 'chalk';

export function addLogToLoFile(message: string) {
  const file = 'server.log';

  appendFile(file, `${new Date().toISOString()}: ${message}\n`, err => {
    if (err) {
      console.log(chalk.red(`Ups! ${err.message}`));
    }
  });
}
