import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="list">
      <header className='header'>Shopping List</header>
      <ul className='items'>
        <li className='item__row'>
          <div className='item'>
            <span className='item__name'>Egg</span>
            <button className='item__delete'><FontAwesomeIcon icon={ faTrash } /></button>
          </div>
          <div className='item__divider'></div>
        </li>
      </ul>
      <footer className='footer'>
        <input className='footer__input' type='text'></input>
        <button className='footer__button'>
          <FontAwesomeIcon icon={ faPlus } />
        </button>
      </footer>
    </div>
  );
}

export default App;
