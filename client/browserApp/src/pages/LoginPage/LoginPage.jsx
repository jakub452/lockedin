import { useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";

export const LoginPage = () => {

    const textInput = useRef(null);
    const [text, setText] = useState("");

    const checkLogin = (e) => {
        socket.emit("login:username", text);
    }


  return (
    <div>
        <input 
            type="text" 
            ref={textInput} 
            onChange={e => {setText(e.target.value)}}
        />
        <button onClick={checkLogin} disabled={true}>Button</button>
    </div>
  )
}
