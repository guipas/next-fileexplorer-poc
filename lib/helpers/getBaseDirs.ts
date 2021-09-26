import path from 'path';

// get the list of absolute path to display, default to the current directory (pwd)
export function getBaseDirs(): string[] {
  const baseDirs = process.env.BASE_DIRS?.split(',') || ['.'];

  return baseDirs.map(dir => path.resolve(dir));
}