import { useEffect, useState } from "react";
import styles from "./UserList.module.css";
import { socket } from "../../socket";

const UserList = () => {
  const [userList, setUserList] = useState([
    "krzywy",
    "prosty",
    "costam",
    "zaruwka",
    "zlotuwka",
    "kukirin",
  ]);

  useEffect(() => {
    socket.emit("userlist:request");
    socket.on("userlist:update", (users) => {
      setUserList(users);
    });

    return () => {
      socket.off("userlist:update");
    };
  }, []);

  return (
    <div className={styles.UserListHero}>
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
