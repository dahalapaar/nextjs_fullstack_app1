import React from "react"
import styles from "./page.module.css"
import Image from "next/image"

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi
            ipsa maiores vero saepe perspiciatis eius culpa odio, minus nobis a
            architecto.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/15479644/pexels-photo-15479644/free-photo-of-young-woman-numerous-faces-in-circle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Apaar Dahal</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/15479644/pexels-photo-15479644/free-photo-of-young-woman-numerous-faces-in-circle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum
          debitis sit eum est deserunt, eveniet minus animi nobis laudantium,
          commodi eaque? Earum, quibusdam omnis iste nam deserunt laudantium
          dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem nobis maiores quibusdam distinctio, dolorum magnam repellendus
          hic recusandae harum voluptatem sequi animi ipsam pariatur quos.
          Repellendus laborum nulla reprehenderit. Quasi.Lorem Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Molestias, amet repellat
          voluptatem consectetur quis at eos illo incidunt temporibus officiis
          fugiat repudiandae qui possimus ea facere soluta aliquam quasi nulla?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi
          ipsa maiores vero saepe perspiciatis eius culpa odio, minus nobis a
          architecto facere omnis cupiditate perferendis reiciendis quidem eaque
          aliquid! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
