import { useEffect, useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'


export const LoginPage = () => {
    
    const navigate = useNavigate();

    const textInput = useRef(null);
    const [username, setUsername] = useState("");

    const checkLogin = (e) => {
        socket.emit("login:username", username, (res) => {
            if (res.status === "ok"){
                navigate("/Chat")
            } else {
                navigate("/")
            }
        });
    }

    

  return (
    <div className={styles.LoginPageHero}>
        <div>Wpisz nick</div>
        <input 
            className={styles.LoginPageInput}
            type="text" 
            ref={textInput} 
            onChange={e => {setUsername(e.target.value)}}
        />

        <button 
            onClick={checkLogin} 
            className={styles.LoginPageButton}

            
        >
        Button
        </button>
    </div>
  )
}
