import { ReactNode } from "react"
import styled from "styled-components"
import { color } from "../../../design/color"
import { spacing } from "../../../design/spacing"

type Props = {
  children: ReactNode
}

const Box = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: ${spacing[8]};
  color: ${color.white};
`

export function ArticleBody({ children }: Props) {
  return (
    <Box>
      {children}
    </Box>
  )
}