import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.svg';
import { Trash, PlusCircle } from 'phosphor-react';

// import { ChangeEvent, useState } from 'react'; 
import { ButtonHTMLAttributes, ChangeEvent, DOMAttributes, FormEvent, MouseEventHandler, PropsWithChildren, useState } from 'react'; 

// interface TasksProps {
//   id: string;
//   status: boolean;
//   content: string;
// }

// const tasks: TasksProps[] = [
//   {
//     id: '1',
//     status: false,
//     content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos'
//   },
//   {
//     id: '2',
//     status: true,
//     content: 'e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fa'
//   },
//   {
//     id: '3',
//     status: false,
//     content: 'um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou '
//   },
//   {
//     id: '4',
//     status: true,
//     content: 'decalques contendo passagens'
//   },
//   {
//     id: '5',
//     status: false,
//     content: 'I, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem '
//   }
// ]
interface TasksProps{
  id: number;
  content: string;
  status: boolean;
}

export function Tasks() {
  // const [tasks, setTasks] = useState([{}]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  // const [newTask, setNewTask] = useState('');
  const [newTask, setNewTask] = useState('');

  const [completedTasks, setCompletedTasks] = useState(0);
  
  const taskCount = tasks.length;

  // function handleCreateNewTask(event: FormEvent) {
  //   event.preventDefault();
  
  //   setTasks([...tasks, {id: tasks.length, content: newTask, status: false}])
  // }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {id: tasks.length + 1, content: newTask, status: false}]);
    // setTasks([...tasks, {id: tasks.length + 1, content: newTask}]);
    setNewTask('');
  }

  // function handleNewComment(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);

  //   // setNewTask(event.target.value);
  // }
  function handleNewComment(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCheckTheMarkedTasks(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event.target.checked, event.target.id);

    // preciso pegar o array de tasks
    // feito isso, preciso realizar um map nestas tasks
    // onde o ID corresponde a task, alterando o estado de checked, entre true e false

    // const test = tasks.filter(task => {
    //   console.log(task)
    //   if(event.target.checked === true && parseInt(event.target.id) === task.id) {
    //     return task
    //   }
    // });

    // console.log(event.target, event.target.checked)

    const checkTaskStatus = tasks.map(task => {
      if(task.id == parseInt(event.target.id) && event.target.checked === true) {
        task.status = true;
      } else if(task.id == parseInt(event.target.id) && event.target.checked !== true) {
        task.status = false;
      }

      return task;
    });

    // const testeContagem = test.filter(tes => tes.status === true).length;
    const countOfCompletedTasks = checkTaskStatus.filter(status => status.status === true).length;
    setCompletedTasks(countOfCompletedTasks);
  }

  // function handleTestDelete(event: MouseEventHandler<HTMLButtonElement>) {
  function handleTestDelete(event: React.MouseEvent<HTMLButtonElement>) {
      const tasksWithoutTheExcluded = tasks.filter(task => {
        return task.id !== parseInt(event.currentTarget.id)
      })

      const countOfCompletedTasks = tasksWithoutTheExcluded.filter(task => task.status === true).length;

      setTasks(tasksWithoutTheExcluded);
      setCompletedTasks(countOfCompletedTasks);
  }

  return(
    <div className={styles.tasks}>
      <div className={styles.createTask}>
        {/* <form onSubmit={handleCreateNewTask}> */}
        <form onSubmit={handleCreateNewTask}>
          {/* <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleNewComment} /> */}
          <input 
            type="text"
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewComment}
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
          <span>{completedTasks} de {taskCount}</span>
        </span>
      </div>

      <div className={styles.toDoList}>
        {/* <div className={styles.noTasks}>
          <img src={clipboard} alt="Imagem ilustrativa de um ícone de uma prancheta" />

          <span>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div> */}

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

                <button id={`${task.id}`} onClick={handleTestDelete}>
                  <Trash size={20} />
                </button>
              </div>
            )
          })
        }


        {/* <div className={styles.boxWithTasks}>
          <div className={styles.infoTask}>
            <input id="task02" type="checkbox" className={styles.checkbox} />
            
            <label htmlFor="task02">
              Integer urna interdum massa libero auctor neque turpis tur.
            </label>
          </div>
          <button>
            <Trash size={20} />
          </button>
        </div>

        <div className={styles.boxWithTasks}>
          <div className={styles.infoTask}>
            <input id="task03" type="checkbox" className={styles.checkbox} />
            
            <label htmlFor="task03">
              Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </label>
          </div>
          <button>
            <Trash size={20} />
          </button>
        </div> */}
      </div>
    </div>
  )
}