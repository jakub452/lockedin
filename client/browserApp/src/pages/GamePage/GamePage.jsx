import { useEffect, useRef } from "react";
import styles from "./GamePage.module.css";
import UserList from "../../modules/UserList/UserList";

const GamePage = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    iframeRef.current.addEventListener("load", () => {
      iframeRef.current.contentDocument.addEventListener("click", (e) => {
        iframeRef.current.requestPointerLock();
      });
    });
  }, []);

  return (
    <div>
      <UserList />
      <div className={styles.GameFrameContainer}>
        <iframe
          ref={iframeRef}
          src="../../godot/index.html"
          title="Godot"
          width="1600"
          height="900"
          allow="fullscreen"
          className={styles.GameFrame}
        />
      </div>
    </div>
  );
};

export default GamePage;
