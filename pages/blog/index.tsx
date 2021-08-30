import type { NextPage, GetStaticProps } from 'next'
import type { ArticleItem } from '../../src/components/molecules/ArticleListItem'
import { ArticleList } from '../../src/components/organisms/ArticleList'
import { CommonLayout } from '../../src/components/templates/CommonLayout'
import { getSortedArticles } from '../../src/lib/articles'

type Props = {
  articles: ArticleItem[]
}
const Home: NextPage<Props> = ({ articles }) => {
  return (
    <CommonLayout>
      <div>
        <ArticleList articles={articles} />
      </div>
    </CommonLayout>
  )
}

export default Home

type Params = {

}
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const data = getSortedArticles()

  return {
    props: {
      articles: data
    }
  }
}