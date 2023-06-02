import React from "react"
import styles from "./page.module.css"
import Button from "@/components/button/Button"
import Image from "next/image"

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category
