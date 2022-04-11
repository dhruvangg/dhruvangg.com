import connect from "../../../database/db"
import Posts from "../../../models/Posts"

export default async function handler(req, res) {
    connect()
    if (req.method === "POST") {
        res.status(200).json("Create new Post")
    } else if (req.method === "GET") {
        const posts = await Posts.find().skip(req.query.offset).limit(req.query.limit).sort({ createdAt: -1 })
        res.status(200).json(posts)
    }
}
