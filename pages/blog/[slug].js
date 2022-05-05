import Head from 'next/head'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
    // const res = await fetch(`${process.env.APP_URI}/api/post`)
    // const posts = await res.json()
    // const paths = posts.map((post) => `/blog/${post.slug}`)
    // console.log(paths);
    return {
        paths: [
            '/blog/improve-website-performance-using-webpavif-image-formats',
            '/blog/authentication-in-rest-apis',
            '/blog/detect-caps-lock-in-javascript',
            '/blog/relative-time-format',
            '/blog/how-to-check-if-user-is-online-or-not',
            '/blog/ways-to-get-users-geo-location'
        ],
        fallback: false
    }
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