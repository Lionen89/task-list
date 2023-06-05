import React from 'react';
import './Task.scss';

function Task({ task }) {
  const optons = ['Выполненa', 'На Паузе', 'В работе'];
  const data = Object.values(task);
  const id = data.shift();
  return (
    <div className="main__table task">
      {data.map((item, index) => {
        if (task.status === item) {
          return (
            <div className="task__item" key={id + index}>
              <select
                name="status"
                defaultValue={item}
                className={`task__select ${
                  task.status === 'На Паузе' ? 'task__select_inwork' : ''
                }`}>
                {optons.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          );
        } else
          return (
            <span className="task__item" key={id + index}>
              {item}
            </span>
          );
      })}
    </div>
  );
}

export default Task;
