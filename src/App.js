import React, {useState, } from 'react';
import Title from './components/Title';
import './App.css';
import DragAndDropArea from './components/DragAndDropArea';
import DragAndDropFileList  from './components/DragAndDropFileList';

// TODO dragDropClass and setDragDropClass move to the DragAndDropArea and also related events handler
// TODO remove dragDropClass prop

const findFileFormat = (file) => {
  // TODO add regular expression
  return file.substring(file.length - 3);
}

function App() {
  const [fileList, setFileList] = useState([]);
  const [fileFormat, setFileFormat] = useState([]); // TODO remove this line
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
    console.log('files', e.target.files)
    // TODO add support multiple files
    // TODO check files.length to identify multiple files upload
    // TODO use one array of objects for filesList, [{ name, size, format }]
    const newFile = e.target.files[0];
    setFileFormat(findFileFormat(newFile.name)) // TODO remove this line
    if (newFile) {
      setFileList([...fileList, newFile]);
    }
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
        onFileDrop={onFileDrop}
        onDragEnter={onDragEnter} 
        onDragLeave={onDragLeave} 
        onDrop={onDrop} 
        dragDropClass={dragDropClass}
      />
      <DragAndDropFileList fileList={fileList} fileFormat={fileFormat}/>
    </div>
  );
}

export default App;
