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
  //  additional logic
  return Array.from(obj);
}

function App() {
  const [fileList, setFileList] = useState([]);

  const onFileDrop = (e) => {
    if (e.target.files.length === 0) {
      return;
    }

    // const newUploadFilesArray = makeFormObjectArray(e.target.files).map(file => {
    //   let formatOfFile = findFileFormat(file.name);
    //   return { name: file.name, size: file.size, format: formatOfFile }
    // })

    const newUploadFilesArray = makeFormObjectArray(e.target.files).map(({ name, size }) => ({ name, size, format: findFileFormat(name) }))

    setFileList([...fileList, ...newUploadFilesArray])
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
