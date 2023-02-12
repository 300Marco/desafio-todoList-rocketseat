import styles from './Tasks.module.css';

import clipboard from '../assets/clipboard.svg';
import { Trash } from 'phosphor-react';

export function Tasks() {
    return(
        <div className={styles.tasks}>
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

              <div className={styles.boxWithTasks}>
                <div className={styles.infoTask}>
                  <input id="task01" type="checkbox" className={styles.checkbox} />
                  
                  <label htmlFor="task01">
                    Integer urna interdum massa libero auctor neque uctor neque turpis turpis semper. Duis vel sed fames integer.
                  </label>
                </div>
                <button>
                  <Trash size={20} />
                </button>
              </div>

              <div className={styles.boxWithTasks}>
                <div className={styles.infoTask}>
                  <input id="task02" type="checkbox" className={styles.checkbox} />
                  
                  <label htmlFor="task02">
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
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
              </div>
            </div>
          </div>
    )
}