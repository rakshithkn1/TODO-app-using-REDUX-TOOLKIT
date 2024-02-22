import logo from './logo.svg';
import './App.css';
import Addtodo from './Components/Addtodo';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Addtodo/>
      <Todo/>
    </div>
  );
}

export default App;
