import styled from "styled-components"

type Props = {
  src: string
}

export function ListItemImg({ src }: Props) {
  const Img = styled.div`
    background-image: url(${src});
    height: 160px;
  `
  return (
    <Img />
  )
}