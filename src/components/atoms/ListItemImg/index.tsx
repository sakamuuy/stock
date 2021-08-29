import styled from "styled-components"

type Props = {
  src: string
}

// const Img = styled.div`
//   background-image: url(${(theme: {src: string}) => theme.src});
//   height: 160px;
// `

const Img = styled.div.attrs((props: {src: string}) => ({
    src: props.src
  }))`
    background-image: url(${(theme: {src: string}) => theme.src});
    height: 160px;
  `

export function ListItemImg({ src }: Props) {

  return (
    <Img src={src}/>
  )
}