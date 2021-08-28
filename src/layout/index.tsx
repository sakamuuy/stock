import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/molecules/Header";
import { color } from "../design/color";

type Props = {
  children?: ReactNode
}

const Box = styled.div`
  
`

export function CommonLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Box>
        {children}
      </Box>
    </>
  )
}