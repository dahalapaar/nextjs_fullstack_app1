import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/button/Button"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17035440/pexels-photo-17035440/free-photo-of-love-photographer-autumn-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repellat totam similique optio nulla, quaerat maxime consequatur
            necessitatibus praesentium dignissimos unde autem perferendis rerum
            enim laudantium debitis minus inventore eos!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quisquam, accusamus perferendis mollitia magni eius distinctio quos
            quas corrupti ab eum nulla quod eaque earum, atque similique iste
            itaque odio.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repellat totam similique optio nulla, quaerat maxime consequatur
            necessitatibus praesentium dignissimos unde autem perferendis rerum
            enim laudantium debitis minus inventore eos!
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
