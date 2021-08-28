import Link from 'next/link'
import styled from 'styled-components'
import { color } from '../../../design/color'
import { spacing } from '../../../design/spacing'
import { ArticleListItem } from '../../molecules/ArticleListItem'

const mock = [
  {
    title: 'テキストテキストテキストテキストテキストテキスト',
    body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    thumbnailUrl: '//placehold.jp/150x150.png',
    updatedDate: '2020-01-23'
  },
  {
    title: 'テキストテキストテキストテキストテキストテキスト',
    body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    thumbnailUrl: '//placehold.jp/150x150.png',
    updatedDate: '2020-01-23'
  },
  {
    title: 'テキストテキストテキストテキストテキストテキスト',
    body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    thumbnailUrl: '//placehold.jp/150x150.png',
    updatedDate: '2020-01-23'
  },
  {
    title: 'テキストテキストテキストテキストテキストテキスト',
    body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    thumbnailUrl: '//placehold.jp/150x150.png',
    updatedDate: '2020-01-23'
  },
  {
    title: 'テキストテキストテキストテキストテキストテキスト',
    body: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    thumbnailUrl: '//placehold.jp/150x150.png',
    updatedDate: '2020-01-23'
  },
]

export function ArticleList() {

  const Box = styled.div`
    display: flex;
    justify-content: center;
  `

  const List = styled.ul`
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(360px,1fr));
  `;

  const ListItem = styled.li`
    margin: ${spacing[16]} ${spacing[16]};
  `

  return (
    <Box>
      <List>
        {mock.map((data) => (
          <ListItem>
            <Link href="" passHref>
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