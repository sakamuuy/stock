import type { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Article } from '../../../src/components/organisms/Article'
import { CommonLayout } from '../../../src/components/templates/CommonLayout'
import { getAllPostIds, getArticleData } from '../../../src/lib/articles'

type Props = {
  id: string
  title: string
  date: string
  content: string
}
const ArticlePage: NextPage<Props> = ({title, date, content}) => {
  const router = useRouter()
  // const { id } = router.query

  return (
    <CommonLayout>
      <Article title={title} body={content} />
    </CommonLayout>
  )
}
export default ArticlePage


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

type Params = {
  id: string
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const data = await getArticleData(params!.id)

  return {
    props: {
      id: data.id,
      title: "hoge",
      date: "date",
      content: data.contentHtml
    }
  }
}