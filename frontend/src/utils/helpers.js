export function formatTimestamp(machineTime) {
    const date = new Date(machineTime);
    return date.toDateString();
  }