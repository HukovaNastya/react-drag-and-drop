import Title from './components/Title';
import './App.css';
import DragAndDropArea from './components/DragAndDropArea';

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
      <DragAndDropArea/>
    </div>
  );
}

export default App;
