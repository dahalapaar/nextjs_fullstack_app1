import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/button/Button"

export const metadata = {
  title: "Contact Me",
  description: "Contact Page",
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            cols="30"
            className={styles.textarea}
            placeholder="Message"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
