import Head from 'next/head'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: 'improve-website-performance-using-webpavif-image-formats'
                }
            },
            { params: { slug: 'authentication-in-rest-apis' } },
            { params: { slug: 'detect-caps-lock-in-javascript' } },
            { params: { slug: 'relative-time-format' } },
            { params: { slug: 'how-to-check-if-user-is-online-or-not' } },
            { params: { slug: 'ways-to-get-users-geo-location' } }
        ],
        fallback: false,
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