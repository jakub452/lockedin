import { useEffect, useRef, useState } from "react";
import styles from "./UserList.module.css";
import { socket } from "../../socket";
import { createDraggable } from "../../utils/createDraggable";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const userListRef = useRef(null);

  useEffect(() => {
    createDraggable(userListRef);

    socket.emit("userlist:request");
    socket.on("userlist:update", (users) => {
      setUserList(users);
    });

    return () => {
      socket.off("userlist:update");
    };
  }, []);

  return (
    <div className={styles.UserListHero} ref={userListRef}>
      <p>online:</p>
      <ul>
        {userList.map((username, i) => (
          <li key={i} className={styles.UserListElement}>
            {username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
