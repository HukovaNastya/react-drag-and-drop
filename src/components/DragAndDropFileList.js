import React from 'react';
import '../App.css';

const DragAndDropFileList = ({fileList, fileFormat}) => {
  return (
    <>
    <div className='file-list-container'>
        {fileList.length
        ? fileList.map((file, index) => {
            console.log(file)
            return (
                <div className='file' key={index}>
                  <h2>
                    {file.name} 
                    <span>
                      {file.size}px
                    </span>
                  </h2>
                  {/* <h3>{fileFormat}</h3> */}
                </div>
            )
          })
        : null}
    </div>
    </>
  )
}

export default DragAndDropFileList;