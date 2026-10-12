import { useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";
import styles from './LoginPage.module.css'

export const LoginPage = () => {

    const textInput = useRef(null);
    const [text, setText] = useState("");

    const checkLogin = (e) => {
        socket.emit("login:username", text);
    }


  return (
    <div className={styles.LoginPageHero}>
        <input 
            className={styles.LoginPageInput}
            type="text" 
            ref={textInput} 
            onChange={e => {setText(e.target.value)}}
        />
        <button 
            onClick={checkLogin} 
            disabled={true}
            className={styles.LoginPageButton}
        >
        Button
        </button>
    </div>
  )
}
