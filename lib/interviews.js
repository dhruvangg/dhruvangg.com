import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from 'remark'
import html from 'remark-html'

const interviewsDirectory = path.join(process.cwd(), 'interviews')

export function getSortedInterviewsData() {
    const fileNames = fs.readdirSync(interviewsDirectory)
    const allInterviewsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(interviewsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult.data
        }
    })

    return allInterviewsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllInterviewIds() {
    const fileNames = fs.readdirSync(interviewsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getInterviewData(id) {
    const fullPath = path.join(interviewsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}