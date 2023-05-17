import React from 'react';
import '../App.css';
import UploadImg from './UploadImg';

const DragAndDropArea = ({onFileDrop}) => {
  return (
     <div className='drag-and-drop-wrapper'>
        <div className="drop-file-input__label">
          <UploadImg/>
          <p>Drag & Drop your files <span>here or Click to browse file</span></p>
        </div>
        <input type="file" value="" onChange={onFileDrop}/>
    </div>
  )
}

export default DragAndDropArea;