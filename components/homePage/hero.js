import classes from "./hero.module.css"
import Image from "next/image"
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/seb.jpg"
          alt="An image of Seb"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Seb</h1>
      <p>I blog about blogs - especially information about blogs</p>
    </section>
  )
}

export default Hero
