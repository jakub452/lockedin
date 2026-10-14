import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createDiv } from "../../utils/createDiv";
import { socket } from "../../socket";
import styles from "../Chat/Chat.module.css";
import Inputs from "./Inputs/Inputs";

export const Chat = () => {


  const [items, setItems] = useState([]);
  const bottomRef = useRef(null);



  useEffect(() => {
    const onMessage = (msg, username) => {
      setItems((prev) => [...prev, createDiv(`${username}: ${msg}`)]);
    };

    socket.on("chat:message", onMessage);

    socket.on('userlist:update', list => {
      console.log(list)
    })

    return () => {
      socket.off("chat:message", onMessage);
    };

  }, []);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [items]);

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

        <Inputs 
          
        />
      </div>
    </>
  );
};
