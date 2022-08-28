import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './styles.module.css'
import { ITask } from '../../interfaces'

interface IProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // Esta tipagem informa que estamos alterando o estado de uma lista, neste caso a lista ITask.
}

export const TaskForm = ({ btnText, taskList, setTaskList }: IProps) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = { id, title, difficulty }

    setTaskList!([...taskList, newTask])
    setTitle('')
    setDifficulty(0)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }
    if (e.target.name === 'difficulty') {
      setDifficulty(parseInt(e.target.value))
    }
  }


  return (
    <form onSubmit={addTaskHandler}
      className={styles.form}>

      <div className={styles.input_container}>

        <label htmlFor='title'>Título:</label>
        <input onChange={handleChange}
          type='text'
          name='title'
          placeholder='Título da tarefa'
          value={title}
        />

      </div>

      <div className={styles.input_container}>

        <label htmlFor='difficulty'>Dificuldade:</label>
        <input onChange={handleChange}
          type='text'
          name='difficulty'
          placeholder='Dificuldade da tarefa'
          value={difficulty}
        />

      </div>

      <input type='submit' value={btnText} />

    </form>
  )
};


