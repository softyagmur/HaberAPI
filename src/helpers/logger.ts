const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  gray: "\x1b[90m",
};

export function error(message: string): void {
  throw new Error(
    `${colors.red}[HaberAPI] [ERROR]: ${message}${colors.reset}`
  );
}

export function logError(message: string): void {
  console.error(`${colors.red}[HaberAPI] [ERROR]: ${message}${colors.reset}`);
}

export function logWarn(message: string): void {
  console.warn(`${colors.yellow}[HaberAPI] [WARN]: ${message}${colors.reset}`);
}

export function logInfo(message: string): void {
  console.info(`${colors.blue}[HaberAPI] [INFO]: ${message}${colors.reset}`);
}