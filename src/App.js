import React, {useState} from 'react';
import Title from './components/Title';
import './App.css';
import DragAndDropArea from './components/DragAndDropArea';
import DragAndDropFileList  from './components/DragAndDropFileList';

function App() {
  const [fileList, setFileList] = useState([]);
  const [fileFormat, setFileFormat] = useState([])

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

  console.log(fileList)
  return (
    <div className="App">
      <Title text="Drag to upload"/>
      <p className="drag-and-drop-paragraph">
        You can drag your fi
        <span className='drag-and-drop-span'>
        le to a certain area to upload it.
        </span>
      </p>
      <DragAndDropArea onFileDrop ={onFileDrop}/>
      <DragAndDropFileList fileList = {fileList} fileFormat={fileFormat}/>
    </div>
  );
}

export default App;
