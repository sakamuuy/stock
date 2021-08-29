import styled from 'styled-components'
import { color } from '../../../design/color'
import { spacing } from '../../../design/spacing'

const Styledfooter = styled.div`
  display: block;
  text-align: center;
  padding: ${spacing[24]};
  background: ${color.gray[900]};
  color: ${color.white};
`

export function Footer() {
  return <Styledfooter>© 2021 sakamuuy.</Styledfooter>
}
