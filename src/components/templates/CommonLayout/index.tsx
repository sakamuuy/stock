import { ReactNode } from 'react'
import styled from 'styled-components'
import { Header } from '../../../components/molecules/Header'
import { Footer } from '../../molecules/Footer'

type Props = {
  children?: ReactNode
}

const Box = styled.div`
  /* display: flex;
  justify-content: center; */
`

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export function CommonLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Box>
        <Inner>
          {children}
        </Inner>
      </Box>
      <Footer />
    </>
  )
}
