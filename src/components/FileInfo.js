import React, {memo} from 'react';
import '../App.css';

const FileInfo = memo(function FileInfo({ file }) {
  return (
    <div className='file'>
      <h2>
        {file.name}
        <span>{file.size}px</span>
     </h2>
   </div>
  )   
});

export default FileInfo;