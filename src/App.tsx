import './global.css';
import styles from './components/App.module.css';

import { Header } from './components/Header';
import { AddTasks } from './components/AddTasks';
import { Tasks } from './components/Tasks';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTasks />

        <main>
          <Tasks />
        </main>
      </div>
    </div>
  )
}
