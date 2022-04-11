import { Schema, models, model } from "mongoose";

const PostSchema = new Schema({
    name: String,
    slug: String,
    content: String,
    featured_image: String,
    excerpt: String,
    tags: [String]
}, { timestamps: true });

export default models.Posts || model('Posts', PostSchema);