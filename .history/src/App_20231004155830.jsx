import { Header } from './components/Header';
import { Post } from './Post'

import styles from './App';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marcus "
            content="There is no post"
          />
          <Post
            author="Luiz Henrique Meira"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem illo, assumenda maxime doloremque culpa incidunt deserunt aliquid dolores expedita quo minima eveniet nisi, tempore impedit, amet nostrum nesciunt dolorem labore.
            "
          />
        </main>
      </div>
    </div>
  )
}