import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Hero from "../components/homePage/hero"
import FeaturedPosts from "../components/homePage/featuredPosts"
import { getFeaturedPosts } from "../lib/PostUtil"
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Seb's blog</title>
        <meta name="description" content="I post about web dev" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts,
    },
  }
}
