import React, {useState, } from 'react';
import Title from './components/Title';
import './App.css';
import DragAndDropArea from './components/DragAndDropArea';
import DragAndDropFileList  from './components/DragAndDropFileList';

const findFileFormat = (file) => {
  // TODO add regular expression
  let fileExtention = file.split(".");
  return fileExtention[fileExtention.length-1];
}

const makeFormObjectArray = (obj) => {
  return Array.from(obj);
}

function App() {
  const [fileList, setFileList] = useState([]);

  const onFileDrop = (e) => {
    const uploaded = [...fileList]
    if (e.target.files.length === 0) {
      return;
    }
    makeFormObjectArray(e.target.files).map(file => {
      let formatOfFile = findFileFormat(file.name);
      // console.log(file.name.split("."))
      uploaded.push({name: file.name, size: file.size, format: formatOfFile});
      return uploaded;
    })
    return setFileList(uploaded)
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
      />
      <DragAndDropFileList fileList={fileList} />
    </div>
  );
}

export default App;
