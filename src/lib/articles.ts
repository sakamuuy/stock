import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { ArticleItem } from '../components/molecules/ArticleListItem'

const articlesDir = path.join(process.cwd(), 'articles')
export function getSortedArticles() {
  const fileNames = fs.readdirSync(articlesDir)
  const allArticles: ArticleItem[] = fileNames.map((name) => {
    const fullPath = path.join(articlesDir, name)
    const contents = fs.readFileSync(fullPath)
    const matterResult = matter(contents)
    const data = matterResult.data

    return {
      id: name.replace(/\.md$/, ''),
      title: data.title,
      expression: data.expression,
      date: data.date,
      thumbnailUrl: data.image
    }
  })

  return allArticles.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(articlesDir)
  return fileNames.map(n => ({
    params: {
      id: n.replace(/\.md$/, '')
    }
  }))
}

export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDir, `${id}.md`)
  const contents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(contents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}