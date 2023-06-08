import Header from "./components/Header";
import TasksList from "./components/TasksList";
import "./styles/index.css"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TasksList></TasksList>
    </div>
  );
}

export default App;