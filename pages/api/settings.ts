import type { NextApiRequest, NextApiResponse } from 'next';
import { getBaseDirs } from '../../lib/helpers/getBaseDirs';

type Data = {
  baseDirs: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.json({
    baseDirs: getBaseDirs(),
  });
}
