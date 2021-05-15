import Link from "next/link"
import classes from "./post-item.module.css"
import Image from "next/image"
const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post
  const formatDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
      <h1>PostItem </h1>
    </li>
  )
}

export default PostItem
