import Link from 'next/link'
import styled from 'styled-components'
import { color } from '../../../design/color'
import { spacing } from '../../../design/spacing'
import { ArticleListItem } from '../../molecules/ArticleListItem'
import type { ArticleItem } from '../../molecules/ArticleListItem'

const Box = styled.div`
/* display: flex;
justify-content: center; */
`

const List = styled.ul`
max-width: 1024px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`

const ListItem = styled.li`
margin: ${spacing[16]} ${spacing[16]};
`

type Props = {
  articles: ArticleItem[]
}
export function ArticleList({articles}: Props) {

  return (
    <Box>
      <List>
        {articles.map((data) => (
          <ListItem key={data.title}>
            <Link href={`/blog/article/${data.id}`} passHref>
              <a>
                <ArticleListItem {...data} />
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
