import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createDiv } from "../../utils/createDiv";
import { socket } from "../../socket";
import styles from "../Chat/Chat.module.css";
import { errorNotification } from "../../utils/errorNotification/errorNotification";


export const Chat = () => {
  const textArea = useRef(null);
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const bottomRef = useRef(null);


  const handleClick = (e) => {
    if(text != "" || text == null){
      setText(textArea.current.value);
      setText("");
      socket.emit("chat:message", text);
    } else {
      errorNotification(textArea);
    }
  };

  const handleEnter = (e) => {
    if(e.key == "Enter"){
      handleClick(e);
    }
  }

  useEffect(() => {
    const onMessage = (msg, username) => {
      setItems((prev) => [...prev, createDiv(`${username}: ${msg}`)]);
    };

    socket.on("chat:message", onMessage);
    
    return () => {
      socket.off("chat:message", onMessage);
    };
  }, []);
  
  useEffect(() => {
    bottomRef.current.scrollIntoView({behavior: 'smooth'})
  }, [items])

  return (
    <>
      <div className={styles.chatHero}>
        <div className={styles.chatMain}>
          {items.map((elem, index) => {
            return (
              <div className={styles.chatMessage} key={index}>
                {elem}
              </div>
            );
          })}
          <div ref={bottomRef}></div>
        </div>

        <div className={styles.inputHero}>
          <input
            type="text"
            className={`${styles.inputText} ${styles.inputTextError}`}
            ref={textArea}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleEnter}
            autoFocus={true}
            tabIndex={0}
          />

          <button className={styles.inputButton} onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className={styles.inputButtonIcon}
              width={45}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
