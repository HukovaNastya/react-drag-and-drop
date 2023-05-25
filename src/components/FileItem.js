import React, {memo} from 'react';
import '../App.css';
import FileInfo from './FileInfo';

const FileItem = ({chooseFileFormatForImg, file}) => {
   return (
    <div>
       <img
          src={chooseFileFormatForImg(file.format)}
          alt="#"
          width="30px"
          height="30px"
       />
       <FileInfo file={file}/>
    </div>
  )
};

export default FileItem;