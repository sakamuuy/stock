import { ReactNode } from "react"
import styled from "styled-components"
import { color } from "../../../design/color"
import { spacing } from "../../../design/spacing"

type Props = {
  children: ReactNode
}

const Box = styled.div`
  background: ${color.white};
  border-radius: 8px;
  padding: ${spacing[8]}
`

export function ArticleBody({ children }: Props) {
  return (
    <Box>
      {children}
    </Box>
  )
}