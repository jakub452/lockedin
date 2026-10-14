import React from "react";
import styles from "./Button.module.css";

const variants = {
  default: styles.default,
  confirm: styles.confirm,
  decline: styles.decline,
};

/**
 * @param {{
 *  variant?: "default" | "confirm" | "decline",
 *  onClick?: () => void,
 *  text?: string
 *  scale?: "small" | "normal" | "big"
 * }}
 */
const Button = ({ variant = "default", onClick, text, scale }) => {
  return (
    <button className={variants[variant]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
