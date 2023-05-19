import React from 'react';
import '../App.css';
import anotherTypeOfFile from '../assets/img/default-file.png';
import fileSvg from '../assets/img/svg-icon.png';
import filePng from '../assets/img/png-icon.png';

const DragAndDropFileList = ({fileList, fileFormat}) => {
  return (
    <>
    <ul className='file-list-container'>
        {fileList.length
        ? fileList.map((file, index) => {
            return (
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
                    <span>
                      {file.size}px
                    </span>
                  </h2>
                </div>
              </li>
            )
          })
        : null}
    </ul>
    </>
  )
}

export default DragAndDropFileList;