import PostContent from "../../components/postdetail/PostContent"
import { getPostData, getPostsFiles } from "../../lib/PostUtil"
import Head from "next/head"
const PostId = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="decription" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""))
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default PostId
