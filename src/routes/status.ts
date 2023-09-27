import { IncomingMessage, ServerResponse } from 'http';
import { getServerStatus } from '../getServerStatus';

export function handleStatus(req: IncomingMessage, res: ServerResponse) {
  return getServerStatus(serverStatus => {
    res.end(JSON.stringify(serverStatus));
  });
}
