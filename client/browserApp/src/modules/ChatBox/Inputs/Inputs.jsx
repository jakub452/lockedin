import styles from "./Inputs.module.css";
import { errorNotification } from "../../../utils/errorNotification/errorNotification";
import { useRef, useState } from "react";
import { sendMessage } from "../../../socket";
import { handleEnterEvent } from "../../../utils/handleEnterEvent";

const Inputs = () => {

  var svgButton = (
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
  );

  const textArea = useRef(null);
  const [text, setText] = useState("");

  const handleClick = (e) => {
    if (text != "" || text == null) {

      setText(textArea.current.value);
      setText("");

      sendMessage(text);

    } else {
      errorNotification(textArea);
    }
  };

  return (
    <div className={styles.inputHero}>
      <input
        type="text"
        className={`${styles.inputText} ${styles.inputTextError}`}
        ref={textArea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleEnterEvent(e, handleClick)}
        autoFocus={true}
        tabIndex={0}
      />

      <button className={styles.inputButton} onClick={handleClick}>
        {svgButton}
      </button>
    </div>
  );
};

export default Inputs;
