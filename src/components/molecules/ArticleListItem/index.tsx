import styled from 'styled-components'
import { color } from '../../../design/color'
import { fontSize } from '../../../design/fontSize'
import { spacing } from '../../../design/spacing'
import { ListItemImg } from '../../atoms/ListItemImg'

export type ArticleItem = {
  id: string
  title: string
  expression: string
  thumbnailUrl: string
  date: string
}

const ListItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    opacity: .8;
  }
`

const Box = styled.div`
  position: relative;
  padding: ${spacing[24]} ${spacing[8]};
`

const Title = styled.h3`
  color: ${color['gray'][50]};
  font-size: ${fontSize[18]};
  font-weight: 700;
`

const Body = styled.p`
  color: ${color['gray'][300]};
  font-size: ${fontSize[14]};
  padding: ${spacing[8]};
  max-height: 140px;
  overflow-y: scroll;
`

const Date = styled.div`
  position: absolute;
  bottom: 0;
  right: ${spacing[8]};
  color: ${color['gray'][300]};
  font-size: ${fontSize[12]};
`

const ListImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export function ArticleListItem({ title, expression, thumbnailUrl, date }: ArticleItem) {
  return (
    <ListItem>
      <ListItemImg src={thumbnailUrl} />
      <Box>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Box>
      <Body>{expression}</Body>
    </ListItem>
  )
}
