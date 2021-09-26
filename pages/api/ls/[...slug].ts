import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { IFile } from '../../../lib/types/File';
import { getBaseDirs } from '../../../lib/helpers/getBaseDirs';

type Data = IFile[]

// List the files in a directory
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query.slug) { return res.status(404).end(); }
  
  const slug = req.query.slug as string[];
  const dirPath = path.resolve(path.normalize(path.join('/', ...slug)));

  // quick check to control if a user is not trying to abuse '..' and '.'
  // to access unallowed directories
  let allowed = false;
  for (const baseDir of getBaseDirs()) {
    if (dirPath.indexOf(baseDir) === 0) {
      allowed = true;
      break; // no need to continue processing the loop
    }
  }

  if (!allowed) {
    return res.status(401).end();
  }

  
  const files = await fs.readdir(dirPath, { withFileTypes : true });
  res.json(files.map(dirent => ({ 
    name: dirent.name,
    isDirectory: dirent.isDirectory(),
    absolutePath: path.join(dirPath, dirent.name),
    path: path.join(dirPath, dirent.name),
  })));
}
