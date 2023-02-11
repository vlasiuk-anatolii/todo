import React, { useEffect, useState } from 'react';
import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFilter';

function App() {
  const initialToDo = JSON.parse(localStorage.getItem('todos'));
  const [currentListToDo, setCurrentListToDo] = useState(initialToDo || []);
  const [all, setAll] = useState(false);
  const [active, setActive] = useState(false);
  const [complited, setComplited] = useState(false);
  const [removeComplited, setRemoveComplited] = useState(false);

  const countUnCompleated = currentListToDo
    .filter(item => item.isCompleated === false);

  if (removeComplited) {
    setCurrentListToDo([...countUnCompleated]);
    setRemoveComplited(false);
  }

  const togglerAll = () => {
    const allCompleted = currentListToDo
      .map(item => (
        { ...item,
          isCompleated: !(item.isCompleated) }));

    setCurrentListToDo(allCompleted);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(currentListToDo));
  }, [currentListToDo]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todo</h1>
        <TodoApp
          setCurrentListToDo={setCurrentListToDo}
          currentListToDo={currentListToDo}
        />
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          onChange={() => {
            togglerAll();
          }}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList
          all={all}
          active={active}
          complited={complited}
          currentListToDo={currentListToDo}
          setCurrentListToDo={setCurrentListToDo}
        />
      </section>

      <footer className="footer">
        <span data-cy="todosCounter" className="todo-count">
          {`${countUnCompleated.length} items left`}
        </span>

        <TodosFilter
          all={all}
          active={active}
          complited={complited}
          setAll={setAll}
          setActive={setActive}
          setComplited={setComplited}
          setRemoveComplited={setRemoveComplited}
        />
      </footer>
    </section>
  );
}

export default App;
