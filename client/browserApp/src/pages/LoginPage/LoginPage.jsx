import { useEffect, useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'
import Button from './Button/Button'

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
        <p>Wpisz nick</p>
        <input 
            className={styles.LoginPageInput}
            type="text" 
            ref={textInput} 
            onChange={e => {setUsername(e.target.value)}}
        />

        <Button
            onClick={checkLogin}
            text={"Confirm"}
        />
    
    </div>
  )
}
