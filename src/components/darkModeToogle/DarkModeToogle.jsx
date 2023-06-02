import React from "react"
import styles from "./darkModeToogle.module.css"

const DarkModeToogle = () => {
  const mode = "light"
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌞</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  )
}

export default DarkModeToogle
