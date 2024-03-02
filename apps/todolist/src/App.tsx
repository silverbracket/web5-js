import { TodoList } from './todo/todo.component';

function App() {
  return (
    <div>
      <h1>TodoList</h1>
      <div className="card">
        <TodoList />
        {/* <button onClick={}>
          count is {count}
        </button> */}
      </div>
    </div>
  );
}

export default App;
