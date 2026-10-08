import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import { createDiv } from '../../utils/createDiv';
import { io } from 'socket.io-client';

const socket = io();

export const LoginPage = () => {

    const textArea = useRef(null);
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);


    const handleClick = (e) => {
        setText(textArea.current.value);
        setText('');
        socket.emit('chat:message', text);
    }
    
    useEffect(() => {

        const onMessage = (msg, id) => {
            setItems((prev) => [...prev, createDiv(`${id}: ${msg}`)])
        }

        socket.on('chat:message', onMessage)

        return () => {
          socket.off('chat:message', onMessage)
        }

    }, [])
    
  return (
    <>
      <div>LoginPage</div>
      <textarea ref={textArea} value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Button</button>
      <div>
        {
            items.map((elem, index) => {
                return <div key={index}>{elem}</div>
            })
        }
      </div>
    </>
  )
}
