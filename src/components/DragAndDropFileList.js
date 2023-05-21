import React from 'react';
import '../App.css';
import defaultImg from '../assets/img/default-file.png';
import fileSvg from '../assets/img/svg-icon.png';
import filePng from '../assets/img/png-icon.png';

const DragAndDropFileList = ({fileList}) => {
  if (!fileList.length) {
    return null;
  }

  const chooseFileFormatForImg = (format) => {
    switch(format) {
      case 'png' :
        return filePng;
      case 'svg':
      return fileSvg;
      default:
        return defaultImg;
    }
  }

  return (
    <ul className='file-list-container'>
      {
        fileList.map((file, index) => (
            <li className='file-wrapper' key={index}>
              <img
                  src={chooseFileFormatForImg(file.format)}
                  alt="#"
                  width="30px"
                  height="30px"
              />
              <div className='file' key={index}>
                <h2>
                  {file.name}
                  <span>{file.size}px</span>
                </h2>
              </div>
            </li>
        ))
      }
    </ul>
  )
}

export default DragAndDropFileList;