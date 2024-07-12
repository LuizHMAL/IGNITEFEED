import { Header } from './components/Header';
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizhmal.png',
      name: 'LuizHMAL',
      role: 'Intern'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Este é um projeto para meu portfólio.'},,
      {type : 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-05-14 17:05:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/luizhmal.png',
      name: 'LuizHMAL',
      role: 'Intern'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Segundo post do perfil'},,
      {type : 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-05-14 18:05:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}