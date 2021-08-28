import type { ReactNode } from "react"
import styled from "styled-components"
import { color } from "../../../design/color"
import { fontSize } from "../../../design/fontSize"
import { spacing } from "../../../design/spacing"

type Props = {
  children: ReactNode
}

const Title = styled.h2`
  color: ${color.white};
  font-size: ${fontSize[36]};
  font-weight: 700;
  padding: ${spacing[16]} ${spacing[8]};
`

export function ArticleTitle({ children }: Props) {
  return (
    <Title>
      {children}
    </Title>
  )
}