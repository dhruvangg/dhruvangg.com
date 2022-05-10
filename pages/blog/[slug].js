import Head from 'next/head'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
    const res = await fetch(`${process.env.APP_URI}/api/post?limit=1`)
    const posts = await res.json()
    const paths = JSON.parse(JSON.stringify(posts)).map((post) => ({
        params: { slug: post.slug }
    }))
    console.log("======================")
    console.log(paths)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = await fetch(`${process.env.APP_URI}/api/post/${params.slug}`)
    const postData = await post.json()
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.name}</title>
        </Head>
        <article>
            <h1>{postData.name}</h1>
            <div>
                <Date dateString={postData.createdAt} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
    </Layout>
}