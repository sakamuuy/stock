import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Article } from '../../src/components/organisms/Article'
import { CommonLayout } from '../../src/components/templates/CommonLayout'

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <CommonLayout>
      <Article title='テキストテキストtextテキストテキストtextテキストテキストtextテキストテキストtext' body="hogehoge" />
    </CommonLayout>
  )
}

export default Home
