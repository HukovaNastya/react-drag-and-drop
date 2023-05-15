import Title from './components/Title';
import './App.css';
import './assets/img/UploadImg.png';

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
       
      </div>
    </div>
  );
}

export default App;
