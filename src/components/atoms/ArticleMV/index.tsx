import styled from "styled-components"

type Props = {
  src: string
}

const MV = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export function ArticleMv({ src }: Props) {
  return (
    <MV src={src} width="1024" height="320" />
  )
}
