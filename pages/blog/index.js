import axios from 'axios'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Blog() {

    return <Layout>
        <Head>
            <title>Blogs</title>
        </Head>
        <main>
            Hello World

            <h3>Blog Listing Here</h3>
        </main>
    </Layout>
}

