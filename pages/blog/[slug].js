import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Date from '../../components/Date'
import Layout from '../../components/Layout'
import Welcome from '../../public/images/welcome.png'

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
            <title>{`${name} | Dhruvang Gajjar`}</title>
            <meta name="title" content={name} />
            <meta name="description" content={content} />
            <meta name="keywords" content={tags.join(",")} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="5 days" />
            <meta name="author" content="Dhruvang Gajjar" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.dhruvang.com/" />
            <meta property="og:title" content={name} />
            <meta property="og:description" content={excerpt} />
            <meta property="og:image" content={Welcome} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.dhruvang.com/" />
            <meta property="twitter:title" content={name} />
            <meta property="twitter:description" content={excerpt} />
            <meta property="twitter:image" content={Welcome} />
        </Head>
        <article className='prose lg:prose-xl dark:prose-invert mx-auto mt-8'>
            <h1>{name}</h1>
            <Date dateString={createdAt} />
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    </Layout>
}