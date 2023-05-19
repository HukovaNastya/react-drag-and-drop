import React from 'react';
import '../App.css';
import anotherTypeOfFile from '../assets/img/default-file.png';
import fileSvg from '../assets/img/svg-icon.png';
import filePng from '../assets/img/png-icon.png';

// TODO create a function which returns image file depends on file format. And remove ternary expression from JSX

const DragAndDropFileList = ({fileList, fileFormat}) => {
  if (!fileList.length) {
    return null
  }

  return (
    <ul className='file-list-container'>
      {
        fileList.map((file, index) => (
            <li className='file-wrapper' key={index}>
              <img
                  src={fileFormat === 'png' ?
                      filePng : fileFormat === 'svg'?
                          fileSvg :
                          anotherTypeOfFile}
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