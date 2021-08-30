import { Presentation, Props } from './Article'
// import { useArticle } from './useArticle'

export function Article({...props}: Props) {
  // const { html } = useArticle({ id: 'id' })
  return <Presentation {...props}/>
}
