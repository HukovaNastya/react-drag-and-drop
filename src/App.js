import React, {useState, } from 'react';
import Title from './components/Title';
import './App.css';
import DragAndDropArea from './components/DragAndDropArea';
import DragAndDropFileList  from './components/DragAndDropFileList';

function App() {
  const [fileList, setFileList] = useState([]);
  const [fileFormat, setFileFormat] = useState([]);
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

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    setFileFormat(findFileFormat(newFile.name))
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
    }
  }

  const findFileFormat = (file) => {
    return file.substring(file.length - 3);
  }

  return (
    <div className="App">
      <Title text="Drag to upload"/>
      <p className="drag-and-drop-paragraph">
        You can drag your fi
        <span className='drag-and-drop-span'>
        le to a certain area to upload it.
        </span>
      </p>
      <DragAndDropArea 
        onFileDrop ={onFileDrop} 
        onDragEnter={onDragEnter} 
        onDragLeave={onDragLeave} 
        onDrop={onDrop} 
        dragDropClass={dragDropClass}
      />
      <DragAndDropFileList fileList = {fileList} fileFormat={fileFormat}/>
    </div>
  );
}

export default App;
