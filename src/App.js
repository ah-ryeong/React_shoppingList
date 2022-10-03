import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

function App() {
  let [post, setPost] = useState([]);
  let [input, setInput] = useState("");
  console.log(post);

  return (
    <div className="list">
      <header className='header'>Shopping List</header>
      <ul className='items'>
        <li className='item__row'>
          {
            post.length !== 0 ? <Post  post = {post}/> : null
          }
        </li>
      </ul>
      <footer className='footer'>
        <input className='footer__input' type='text' onChange={(e) => {
          setInput(e.target.value);
        }} value = {input}></input>
        <button className='footer__button' onClick={() => {
          let copy = [...post];
          copy.push(input);
          setPost(copy);
          setInput('');
        }}>
          <FontAwesomeIcon icon={ faPlus } />
        </button>
      </footer>
    </div>
  );
}

function Post(props) {
  return(
    <div>
      {
        props.post.map(function(e, i) {
          return(
            <>
              <div className='item' >
                    <span className='item__name'>{props.post[i]}</span>
                    <button className='item__delete' onClick={() => {
                      //삭제
                    }}><FontAwesomeIcon icon={ faTrash } /></button>
              </div>
              <div className='item__divider'></div>
            </>
          );
        })
      }
    </div>
  );
}

export default App;
