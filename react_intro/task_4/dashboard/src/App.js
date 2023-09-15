import favicon from './holbertonjpg.jpg'
import './App.css'; 
import {getFullYear, getFooterCopy} from '../src/utils'

function App() {
  const year = getFullYear()
  const isIndex = getFooterCopy()
  return (
    <>
      <header className="App-header">
        <img src={favicon} alt='holberton' width={100}></img>
        <h1>School Dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="formInput">
          <label for="email" onClick="selectInput('email')">Email:
            <input
              type="email"
              placeholder="Put Yo email in"  
              name="email"
            ></input>
          </label>
          <label for="password" onClick="selectInput('password')"> Password:
            <input
              type="text"
              placeholder="Pick a password"
              name="password"
            ></input>
          </label>
          <button>OK</button>

        </div>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
        <br />
        <p>{year}</p>
        <p>{isIndex}</p>
      </footer>
    </>
  );
}

export default App;
 