import React from 'react';

const Form = ({ setInputValue, inputValue, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputValue, completed: false, id: Math.random() * 1000 },
    ]);
    setInputValue('');
  };

  return (
    <form>
      <input
        type='text'
        className='todo-input'
        onChange={inputTextHandler}
        value={inputValue}
      />
      <button onClick={submitTodoHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
