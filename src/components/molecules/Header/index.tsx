import styled from 'styled-components'
import { color } from '../../../design/color'
import { Logo } from '../../atoms/Logo'

const Box = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: ${color.gray[900]};
`

const Inner = styled.div`
  max-width: 1024px;
`

export function Header() {
  return (
    <Box>
      <Inner>
        <Logo />
      </Inner>
    </Box>
  )
}
