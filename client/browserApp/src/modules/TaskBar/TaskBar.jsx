import React from "react";
import styles from "./TaskBar.module.css";
import Dock from './Dock'

const chatIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-message-square-more preview-icon"
  >
    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
    <path d="M12 11h.01" />
    <path d="M16 11h.01" />
    <path d="M8 11h.01" />
  </svg>
);

const TaskBar = ({ chatOpen, onMinimalize }) => {
  const items = [
    {
      icon: chatIcon,
      label: "Chat",
      active: chatOpen,
      onClick: onMinimalize,
    },
  ];

  return (
    <div className="TaskBarHero">
      <Dock
        items={items}
        theme="dark"
        baseItemSize={36}
        magnification={50}
        panelHeight={50}
        distance={80}
        gap={8}
        roundness={0.5}
        tiles
      />
    </div>
  );
};

export default TaskBar;
