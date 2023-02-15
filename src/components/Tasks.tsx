import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.svg';
import { Trash, PlusCircle } from 'phosphor-react';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'; 

interface TasksProps{
  id: number;
  content: string;
  status: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const [newTask, setNewTask] = useState('');

  const [completedTasks, setCompletedTasks] = useState(0);
  
  const taskCount = tasks.length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {id: tasks.length + 1, content: newTask, status: false}]);
    setNewTask('');
  }

  function handleNewComment(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask(event.target.value);
  }

  function handleCheckTheMarkedTasks(event: ChangeEvent<HTMLInputElement>) {
    const checkTaskStatus = tasks.map(task => {
      if(task.id == parseInt(event.target.id) && event.target.checked === true) {
        task.status = true;
      } else if(task.id == parseInt(event.target.id) && event.target.checked !== true) {
        task.status = false;
      }

      return task;
    });

    const countOfCompletedTasks = checkTaskStatus.filter(status => status.status === true).length;
    setCompletedTasks(countOfCompletedTasks);
  }

  function handleDeleteTask(event: React.MouseEvent<HTMLButtonElement>) {
      const tasksWithoutTheExcluded = tasks.filter(task => {
        return task.id !== parseInt(event.currentTarget.id)
      })

      const countOfCompletedTasks = tasksWithoutTheExcluded.filter(task => task.status === true).length;

      setTasks(tasksWithoutTheExcluded);
      setCompletedTasks(countOfCompletedTasks);
  }

  function handleInvalidNewTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo não pode ficar vazio.');
  }

  return(
    <div className={styles.tasks}>
      <div className={styles.createTask}>
        <form onSubmit={handleCreateNewTask}>
          <input 
            type="text"
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewComment}
            onInvalid={handleInvalidNewTask}
            required
          />

          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
      </div>

      <div className={styles.header}>
        <span>
          Tarefas criadas 
          <span>{taskCount}</span>
        </span>

        <span>
          Concluídas
          <span>{completedTasks !== 0 ? `${completedTasks} de ${taskCount}` : completedTasks}</span>
        </span>
      </div>

      <div className={styles.toDoList}>
        <div className={taskCount !== 0 ? styles.hideNoTasks : styles.noTasks}>
          <img src={clipboard} alt="Imagem ilustrativa de um ícone de uma prancheta" />

          <span>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>

        {
          tasks.map(task => {
            return(
              <div key={task.id} className={styles.boxWithTasks}>
                <div className={styles.infoTask}>
                  <input
                    id={`${task.id}`}
                    type="checkbox"  
                    className={styles.checkbox}
                    onChange={handleCheckTheMarkedTasks}
                  />
                  
                  <label htmlFor={`${task.id}`}>
                    {task.content}
                  </label>
                </div>

                <button id={`${task.id}`} onClick={handleDeleteTask}>
                  <Trash size={20} />
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}