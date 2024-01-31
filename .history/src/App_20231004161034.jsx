import { Header } from './components/Header';
import { Post } from './Post'

import styles from './App.module.css';

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
            author="Luiz Henrique"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias earum necessitatibus optio perspiciatis quaerat culpa aliquam eius, sunt magnam. Ratione nisi consequuntur modi aspernatur quam, porro necessitatibus laudantium asperiores?
            sum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
          />
          <Post
            author="Marcus"
            content="There is no post!"
          />
        </main>
      </div>
    </div>
  )
}