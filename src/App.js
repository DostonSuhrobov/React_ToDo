import React from 'react';
import './style.css';


export default function App() {
  const [todos, setToDos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false
    },
    {
      text: 'meet a friend',
      isCompleted: false
    },
    {
      text: 'reading my book',
      isCompleted: false
    }
  ]);

  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    const newToDos = [...todos, { text: value, isCompleted: false }];
    setToDos(newToDos);
    setValue('');
  };

  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setToDos(temp);
  };

  return (
    <>
      <div className="app">
        <div className="todo-list">
          
          {todos.map((todo, i) => (
            <div id={i} onClick={removeTodo}>
              {todo.text} X
            </div>
          ))}
          

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </form>
          
        </div>
      </div>
    </>
  );
}
