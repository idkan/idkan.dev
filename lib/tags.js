import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import { kebabCase } from './utils/kebabCaseFormat'

const root = process.cwd()

export async function getAllTags (type) {
  const files = await getFiles(type)

  const tags = {}

  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const tagName = kebabCase(tag)
        tags[tagName] = tags[tagName] ? tags[tagName] + 1 : 1
      })
    }
  })

  return tags
}
