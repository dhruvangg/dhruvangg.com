import Head from 'next/head'
import Date from '../../components/Date'
import Layout from '../../components/Layout'


export async function getServerSideProps() {
    const posts = await fetch(`${process.env.APP_URI}/api/post`)
    const postsData = await posts.json()
    const allPostsData = postsData
    return {
        props: {
            title: "Blog | Dhruvang Gajjar",
            description: "I'm JavaScript Developer and mentor with 6 + Years of experience.Open to collaborate on JavaScript based projects.",
            allPostsData
        },
    }
}

export default function Blog({ title, description, allPostsData }) {
    return <Layout>
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={tags.join(",")} />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="5 days" />
            <meta name="author" content="Dhruvang Gajjar" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.dhruvang.com/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={Welcome} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.dhruvang.com/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={Welcome} />
        </Head>
        <main className='container mx-auto my-8'>
            <section className="text-gray-600 body-font">
                <div className="flex flex-wrap -m-4">
                    {allPostsData && allPostsData.map(post => {
                        const { _id, name, excerpt, slug, tags, createdAt } = post
                        return <div key={_id} className="p-4 lg:w-1/3">
                            <div className="h-full bg-gray-900 px-8 pt-10 pb-20 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-4">
                                    {tags.map(tag => <span className="inline-block bg-gray-100 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold mr-2">{tag}</span>)}
                                </h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{name}</h1>
                                <p className="leading-relaxed mb-3 text-gray-300">{excerpt}</p>
                                <a className="text-indigo-400 inline-flex items-center" href={`/blog/${slug}`}>Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-6 font-semibold text-sm text-white">
                                    <Date dateString={createdAt} />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </main >
    </Layout >
}

