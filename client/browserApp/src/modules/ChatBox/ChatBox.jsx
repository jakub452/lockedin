import { useState, useEffect, useRef, createElement } from "react";
import { socket } from "../../socket";
import styles from "../ChatBox/ChatBox.module.css";
import Inputs from "./Inputs/Inputs";
import { createDraggable } from "../../utils/createDraggable";

const ChatBox = () => {


  const [items, setItems] = useState([]);
  const bottomRef = useRef(null);
  const chatHero = useRef(null);


  useEffect(() => {
    createDraggable(chatHero)

    const onMessage = (msg, username) => {
      setItems((prev) => [...prev, createElement("p", { key: prev.length }, `${username}: ${msg}`)]);
      console.log(items)
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
      <div className={styles.chatHero} ref={chatHero}>
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