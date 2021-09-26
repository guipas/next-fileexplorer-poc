import { useState } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';

import { fetcher } from '../fetcher';
import { IFile } from '../types/File';
import { Spinner } from './Spinner';

import styles from './File.module.css';

interface IFileProps {
  file: IFile;
}

export const File: React.FC<IFileProps> = props => {

  const [isExpanded, setIsExpanded] = useState(false);
  const { data, error, mutate, isValidating } = useSWR<IFile[]>(isExpanded ? `/api/ls${props.file?.path}` : null, fetcher)
  const loading = isExpanded && !data && !error || isValidating;

  const handleExpand = () => {
    if (props.file?.isDirectory) {
      setIsExpanded(!isExpanded);
      mutate(); // force revalidate on close/open directory
    }
  }
  
  return (
    <div className={styles.file}>
      <div
        className={classNames({ 
          [styles.directory]: props.file?.isDirectory,
          [styles.hidden]: props.file?.name?.indexOf('.') === 0,
          [styles.regular]: !props.file?.isDirectory,
          'p-1': true,
        })}
        onClick={handleExpand}
        title={props.file.path}
      >
        <span>
        {}
        <i className={classNames(
            'bi pe-2',
            props.file.isDirectory ? 'bi-folder-fill' : 'bi-file-earmark',
          )}>
        </i>
        {props.file.name}
        </span>
        {
          loading &&
          <span className="ps-1">
            <Spinner/>
          </span> 
        }
      </div>
      <div className="pb-1 ps-4">
        {
          data?.map(file => (
            <File key={file.path} file={file}/>
          ))
        }

      </div>
    </div>
  )
}