import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  files: string[]
}

// this is not finished
// would have been cool to levarage event streams + chokidar
// but I don't have time, plus SWR auto-revalidatin looks good
// enough for this MVP

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
    'Content-Encoding': 'none',
  });

  const i = setInterval(() => {
    const data = JSON.stringify({ now : new Date() });
    res.write('event: fs_change\n');
    res.write(`data: ${JSON.stringify({})}`);
    res.write("\n\n");
  }, 5000)

  res.on('close', () => {
    clearInterval(i);
  });

}
