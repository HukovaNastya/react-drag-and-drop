import React, {useMemo} from 'react';
import '../App.css';
import defaultImg from '../assets/img/default-file.png';
import fileSvg from '../assets/img/svg-icon.png';
import filePng from '../assets/img/png-icon.png';
import fileZip from '../assets/img/zipImg.png';
import FileItem from './FileItem';

const FileList = ({ fileList }) => {
  if (!fileList.length) {
    return null;
  }

  const chooseFileFormatForImg = (format) => {
    switch(format) {
      case 'png' :
        return filePng;
      case 'svg':
        return fileSvg;
      case 'zip':
        return fileZip;
      default:
        return defaultImg;
    }
  }
  // TODO move li to the separate component FileListItem.js
  // TODO rename DragAndDropFileList.js to FileList.js
  return (
    <ul className='file-list-container'>
      {
        fileList.map((file, index) => (
            <li className='file-wrapper' key={index}>
              <FileItem chooseFileFormatForImg={chooseFileFormatForImg} file={file}/>
            </li>
        ))
      }
    </ul>
  )
}

export default FileList;