import styles from './AddTasks.module.css';

import { PlusCircle } from 'phosphor-react';

export function AddTasks() {
    return (
        <div className={styles.createTask}>
          <form>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
        </div>
    )
}