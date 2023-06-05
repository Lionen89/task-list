import React from 'react';
import { tasks } from '../../utils/tasks';
import titles from '../../utils/constants';
import Task from '../Task/Task';
import './Main.scss';
import Sidebar from '../Sidebar/Sidebar';

function Main() {
  const [isDoneTasksOpen, setIsDoneTasksOpen] = React.useState(false);
  const [isTodayTasksOpen, setIsTodayTasksOpen] = React.useState(true);
  const [isUpcomingTasksOpen, setIsUpcomingTasksOpen] = React.useState(false);
  const doneTasks = React.useRef();
  const todayTasks = React.useRef();
  const upcomingTasks = React.useRef();

  const handleListOpen = (e) => {
    e.preventDefault();
    if (e.target.textContent === 'Выполненные задачи') {
      if (isDoneTasksOpen) {
        doneTasks.current.classList.add('closing');
      }
      setIsDoneTasksOpen(true);
      todayTasks.current.classList.add('closing');
      upcomingTasks.current.classList.add('closing');
    } else if (e.target.textContent === 'Задачи на сегодня') {
      if (isTodayTasksOpen) {
        todayTasks.current.classList.add('closing');
      }
      doneTasks.current.classList.add('closing');
      setIsTodayTasksOpen(true);
      upcomingTasks.current.classList.add('closing');
    } else if (e.target.textContent === 'Предстоящие задачи') {
      if (isUpcomingTasksOpen) {
        upcomingTasks.current.classList.add('closing');
      }
      doneTasks.current.classList.add('closing');
      todayTasks.current.classList.add('closing');
      setIsUpcomingTasksOpen(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener('animationend', (e) => {
      if (e.animationName === 'close') {
        if (e.target.parentNode === doneTasks.current) {
          setIsDoneTasksOpen(false);
        } else if (e.target.parentNode === todayTasks.current) {
          setIsTodayTasksOpen(false);
        } else if (e.target.parentNode === upcomingTasks.current) {
          setIsUpcomingTasksOpen(false);
        }
      }
      doneTasks.current.classList.remove('closing');
      todayTasks.current.classList.remove('closing');
      upcomingTasks.current.classList.remove('closing');
    });
  }, []);
  return (
    <section className="main">
      <Sidebar />
      <div className="main__container">
        <h1 className="main__title">Задачи</h1>
        <div className="main__table main__tasks-list">
          {titles.map((item) => (
            <h2 className="main__tasks-title" key={item.id}>
              {item.name}
            </h2>
          ))}
        </div>
        <details open={isDoneTasksOpen} onClick={handleListOpen} ref={doneTasks}>
          <summary className="main__list-name">Выполненные задачи</summary>
          {tasks.map((item) => (
            <Task key={item.id} task={item} />
          ))}
        </details>
        <details open={isTodayTasksOpen} onClick={handleListOpen} ref={todayTasks}>
          <summary className="main__list-name">Задачи на сегодня</summary>
          {tasks.map((item) => (
            <Task key={item.id} task={item} />
          ))}
        </details>
        <details open={isUpcomingTasksOpen} onClick={handleListOpen} ref={upcomingTasks}>
          <summary className="main__list-name">Предстоящие задачи</summary>
          {tasks.map((item) => (
            <Task key={item.id} task={item} />
          ))}
        </details>
      </div>
    </section>
  );
}

export default Main;
