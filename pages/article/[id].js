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
            { params: { id: "1" } },
            { params: { id: "2" } },
            { params: { id: "3" } }
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await post.json()
    return {
        props: {
            postData
        }
    }
}