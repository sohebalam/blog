import classes from "./all-posts.module.css"
import PostsGrid from "./PostsGrid"

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>AllPosts </h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default AllPosts
