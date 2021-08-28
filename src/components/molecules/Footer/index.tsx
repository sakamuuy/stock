import styled from 'styled-components'
import { color } from '../../../design/color'

const Styledfooter = styled.div`
  background: ${color.gray[900]};
`

export function Footer() {
  return <Styledfooter>© 2021 sakamuuy</Styledfooter>
}
