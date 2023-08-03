import logo from './logo.svg';
import './App.css';
import List from './list';
import Cart from './cart';
import Header from './header';

function App() {
  return (
    <div className="App">
      <div className='git'>
        <a href='https://github.com/navdeeepkaur/project7-cart' target='_blank'><i className='fa-brands fa-github'></i></a>
      </div>
      <Header/>
      <List/>
    </div>
  );
}

export default App;
