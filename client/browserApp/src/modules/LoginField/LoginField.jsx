import { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "./LoginField.module.css";
import { socket, setLoggedIn } from "../../socket";
import { handleEnterEvent } from "../../utils/handleEnterEvent";

export const LoginField = () => {
  const textInput = useRef(null);
  const [username, setUsername] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const checkLogin = (e) => {
    if(username == '123321'){setShowLogin(false)}
    socket.emit("login:username", username, (res) => {
      if (res.status === "ok") {
        setLoggedIn(true)
        setShowLogin(false)

      } else {
        console.log("wystapil blad")
      }
    });
  };


  if (showLogin == false) return null;
  return (
    <div className={styles.LoginPageHero}>
      <p>Wpisz nick</p>
      <input
        className={styles.LoginPageInput}
        type="text"
        ref={textInput}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onKeyDown={(e) => {
          handleEnterEvent(e, checkLogin);
        }}
        tabIndex={0}
        autoFocus={true}
      />
      <input
        type="button"
        value={"Confirm"}
        className={styles.LoginPageButton}
        onClick={checkLogin}
      />
    </div>
  );
};
