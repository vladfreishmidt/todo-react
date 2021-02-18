import Todo from './Todo';

const ToDoList = ({ todos, setTodos }) => {
  let currentTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      setTodos={setTodos}
      todos={todos}
      todo={todo}
    />
  ));

  return (
    <div className='todo-container'>
      <ul className='todo-list'>{currentTodos}</ul>
    </div>
  );
};

export default ToDoList;
