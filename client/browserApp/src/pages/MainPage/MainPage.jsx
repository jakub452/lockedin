import ChatBox from "../../modules/ChatBox/ChatBox";
import UserList from "../../modules/UserList/UserList";
import DotField from "../../modules/DotField/DotField";
import styles from './MainPage.module.css'
import { LoginField } from "../../modules/LoginField/LoginField";
import { socket } from "../../socket";
import TaskBar from "../../modules/TaskBar/TaskBar";
import { useState } from "react";
socket.on()


const MainPage = () => {

  const [chatHidden, setChatHidden] = useState(false);

  return (
    <div className={styles.MainPage}>
      <div>
        <DotField
          gradientFrom="#5227FF"
          gradientTo="#FF9FFC"
          dotRadius={0.6}
          dotSpacing={14}
          cursorRadius={0}
          bulgeStrength={0}
          glowRadius={160}
          pattern="grid"
          glowColor="#ffffff"
          gradientAngle={175}
          twist={0}
          glowIntensity={0.3}
          baseOpacity={0.45}
          waveAmplitude={3.0}
          speed={0.5}
          sparkle={true}
          interactive={false}
          holdToZoom
          intro={true}
          lightMode={false}
        />
        <UserList />
        <LoginField />
        <ChatBox minimalized={chatHidden} onMinimalize={() => setChatHidden(!chatHidden)}/>
        <TaskBar onMinimalize={() => {setChatHidden(!chatHidden)}} chatOpen={!chatHidden} />
      </div>
    </div>
  );
};

export default MainPage;
