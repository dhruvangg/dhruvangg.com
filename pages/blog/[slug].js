export default function Article({ postData }) {
    return <div>
        <h1>{postData.title}</h1>
        <div>
            {postData.body}
        </div>
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "1" } },
            { params: { slug: "2" } },
            { params: { slug: "3" } }
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    const postData = await post.json()
    return {
        props: {
            postData
        }
    }
}