import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Date from '../../components/Date'
import Layout from '../../components/Layout'

export async function getStaticPaths() {
    const res = await fetch(`${process.env.APP_URI}/api/post`)
    const posts = await res.json()
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))
    return { paths, fallback: 'blocking' }
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
    const { name, excerpt, content, createdAt, tags } = postData
    return <Layout>
        <Head>
            <title>{`${name} | Dhruvang's Blog`}</title>
            <meta name="title" content={name} />
            <meta name="description" content={content} />
            <meta name="keywords" content={tags.join(",")} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="5 days" />
            <meta name="author" content="Dhruvang Gajjar" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content={name} />
            <meta property="og:description" content={content} />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content={name} />
            <meta property="twitter:description" content={content} />
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        </Head>
        <article className='prose lg:prose-xl dark:prose-invert mx-auto mt-8'>
            <h1>{name}</h1>
            <Date dateString={createdAt} />
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    </Layout>
}