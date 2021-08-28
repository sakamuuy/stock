import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { CommonLayout } from '../../../src/layout'

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <CommonLayout>
      <div>
        {id}
      </div>
    </CommonLayout>
  )
}

export default Home
