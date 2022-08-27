import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './styles.module.css'
import { ITask } from '../../interfaces'

interface IProps {
  btnText: string
}

export const TaskForm = ({ btnText }: IProps) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = () => {

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    }
    if(e.target.name === 'difficulty') {
      setDifficulty(parseInt(e.target.value))
    }
    console.log(title)
    console.log(difficulty)
  }


  return (
    <form onSubmit={addTaskHandler} 
          className={styles.form}>

      <div className={styles.input_container}>

        <label htmlFor='title'>Título:</label>
        <input  onChange={handleChange} 
                type='text' 
                name='title' 
                placeholder='Título da tarefa' />

      </div>

      <div className={styles.input_container}>

        <label htmlFor='difficulty'>Dificuldade:</label>
        <input  onChange={handleChange} 
                type='text' 
                name='difficulty' 
                placeholder='Dificuldade da tarefa' />

      </div>

      <input type='submit' value={btnText} />

    </form>
  )
};


