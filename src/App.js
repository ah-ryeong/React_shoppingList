import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

function App() {
  let [post, setPost] = useState([]);
  let [input, setInput] = useState("");

  return (
    <div className="list">
      <header className='header'>Shopping List</header>
      <ul className='items'>
        <li className='item__row'>
          {
            post.length !== 0 ? <Post  post = {post} setPost={setPost} /> : null
          }
        </li>
      </ul>
      <footer className='footer'>
        <input className='footer__input' type='text' onChange={(e) => {
          setInput(e.target.value);
        }} value = {input}></input>
        <button className='footer__button' onClick={() => {
          const text = {
            id: post.length,
            text: input
          }
          let copy = [...post];
          copy.push(text);
          setPost(copy);
          setInput('');
        }}>
          <FontAwesomeIcon icon={ faPlus } />
        </button>
      </footer>
    </div>
  );
}

function Post({ post, setPost }) {
  return(
    <div>
      {
        post.map(function(e, i) {
          const onRemove = (id) => {
            setPost((post) => post.filter((post) => post.id !== id));
          }
          return(
            <>
              <div className='item'>
                    <span className='item__name' key={i}>{post[i].text}</span>
                    <button className='item__delete' onClick={() =>{
                      onRemove(e.id);
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
