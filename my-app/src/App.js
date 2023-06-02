import logo from './logo.svg';
import './App.css';

// 사용자 정의 태그
function Header() {
    return (
      <header>
        <h1><a href='/'>React</a></h1>
      </header>
    )
}

function Nav() {
  return(
    <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">javascript</a></li>
        </ol>
      </nav>
  )
}


function Article(){
  return (
    <article>
        <h2>Welcome</h2>
        Hello, web
    </article>
  )
}


function App() {
  return (
    <div className="App">
      
      {/* header */}
      {/* <header>
        <h1><a href='/'>web</a></h1>
      </header> */}
      
      {/* nav */}
      {/* <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">javascript</a></li>
        </ol>
      </nav> */}
      
      {/* article */}
      {/* <article>
        <h2>Welcome</h2>
        Hello, web
      </article> */}

      <Header></Header>
      <Nav></Nav>
      <Article></Article>


    </div>
  );
}

export default App;
