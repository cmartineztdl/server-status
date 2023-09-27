import { totalmem, freemem, cpuCount, cpuUsage } from 'os-utils';

interface ServerStatus {
  totalmem: number;
  freemem: number;
  cpuCount: number;
  cpusUsagePercenge: number;
}
export function getServerStatus(
  callback: (serverStatus: ServerStatus) => void
) {
  cpuUsage(cpusUsagePercenge => {
    callback({
      totalmem: totalmem(),
      freemem: freemem(),
      cpuCount: cpuCount(),
      cpusUsagePercenge,
    });
  });
}
