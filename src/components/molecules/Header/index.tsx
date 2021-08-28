import styled from 'styled-components'
import { color } from '../../../design/color'
import { spacing } from '../../../design/spacing'
import { Logo } from '../../atoms/Logo'

const Box = styled.header`
  display: flex;
  align-items: center;
  padding-left: ${spacing[32]};
  height: 60px;
  background: ${color.gray[800]};
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
