import TodoInput from './components/TodoInput.js';
import P from "./components/personList";

function App() {
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput/>
      </div>
      
      <div className="App">
        <P/>
      </div>
    </div>
  );
}

export default App;
