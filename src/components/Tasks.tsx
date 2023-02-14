import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.svg';
import { Trash, PlusCircle } from 'phosphor-react';

// import { ChangeEvent, useState } from 'react'; 
import { ChangeEvent, FormEvent, useState } from 'react'; 

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
        <span>Tarefas criadas <span>{0}</span></span>
        <span>Concluídas <span>{0}</span></span>
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
                  />
                  
                  <label htmlFor={`${task.id}`}>
                    {task.content}
                  </label>
                </div>

                <button>
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