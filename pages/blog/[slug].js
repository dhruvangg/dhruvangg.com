import Head from 'next/head'
import Layout from '../../components/Layout'

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

export async function getStaticProps({ params }) {
    const post = await fetch(`${process.env.APP_URI}/api/post/${params.slug}`)
    const postData = await post.json()
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.APP_URI}/api/post`)
    const posts = await res.json()
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))
    return { paths, fallback: 'blocking' }
}