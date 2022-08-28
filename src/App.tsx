import React, { useState } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import styles from './App.module.css'
import { TaskForm } from './components/task-form';
import { TaskList } from './components/task-list';
import { ITask } from './interfaces';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>

        <div>

          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa'
            taskList={taskList}
            setTaskList={setTaskList}
          />

        </div>

        <div>

          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList}
            handleDelete={deleteTask}
          />

        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
