import type { NextPage } from 'next'
import { ArticleList } from '../src/components/organisms/ArticleList'
import { CommonLayout } from '../src/layout'

const Home: NextPage = () => {
  return (
    <CommonLayout>
      <div>
        <ArticleList />
      </div>
    </CommonLayout>
  )
}

export default Home
