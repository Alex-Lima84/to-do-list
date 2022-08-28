import React from 'react';
import { ITask } from '../../interfaces'
import styles from './styles.module.css'

interface IProps {
    taskList: ITask[]
    handleDelete(id: number): void
}

export const TaskList = ({ taskList, handleDelete }: IProps) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            <i className='bi bi-pencil'></i>
                            <i className='bi bi-trash' onClick={() => handleDelete(task.id)}></i>
                        </div>
                    </div>
                ))
            ) : (
                <p>Não há tarefas cadastradas</p>
            )}
        </>
    )
};