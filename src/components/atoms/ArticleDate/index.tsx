import { ReactNode } from "react"
import styled from "styled-components"
import { color } from "../../../design/color"
import { fontSize } from "../../../design/fontSize"
import { spacing } from "../../../design/spacing"

type Props = {
  children: ReactNode
}

const Box = styled.div`
  color: ${color.white};
  font-size: ${fontSize[14]};
  text-align: right;
  padding: ${spacing[8]};
`

export function ArticleDate({ children }: Props) {
  return (
    <Box>
      {children}
    </Box>
  )
}