import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../lib/PostUtil"
import Head from "next/head"

const Posts = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming related tutoirals and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default Posts
