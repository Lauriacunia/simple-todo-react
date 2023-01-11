import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div>
        { props.children}
      </div>
      <h1>Hola {props.name} : mi nombre lo pase por props</h1>
    </div>
  );
}

export default App;
