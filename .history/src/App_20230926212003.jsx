import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
export function App() {
  return (
    <div>
      <Header />

      <Post
    author= "Luiz Henrique"
    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima ex tempore autem odit, perspiciatis molestiae ut vero voluptas nisi incidunt quis at cumque alias rem pariatur, cum beatae doloremque?"     
    />

    <Post
    author="Joaquim"
    content="Novo post"
    />
    </div>
          <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="Diego Fernandes"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
            />
            <Post
              author="Gabriel Buzzi"
              content="Um novo post muito legal"
            />
          </main>
        </div>
      </div>
    )
  }