import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR from 'swr';

import { File } from '../lib/components/File';
import { fetcher } from '../lib/fetcher'
import { Spinner } from '../lib/components/Spinner'

const Home: NextPage = () => {

  const { data : settings, error } = useSWR(`/api/settings`, fetcher);
  const loading = !settings && !error;


  return (
    <div>
      <Head>
        <title>File Explorer</title>
      </Head>

      <main>
        {
          loading && <Spinner/>
        }
        {
          settings?.baseDirs.map((baseDir: string) => (
            <File 
              key={baseDir} 
              file={{ 
                name: baseDir,
                isDirectory: true,
                path: baseDir,
              }}
            />
          ))
        }
      </main>
    </div>
  )
}

export default Home
