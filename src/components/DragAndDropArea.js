import React from 'react';
import '../App.css';
import UploadImg from './UploadImg';

const DragAndDropArea = ({onFileDrop, onDragEnter, onDragLeave, onDrop, dragDropClass}) => {
  return (
     <div className={dragDropClass} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
        <div className="drop-file-input__label">
          <UploadImg/>
          <p>Drag & Drop your files <span>here or Click to browse file</span></p>
        </div>
        <input type="file" value="" multiple onChange={onFileDrop}/>
    </div>
  )
}

export default DragAndDropArea;