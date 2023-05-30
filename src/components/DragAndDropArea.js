import React, {useState} from 'react';
import '../App.css';
import UploadImg from './UploadImg';

const DragAndDropArea = ({onFileDrop}) => {
  const [dragDropClass, setDragDropClass] = useState('drag-and-drop-wrapper');

  const onDragEnter = () => {
    setDragDropClass('drag-and-drop-wrapper dragover')
  }

  const onDragLeave = () => {
    setDragDropClass('drag-and-drop-wrapper')
  }

  const onDrop = () => {
    setDragDropClass('drag-and-drop-wrapper drop')
  }

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