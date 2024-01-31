import { Post } from './Post';
import { Header } from './components/Header';

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
    )
}

