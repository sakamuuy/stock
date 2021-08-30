import styled from "styled-components"

type Props = {
  src: string
}

const Img = styled.div.attrs((props: {src: string}) => ({
    src: props.src
  }))`
    background-image: url(${(theme: {src: string}) => theme.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 160px;
  `

export function ListItemImg({ src }: Props) {

  return (
    <Img src={src}/>
  )
}