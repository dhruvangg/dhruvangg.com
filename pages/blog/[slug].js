// import axios from 'axios'
import Head from 'next/head'
// import Layout from '../../components/Layout'

// export async function getStaticPaths() {
//     const posts = await axios.get(`${process.env.APP_URI}/api/post`)
//     const paths = posts.data.map(el => `/blog/${el.slug}`)
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const post = await axios.get(`${process.env.APP_URI}/api/post/${params.slug}`)
//     const postData = post.data
//     return {
//         props: {
//             postData
//         }
//     }
// }

// export default function Post({ postData }) {
//     return <Layout>
//         <Head>
//             <title>{postData.name}</title>
//         </Head>
//         <article>
//             <h1>{postData.name}</h1>
//             <div>
//                 <Date dateString={postData.createdAt} />
//             </div>
//             <div dangerouslySetInnerHTML={{ __html: postData.content }} />
//         </article>
//     </Layout>
// }

export default function Post() {
    return <Layout>
        <Head>
            <title>Inner Page</title>
        </Head>
        <h1>Hello World</h1>
    </Layout>
}

