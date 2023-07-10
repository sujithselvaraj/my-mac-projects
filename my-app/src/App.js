
import './App.css';
import HelloWorld  from './components/HelloWorld'
import { useState ,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
import contact from './components/contact';




function App() {

  const [counter,setCounter]=useState(0);
  const increment=()=>{
     setCounter(counter+1)
     
  }



console.log(counter)
useEffect(()=>{
  document.title=`clicked ${counter} times `
})




  return (
    
    <div className="App">
      <Router>
        
      <nav>
        <Link to='/' className='text'>home</Link>
        <Link to='/contact'className='text'>contact</Link>
        <Link to='/about' className='text'>about</Link>
      </nav>
      <Route exact path='/' render={() =>(
<>
      
      <h1>hello sujith</h1>
      <p>this is sujith</p>
      <HelloWorld/>
      <HelloWorld/>
      <button onClick={increment}>click me!</button>
      <h1>{counter}</h1>
</>
  )}/>
<Route path='/contact' component={contact} />
</Router>
    </div>
  );
}

export default App;
