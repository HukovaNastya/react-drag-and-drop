import Title from './components/Title';
import './App.css';
import './assets/img/UploadImg.png';
// import uploadImg from './assets/img/UploadImg.png';
import UploadImg from './components/UploadImg';

function App() {
  return (
    <div className="App">
      <Title text="Drag to upload"/>
      <p className="drag-and-drop-paragraph">
        You can drag your fi
        <span className='drag-and-drop-span'>
        le to a certain area to upload it.
        </span>
      </p>
      <div className='drag-and-drop-wrapper'>
        <div className="drop-file-input__label">
          <UploadImg/>
          <p>Drag & Drop your files <span>here or Click to browse file</span></p>
        </div>
        <input type="file" value="" onChange={() => console.log('Hello word!')}/>
      </div>
    </div>
  );
}

export default App;
