import { useState, useEffect, useRef, createElement } from "react";
import { socket, userData } from "../../socket";
import styles from "../ChatBox/ChatBox.module.css";
import Inputs from "./Inputs/Inputs";
import { createDraggable } from "../../utils/createDraggable";

const svg = <svg xmlns="http://www.w3.org/2000/svg" className={styles.chatBoxSvg} height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>

const ChatBox = ({minimalized, onMinimalize}) => {


  const [items, setItems] = useState([]);
  const bottomRef = useRef(null);
  const chat = useRef(null);
  const [username, setUsername]= useState("");

  useEffect(() => {
    createDraggable(chat)

    const onMessage = (msg, username) => {
      if(userData.loggedIn){
        setItems((prev) => [...prev, createElement("p", { key: prev.length }, `${username}: ${msg}`)]);
      }
    };

    socket.on("chat:message", onMessage);

    return () => {
      socket.off("chat:message", onMessage);
    };

  }, []);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [items]);

  

  return (
    <>
      <div className={styles.chatHero} ref={chat} style={{display: minimalized ? "none" : ""}}>
        <div className={styles.chatTitle}>
          <p>Chat</p>
          
          <button 
            className={styles.chatMinimalize} 
            onClick={onMinimalize} 
            >
              {svg}    
          </button>
        </div>
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

        <Inputs />
        
      </div>
    </>
  );
};

export default ChatBox