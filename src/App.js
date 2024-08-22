import logo from './logo.svg';
import './App.css';
import AddtodoItem  from './components/addtodoItem'
import TodoList from './components/todolist'
import UpdateList from './components/updatelist';
function App() {



  return (
    <div className="App">
      <AddtodoItem  />
      <TodoList/>
    </div>
  );
}

export default App;
