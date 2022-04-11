import connect from "database/db"
import Posts from "models/posts"

export default async function handler(req, res) {
    connect()
    if (req.method === "GET") {
        try {
            const post = await Posts.findOne({ slug: req.query.slug })
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
