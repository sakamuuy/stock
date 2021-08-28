import styled from "styled-components"
import { color } from "../../../design/color"
import { fontSize } from "../../../design/fontSize"
import { spacing } from "../../../design/spacing"

type Props = {
  title: string
  body: string
  thumbnailUrl: string
  updatedDate: string
}

const ListItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${color['gray'][200]};
  background: ${color.white};
`

const Box = styled.div`
  position: relative;
  padding: ${spacing[24]} ${spacing[8]}; 
`

const Title = styled.h3`
  color: ${color['gray'][800]};
  font-size: ${fontSize[18]};
  font-weight: 700;
`

const Body = styled.p`
  color: ${color['gray'][500]};
  font-size: ${fontSize[14]};
  padding: ${spacing[8]};
  max-height: 140px;
  overflow-y: scroll;
`

const Date = styled.div`
  position: absolute;
  bottom: 0;
  right: ${spacing[8]};
  color: ${color['gray'][500]};
  font-size: ${fontSize[12]};
`

export function ArticleListItem({ title, body, thumbnailUrl, updatedDate }: Props) {
  return (
    <ListItem>
      <img src={thumbnailUrl} height='120' width='360' />
      <Box>
        <Title>{title}</Title>
        <Date>{updatedDate}</Date>
      </Box>
      <Body>{body}</Body>
    </ListItem>
  )
}
