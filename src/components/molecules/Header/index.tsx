import styled from 'styled-components'
import { Logo } from '../../atoms/Logo'

export function Header() {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
  `

  return (
    <Header>
      <Logo />
    </Header>
  )
}
