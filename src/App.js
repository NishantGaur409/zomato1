import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';



import images from "./images/leaf and flower.jpg"

import SomeComponent from "./Components/Component"

let somesentence = `hello i m here to see you all`;
let somesentence1 = `${somesentence} / hello i m here to see `;

function App() {
  
  const [quoteContent, setquoteContent] = useState('');
  useEffect(() => {
    console.log(quoteContent);
 }, [quoteContent]);

  function clearEverything() {
    console.log(`input has been cleared`);
    setquoteContent(``);
  }

  return (
    
    <div className="App">
      
      
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="enter anything you want"
          onChange={e => setquoteContent(e.target.value)}
          value={quoteContent}/>
          <h1>{quoteContent}</h1>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={clearEverything}
        >Primary</button>

      
        <button
          type="button"
          className="btn btn-primary"
          onClick={clearEverything}
        >clear</button>
      </div>
     
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={images} className="img-fluid" alt="leaf" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <p>{somesentence}</p>
        <p>{somesentence1}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SomeComponent />
        

      </header>
    </div>
  );
}
export default App;