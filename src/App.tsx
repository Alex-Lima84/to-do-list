import React from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import styles from './App.module.css'
import { TaskForm } from './components/task-form';
import { TaskList } from './components/task-list';
import { ITask } from './interfaces';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
